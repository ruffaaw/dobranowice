export type HouseData = {
  pdf: string;
  status: number;
  dzialka: string | number;
  cena: string | number;
  cenaStanSurowy?: string | number;
  cenaStanSurowy30?: string | number;
  cena30: string | number;
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
    dzialka: "6.91",
    cena: "1040000",
    cena30: "1040000",
    cenaStanSurowy: "940000",
    cenaStanSurowy30: "940000",
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
    dzialka: "6.75",
    cena: "979000",
    cena30: "979000",
    cenaStanSurowy: "879000",
    cenaStanSurowy30: "879000",
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
    dzialka: "6.73",
    cena: "1049000",
    cena30: "1049000",
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
    dzialka: "6.72",
    cena: "999000",
    cena30: "999000",
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
    dzialka: "6.83",
    cena: "949000",
    cena30: "949000",
    cenaStanSurowy: "849000",
    cenaStanSurowy30: "849000",
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
    dzialka: "7.15",
    cena: "999000",
    cena30: "999000",
    cenaStanSurowy: "899000",
    cenaStanSurowy30: "899000",
    numer: "6",
    metraz: 128.3,
    Id: "dom6",
    pokoje: 5,
    x: 52,
    y: 73,
  },
];
