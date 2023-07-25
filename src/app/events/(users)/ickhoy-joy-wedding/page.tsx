"use client";
import { Button } from "@eventful-ph/stark";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import QRcode from "public/qrcode.png";

export default function Home() {
  const router = useRouter();
  const pathName = usePathname();
  const clickHandler = () => {
    router.push(`${pathName}/guests`);
  };

  return (
    <main className="">
      <div className="text-center">
        <span className="text-overline tracking-wider text-copy-caption">
          Welcome to
        </span>
        <h3 className="event-header leading-[50px] ">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span className="block">Ickhoy and Joy's</span>
          <span>Wedding Reception</span>
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="font-bold mt-40px text-copy-caption w-[40%] text-center">
          Scan the QR code below for your table assignment
        </span>
        <Image
          src={QRcode}
          alt="QR Code"
          width={600}
          height={600}
          className="ml-40px"
        />
      </div>
      <div className="flex flex-col justify-center align-middle items-center">
        <span className="font-bold">No QR scanner?</span>
        <p className="flex gap-4px text-copy-caption text-body justify-center items-center">
          Check your table number{" "}
          <Button
            label="here"
            variant="text"
            onClick={clickHandler}
            color="primary"
          />
        </p>
      </div>
    </main>
  );
}
