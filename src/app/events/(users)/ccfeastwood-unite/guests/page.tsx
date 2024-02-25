"use client";
import React, { useEffect, useState } from "react";
import { Button, Combobox, RemixIcon, TabGroup } from "@eventful-ph/stark";
import { useGuestsContext } from "../GuestsContext";
import { motion, useAnimate, stagger } from "framer-motion";

interface OptionType {
  id: string;
  label: string;
  disabled?: boolean;
  value: string;
}

const staggerTableCard = stagger(0.1, { startDelay: 0.15 });

export default function Page() {
  const { allGuests, groupList, getGroup, getAllGroups, getRoom, getAllRooms } =
    useGuestsContext();

  const [filter, setFilter] = useState<"Group" | "Room">("Group");

  const [allGroups, setAllGroups] = useState(getAllGroups());
  const [allRooms, setAllRooms] = useState(getAllRooms());
  const [selectedOption, setSelectedOption] = useState<string | number>();
  const [options, setOptions] = useState<OptionType[]>([]);
  const [hasSearch, setHasSearch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    setOptions(
      allGuests.map((guest) => {
        return {
          id: guest.id as string,
          label: guest.fullName,
          value: guest.fullName,
        };
      })
    );
  }, [filter, groupList]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const selectedGroup = getAllGroups().find((group) => {
      return group.members.find((guest) => guest.fullName === selectedOption);
    });

    setAllGroups((prev) =>
      selectedGroup
        ? [
            {
              id: selectedGroup.id,
              members: selectedGroup.members,
            },
          ]
        : []
    );

    const selectedRoom = getAllRooms().find((room) => {
      return room.guests.find((guest) => guest.fullName === selectedOption);
    });

    setAllRooms((prev) =>
      selectedRoom
        ? [
            {
              id: selectedRoom.id,
              guests: selectedRoom.guests,
            },
          ]
        : []
    );

    setHasSearch(true);
  };

  useEffect(() => {
    // console.log(selectedOption);
  }, [selectedOption]);

  const handleSearchOnChange = (value: string | number) => {
    setSelectedOption(() => value);
  };

  const handleReset = () => {
    // document.getElementById("name-select-field").value = "";
    setAllGroups(getAllGroups());
    setAllRooms(getAllRooms());

    setSelectedOption("");
    setHasSearch(false);
  };

  useEffect(() => {
    animate(
      ".table-card",
      { opacity: 1 },
      {
        delay: staggerTableCard,
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setFilter(index === 0 ? "Group" : "Room");
  };

  return (
    <>
      <div className="bg-white rounded-8px shadow-md shadow-primary-muted sticky w-full top-[20px] left-0 right-0 flex justify-center border-b-2 border-primary-base">
        <form
          id="search-form"
          className="p-24px sm:p-40px flex flex-row gap-8px align-bottom items-end justify-end w-full"
          onSubmit={handleSubmit}
        >
          <Combobox
            label="Search your name"
            id="name-select-field"
            options={options}
            onChange={handleSearchOnChange}
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
      <div className="flex justify-start align-top w-full mt-24px">
        <TabGroup
          tabs={[
            { label: "Group Assignments", remixIcon: "group-fill" },
            { label: "Room Assignments", remixIcon: "hotel-bed-fill" },
          ]}
          type="pill"
          activeTab={activeTab}
          handleTabClick={handleTabChange}
        />
      </div>
      <div className="h-[75vh] w-full overflow-y-scroll no-scrollbar mt-16px rounded-8px">
        <motion.div
          className="flex flex-col gap-16px w-full"
          layout="position"
          ref={scope}
        >
          {filter === "Group"
            ? allGroups.map((group, i) => {
                return (
                  <ListCard
                    key={i}
                    title={group.id.toString()}
                    names={group.members.map((guest) => guest.fullName)}
                  />
                );
              })
            : allRooms.map((room, i) => {
                return (
                  <ListCard
                    key={i}
                    title={room.id.toString()}
                    names={room.guests.map((guest) => guest.fullName)}
                  />
                );
              })}
        </motion.div>
        {hasSearch && allGroups.length === 0 && filter === "Group" && (
          <div className="text-center mt-40px flex flex-col justify-center items-center gap-16px">
            <h2 className="text-h2">No group assignment found</h2>
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

        {hasSearch && allRooms.length === 0 && filter === "Room" && (
          <div className="text-center mt-40px flex flex-col justify-center items-center gap-16px">
            <h2 className="text-h2">No room assignment found</h2>
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

        {hasSearch && allGroups.length !== 0 && allRooms.length !== 0 && (
          <div className="text-center mt-40px flex justify-center">
            <Button
              label="View all"
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

const ListCard = ({ title, names }: { title: string; names: string[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="w-full table-card text-left bg-white p-24px sm:p-40px border border-l-4 border-l-primary-base rounded-4px"
    >
      <div className="flex justify-between items-center pb-24px">
        <div className="kaiseki flex justify-center items-center text-h3 ">
          {title}
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 columns-2">
        {names.map((name, i) => {
          return <p key={i}>{name}</p>;
        })}
      </div>
    </motion.div>
  );
};
