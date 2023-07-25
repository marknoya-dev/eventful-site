"use client";
import GuestForm from "@/app/events/(users)/ickhoy-joy-wedding/findtable/GuestForm";
import { useGuestsContext } from "@/app/events/(users)/ickhoy-joy-wedding/GuestsContext";
export default function Page() {
  const { guestList } = useGuestsContext();
  return (
    <main className="max-w-screen-md h-screen flex flex-col gap-8px justify-center align-middle items-center mx-auto">
      <div className="text-center">
        <span className="text-overline tracking-wider text-copy-caption">
          Welcome to
        </span>
        <h3 className="event-header leading-[50px]">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span className="block">Ickhoy and Joy's</span>
          <span>Wedding Reception</span>
        </h3>
      </div>
      <span className="font-bold mt-40px text-copy-caption">
        Please enter your name below
      </span>

      <GuestForm guests={guestList} />
    </main>
  );
}
