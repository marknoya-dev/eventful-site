export interface Guest {
  id?: string;
  fullName: string;
  roomID?: number | string;
  groupID?: number | string;
}

export interface Room {
  id: number | string;
  guests: Guest[];
}

export interface getRoomType {
  guest: Guest | undefined;
  guests: Guest[];
}

export interface Group {
  id: number | string;
  members: Guest[];
}

export interface getGroupType {
  guest: Guest | undefined;
  members: Guest[];
}

export interface GuestsContextType {
  allGuests: Guest[];
  groupList: { fullName: string; groupID: string | number | undefined }[];
  roomList: { fullName: string; roomID: string | number | undefined }[];
  getGroup: (guestID: string) => getGroupType;
  getAllGroups: () => Group[];
  getRoom: (guestName: string) => getRoomType;
  getAllRooms: () => Room[];
}

export const list = {
  groupAssignments: [
    {
      id: "F1",
      members: [
        "Khristine Patricio",
        "Nina Patricia Santos",
        "Fatima Bolima",
        "Ma. Cristina Calubaquib",
        "Denise Hernandez",
        "Patricia Beatriz Paulo",
      ],
    },
  ],
  roomAssignments: [
    {
      id: "A106",
      guests: [
        "Leonardo Castillo",
        "Ismael Monis",
        "Christian Murcia",
        "Michael Patrick Pontawe",
      ],
    },
  ],
};

export const GroupAssignments: Guest[] = list.groupAssignments
  .map((group) =>
    group.members.map((guest) => ({ fullName: guest, groupID: group.id }))
  )
  .flat(1);

export const RoomAssignments: Guest[] = list.roomAssignments
  .map((l) => l.guests.map((guest) => ({ fullName: guest, roomID: l.id })))
  .flat(1);
