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
    pdf: "/kartyMieszkań/2.jpg",
    status: 0,
    dzialka: 5.71,
    cena: 1049000,
    numer: "1",
    metraz: 145.45,
    Id: "dom1",
    pokoje: 5,
    x: 34,
    y: 59,
  },
  {
    pdf: "/kartyMieszkań/2.jpg",
    status: 1,
    dzialka: 5.71,
    cena: 1049000,
    numer: "2",
    metraz: 145.45,
    Id: "dom2",
    pokoje: 5,
    x: 43,
    y: 55,
  },
  {
    pdf: "/kartyMieszkań/2.jpg",
    status: 2,
    dzialka: 5.71,
    cena: 1049000,
    numer: "3",
    metraz: 145.45,
    Id: "dom3",
    pokoje: 5,
    x: 50,
    y: 52,
  },
  {
    pdf: "/kartyMieszkań/2.jpg",
    status: 2,
    dzialka: 5.71,
    cena: 1049000,
    numer: "4",
    metraz: 145.45,
    Id: "dom4",
    pokoje: 5,
    x: 52.5,
    y: 80,
  },
  {
    pdf: "/kartyMieszkań/2.jpg",
    status: 2,
    dzialka: 5.71,
    cena: 1049000,
    numer: "5",
    metraz: 145.45,
    Id: "dom5",
    pokoje: 5,
    x: 61,
    y: 74,
  },
  {
    pdf: "/kartyMieszkań/2.jpg",
    status: 2,
    dzialka: 5.71,
    cena: 1049000,
    numer: "6",
    metraz: 145.45,
    Id: "dom6",
    pokoje: 5,
    x: 68,
    y: 69,
  },
];
