export interface TableDataType {
  guest: Guest | undefined;
  table: Guest[];
}

export interface GuestsContextType {
  guestList: Guest[];
  getTable: (guestID: string) => TableDataType;
  getAllTables: () => { tableNumber: number | string; guests: Guest[] }[];
}

export interface Guest {
  id?: string;
  fullName: string;
  table: number | string;
}
export const list = [
  {
    table: "VIP 1",
    guests: [
      "Dr. Peter Tan-Chi",
      "Deonna Tan-Chi",
      "Ptr. Jp Masakayan",
      "Roochie Masakayan",
      "Ptr. Ricky Sarthou",
      "Ptr. Bert Villa",
      "Dr. Jay Nuñez",
      "Dra. Kathy Nuñez",
    ],
  },
  {
    table: "VIP 2",
    guests: [
      "Paolo Eduardo Sison",
      "Rowena Sison",
      "Pio Franchesco Sison",
      "Gustine Sison",
      "Sherry Sison",
      "Eduardo Miguel Sison IV",
      "Albert De Jesus",
      "Amy Puno",
    ],
  },
  {
    table: "VIP 3",
    guests: [
      "Ickhoy De Leon",
      "Joy Sison",
      "Baby De Leon",
      "Theresa Sison-Tongco",
      "Angeline Reyes",
      "Patricia Rebecca Tongco",
      "Erlinda Puno",
      "Arsenio Puno",
    ],
  },
  {
    table: "VIP 4",
    guests: [
      "Jonar Maniquis",
      "Adelyn Maniquis",
      "Adrien Maniquis",
      "Aiden Maniquis",
      "Judy Maniquis",
      "Sydney Maniquis",
      "Beng Duque",
      "Ralph Cabrera",
    ],
  },
  {
    table: 1,
    guests: [
      "Dino Puno",
      "Winnie/Sam Puno",
      "Myles Justin Puno",
      "Vincent Gabriel Puno",
      "Adi Puno",
      "Raquel Puno",
      "Manuel Boy Valenzuela",
      "Andrei Valenzuela",
    ],
  },
  {
    table: 2,
    guests: [
      "Wheng Angeles",
      "Eve Vios",
      "Shena Yap",
      "Sarah Bergado",
      "Marvin Lascano",
      "Erwin Osorio",
      "Jero de Luna",
      "Mark Guiyab",
    ],
  },
  {
    table: 3,
    guests: [
      "Aumar Aguilar",
      "Nikki Aguilar",
      "Erwin Elivazo",
      "Gino Ong",
      "Marc Sorongon",
      "Ephraim Sorongon",
      "Bernz Tumaru",
      "Ann Tumaru",
    ],
  },
  {
    table: 4,
    guests: [
      "Marietta Palma",
      "Tessie Salazar",
      "Jean Raoet",
      "Tessie Dulay",
      "Bernie Van Gelder",
      "Armi Tan",
      "Romeo Geronimo",
      "German Tamayo",
    ],
  },
  {
    table: 5,
    guests: [
      "Glenn Posadas",
      "Dong Yu",
      "Jo Tan",
      "Jennifer James",
      "Millan Posadas",
      "Louise Yu",
      "Pao Ollesca",
      "Jessica Tsoi-Rivera",
    ],
  },
  {
    table: 6,
    guests: [
      "Hakem Monte",
      "Meg Monte",
      "Luis Recomono",
      "Bianca Recomono",
      "Venice Yuzon",
      "Patz Estacio",
      "Tim Uytengsu",
      "Genin Amiscaray",
    ],
  },
  {
    table: 7,
    guests: [
      "Mary Anne Bustos",
      "Mary Rose Bustos",
      "Mary Grace Bustos",
      "Don Mia",
      "Jeff Mia",
      "Jaden Mia",
      "Jose Dipasupil",
      "Patricia Dipasupil",
    ],
  },
  {
    table: 8,
    guests: [
      "Gigi Miguel",
      "Ana Bentilanon",
      "Janine Carreon",
      "Liway Sevalla",
      "Jocot De Dios",
      "Gerardo Ablaza, Jr.",
      "Lani Ablaza",
      "Marivic Sugapong",
    ],
  },
  {
    table: 9,
    guests: [
      "Edric Mendoza",
      "Joy Mendoza",
      "Peter Tan-Chi Jr",
      "Jennifer Tan-Chi",
      "Paul Tan-Chi",
      "Jenny Tan-Chi",
      "Jim Whelchel",
      "Lui Whelchel",
    ],
  },
  {
    table: 10,
    guests: [
      "Joey Geronimo",
      "Jean Geronimo",
      "Von Consulta",
      "Meg Consulta",
      "Ronnie Agcaoili",
      "Tsarina Agcaoili",
      "Paul De Vera",
      "Claire De Vera",
    ],
  },
  {
    table: 11,
    guests: [
      "George Padua",
      "Alex Bonilla",
      "Faye Matriano",
      "Marj Balbuena",
      "Vina Tan",
      "Che Vizcarra",
      "Tin Tin Batalla",
      "Ging Carag",
    ],
  },
  {
    table: 12,
    guests: [
      "Tine Roca",
      "Lito Tamban",
      "Kim Medina",
      "Mic Narra",
      "Venus Raj",
      "Reea Leido",
      "Michael Mapi",
      "Louie Rapisura",
    ],
  },
  {
    table: 13,
    guests: [
      "AJ Puyat",
      "Andee Puyat",
      "Louise Puyat",
      "Gogoo Puyat",
      "Mylene Puno-Paragua",
      "Eric Puno- Paragua",
      "Elise Paragua",
      "Elaine Paragua",
    ],
  },
  {
    table: 14,
    guests: [
      "Wheng Espiritu",
      "Donboy Espiritu",
      "Rose Astoveza-Paredes",
      "Jaeson Paredes",
      "Peping de Villa",
      "Joy de Villa",
      "Leonardo Nido",
      "Ursula Nido",
    ],
  },
  {
    table: 15,
    guests: [
      "Ito De Jesus",
      "Cata De Jesus",
      "Marty Ocaya",
      "Atid Ocaya",
      "Desmond Chan",
      "Jojo Chan",
      "Ramon Manzana",
      "Lucy Manzana",
    ],
  },
  {
    table: 16,
    guests: [
      "Erick Totañes",
      "Norvic Totañes",
      "Ardy Roberto",
      "Miriam Roberto",
      "Vince Tsay",
      "Rose Tsay",
      "Albert Noel",
      "Pol Matute",
    ],
  },
  {
    table: 17,
    guests: [
      "Willy Sy",
      "Geraldiine Sy",
      "Mau Rivera",
      "Susan Rivera",
      "Ronnie Aquino",
      "Val Aquino",
      "Brian Tan",
      "Binky Tan",
    ],
  },
  {
    table: 18,
    guests: [
      "Charles Dy",
      "Jack Marbida",
      "Raul Firme",
      "Mel Viloria",
      "ZsaZsa Viloria",
      "Jessica Chan",
      "Bong Bastillo",
      "Lanie Bastillo",
    ],
  },
  {
    table: 19,
    guests: [
      "Melinda Racquel Tongco",
      "Argee de Jesus",
      "Marilitz de Jesus",
      "JB de Jesus",
      "Pepe de Jesus",
      "Reena de Jesus",
      "Alee de Jesus",
      "Arline Adeva",
    ],
  },
  {
    table: 20,
    guests: [
      "Tania Verora",
      "Tria Tiquia",
      "Gerly Turingan",
      "Bliss Mabini",
      "Margz Munoz",
      "Anjo Albindo",
      "Ella Navarro",
      "Joan Tuazon",
    ],
  },
  {
    table: 21,
    guests: [
      "Joby Soriano",
      "Cindy Soriano",
      "Nett Gochuico",
      "Bang Gochiuco",
      "Joey Batungbacal",
      "Cecille Batungbacal",
      "Glenn Obligacion",
      "Ellen Obligacion",
    ],
  },
  {
    table: 22,
    guests: [
      "Albit Rodriguez",
      "Anne Rodriguez",
      "Roy Felipe",
      "Sasa Felipe",
      "Mike Yap",
      "Yvette Yap",
      "Gino Rodriguez",
      "Vida Rodriguez",
    ],
  },
  {
    table: 23,
    guests: [
      "Phiip Roxas",
      "Katre De Jesus",
      "Third Gonzales",
      "Teeny Gonzales",
      "Raul Galvez",
      "Camilla Galvez",
      "Henry Gula",
      "Virgie Gula",
    ],
  },
  {
    table: 24,
    guests: [
      "Cecille Gonzales",
      "Angel Gonzales III",
      "Leng Gonzales",
      "Gelo Gonzales",
      "Gelai Gonzales",
      "Kath Gonzales",
      "Monty Montinola",
      "Camille Montinola",
    ],
  },
  {
    table: 25,
    guests: [
      "Chito Cabalu",
      "Gnet Cabalu",
      "Chris Escudero",
      "Connie Escudero",
      "Erwin Benipayo",
      "Lyn Benipayo",
      "Ferdie Agustin",
      "Lyn Agustin",
    ],
  },
  {
    table: 26,
    guests: [
      "Ed Camacho",
      "Chris Aguilar",
      "Dave Layosa",
      "Renan Lacson",
      "Emil Estacion",
      "Eric Inocencio",
      "Dominic Timbancaya",
      "Frankie Endriga",
    ],
  },
  {
    table: 27,
    guests: [
      "Jet Calosing",
      "Ramon Maronilla",
      "Charlie Velasco",
      "Bel Velasco",
      "Myki Cantero",
      "Bel Cantero",
      "Dondi Lazaro",
      "Tin Lazaro",
    ],
  },
  {
    table: 28,
    guests: [
      "Royet Subida",
      "Bobby Sy",
      "Mike Macapagal",
      "Raul Luna",
      "Andy Pascua",
      "Joel Urriquia",
      "Choy Merioles",
      "Ziggy Abella",
    ],
  },
  {
    table: 29,
    guests: [
      "Angelo Reyes",
      "Teresa Reyes",
      "Angel Reyes",
      "Gabriel Reyes",
      "Warren Dimatera",
      "Liza Dimatera",
      "Lilli Dimatera",
      "Joe Dimatera",
    ],
  },
  {
    table: 30,
    guests: [
      "Jessie Tiqiua",
      "Mina Tiquia",
      "Johnny Chua",
      "Quennie Chua",
      "Carl San Pedro",
      "Mickey San Pedro",
      "Jig Ligon",
      "Jeck Ligon",
    ],
  },
  {
    table: 31,
    guests: [
      "Smiley Bernardo",
      "Jay Bernardo",
      "Len Tienzo",
      "Rein Tienzo",
      "Thess Yap",
      "Nayco Yap",
      "Vince Moral",
      "Bea Moral",
    ],
  },
  {
    table: 32,
    guests: [
      "Jerome Buenaobra",
      "Richard Sanchez",
      "Lyle Sulit",
      "Momon Baula",
      "Noel Puyat",
      "Chi Chi Puyat",
      "Jiggie Alejandrino",
      "Coco Alejandrino",
    ],
  },
  {
    table: 33,
    guests: [
      "Mannix Manalo",
      "John Dionisio",
      "Jun Javelosa",
      "Edwin Sarmienta",
      "Jorenz Tañada",
      "Jonby Valdez",
      "Caloy Ocampo",
      "Do Singson",
    ],
  },
  {
    table: 34,
    guests: [
      "Jeff Law",
      "Vivien Law",
      "Chok San Diego",
      "Kai San Diego",
      "Kit Kat Gotuaco",
      "Roch Dalton",
      "Angelo Lozada",
      "Pepper Lozada",
    ],
  },
  {
    table: 35,
    guests: [
      "Gary Beltran",
      "Jean Beltran",
      "Dr. Val Hermedes",
      "JJ Jiao-Hermedes",
      "Gino Cortina",
      "Andy Cortina",
      "Anton Almendras",
      "Elaine Almendras",
    ],
  },
  {
    table: 36,
    guests: [
      "Johannes Wu",
      "Eleonor Wu",
      "Neil Gosingtian",
      "Mel Gosingtian",
      "Carl Eleazar",
      "Jin Eleazar",
      "Stephen Caasi",
      "Cess Caasi",
    ],
  },
  {
    table: 37,
    guests: [
      "Klud Pascua",
      "Shar Pascua",
      "Djo Yutangkin",
      "Puy Yutangkin",
      "Jed Abad",
      "Nate Santos",
      "Edward Docil",
      "Abi Docil",
    ],
  },
  {
    table: 38,
    guests: [
      "Mia Estrada",
      "Mirriam Reyes",
      "Delvin Soriano",
      "Sarah Deocaris",
      "Kyla Espiritu",
      "Lina Valdez",
      "Randy Lumawod",
      "Marc Borja",
    ],
  },
  {
    table: 39,
    guests: [
      "Loren Lee",
      "Effie Tadeja",
      "Kate Dee Kuan",
      "Sumo Cabalu",
      "Whuilette Young",
      "Ces Patacsil",
      "Belle Cruz",
      "Abigail Abigan",
    ],
  },
  {
    table: 40,
    guests: [
      "Sundy Bergado",
      "Tina Depra",
      "Jenette Jaudian",
      "Shakira De Sena",
      "Ericka Tiquia",
      "Sofia Tiquia",
      "Ana Calipayan",
      "Cy Custodio",
    ],
  },
  {
    table: 41,
    guests: [
      "Albert Ablang",
      "Mayette Ablang",
      "Abigail Ablang",
      "Chin Palafox-Soriano",
      "Stephen Tiongco",
      "Ana Tiongco",
      "Jason Mejia",
      "Mitzie Mejia",
    ],
  },
  {
    table: 42,
    guests: [
      "Combat Pineda",
      "Aki Pineda",
      "Jay Marzan",
      "Gerivic Ignacio",
      "Wayde Villacorta",
      "Peya Villacorta",
      "Deng Restor",
      "Grace Restor",
    ],
  },
  {
    table: 43,
    guests: [
      "John Moreno",
      "Niña Moreno",
      "Paulo Ebora",
      "Gayle Madarang",
      "Jason Discipulo",
      "Peds Dimafelix",
      "Tom Murillo",
      "Gica Lumabao",
    ],
  },
  {
    table: 44,
    guests: [
      "Ian Perez",
      "Jo Perez",
      "Jairus Bernardo",
      "Catha Esteban",
      "Mark Noya",
      "Grace Catindig",
      "John Banares",
      "Jemyl Manubay",
    ],
  },
];

//create an array of type Guest out of list

export const Guests: Guest[] = list
  .map((l) => l.guests.map((guest) => ({ fullName: guest, table: l.table })))
  .flat(1);

export const g: Guest[] = [
  {
    fullName: "Dr. Peter Tan-Chi",
    table: "VIP 1",
  },
  {
    fullName: "Tom Murillo",
    table: "VIP 2",
  },
  {
    fullName: "Jep Delos Santos",
    table: "VIP 1",
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
    fullName: "Ronel Canaco",
    table: 4,
  },
  {
    fullName: "Dibs Bacasmas",
    table: 4,
  },
  {
    fullName: "David Balansag",
    table: 4,
  },
  {
    fullName: "Ronn Mata",
    table: 4,
  },
  {
    fullName: "Kurt Dela Luna",
    table: 4,
  },
  {
    fullName: "James Bayucan",
    table: 4,
  },
  {
    fullName: "Lito Amores",
    table: 4,
  },

  {
    fullName: "",
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
