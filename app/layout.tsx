// app/layout.tsx
import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ConditionalNavbar from "@/components/NavbarCondition";
import { ToastRenderer } from "@/components/ui/toast-renderer";
import { apiFetchServer } from "@/lib/api-server";
import { ClientAuthHydrator } from "@/components/ClientAuthHydrator";

const inter = Inter({ subsets: ["latin"] });
const LOCAL_KEY = "epiclinx_signup_data";
export const metadata: Metadata = {
  title: "Epiclinx - Connect Brands with Creators",
  description: "Epiclinx is a platform that connects brands with creators for authentic collaborations.",
  generator: "v0.dev",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  let user = null;
  try {
    const userFetch = await apiFetchServer("/user");
    user = userFetch.user;
  } catch (error: any) {
    console.log("Error fetching user data:");
    console.log(error,error.message)
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientAuthHydrator user={user} />
        <ConditionalNavbar />
        {children}
        <ToastRenderer />
      </body>
    </html>
  );
}
