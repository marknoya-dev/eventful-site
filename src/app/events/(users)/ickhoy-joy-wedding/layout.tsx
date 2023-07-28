import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GuestsContextProvider } from "@/app/events/(users)/ickhoy-joy-wedding/GuestsContext";
import Image from "next/image";
import eventfulBadge from "public/eventful-badge.png";
import React from "react";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ickhoy and Joy's Wedding Reception",
  description: "We're glad to have you celebrate this special day!",
  metadataBase: new URL("https://eventful.ph"),
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.className}`}>
      <body className="background-image">
        <Link href="/">
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
        </Link>

        {/* <Image
          src={backgroundImage}
          quality={100}
          sizes="100vw"
          fill
          objectFit="cover"
          alt="Background image"
          style={{
            height: "100%",
            position: "absolute",
            zIndex: -1,
          }}
        /> */}
        <main className="p-40px max-w-screen-md h-screen flex flex-col items-center align-middle mx-auto gap-8px">
          <GuestsContextProvider>{children}</GuestsContextProvider>
        </main>
      </body>
    </html>
  );
}
