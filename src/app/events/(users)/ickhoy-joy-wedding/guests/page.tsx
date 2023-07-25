"use client";
import React, { useEffect, useState } from "react";
import { Button, Combobox } from "@eventful-ph/stark";
import { useGuestsContext } from "../GuestsContext";

interface OptionType {
  id: string;
  label: string;
  disabled?: boolean;
  value: string;
}

export default function Page() {
  const { getTable, getAllTables, guestList } = useGuestsContext();

  const [allTables, setAllTables] = useState(getAllTables());

  const [selectedOption, setSelectedOption] = useState<string | number>();
  const [options, setOptions] = useState<OptionType[]>([]);
  const [hasSearch, setHasSearch] = useState(false);

  const optns: OptionType[] = guestList.map((guest) => {
    return {
      id: guest.id as string,
      label: guest.fullName,
      value: guest.fullName,
    };
  });

  const handleClick = (e: any) => {
    e.preventDefault();

    //find selectedGuest's fullName on allTables.guests
    const selectedTable = getAllTables().find((table) => {
      return table.guests.find((guest) => guest.fullName === selectedOption);
    });

    setAllTables((prev) =>
      selectedTable
        ? [
            {
              tableNumber: selectedTable.tableNumber,
              guests: selectedTable.guests,
            },
          ]
        : []
    );

    setHasSearch(true);
  };

  const handleReset = () => {
    setAllTables(getAllTables());
    setHasSearch(() => !hasSearch);
  };

  useEffect(() => {
    setOptions(optns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="bg-white rounded-8px shadow-md shadow-primary-muted sticky w-full top-[20px] left-0 right-0 flex justify-center border-b-2 border-primary-base">
        <form
          className="p-40px flex flex-row gap-8px align-bottom items-end justify-end w-full"
          onSubmit={handleClick}
        >
          <Combobox
            label="Search your name"
            id="name-select-field"
            options={options}
            onChange={setSelectedOption}
          />
          <Button
            label="Search"
            // color="primary"
            submit
            disabled={selectedOption ? false : true}
          />
        </form>
      </div>
      <main className="h-[75vh] overflow-y-scroll no-scrollbar mt-40px">
        <div className="flex flex-col gap-16px">
          {allTables.map((table, i) => {
            return (
              <TableCard
                key={i}
                number={table.tableNumber.toString()}
                guests={table.guests}
              />
            );
          })}
        </div>
        {hasSearch && allTables.length === 0 && (
          <div className="text-center mt-40px flex flex-col justify-center items-center gap-16px">
            <h2 className="text-h2">No results found</h2>
            <p className="text-copy-caption">
              Please try searching for another name
            </p>
            <Button
              label="Reset"
              variant="outline"
              color="danger"
              onClick={handleReset}
            />
          </div>
        )}

        {hasSearch && allTables.length !== 0 && (
          <div className="text-center mt-40px flex justify-center">
            <Button
              label="View all tables"
              variant="outline"
              color="primary"
              onClick={handleReset}
            />
          </div>
        )}
      </main>
    </>
  );
}

const TableCard = ({
  number,
  guests,
}: {
  number: string;
  guests: {
    id?: string;
    fullName: string;
    table: number;
  }[];
}) => {
  return (
    <div className="text-left bg-white p-40px border border-l-4 border-l-primary-base rounded-4px">
      <div className="kaiseki text-h3 pb-24px">Table {number}</div>
      <div className="grid grid-rows-2 grid-cols-2 columns-2">
        {guests.map((guest, i) => {
          return <p key={i}>{guest.fullName}</p>;
        })}
      </div>
    </div>
  );
};