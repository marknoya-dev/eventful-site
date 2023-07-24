"use client";
import React, { useEffect, useState } from "react";
import { Button, Combobox } from "@eventful-ph/stark";
import { useGuestsContext } from "@/app/events/(users)/ickhoy-joy-wedding/GuestsContext";

interface OptionType {
  id: string;
  label: string;
  value: string;
  disabled?: boolean;
}

export default function Root({ children }: { children: React.ReactNode }) {
  const { guestList } = useGuestsContext();

  const [selectedOption, setSelectedOption] = useState<string | number>();
  const [options, setOptions] = useState<OptionType[]>([]);

  const optns: OptionType[] = guestList.map((guest) => {
    return {
      id: guest.id as string,
      label: guest.fullName,
      value: guest.fullName,
    };
  });

  useEffect(() => {
    setOptions(optns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <div className="bg-white p-40px shadow-sm flex gap-16px align-center items-center justify-center absolute w-full top-0 left-0 right-0">
        <Combobox
          id="name-select-field"
          options={options}
          onChange={setSelectedOption}
        />
        <Button label="Search" color="primary" />
      </div> */}
      <div className="w-full h-full relative">{children}</div>
    </>
  );
}
