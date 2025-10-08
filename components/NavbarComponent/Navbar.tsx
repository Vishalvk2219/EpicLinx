"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import SignInForm from "./SigninForm";
import SignUpForm from "./SignupForm";
import ForgotPasswordForm from "./ForgotPassword";
import { useAuthStore } from "@/stores/useAuthStore";
import { apiLogout } from "@/lib/api";

const Navbar = () => {
  const  user  = useAuthStore((state) => state.user);
  // === Local State for Menu & Modals ===
  const [menuOpen, setMenuOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  const pathname = usePathname();

  // === Menu Toggle Handlers ===
  const toggleMenu = () => {
    // Ensure modals are closed when opening the menu
    setSignInOpen(false);
    setSignUpOpen(false);
    setForgotPasswordOpen(false);
    setMenuOpen((prev) => !prev);
  };
  const closeMenu = () => setMenuOpen(false);

  // === Modal Handlers (SignIn / SignUp / ForgotPassword) ===
  const openSignIn = () => {
    closeMenu();
    setSignUpOpen(false);
    setForgotPasswordOpen(false);
    setSignInOpen(true);
  };
  const openSignUp = () => {
    closeMenu();
    setSignInOpen(false);
    setForgotPasswordOpen(false);
    setSignUpOpen(true);
  };
  const openForgotPassword = () => {
    closeMenu();
    setSignUpOpen(false);
    setSignInOpen(false);
    setForgotPasswordOpen(true);
  };

  const closeSignIn = () => setSignInOpen(false);
  const closeSignUp = () => setSignUpOpen(false);
  const closeForgotPassword = () => setForgotPasswordOpen(false);

  // === Escape key close & body scroll lock ===
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (menuOpen) closeMenu();
        if (signInOpen) closeSignIn();
        if (signUpOpen) closeSignUp();
        if (forgotPasswordOpen) closeForgotPassword();
      }
    };

    // Lock body scroll when drawer or modal is open
    if (menuOpen || signInOpen || signUpOpen || forgotPasswordOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen, signInOpen, signUpOpen, forgotPasswordOpen]);

  // === Reusable Nav Menu Item ===
  const NavMenuItem = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        onClick={closeMenu}
        className={cn(
          "text-lg md:text-xl font-medium relative group transition-all duration-200",
          isActive ? "text-[#00e0ca]" : "text-white hover:text-[#00e0ca]"
        )}
      >
        <span className="relative">
          {children}
          {/* Animated underline effect */}
          <span
            className={cn(
              "absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00e0ca] transition-all duration-300 group-hover:w-full",
              isActive && "w-full"
            )}
          />
        </span>
      </Link>
    );
  };

  // === Footer Social Links (reusable for drawer) ===
  const NavSocial = () => (
    <div className="flex flex-col gap-3 md:mt-0 mt-6">
      <p className="mb-2 text-sm text-gray-300">Social Media</p>
      <div className="flex gap-6">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#00e0ca] transition-colors duration-200"
        >
          Instagram
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#00e0ca] transition-colors duration-200"
        >
          Facebook
        </a>
      </div>
    </div>
  );
  // const logout = async () => {
  //   try{
  //   await fetch("/api/logout", { method: "POST" });
  //   localStorage.removeItem("token");
  //   document.cookie = "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
  //   useAuthStore.getState().clearUser();
  //   window.location.href = "/";}
  //   catch(err){console.log("Failed to logout",err);}
  // }
  return (
    <>
      {/* === Top Navbar === */}
      <div className="px-3 md:px-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 bg-background/10 backdrop-blur-md rounded-2xl mt-4 z-40 relative">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-white"
          >
            <Image
              src="/logo.svg"
              alt="Epiclinx"
              width={28}
              height={28}
              className="w-7 h-7"
            />
            <span className="hidden sm:inline">Epiclinx</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center lg:gap-8 md:gap-6 gap-4 mx-2">
            <NavMenuItem href="/">Home</NavMenuItem>
            <NavMenuItem href="/brand">I’m a Brand</NavMenuItem>
            <NavMenuItem href="/creator">I’m a Creator</NavMenuItem>
            <NavMenuItem href="#">Messages</NavMenuItem>

            {/* User Profile / Sign In */}
            {user ? (
              <>
              <Link
                href={`/dashboard/${user.role || "creator"}/profile`}
                className="flex items-center gap-2"
              >
                <Image
                  src={
                    user.profileImageUrl ||
                    (user.role === "brand"
                      ? "/logo-Placeholder.jpg"
                      : "/avatar-Placeholder.jpg")
                  }
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
                <span className="text-sm text-epiclinx-teal">
                  Hello,{user.displayName || user.firstName || user.email?.split("@")[0]}
                </span>
              </Link>
              {user ? <button className="bg-red-400 text-gray-100 px-2 py-1 rounded-md" onClick={()=>{apiLogout();window.location.href="/"}}>Signout</button> : null}
              </>
            ): (
              <Button
                variant="default"
                className="rounded-full bg-[#00e0ca] hover:bg-[#00c4b1] text-black px-6 py-2"
                onClick={openSignIn}
              >
                Sign in
              </Button>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-white ml-auto"
            onClick={toggleMenu}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </div>

      {/* === Overlay (backdrop) for mobile menu === */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* === Mobile Drawer Menu === */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-full bg-[#3c3c3c] text-white flex flex-col p-6 transition-transform duration-300 ease-in-out overflow-y-auto w-4/5 sm:w-2/3 md:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-sm text-gray-400">Menu</span>
          <button aria-label="Close menu" onClick={closeMenu}>
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col gap-6">
          {user ? (
            <NavMenuItem href={`/dashboard/${user.role || "creator"}`}>
              My Account
            </NavMenuItem>
          ) : (
            <button onClick={openSignIn} className="text-left">
              <NavMenuItem href="#">Sign In</NavMenuItem>
            </button>
          )}
          <NavMenuItem href="/">Home</NavMenuItem>
          <NavMenuItem href="/brand">I’m a Brand</NavMenuItem>
          <NavMenuItem href="/creator">I’m a Creator</NavMenuItem>
          <NavMenuItem href="#">Messages</NavMenuItem>
        </div>

        {/* Drawer Footer (Contact + Social Links) */}
        <div className="mt-auto pt-10 flex flex-col gap-6">
          <div>
            <p className="mb-2 text-sm text-gray-300">Get in Touch</p>
            <a
              href="mailto:help@epiclinx.com"
              className="text-[#00e0ca] underline"
            >
              help@epiclinx.com
            </a>
          </div>
          <NavSocial />
        </div>
      </aside>

      {/* === Auth Modals === */}
      <SignInForm
        isOpen={signInOpen}
        onClose={closeSignIn}
        onSwitchToSignUp={() => {
          closeSignIn();
          openSignUp();
        }}
        onSwitchToForgotPassword={() => {
          closeSignIn();
          openForgotPassword();
        }}
      />
      <SignUpForm
        isOpen={signUpOpen}
        onClose={closeSignUp}
        onSwitchToSignIn={() => {
          closeSignUp();
          openSignIn();
        }}
        onSwitchToForgotPassword={() => {
          closeSignUp();
          openForgotPassword();
        }}
      />
      <ForgotPasswordForm
        isOpen={forgotPasswordOpen}
        onClose={closeForgotPassword}
        onBackToSignIn={() => {
          closeForgotPassword();
          openSignIn();
        }}
        onBackToSignUp={() => {
          closeForgotPassword();
          openSignUp();
        }}
      />
    </>
  );
};

export default Navbar;
