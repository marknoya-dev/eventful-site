"use client";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  router.replace("/");

  return (
    <html className={`${inter.className}`}>
      <body>{children}</body>
    </html>
  );
}
