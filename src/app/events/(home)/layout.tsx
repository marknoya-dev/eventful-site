import "@/app/globals.css";
import Image from "next/image";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your events",
  description: "Let's make events planning delightful",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.className}`}>
      <body>events page layout loaded{children}</body>
    </html>
  );
}
