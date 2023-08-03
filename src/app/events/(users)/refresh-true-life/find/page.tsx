"use client";
import GuestForm from "./GuestForm";
import { useGuestsContext } from "../GuestsContext";
import { motion } from "framer-motion";

export default function Page() {
  const { allGuests } = useGuestsContext();
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-90% h-100% flex flex-col gap-8px my-auto justify-center align-center items-center"
    >
      <div className="text-center w-100%">
        <span className="text-overline tracking-wider text-copy-caption text-h6 sm:text-body-lg">
          Welcome to
        </span>
        <h3 className="event-header leading-[40px] mt-16px text-h3 max-[320px]:text-h4 sm:text-h1">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span className="block satisfy text-[#3c3c0b]">
            Refresh True Life
          </span>
          <div className=" text-copy-caption text-body jost">
            Rest. Hope. New Beginnings
          </div>
        </h3>
      </div>
      <span className="text-copy-caption font-bold mt-40px text-body-lg max-sm:text-caption w-100%">
        Please enter your name below
      </span>

      <GuestForm guests={allGuests} />
    </motion.main>
  );
}
