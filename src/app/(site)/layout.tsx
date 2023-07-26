import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eventful Philippines",
  description: "Let's make events planning delightful",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${inter.className}`}>{children}</div>;
}
