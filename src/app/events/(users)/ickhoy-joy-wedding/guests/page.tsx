"use client";
import React, { useEffect, useState } from "react";
import { Button, Combobox, RemixIcon } from "@eventful-ph/stark";
import { useGuestsContext } from "../GuestsContext";
import { motion, useAnimate, stagger } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
const Modal = dynamic(
  () => import("@eventful-ph/stark/dist/components/Modal"),
  { ssr: false }
);

interface OptionType {
  id: string;
  label: string;
  disabled?: boolean;
  value: string;
}

const staggerTableCard = stagger(0.1, { startDelay: 0.15 });

export default function Page() {
  const { getTable, getAllTables, guestList } = useGuestsContext();

  const [allTables, setAllTables] = useState(getAllTables());
  const [selectedOption, setSelectedOption] = useState<string | number>();
  const [options, setOptions] = useState<OptionType[]>([]);
  const [hasSearch, setHasSearch] = useState(false);
  const [floorPlan, setFloorPlan] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [scope, animate] = useAnimate();

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
    setSelectedOption("");
    setAllTables(getAllTables());
    setHasSearch(() => !hasSearch);
  };

  const handleFloorPlan = (tableNum: string) => {
    setShowModal(true);
    setFloorPlan(`/floorplan/Table${" "}${tableNum}.jpg`);
  };

  useEffect(() => {
    setOptions(optns);
    animate(
      ".table-card",
      { opacity: 1 },
      {
        delay: staggerTableCard,
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Modal
        id="image-modal"
        show={showModal}
        size="large"
        onClose={() => setShowModal(false)}
        title="Table Guide"
        caption="Please use this guide to locate your table."
        primaryButton={{
          label: "Close",
          onClick: () => setShowModal(false),
          isLoading: false,
        }}
      >
        <div className="relative w-full">
          <Image
            src={floorPlan}
            alt="Floor Plan"
            sizes="100vw"
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </Modal>
      <div className="bg-white rounded-8px shadow-md shadow-primary-muted sticky w-full top-[20px] left-0 right-0 flex justify-center border-b-2 border-primary-base">
        <form
          className="p-24px sm:p-40px flex flex-row gap-8px align-bottom items-end justify-end w-full"
          onSubmit={handleClick}
        >
          <Combobox
            label="Search your name"
            id="name-select-field"
            options={options}
            onChange={setSelectedOption}
            onClear={handleReset}
          />
          <Button
            label="Search"
            color="primary"
            submit
            disabled={selectedOption ? false : true}
          />
        </form>
      </div>
      <div className="h-[75vh] w-full overflow-y-scroll no-scrollbar mt-16px rounded-8px">
        <motion.div
          className="flex flex-col gap-16px w-full"
          layout="position"
          ref={scope}
        >
          {allTables.map((table, i) => {
            return (
              <TableCard
                key={i}
                number={table.tableNumber.toString()}
                guests={table.guests}
                showTableGuideHandler={handleFloorPlan}
              />
            );
          })}
        </motion.div>
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
      </div>
    </>
  );
}

const TableCard = ({
  number,
  guests,
  showTableGuideHandler,
}: {
  number: string;
  guests: {
    id?: string;
    fullName: string;
    table: number | string;
  }[];
  showTableGuideHandler: (table: string) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="w-full table-card text-left bg-white p-24px sm:p-40px border border-l-4 border-l-primary-base rounded-4px"
    >
      <div className="flex justify-between items-center pb-24px">
        <div
          className="kaiseki flex justify-center items-center text-h3 border-b-2 border-b-gray-100 border-dashed cursor-pointer hover:text-primary-hover hover:border-b-primary-hover transition-all"
          onClick={() => showTableGuideHandler(number)}
        >
          Table {number}
          <RemixIcon
            name="arrow-right-circle-line"
            className="ml-8px text-h5 text-copy-caption"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 columns-2">
        {guests.map((guest, i) => {
          return <p key={i}>{guest.fullName}</p>;
        })}
      </div>
    </motion.div>
  );
};
