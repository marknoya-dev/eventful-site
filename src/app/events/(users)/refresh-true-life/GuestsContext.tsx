"use client";
import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  GuestsContextType,
  Guest,
  GroupAssignments,
  RoomAssignments,
  Group,
  Room,
} from "./utils";

const GuestsContext = createContext<GuestsContextType>({
  allGuests: [],
  groupList: [],
  roomList: [],
  getGroup: () => {
    return {
      guest: { fullName: "", id: "", groupID: "" },
      members: [],
    };
  },
  getAllGroups: () => {
    return [{ id: "", members: [] }];
  },
  getRoom: () => {
    return {
      guest: { fullName: "", id: "", roomID: "" },
      guests: [],
    };
  },
  getAllRooms: () => {
    return [{ id: "", guests: [] }];
  },
});

export const GuestsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [groupList, setGroupList] = useState<
    { fullName: string; groupID: string | number | undefined }[]
  >(
    GroupAssignments.map((guest) => {
      return {
        fullName: guest.fullName,
        groupID: guest.groupID,
      };
    })
  );

  const [roomList, setRoomList] = useState<
    { fullName: string; roomID: string | number | undefined }[]
  >(
    RoomAssignments.map((guest) => {
      return {
        fullName: guest.fullName,
        roomID: guest.roomID,
      };
    })
  );

  const [allGuests, setAllGuests] = useState(
    groupList.map((guest) => {
      const roomGuest = roomList.find((roomGuest) => {
        return roomGuest.fullName === guest.fullName;
      });

      return {
        fullName: guest.fullName,
        groupID: guest.groupID,
        roomID: roomGuest ? roomGuest.roomID : undefined,
        id: uuidv4(),
      };
    })
  );

  //get guests in roomList but not in allGuests
  const roomGuests = roomList.filter((roomGuest) => {
    return !allGuests.find((guest) => guest.fullName === roomGuest.fullName);
  });

  //add roomGuests to allGuests
  roomGuests.forEach((roomGuest) => {
    setAllGuests((prev) => [
      ...prev,
      {
        fullName: roomGuest.fullName,
        groupID: undefined,
        roomID: roomGuest.roomID,
        id: uuidv4(),
      },
    ]);
  });

  //get guestin groupList but not in roomList
  const groupGuests = groupList.filter((groupGuest) => {
    return !roomList.find((guest) => guest.fullName === groupGuest.fullName);
  });

  // console.log(groupGuests);

  const getGroup = (guestID: string) => {
    const guest = allGuests.find((guest) => guest.id === guestID);
    const members = groupList.filter((currGuest) => {
      return currGuest.groupID === guest?.groupID;
    });
    return { guest, members };
  };

  const getAllGroups = () => {
    const groups: Group[] = [];
    const groupIDs = groupList.map((guest) => guest.groupID);
    const uniqueGroups = groupIDs.filter(
      (groupID, i) => groupIDs.indexOf(groupID) === i
    );

    uniqueGroups.forEach((groupID) => {
      const members = groupList.filter((guest) => guest.groupID === groupID);
      groups.push({ id: groupID as string | number, members: members });
    });

    return groups;
  };

  const getRoom = (guestName: string) => {
    const guest = roomList.find((guest) => guest.fullName === guestName);
    const roomies = roomList.filter((currGuest) => {
      return currGuest.roomID === guest?.roomID;
    });

    // const rooms = roomList.map((room) => guest.roomID === room.roomID);
    // console.log(rooms);
    return { guest, guests: roomies };
  };

  const getAllRooms = () => {
    const rooms: Room[] = [];
    const roomIDs = roomList.map((guest) => guest.roomID);
    const uniqueRooms = roomIDs.filter(
      (roomID, i) => roomIDs.indexOf(roomID) === i
    );

    uniqueRooms.forEach((roomID) => {
      const guests = roomList.filter((guest) => guest.roomID === roomID);
      rooms.push({ id: roomID as string | number, guests: guests });
    });

    return rooms;
  };

  return (
    <GuestsContext.Provider
      value={{
        allGuests,
        groupList,
        roomList,
        getGroup,
        getAllGroups,
        getRoom,
        getAllRooms,
      }}
    >
      {children}
    </GuestsContext.Provider>
  );
};

export const useGuestsContext = () => useContext(GuestsContext);
