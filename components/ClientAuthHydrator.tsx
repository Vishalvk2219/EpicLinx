"use client";

import { useEffect } from "react";
import { useAuthStore, type User } from "@/stores/useAuthStore";

export const ClientAuthHydrator = ({ user }: { user: User | null }) => {
  const setUser = useAuthStore((s) => s.setUser);
  const clearUser = useAuthStore((s) => s.clearUser);

  // Helper to fetch user with token
  const fetchUserWithToken = async (token: string) => {
    const res = await fetch("/api/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // send token from localStorage
      },
    });
    if (!res.ok) {
      throw new Error(res.status === 401 ? "Unauthorized" : "Fetch error");
    }
    return res.json();
  };

  // Helper to refresh token
  const refreshToken = async () => {
    const res = await fetch("/api/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: localStorage.getItem("token") }),
    });
    if (!res.ok) throw new Error("Failed to refresh token");

    const data = await res.json();
    // Save new token to localStorage
    localStorage.setItem("token", data.token);
    return data.token;
  };

  useEffect(() => {
    const hydrateUser = async () => {
      try {
        // 1️⃣ Use SSR user if provided
        if (user) {
          setUser(user);
          return;
        }

        // 2️⃣ Get token from localStorage
        const token = localStorage.getItem("token");
        if (!token) {
          clearUser();
          return;
        }

        try {
          const fetchedUser = await fetchUserWithToken(token);
          setUser(fetchedUser.user);
        } catch (err: any) {
          if (err.message === "Unauthorized") {
            // Token expired -> refresh
            try {
              const newToken = await refreshToken();
              const fetchedUserAfterRefresh = await fetchUserWithToken(newToken);
              setUser(fetchedUserAfterRefresh);
            } catch (refreshErr) {
              console.warn("Refresh token failed", refreshErr);
              localStorage.removeItem("token");
              clearUser();
            }
          } else {
            console.error("Failed to fetch user:", err);
            clearUser();
          }
        }
      } catch (err) {
        console.error("Auth hydration failed", err);
        clearUser();
      }
    };

    hydrateUser();
  }, []);

  return null;
};
