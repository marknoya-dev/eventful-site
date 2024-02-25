"use client";
import { useEffect, useState } from "react";
import { Combobox, Button } from "@eventful-ph/stark";
import { useRouter } from "next/navigation";
import type { Guest } from "../utils";

interface OptionType {
  id: string;
  label: string;
  value: string;
  disabled?: boolean;
}

export default function GuestForm({ guests }: { guests: Guest[] }) {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | number>();
  const [options, setOptions] = useState<OptionType[]>([]);

  const optns: OptionType[] = guests.map((guest) => {
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

  const handleClick = () => {
    const selectedGuest: OptionType | undefined = options.find(
      (guest) => guest.value === selectedOption
    );
    router.push(`find/${selectedGuest && selectedGuest.id}`);
  };

  return (
    <div className="flex flex-col gap-8px w-[90%] mb-40px">
      <Combobox
        id="combobox-guest"
        options={options}
        placeholder="Type in your name here"
        onChange={setSelectedOption}
      />
      <Button
        label="Search"
        color="primary"
        fullWidth
        onClick={handleClick}
        disabled={selectedOption ? false : true}
      />
    </div>
  );
}
