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

    {
      id: "F2",
      members: [
        "Mary Maureen Villegas",
        "Josie Clemente",
        "Lilybeth Villanueva",
        "Rafaela Laurice Lauson",
        "Danicalhin Vergara",
        "Mary Ann Rico",
      ],
    },
    {
      id: "F3",
      members: [
        "Sandra Monica Sulit",
        "Julie Dipon",
        "Geziel Paraiso",
        "Rachelle Anne Jimenez",
        "Princess Avila",
        "Michaela Grace Abara",
      ],
    },

    {
      id: "F4",
      members: [
        "Mapaula Serrano",
        "Leonila Rol",
        "Maria Theresa Leobrera",
        "Nikkie Charmaine Lao",
        "Maricel Manalo",
        "Maria Lindsay Coronel",
      ],
    },

    {
      id: "F5",
      members: [
        "Mary Jane Macabontoc",
        "Ruby Gregorio",
        "Nenita Bulagao",
        "Flordiluna Dorot",
        "Florencia Sakay",
      ],
    },

    {
      id: "F6",
      members: [
        "Joenna Tadoy",
        "Risa Kearsely Beleo",
        "Mikka Crissa Keh",
        "Lhean Angelica Toledo",
        "Aileen Anne Manuel",
        "Leila Haveria",
      ],
    },

    {
      id: "F7",
      members: [
        "Odette Diaz",
        "Karen Anne Pimentel",
        "Laarni Agustin",
        "Maritess Domondon",
        "Felomena Belista-Leabres",
        "Maricel Ocorro",
      ],
    },

    {
      id: "F8",
      members: [
        "Ma. Paz Paguio",
        "Rosario Vergara",
        "Fairy Jean Monzaga",
        "Izza Mae Tabor",
        "Melody Lucero",
        "Kimberly Castillo",
      ],
    },

    {
      id: "F9",
      members: [
        "Lili Ann Advincula",
        "Zyrille Blanco",
        "Lorena Caranto",
        "Zeny De Chavez",
        "Laura Echavez",
        "Maribel Santillan",
      ],
    },

    {
      id: "F10",
      members: [
        "Mona Lisa Guevara",
        "Ara Lingad",
        "Noemi Alegro",
        "Leman Grace Alimbog",
        "Thyrazeist Pobleo",
        "Rachel Santiago",
      ],
    },

    {
      id: "F11",
      members: [
        "Elaine Araneta",
        "Dolores Del Valle",
        "Baby Rose Zamora",
        "Arlyn Agarpao",
        "Camille Parpan",
        "Anna Melissa Azarcon",
      ],
    },

    {
      id: "F12",
      members: [
        "Elisa Yusingco",
        "Angelica Morales",
        "Arnie Atienza",
        "Imelda Losabio",
        "Moneth Matienzo",
        "Jennifer Guzman",
      ],
    },

    {
      id: "F13",
      members: [
        "Erla Reyes",
        "Louisha Angeline Sison",
        "Bernice Anne Balontong",
        "Anne Claire Lim",
        "Tiffany Vargas",
        "Jessielle Revilla",
      ],
    },

    {
      id: "F14",
      members: [
        "Evelyn Mailed",
        "Jamaica-Rose Calpito",
        "Ana Marie Alvarez",
        "Chloe Beatrix Genciana",
        "Gladys Deveza",
        "Ronalyn Espinas",
      ],
    },

    {
      id: "F15",
      members: [
        "Eden Elizabeth Discipulo",
        "Vivien Loon",
        "Abigail Mendieta",
        "Liezl Beatrice Billones",
        "Kathlyn Canela",
        "Jose Emilia Chaves",
      ],
    },

    {
      id: "F16",
      members: [
        "Irene Enriquez",
        "Cecile Pangan",
        "Belinda Bonifacio",
        "Evelyn Nora",
        "Suyin Anne Coronacion",
        "Mary Joan Bune",
      ],
    },

    {
      id: "F17",
      members: [
        "Ophelia Alzaga",
        "Rodelia Nicolas",
        "Jenny Frogoso",
        "Maricel Enriquez",
        "Leida De Leon",
        "Ma. Christina Corral",
      ],
    },

    {
      id: "F18",
      members: [
        "Daisy Cusi",
        "Cristina Placer",
        "Jocelyn Muno",
        "Arlene Rempillo",
        "Jenny San Miguel",
        "Eden Sharon Sellado",
      ],
    },

    {
      id: "F19",
      members: [
        "Diana Cruz",
        "Jenny Ocampo",
        "Irish Khrystal Ong Chiu",
        "Wendy Origines",
        "Precious Abuel",
        "Marjorie Laudiza",
      ],
    },

    {
      id: "F20",
      members: [
        "Eleanor Caneda",
        "Ma. Jhoan Crame",
        "Marie Cel Gonzales",
        "Lyra Padua",
        "Shirley Satingin",
        "Gina Aranas",
      ],
    },

    {
      id: "F21",
      members: [
        "Rosabel Quibal",
        "Marie Liz Yalung",
        "Eden Sharon Sellado",
        "Rose Ann Gines",
        "Cynthia Lucindo",
      ],
    },

    {
      id: "F22",
      members: [
        "Judith Silot",
        "Maria Cristina Rosette Parayno",
        "Rae Vallinas",
        "Richelda Batalon",
        "Jennifer Okada",
      ],
    },

    {
      id: "F23",
      members: [
        "Mary Ingrid Tampol",
        "Carla Grace Romanillos",
        "Aileen Calderon",
        "Carla Enrera",
        "Maritess Gonzales",
      ],
    },

    {
      id: "F24",
      members: [
        "Concepcion Badon",
        "Aurora Monis",
        "Rowena Sy",
        "Anita Yu",
        "Ma. Yolanda Borres",
      ],
    },

    {
      id: "F25",
      members: [
        "Marlette Brodett",
        "Bobbie Te",
        "Ma. Janet Atkins",
        "Lyne Mapa",
        "Jinna Domino",
        "Rosemary Aaron",
      ],
    },

    {
      id: "F26",
      members: [
        "Milagros Item",
        "Kara Vanessa Del Campo",
        "Judith Isla",
        "Maria Isabel Vitug",
        "Maria Aida Sierra",
      ],
    },

    {
      id: "F27",
      members: [
        "Hazel Lava",
        "Mian Tan",
        "Arlene Caringal",
        "Navarra Analyn",
        "Mona Lisa Arbis",
        "Joan Begino",
      ],
    },

    {
      id: "F28",
      members: [
        "Gloria Mamansag",
        "Junielyn Bartolata",
        "Ferna Lou Castillo",
        "Jewel De Veyra",
        "Renita Entuna",
      ],
    },

    {
      id: "F29",
      members: [
        "Junette Perez",
        "Riza De Guzman",
        "Joan Tan",
        "Angelica Morales",
        "Elsa De Gracia",
        "Ma Adora Tricia Zabat",
      ],
    },

    {
      id: "F30",
      members: [
        "Mary Anne Sison",
        "Ana Elizabeth Balitaan",
        "Ma Gracia Brobio",
        "Marilyn Espina",
        "Czarina Gay Forto",
        "Rafaela Laurice Lauson",
      ],
    },

    {
      id: "F31",
      members: [
        "Wilma Zetazate",
        "Miriam Joy Franco",
        "Celsa Nillama",
        "Anna Lissa Balitaan",
        "Kristine Manalo",
      ],
    },

    {
      id: "F32",
      members: [
        "Adeline Hsu",
        "Sylvia De Jesus",
        "Lourdes Faustino",
        "Elizabeth Masilang",
        "Sorayda Andamun",
        "Sunshine Aquino",
      ],
    },

    {
      id: "F33",
      members: [
        "Jesusa O'Hara",
        "Ginalyn Foo",
        "Maria lynnette Sardea",
        "Anadel Subeldia",
        "Esperanza Siquian",
      ],
    },

    {
      id: "F34",
      members: [
        "Yolanda Tolentino",
        "Josie Clemente",
        "Jeanette May Catugal",
        "Maricle Assitio",
        "Angelica Ballentos",
        "Chasen Zulueta",
      ],
    },

    {
      id: "F35",
      members: [
        "Mary Grace Claveria",
        "Patricia Kathryn Ong Chua",
        "Ila Aragon",
        "Jodie Bolante",
        "Charlene Genciana",
      ],
    },

    {
      id: "F36",
      members: [
        "Effegy Dusaran",
        "Eunice Aaron",
        "Honey Rhoriz Angeles",
        "Elaiza Grace De Torres",
        "Diana Dicdican",
      ],
    },

    {
      id: "F37",
      members: [
        "Tracy Goco",
        "Kim Trixia Perez",
        "Sheila Rosales",
        "Reina Isabela Sanchez",
        "Abegail Saraza",
        "Cherry Pink Sy",
      ],
    },

    {
      id: "F38",
      members: [
        "Leila Jaji",
        "Shaina Elfante",
        "Krisha Mae Enriquez",
        "Maia Le-Ann Gamboa",
        "Charlene Ann Garcia",
      ],
    },

    {
      id: "F39",
      members: [
        "Denny Dith Samson",
        "Isabelle Paulo",
        "Jenie Jane Landicho",
        "April Guidotong",
        "Mary Jane Nituda",
        "Elyssa Del Campo",
      ],
    },

    {
      id: "F40",
      members: [
        "Ginnalyn Carag",
        "Edelma Catalina Sy",
        "Maricel Armada",
        "Rudelyn Tapion",
        "Domingo",
        "Catherine Papa",
      ],
    },

    {
      id: "F41",
      members: [
        "Julieta Santillan",
        "Raine Jasmine Manlapas",
        "Rachel Ann Tojino",
        "Zoe Valendrez",
        "Myrtle Vallinas",
      ],
    },

    {
      id: "F42",
      members: [
        "Susan Nunez",
        "Jessa Legaspo",
        "Denice Marella",
        "Ricca Buen Maribao",
        "Sharmaine Rizzel Angeles",
        "Camille Cyre Reillo",
      ],
    },
    {
      id: "F44",
      members: [
        "Te Lee",
        "Ma. Cecilia Pacis",
        "Maria Nenita Yusingco",
        "Pilita Roberto",
        "Alicia Quilicot",
      ],
    },
    {
      id: "F45",
      members: [
        "Zenaida Lista",
        "Edenille Ann Santos",
        "Deborah Jane Timbal",
        "Lilybeth Villanueva",
        "Joy Mendoza",
      ],
    },
    {
      id: "F46",
      members: [
        "Teresita Reyes",
        "Violeta Del Rosario",
        "Rosa Maria Ana Gutierrez",
        "Melani Lee",
        "Ma Lisa Melosantos",
      ],
    },
    {
      id: "M47",
      members: [
        "Charles Martin Lim",
        "Marion Timothy Gaurano",
        "Robert Lawrence Guido",
        "Juster Ryan Guidotong",
        "Jan Paolo Vila",
        "Matthew Serrano",
      ],
    },
    {
      id: "M48",
      members: [
        "Michael Andrew Villegas",
        "Jericho Dan Adolfo",
        "Eric Paolo Calpito",
        "Jezrell Marcelino",
        "Adrian Vallereano Pedrosa",
        "Allan Genciana",
      ],
    },
    {
      id: "M49",
      members: [
        "Erick Meneses",
        "Remaur Miro Avena Avena",
        "Howard Olinares",
        "Alvin Jade Rivano",
        "Juan Antonio Tabalba",
        "Chino Santos",
        "Romel Manabat",
      ],
    },
    {
      id: "M50",
      members: [
        "Ralph Gerard Miller",
        "Joshua Bolante",
        "Kendrick Andrew Genciana",
        "Sunny Joshua Manlapas",
        "Miguel Carlos Sulit",
        "Elijah Quilicot",
      ],
    },
    {
      id: "M51",
      members: [
        "Tristan Filomeno III Cusi",
        "Vicente Anthony Loremas",
        "Benedict Dival",
        "Jaymark Sanchez",
        "John Paolo Sevilla",
        "Jojo Vallinas",
      ],
    },
    {
      id: "M52",
      members: [
        "Kenneth Pascua",
        "Melvin Matienzo",
        "Mark John Rick Mercado",
        "Darnell Rico",
        "Emmanuel Upo",
        "Kyle Romuel Montealto",
      ],
    },
    {
      id: "M53",
      members: [
        "Julian Tampol Jr.",
        "Jarrell Fernandez",
        "Miguel Teodoro Perez",
        "Tomas Roy Potes",
        "Randolf Angelo Reyes",
        "Neljohn Cornelio",
      ],
    },
    {
      id: "M54",
      members: [
        "Carl Rañada",
        "John Michael Abara",
        "Christian Almendras",
        "Elian Alejandro Araneta",
        "Jose Archie",
        "Adrian Vic David Balitaan",
      ],
    },
    {
      id: "M55",
      members: [
        "Edwin Bontes",
        "Mark Lester Alvarez",
        "Rennel Alvarez",
        "Arjay Marvin De Jesus",
        "Aaron Paul Leabres",
        "Angelito Emata",
      ],
    },
    {
      id: "M56",
      members: [
        "Leonardo Castillo",
        "Ismael Monis",
        "Christian Murcia",
        "Michael Patrick Pontawe",
        "John Nikko Nadura",
        "Jan Louie Quindica",
      ],
    },
    {
      id: "M57",
      members: [
        "Reynaldo Quibal",
        "Jey-ar Romanillos",
        "Francis Ivan Tria",
        "Paul Andrew Lim",
        "Dhonie Viray",
        "Mark Philippe Manayan",
      ],
    },
    {
      id: "M58",
      members: [
        "Abey Zetazate",
        "Michael Delos Reyes",
        "Joel Sellado",
        "Mark Alexander Berg Villapando",
        "Edwin Capulso",
      ],
    },
    {
      id: "M59",
      members: [
        "Zosimo Jr. Latoja",
        "Daniel John Balitaan",
        "Jimmel Bermudez",
        "Wilfred Ross Biscocho",
        "Clouie Ckien Caagbay",
        "Jerome Clemente",
      ],
    },
    {
      id: "M60",
      members: [
        "Gilbert Gelaga",
        "Jan Alain Garcia",
        "Monrey Lao",
        "Noel Ramirez",
      ],
    },
    {
      id: "M61",
      members: [
        "Conrado Nicolas Dela Fuente",
        "Noel Munio",
        "Roland Pacis",
        "Roberto Placer",
        "Lorenzo III Vallinas",
        "Christopher Lucindo",
      ],
    },
    {
      id: "M62",
      members: [
        "Patrick Hsu",
        "Bryan Micabalo",
        "Cener Pagad",
        "Jan Carlos Sarthou",
        "Mart Miranda",
      ],
    },
    {
      id: "M63",
      members: [
        "Carlos Paguio",
        "Policarpo Dela Cruz",
        "Gilbert Gelaga",
        "Allan Rey Genciana",
        "Christopher Lucindo",
        "Dr. Galvez Tan",
        "Monrey Lao",
      ],
    },
    {
      id: "M64",
      members: [
        "Alexander Reyes",
        "Romulo Mercado",
        "Michael Manansala",
        "Eliseo Remollena",
        "Christian Aquino",
        "Ciriaco Jr Santos",
      ],
    },
    {
      id: "M65",
      members: [
        "James O'Hara",
        "Joselito Malabanan",
        "Michael Manansala",
        "Jefferson Santos",
        "Mark Haguisan",
        "Victor Bugarin",
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
    {
      id: "A107",
      guests: [
        "Reynaldo Quibal",
        "Jey-ar Romanillos",
        "Francis Ivan Tria",
        "Dhonie Viray",
      ],
    },
    {
      id: "A111",
      guests: ["Michael Andrew Villegas", "Adrian Vallereano Pedrosa"],
    },
    {
      id: "A113",
      guests: [
        "Felomena Belista-Leabres",
        "Reina Isabela Sanchez",
        "Charlene Ann Garcia",
        "Aaron Paul Leabres",
      ],
    },
    {
      id: "A114",
      guests: ["Ging Carag", "Susan Nunez", "Mila Item", "Mary Anne Sison"],
    },
    {
      id: "A115",
      guests: [
        "Julie Dipon",
        "Geziel Paraiso",
        "Rachelle Anne Jimenez",
        "Cristina Calubaquib",
      ],
    },
    {
      id: "A116",
      guests: [
        "Cristina Placer",
        "Jocelyn Muno",
        "Arlene Rempillo",
        "Jenny San Miguel",
      ],
    },
    {
      id: "A117",
      guests: [
        "Edwin Bontes",
        "Robert Guido",
        "Peter De Hesa",
        "Mark Lester Alvarez",
      ],
    },
    {
      id: "A118",
      guests: ["Jane Macabontoc", "Flordiluna Dorot"],
    },
    {
      id: "A120",
      guests: [
        "Julian Tampol Jr.",
        "Jarrell Fernandez",
        "Miguel Teodoro Perez",
        "Tomas Roy Potes",
      ],
    },
    {
      id: "A201",
      guests: ["Te Go Lee", "Connie Badon"],
    },
    {
      id: "A202",
      guests: ["Roland Pacis", "Cecil Pacis"],
    },
    {
      id: "A203",
      guests: [
        "Zosimo Jr. Latoja",
        "Erick Meneses",
        "Doc Carl Ranada",
        "Abe Balatbat",
      ],
    },
    {
      id: "A204",
      guests: ["Carol Umali", "Tintin Batalla", "Ayn Manuel"],
    },
    {
      id: "A205",
      guests: ["Guy Paguio", "Ma. Paz Paguio"],
    },
    {
      id: "A206",
      guests: ["Ptr. Joey Batungbacal", "Cecille Batungbacal"],
    },
    {
      id: "A207",
      guests: ["Philip Brodett", "Marlette Brodett", "Enrique Brodett"],
    },
    {
      id: "A208",
      guests: ["Kit Caparros", "Chet Caparros"],
    },
    {
      id: "A209",
      guests: ["Alex Patricio", "Beth Patricio", "Khristine Patricio"],
    },
    {
      id: "A211",
      guests: ["Zenaida Lista", "Rowena Sy"],
    },
    {
      id: "A213",
      guests: ["Judith Antaran", "Florencia Sakay", "Zoe Antaran"],
    },
    {
      id: "A214",
      guests: ["Eugene Mamansag", "Gloria Mamansag", "Angel Mamansag"],
    },
    {
      id: "A215",
      guests: ["Condrad Dela Fuente", "Odette Diaz"],
    },
    {
      id: "A216",
      guests: [
        "Noel Munio",
        "Wilfred Ross Biscocho",
        "Clouie Ckien Caagbay",
        "Jerome Clemente",
      ],
    },
    {
      id: "A218",
      guests: [
        "Arjay De Jesus",
        "Randolf Angelo Reyes",
        "John Nikko Nadura",
        "Mark Manayan",
      ],
    },
    {
      id: "A220",
      guests: ["Alex Reyes", "Earla Reyes", "Yvana Kisha Reyes"],
    },
    {
      id: "A302",
      guests: [
        "Charles Martin Lim",
        "Matthew Serrano",
        "Robert Lawrence Guido",
        "Juster Ryan Guidotong",
        "John Michael Abara",
        "Robert Guido",
      ],
    },
    {
      id: "A303",
      guests: [
        "Leonila Rol",
        "Maria Theresa Leobrera",
        "Nikkie Charmaine Lao",
        "Maricel Manalo",
        "Maria Lindsay Coronel",
      ],
    },
    {
      id: "A304",
      guests: [
        "Rosario Vergara",
        "Fairy Jean Monzaga",
        "Izza Mae Tabor",
        "Melody Lucero",
        "Kimberly Castillo",
      ],
    },
    {
      id: "A305",
      guests: [
        "Dolores Del Valle",
        "Baby Rose Zamora",
        "Arlyn Agarpao",
        "Camille Parpan",
        "Anna Melissa Azarcon",
      ],
    },
    {
      id: "A306",
      guests: [
        "Maribel Santillan",
        "Zeny De Chavez",
        "Laura Echavez",
        "Zyrille Blanco",
        "Lorena Caranto",
      ],
    },
    {
      id: "A307",
      guests: [
        "Paula Serrano",
        "Sorayda Andamun",
        "Sylvia De Jesus",
        "Lourdes Faustino",
        "Elizabeth Masilang",
      ],
    },
    {
      id: "A308",
      guests: [
        "Jamaica-Rose Calpito",
        "Gladys Deveza",
        "Ronalyn Espinas",
        "Liezl Beatrice Billones",
        "Kathlyn Canela",
      ],
    },
    {
      id: "A309",
      guests: [
        "Jojo Vallinas",
        "Lorenzo III Vallinas",
        "Myrtle Vallinas",
        "Rae Vallinas",
      ],
    },
    {
      id: "A310",
      guests: ["Hayden Kho"],
    },
    {
      id: "A311",
      guests: [
        "Alex Araneta",
        "Elaine Araneta",
        "Son of Alex Araneta",
        "Brother of Alex Araneta",
      ],
    },
    {
      id: "A312",
      guests: ["Dr. Galvez Tan"],
    },
    {
      id: "A313",
      guests: [
        "Tristan Cusi",
        "Daisy Cusi",
        "Child 1 of Tristan Cusi",
        "Child 2 of Tristan Cusi",
      ],
    },
    {
      id: "A314",
      guests: [
        "Paul Lim",
        "Wife of Paul Lim",
        "Child 1 of Paul Lim",
        "Child 2 of Paul Lim",
      ],
    },
    {
      id: "A315",
      guests: [
        "Carlo Dominguez",
        "Mrs. Dominguez",
        "Anaiah Daniel Dominguez",
        "Eliza Tiongson",
      ],
    },
    {
      id: "A316",
      guests: [
        "Jhoan Crame",
        "Analyn Navarra",
        "Jenie Jane Landicho",
        "Mary Jane Nituda",
      ],
    },
    {
      id: "A318",
      guests: [
        "Isabelle Paulo",
        "Patricia Beatriz Paulo",
        "Nina Patricia Santos",
        "April Guidotong",
      ],
    },
    {
      id: "A320",
      guests: [
        "Christian Almendras",
        "Jericho Dan Adolfo",
        "Artemio Calderon",
        "Jan Louie Quindica",
      ],
    },
    {
      id: "B113",
      guests: ["Judith Silot"],
    },
    {
      id: "B114",
      guests: [
        "Maria Nenita Yusingco",
        "Chasen Zulueta",
        "Clarissa Domingo",
        "Marie Cel Gonzales",
        "Lili Ann Advincula",
      ],
    },
    {
      id: "B115",
      guests: [
        "Anna Marie Alvarez",
        "Maria Leonora Remollena",
        "Eliseo Remollena",
      ],
    },
    {
      id: "B117",
      guests: [
        "Jesusa O'Hara",
        "Ginalyn Foo",
        "Maria Lynnette Sardea",
        "Anadel Subeldia",
        "Esperanza Siquian",
      ],
    },
    {
      id: "B118",
      guests: [
        "Arcellie Lingad",
        "Leman Grace Alimbog",
        "Noemi Alegro",
        "Thyrazeist Pobleo",
        "Rachel Santiago",
      ],
    },
    {
      id: "B119",
      guests: [
        "Darnel Rico",
        "Melvin Matienzo",
        "Mark John Mercado",
        "Emmanuel Upo",
        "Alvin Jade Rivano",
      ],
    },
    {
      id: "B120",
      guests: [
        "Theresa Abello",
        "Bernice Anne Balongtong",
        "Anne Claire Lim",
        "Jenny Fernandez",
      ],
    },
    {
      id: "B121",
      guests: [
        "Shaina Elfante",
        "Joan Tan",
        "Marilyn Espina",
        "Elaiza Grace De Torres",
        "Diana Dicdican",
      ],
    },
    {
      id: "B201",
      guests: [
        "Ana Elizabeth Balitaan",
        "Anna Lissa Balitaan",
        "Adiran Balitaan",
        "Daniel John Balitaan",
        "Anna Balitaan",
      ],
    },
    {
      id: "B202",
      guests: [
        "Junielyn Bartolata",
        "Angelica Ballentos",
        "Renita Entuna",
        "Maritess Gonzales",
        "Jose Emilia Chavez",
      ],
    },
    {
      id: "B203",
      guests: [
        "Hazel Lava",
        "Lisa Melosantos",
        "Suyin Anne Coronacion",
        "Violeta Del Rosario",
        "Arlene Caringal",
      ],
    },
    {
      id: "B204",
      guests: [
        "Dada Dyquiangco",
        "Candy Lou Benitez",
        "Jenelyn Yap",
        "Regiena Binas",
        "Revilheen Lezarda",
      ],
    },
    {
      id: "B205",
      guests: [
        "Juwil John Bulatao",
        "Emmanuel Molino",
        "Christopher Perez",
        "Jhones Canitan",
        "Chirs Galora",
      ],
    },

    {
      id: "B207",
      guests: [
        "Jarrell Fernandez",
        "Randolf Angelo Reyes",
        "Tomas Roy Potes",
        "Miguel Perez",
        "Nil Howard Olinares",
        "Miro Avena",
        "Miguel Teodoro Perez",
      ],
    },
    {
      id: "B208",
      guests: [
        "Mary Jane Macabontoc",
        "Ruby Gregorio",
        "Nenita Bulagao",
        "Flordiluna Dorot",
        "Maricel Aarmada",
        "Catherine Papa",
      ],
    },
    {
      id: "B209",
      guests: [
        "Winnie Vivar",
        "Edenille Santos",
        "Joan Noble",
        "Erlinda Falcon",
        "Juliet Santillan",
      ],
    },
    {
      id: "B210",
      guests: [
        "James O'Hara",
        "Joselito Malabanan",
        "Victor Bugarin",
        "Michael Manansala",
        "Jefferson Santos",
        "Mark Haguisan",
      ],
    },
    {
      id: "B211",
      guests: [
        "Ophelia Alzaga",
        "Nicolas Rodelia",
        "Jenny Frogoso",
        "Maricel Enriquez",
        "Leida De Leon",
        "Ma. Christina Corral",
      ],
    },
    {
      id: "B212",
      guests: [
        "Viven Loon",
        "Abigail Mendieta",
        "Cecil Pangan",
        "Belinda Bonifacio",
        "Evelyn Bersamin",
        "Eden Discipulo",
      ],
    },
    {
      id: "B213",
      guests: [
        "Maia Le-Ann Gamboa",
        "Ferna Lou Castillo",
        "Maricel Ocorro",
        "Sheila Rosales",
        "Catalina Sy",
        "Rudelyn Tapion",
      ],
    },
    {
      id: "B214",
      guests: [
        "Jewel De Veyra",
        "Aileen Calderon",
        "Rose Ann Gines",
        "Mary Grace Mendoza",
        "Miya Dakila",
        "Leila Haveria",
      ],
    },
    {
      id: "B215",
      guests: [
        "Ma. Janet Atkins",
        "Lyne Mapa",
        "Jinna Domino",
        "Ma. Gracia Brobio",
        "Czarina Gay Forto",
        "Rafaela Laurice Lauson",
      ],
    },
    {
      id: "B217",
      guests: ["Abey Zetazate", "Wilma Zetazate"],
    },
    {
      id: "B218",
      guests: [
        "Risa Kearsely Beleo",
        "Mikka Crissa Keh",
        "Lhean Angelica Toledo",
        "Aileen Anne Manuel",
        "Leila Haveria",
        "Joenna Tadoy",
      ],
    },
    {
      id: "B219",
      guests: [
        "Eunice Aaron",
        "Rosemary Aaron",
        "Honey Rhoriz Angeles",
        "Sharemaine Rizzel Angeles",
        "Denice Marella",
        "Ricca Maribao",
      ],
    },
    {
      id: "B220",
      guests: [
        "Rosabel Quibal",
        "Richelda Batalon",
        "Marie Liz Yalung",
        "Eden Sharon Sellado",
        "Jennifer Okada",
        "Maricris Parayno",
      ],
    },
    {
      id: "B221",
      guests: [
        "Junette Perez",
        "Riza De Guzman",
        "Angelica Morales",
        "Elsa De Gracia",
        "Ma. Adora Tricia Zabat",
        "Alicia Quilicot",
      ],
    },
    {
      id: "B222",
      guests: [
        "Mary Ingrid Tampol",
        "Carla Grace Romanillos",
        "Carla Enrera",
        "Monis Aurora",
        "Jessa Legaspo",
        "Camille Reillo",
      ],
    },
    {
      id: "B301",
      guests: [
        "Celsa Nillama",
        "Kristine Manalo",
        "Yolanda Tolentino",
        "Jeanette May Catugal",
        "Maricle Assitio",
        "Roberto Pelita",
      ],
    },
    {
      id: "B302",
      guests: [
        "Mary Grace Claveria",
        "Patricia Kathryn Ong Chua",
        "Ila Aragon",
        "Jodie Bolante",
        "Sunshine Aquino",
        "Joy Mendoza",
      ],
    },
    {
      id: "B303",
      guests: [
        "Tracy Goco",
        "Kim Trixia Perez",
        "Abegail Saraza",
        "Cherry Pink Sy",
        "Leila Jaji",
        "Krisha Mae Enriquez",
      ],
    },
    {
      id: "B304",
      guests: [
        "Ralph Gerard Miller",
        "Joshua Bolante",
        "Sunny Joshua Manlapas",
        "Miguel Carlos Sulit",
        "Elijah Quilicot",
      ],
    },
    {
      id: "B305",
      guests: ["Kenneth Pascua", "Archie Jose", "Chino Santos", "Jun Santos"],
    },
    {
      id: "B306",
      guests: [
        "Michael Delos Reyes",
        "Joel Sellado",
        "Mark Alexander Berg Villapando",
        "Edwin Capulso",
        "Juan Carlos Herrero",
        "Jan Alain Garcia",
        "Monrey Lao",
      ],
    },
    {
      id: "B307",
      guests: [
        "Bryan Micabalo",
        "Cener Pagad",
        "Jan Carlos Sarthou",
        "Policarpio Dela Cruz",
        "Gilbert Gelaga",
        "Christopher Lucindo",
      ],
    },
    {
      id: "B308",
      guests: ["Anita Yu", "Nanet Vitug", "Monalisa Arbis"],
    },
    {
      id: "B309",
      guests: [
        "Raine Manlapaz",
        "Zoe Valendrez",
        "Rachen Ann Tojino",
        "Deborah Jane Timbal",
        "Lilybeth Villanueva",
      ],
    },
    {
      id: "B310",
      guests: [
        "Gina Aranas",
        "Shan David",
        "Bobbie Te",
        "Issay Yusingco",
        "Bilba Rutaquio",
      ],
    },
    {
      id: "B311",
      guests: [
        "Marion Timothy Gaurano",
        "Jan Paolo Vila",
        "Noel Ramirez",
        "Jan Alain Garcia",
        "Monrey Lao",
      ],
    },
    {
      id: "B312",
      guests: [
        "Arnie Atienza",
        "Imelda Losabio",
        "Moneth Matienzo",
        "Angelica Morales",
        "Fatima Bolima",
      ],
    },
    {
      id: "B313",
      guests: [
        "Vicente Anthony Loremas",
        "Jaymark Sanchez",
        "Benedict Dival",
        "Jan Paolo Sevilla",
        "Juan Antonio Tabalba",
        "Roberto Placer",
      ],
    },
    {
      id: "B314",
      guests: [
        "Josie Clemente",
        "Lilybeth Villanueva",
        "Rafaela Laurice Lauson",
        "Danicalhin Vergara",
        "Wendy Origines",
      ],
    },

    {
      id: "B315",
      guests: [
        "Karen Anne Pimentel",
        "Laarni Agustin",
        "Marites Damondon",
        "Arlene Caringal",
        "Denise Hernandez",
      ],
    },
    {
      id: "B316",
      guests: ["Patrick Hsu", "Adeline Hsu"],
    },
    {
      id: "B317",
      guests: ["Christopher Lucindo", "Cynthia Lucindo"],
    },
    {
      id: "B318",
      guests: [
        "Mary Maureen Villegas",
        "Teresita Reyes",
        "Rosa Maria Gutierrez",
        "Sandy Sulit",
        "Melani Lee",
      ],
    },
    {
      id: "B319",
      guests: [
        "Irene Enriquez",
        "Mary Joan Bune",
        "Eleanor Caneda",
        "Lyra Padua",
        "Shirley Satingin",
      ],
    },
    {
      id: "B320",
      guests: [
        "Diana Cruz",
        "Evelyn Mailed",
        "Judith Isla",
        "Maria Aida Sierra",
        "Miriam Joy Franco",
      ],
    },
    {
      id: "B321",
      guests: [
        "Jenny Ocampo",
        "Irish Khrystal Ong Chiu",
        "Wendy Origines",
        "Precious Abuel",
        "Marjorie Laudiza",
      ],
    },
    {
      id: "B322",
      guests: [
        "Allan Genciana",
        "Allan Rey Genciana",
        "Charlene Genciana",
        "Chloe Beatrix Genciana",
        "Kendrick Andrew Genciana",
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
