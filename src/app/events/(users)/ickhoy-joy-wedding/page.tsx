"use client";
import { Button } from "@eventful-ph/stark";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <div className="text-center">
          <span className="text-overline jost tracking-wider text-copy-caption text-h6 sm:text-body-lg">
            Welcome to
          </span>
          <h3 className="event-header leading-[50px] font-medium text-h3 max-[320px]:text-h4 sm:text-h1">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <span className="block">Ickhoy and Joy's</span>
            <span>Wedding Reception</span>
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="font-bold mt-40px mb-16px text-copy-caption w-[50%] text-center text-body">
            Scan the QR code below for your table assignment
          </span>
          <div className="ml-[5%] w-auto">
            <Image src={QRcode} alt="QR Code" />
          </div>
        </div>
        <div className="flex flex-col justify-center align-middle items-center mt-24px">
          <span className="font-bold text-body text-primary-base">
            No QR scanner?
          </span>
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
      </motion.div>
    </main>
  );
}
