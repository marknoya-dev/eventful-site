"use client";
import { useEffect, useState } from "react";
import { useGuestsContext } from "@/app/events/(users)/ickhoy-joy-wedding/GuestsContext";
import { Button } from "@eventful-ph/stark";
import { useRouter } from "next/navigation";
import { motion, useAnimate, stagger } from "framer-motion";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const guests = useGuestsContext();
  const [scope, animate] = useAnimate();

  const onClickHandler = () => {
    router.replace("/events/ickhoy-joy-wedding/findtable");
  };

  useEffect(() => {
    animate(
      ".div-animated",
      { opacity: 1, y: -20 },
      { delay: stagger(0.1, { startDelay: 0.15 }), ease: "easeInOut" }
    );
  }, [animate]);

  const [tableData, setCurrTable] = useState(guests.getTable(params.id));

  return (
    <main
      ref={scope}
      className="max-w-screen-md h-screen flex flex-col gap-8px justify-center align-middle items-center mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        transition={{ ease: "easeInOut", duration: 2 }}
        className="div-animated text-center"
      >
        <span className="jost font-regular tracking-wide text-copy-caption sm:text-[1em] ">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          We're glad you're here,{" "}
          {tableData.guest && tableData.guest.fullName.split(" ")[0]}!
        </span>
        <h3 className="kaiseki text-black">
          <p className="font-bold text-primary-base text-h4 sm:text-h3">
            Your table number is
          </p>
          <p className="text-[90px] leading-[80px] mt-8px">
            #{tableData.guest && tableData.guest.table}
          </p>
        </h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="div-animated"
      >
        <h2 className="kaiseki font-bold text-copy-caption text-[20px] mt-40px mb-8px">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          You're seated with
        </h2>
        <ul className="text-center font-[32px] leading-[24px] mb-24px text-copy-caption">
          {tableData?.table.map((guest, i) => {
            if (
              guest.fullName !== (tableData.guest && tableData.guest.fullName)
            )
              return <li key={i}>{guest.fullName}</li>;
          })}
        </ul>
      </motion.div>
      <Button
        label="Search for another name"
        onClick={onClickHandler}
        color="primary"
      />
    </main>
  );
}
