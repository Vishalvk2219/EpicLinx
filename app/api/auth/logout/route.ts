import { useAuthStore } from "@/stores/useAuthStore";
export async function apiLogout() {
  useAuthStore.getState().clearUser();
  localStorage.removeItem("token");
}
