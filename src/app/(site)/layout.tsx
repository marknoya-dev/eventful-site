/* eslint-disable react/no-unescaped-entities */
import "@/app/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventful Philippines",
  description: "Events for everyone, planned by anyone",
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
    <html lang="en" className="w-screen h-screen">
      <body className="site-bg w-full h-full">
        <div className="banner flex flex-col py-16px sm:py-8px sm:flex-row justify-center gap-8px bg-info-hover absolute top-0 left-0 right-0 w-full text-white text-center">
          <span className="font-bold">Woah! You're quite early!</span>
          <p>The party hasn’t begun and we’re still working out the preps!</p>
        </div>
        {children}
      </body>
    </html>
  );
}
