import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GuestsContextProvider } from "@/app/events/(users)/ickhoy-joy-wedding/GuestsContext";
import Image from "next/image";
import backgroundImage from "public/background.jpg";
import eventfulBadge from "public/eventful-badge.png";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ickhoy and Joy's Wedding Reception",
  description: "We're glad to have you celebrate this special day!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.className}`}>
      <body className="relative">
        <Image
          src={eventfulBadge}
          alt="eventful badge"
          quality={100}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "180px",
            height: "auto",
            zIndex: 1,
          }}
        />
        <div className="w-full h-full fixed">
          <Image
            src={backgroundImage}
            quality={100}
            sizes="100vw"
            fill
            objectFit="cover"
            alt="Background image"
            style={{
              zIndex: -1,
            }}
          />
        </div>
        <main className="p-40px max-w-screen-md h-screen flex flex-col gap-8px align-middle items-center mx-auto">
          <GuestsContextProvider>{children}</GuestsContextProvider>
        </main>
      </body>
    </html>
  );
}
