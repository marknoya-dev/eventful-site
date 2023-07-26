"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TableDataType, GuestsContextType, Guest, Guests } from "./utils";

const GuestsContext = createContext<GuestsContextType>({
  guestList: [],
  getTable: () => {
    return {
      guest: { fullName: "", id: "", table: "" },
      table: [],
    };
  },
  getAllTables: () => {
    return [{ tableNumber: "", guests: [] }];
  },
});

export const GuestsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [guestList, setGuestList] = useState<Guest[]>(
    Guests.map((guest) => {
      return {
        id: uuidv4(),
        fullName: guest.fullName,
        table: guest.table,
      };
    })
  );

  const getTable = (guestID: string) => {
    const guest = guestList.find((guest) => guest.id === guestID);
    const table = guestList.filter((currGuest) => {
      return currGuest.table === guest?.table;
    });

    return { guest, table };
  };

  const getAllTables = () => {
    const tables: { tableNumber: number | string; guests: Guest[] }[] = [];

    //get how many tables are there in the guest list
    const tableNumbers = guestList.map((guest) => guest.table);
    // console.log(tableNumbers);

    //get unique table numbers
    const uniqueTableNumbers = tableNumbers.filter(
      (tableNumber, i) => tableNumbers.indexOf(tableNumber) === i
    );
    // console.log(uniqueTableNumbers);

    //get all guests in each table
    uniqueTableNumbers.forEach((tableNumber) => {
      const table = guestList.filter((guest) => guest.table === tableNumber);
      tables.push({ tableNumber, guests: table });
    });
    // console.log(tables);

    // guestList.forEach((guest) => {
    //   const table = guestList.filter((currGuest) => {

    //     if()
    //     return currGuest.table === guest.table;
    //   });

    //   tables.push(table);
    // });

    return tables;
  };

  return (
    <GuestsContext.Provider value={{ guestList, getTable, getAllTables }}>
      {children}
    </GuestsContext.Provider>
  );
};

export const useGuestsContext = () => useContext(GuestsContext);
