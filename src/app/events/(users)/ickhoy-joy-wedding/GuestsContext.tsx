"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface TableDataType {
  guest: Guest | undefined;
  table: Guest[];
}

interface GuestsContextType {
  guestList: Guest[];
  getTable: (guestID: string) => TableDataType;
  getAllTables: () => { tableNumber: number; guests: Guest[] }[];
}

const GuestsContext = createContext<GuestsContextType>({
  guestList: [],
  getTable: () => {
    return {
      guest: { fullName: "", id: "", table: 0 },
      table: [],
    };
  },
  getAllTables: () => {
    return [{ tableNumber: 0, guests: [] }];
  },
});

export interface Guest {
  id?: string;
  fullName: string;
  table: number;
}

export const Guests: Guest[] = [
  {
    fullName: "Grace Catindig",
    table: 1,
  },
  {
    fullName: "Tom Murillo",
    table: 1,
  },
  {
    fullName: "Jep Delos Santos",
    table: 1,
  },
  {
    fullName: "Jen De Los Santos",
    table: 1,
  },
  {
    fullName: "Mark Noya",
    table: 1,
  },
  {
    fullName: "Jairus Bernardo",
    table: 1,
  },
  {
    fullName: "Catha Esteban",
    table: 1,
  },
  {
    fullName: "Marc Santos",
    table: 1,
  },
  {
    fullName: "Reeia Leido",
    table: 2,
  },
  {
    fullName: "",
    table: 2,
  },
  {
    fullName: "Gica Lumabao",
    table: 2,
  },
  {
    fullName: "Gino Ong",
    table: 2,
  },
  {
    fullName: "Yuklid Aboganda",
    table: 2,
  },
  {
    fullName: "Ptr. Marty Ocaya",
    table: 2,
  },
  {
    fullName: "Ptr. Julius Rayala",
    table: 2,
  },
  {
    fullName: "Ptr. Mike Yap",
    table: 2,
  },
  {
    fullName: "Yvette Yap",
    table: 2,
  },

  {
    fullName: "Ptr. JP Masakayan",
    table: 3,
  },
  {
    fullName: "Roochie Masakayan",
    table: 3,
  },
  {
    fullName: "Ptr. Ricky Sarthou",
    table: 3,
  },
  {
    fullName: "Ptr. Bert Villa",
    table: 3,
  },
  {
    fullName: "Ptr. Bong Saquing",
    table: 3,
  },
  {
    fullName: "Ptr. Bong (Plus One)",
    table: 3,
  },
  {
    fullName: "Ptr. Aumar Aguilar",
    table: 3,
  },
  {
    fullName: "Ptr. Aumar (Plus One)",
    table: 3,
  },

  {
    fullName: "Guest Name",
    table: 4,
  },
  {
    fullName: "Guest Name",
    table: 4,
  },
  {
    fullName: "Guest Name",
    table: 4,
  },
  {
    fullName: "Guest Name",
    table: 4,
  },
  {
    fullName: "Guest Name",
    table: 4,
  },
  {
    fullName: "Guest Name",
    table: 4,
  },
  {
    fullName: "Guest Name",
    table: 4,
  },
  {
    fullName: "Guest Name",
    table: 4,
  },
  {
    fullName: "Guest Name",
    table: 4,
  },

  {
    fullName: "Guest Name",
    table: 5,
  },

  {
    fullName: "Guest Name",
    table: 5,
  },

  {
    fullName: "Guest Name",
    table: 5,
  },

  {
    fullName: "Guest Name",
    table: 5,
  },

  {
    fullName: "Guest Name",
    table: 5,
  },

  {
    fullName: "Guest Name",
    table: 5,
  },

  {
    fullName: "Guest Name",
    table: 5,
  },

  {
    fullName: "Guest Name",
    table: 5,
  },

  {
    fullName: "Guest Name",
    table: 5,
  },

  {
    fullName: "Guest Name",
    table: 6,
  },
  {
    fullName: "Guest Name",
    table: 6,
  },
  {
    fullName: "Guest Name",
    table: 6,
  },
  {
    fullName: "Guest Name",
    table: 6,
  },
  {
    fullName: "Guest Name",
    table: 6,
  },
  {
    fullName: "Guest Name",
    table: 6,
  },
  {
    fullName: "Guest Name",
    table: 6,
  },
  {
    fullName: "Guest Name",
    table: 6,
  },
];

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
    const tables: { tableNumber: number; guests: Guest[] }[] = [];

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
