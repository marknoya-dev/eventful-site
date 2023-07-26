"use client";
import { useEffect, useState } from "react";
import { useGuestsContext } from "@/app/events/(users)/ickhoy-joy-wedding/GuestsContext";
import { Button } from "@eventful-ph/stark";
import { useRouter } from "next/navigation";
import { motion, useAnimate, stagger } from "framer-motion";
import Image from "next/image";
import path from "path";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const guests = useGuestsContext();
  const [floorPlan, setFloorPlan] = useState<string>("");
  const [scope, animate] = useAnimate();
  const [tableData, setCurrTable] = useState(guests.getTable(params.id));

  const onClickHandler = () => {
    router.replace("/events/ickhoy-joy-wedding/findtable");
  };

  useEffect(() => {
    if (tableData.guest === undefined) {
      router.replace("/events/ickhoy-joy-wedding/findtable");
    } else {
      animate(
        ".div-animated",
        { opacity: 1, y: -20 },
        { delay: stagger(0.1, { startDelay: 0.15 }), ease: "easeInOut" }
      );

      console.log(`/public/floorplan/Table ${tableData.guest.table}.jpg`);
      setFloorPlan(`/public/floorplan/Table ${tableData.guest.table}.jpg`);
    }
  }, [animate, tableData, router]);

  return (
    <div
      ref={scope}
      className="max-w-screen-md h-[60vh] flex flex-col gap-8px justify-start align-top"
    >
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        transition={{ ease: "easeInOut", duration: 2 }}
        className="div-animated text-center flex flex-col justify-center align-center items-center"
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
        <div className="w-full mt-40px relative">
          <Image
            src={floorPlan}
            alt="floorPlan"
            sizes="100vw"
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="div-animated flex flex-col align-center justify-center items-center"
      >
        <h2 className="kaiseki font-bold text-copy-caption text-[20px] mt-40px mb-8px">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          You're seated with
        </h2>
        <ul className="text-center font-[32px] leading-[24px] mb-4px text-copy-caption">
          {tableData?.table.map((guest, i) => {
            if (
              guest.fullName !== (tableData.guest && tableData.guest.fullName)
            )
              return <li key={i}>{guest.fullName}</li>;
          })}
        </ul>
      </motion.div>
      <Button
        className="self-center div-animted mb-[90px]"
        label="Search for another name"
        onClick={onClickHandler}
        color="primary"
      />
    </div>
  );
}
