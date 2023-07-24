import "@/app/globals.css";
import Image from "next/image";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import backgroundImage from "public/background.jpg";
import { GuestsContextProvider } from "@/app/events/(users)/ickhoy-joy-wedding/GuestsContext";
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
  return (
    <html className={`${inter.className}`}>
      <body className="sticky">
        <Image
          src={backgroundImage}
          quality={100}
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: -1,
            position: "fixed",
            width: "100%",
            height: "100%",
          }}
          alt="Background image"
        />
        <div className="p-40px max-w-screen-md h-screen flex flex-col gap-8px justify-center align-middle items-center mx-auto">
          <GuestsContextProvider>{children}</GuestsContextProvider>
        </div>
      </body>
    </html>
  );
}
