"use client";
import { useEffect, useState } from "react";
import { useGuestsContext } from "@/app/events/(users)/ickhoy-joy-wedding/GuestsContext";
import { Button } from "@eventful-ph/stark";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const guests = useGuestsContext();

  const onClickHandler = () => {
    router.replace("/events/ickhoy-joy-wedding/findtable");
  };

  const [tableData, setCurrTable] = useState(guests.getTable(params.id));

  return (
    <main className="p-40px max-w-screen-md h-screen flex flex-col gap-40px justify-center align-middle items-center mx-auto">
      <div className="text-center">
        <span className="text-overline text-[20px] tracking-wider text-copy-caption">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          We're glad you're here,{" "}
          {tableData.guest && tableData.guest.fullName.split(" ")[0]}!
        </span>
        <h3 className="event-header leading-[50px] ">
          <p className="text-[40px]">Your table number is</p>
          <p className="text-[90px] mt-16px">
            #{tableData.guest && tableData.guest.table}
          </p>
        </h3>
      </div>
      <span className="font-bold mt-40px text-copy-caption"></span>
      <div>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h2 className="event-header text-[30px]">You're seated with</h2>
        <ul className="text-center font-[32px] leading-[24px] mt-24px">
          {tableData?.table.map((guest, i) => {
            if (
              guest.fullName !== (tableData.guest && tableData.guest.fullName)
            )
              return <li key={i}>{guest.fullName}</li>;
          })}
        </ul>
      </div>
      <Button
        label="Search for another name"
        onClick={onClickHandler}
        color="primary"
      />
    </main>
  );
}
