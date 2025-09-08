export type HouseData = {
  pdf: string;
  status: number;
  dzialka: string | number;
  cena: string | number;
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
    status: 1,
    dzialka: "-",
    cena: "-",
    numer: "1",
    metraz: 128.3,
    Id: "dom1",
    pokoje: 5,
    x: 32,
    y: 50,
  },
  {
    pdf: "/kartyMieszkan/2.jpg",
    status: 1,
    dzialka: "-",
    cena: "-",
    numer: "2",
    metraz: 128.3,
    Id: "dom2",
    pokoje: 5,
    x: 43,
    y: 45,
  },
  {
    pdf: "/kartyMieszkan/3.jpg",
    status: 1,
    dzialka: "-",
    cena: "-",
    numer: "3",
    metraz: 128.3,
    Id: "dom3",
    pokoje: 5,
    x: 52,
    y: 41,
  },
  {
    pdf: "/kartyMieszkan/4.jpg",
    status: 1,
    dzialka: "-",
    cena: "-",
    numer: "4",
    metraz: 128.3,
    Id: "dom4",
    pokoje: 5,
    x: 71,
    y: 59,
  },
  {
    pdf: "/kartyMieszkan/5.jpg",
    status: 1,
    dzialka: "-",
    cena: "-",
    numer: "5",
    metraz: 128.3,
    Id: "dom5",
    pokoje: 5,
    x: 63,
    y: 66,
  },
  {
    pdf: "/kartyMieszkan/6.jpg",
    status: 1,
    dzialka: "-",
    cena: "-",
    numer: "6",
    metraz: 128.3,
    Id: "dom6",
    pokoje: 5,
    x: 52,
    y: 73,
  },
];
