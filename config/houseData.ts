export type HouseData = {
  pdf: string;
  status: number;
  dzialka: number;
  cena: number;
  numer: string;
  metraz: number;
  Id: string;
  pokoje: number;
  x?: number;
  y?: number;
};

export const houseData: HouseData[] = [
  {
    pdf: "/kartyMieszkan/1.jpg",
    status: 0,
    dzialka: 5.71,
    cena: 1049000,
    numer: "1",
    metraz: 145.45,
    Id: "dom1",
    pokoje: 5,
    x: 32,
    y: 50,
  },
  {
    pdf: "/kartyMieszkan/1.jpg",
    status: 1,
    dzialka: 5.71,
    cena: 1049000,
    numer: "2",
    metraz: 145.45,
    Id: "dom2",
    pokoje: 5,
    x: 43,
    y: 45,
  },
  {
    pdf: "/kartyMieszkan/1.jpg",
    status: 2,
    dzialka: 5.71,
    cena: 1049000,
    numer: "3",
    metraz: 145.45,
    Id: "dom3",
    pokoje: 5,
    x: 52,
    y: 41,
  },
  {
    pdf: "/kartyMieszkan/1.jpg",
    status: 2,
    dzialka: 5.71,
    cena: 1049000,
    numer: "4",
    metraz: 145.45,
    Id: "dom4",
    pokoje: 5,
    x: 52,
    y: 73,
  },
  {
    pdf: "/kartyMieszkan/1.jpg",
    status: 2,
    dzialka: 5.71,
    cena: 1049000,
    numer: "5",
    metraz: 145.45,
    Id: "dom5",
    pokoje: 5,
    x: 63,
    y: 66,
  },
  {
    pdf: "/kartyMieszkan/1.jpg",
    status: 2,
    dzialka: 5.71,
    cena: 1049000,
    numer: "6",
    metraz: 145.45,
    Id: "dom6",
    pokoje: 5,
    x: 71,
    y: 59,
  },
];
