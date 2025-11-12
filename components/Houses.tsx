"use client";
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import { Key, useEffect, useRef, useState } from "react";
import { FaClock, FaInfoCircle } from "react-icons/fa";

export default function Houses() {
  const listRef = useRef<HTMLDivElement>(null);
  const [houseOffers, setHouseOffers] = useState<any[]>([]);
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [historyZamIndex, setHistoryZamIndex] = useState<number | null>(null);

  const toggleHistory = (i: number) => {
    if (openIndex !== null) setOpenIndex(null);
    if (historyZamIndex !== null) setHistoryZamIndex(null);

    setHistoryIndex(historyIndex === i ? null : i);
  };
  const toggleHistoryZam = (i: number) => {
    if (openIndex !== null) setOpenIndex(null);
    if (historyIndex !== null) setHistoryIndex(null);

    setHistoryZamIndex(historyZamIndex === i ? null : i);
  };

  const toggleOpen = (key: string) => {
    if (historyIndex !== null) setHistoryIndex(null);
    if (historyZamIndex !== null) setHistoryZamIndex(null);

    setOpenIndex(openIndex === key ? null : key);
  };

  const getStatusText = (status: number) => {
    switch (status) {
      case 0:
        return "Sprzedany";
      case 1:
        return "Dostępny";
      case 2:
        return "Zarezerwowany";
      default:
        return "Nieznany";
    }
  };

  const formatPrice = (price: number | string): string => {
    const priceStr = typeof price === "number" ? price.toString() : price;
    const cleanPrice = priceStr.replace(/\s/g, "");
    return cleanPrice.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  // const houseOffers = houseData;

  useEffect(() => {
    const fetchHouseOffers = async () => {
      try {
        const response = await fetch(
          "https://dltpt2zpu8.execute-api.eu-north-1.amazonaws.com/prod/get-all"
        );

        const data = await response.json();
        const sortedData = data.body.sort(
          (a: any, b: any) => Number(a.id) - Number(b.id)
        );

        // const combinedData = sortedData.map((house: any) => {
        //   const coords = houseCoordinates.find(
        //     (coord) => coord.numer === house.id
        //   );
        //   return {
        //     ...house,
        //     x: coords?.x || 0,
        //     y: coords?.y || 0,
        //   };
        // });
        setHouseOffers(sortedData);
      } catch (error) {
        alert("Błąd podczas pobierania danych");
        console.log("Błąd podczas pobierania danych: ", error);
      }
    };
    fetchHouseOffers();
  }, []);

  const isMobile = () => window.innerWidth <= 768;

  const scrollToOffer = (id: string) => {
    if (isMobile()) {
      scrollToOfferMobile(id);
    } else {
      scrollToOfferDesktop(id);
    }
  };

  const scrollToOfferDesktop = (id: string) => {
    const container = listRef.current;
    const targetElement = document.getElementById(id);

    if (container && targetElement) {
      const containerTop = container.getBoundingClientRect().top;
      const targetTop = targetElement.getBoundingClientRect().top;

      const offset = targetTop - containerTop + container.scrollTop;
      container.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const scrollToOfferMobile = (id: string) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <section
      id="houses"
      className="w-full flex flex-col items-center justify-between bg-gradient-to-b from-[#1d3557] to-[#a8dadc] relative scroll-mt-20"
    >
      <div className="flex items-center justify-center pt-10">
        <span
          className="h-[2px] w-16 bg-white mr-4 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
          data-aos="fade-right"
          data-aos-duration="800"
        ></span>

        <h1
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          DOMY
        </h1>

        <span
          className="h-[2px] w-16 bg-white ml-4 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
          data-aos="fade-left"
          data-aos-duration="800"
        ></span>
      </div>

      <div className="w-full px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start gap-10 md:h-auto">
        <div className="w-full md:w-[55%] flex justify-center md:justify-start items-start relative ">
          <div className="w-full relative">
            <Image
              src="/dron_nowy1.webp"
              alt="Estate"
              layout="responsive"
              objectFit="cover"
              className="rounded-lg drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
              width={600}
              height={400}
              data-aos="fade-down"
              unoptimized
              quality={100}
            />
            {houseOffers.map((house, index) => (
              <button
                key={index}
                onClick={() => scrollToOffer(`house-${house.numer}`)}
                className={`absolute flex justify-center items-center text-white ${
                  house.dostepnosc === 0
                    ? "bg-red-500/85"
                    : house.dostepnosc === 1
                    ? "bg-green-500/85"
                    : "bg-yellow-500/85"
                } rounded-full w-5 h-5 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-sm lg:text-base font-bold transition-all duration-200 cursor-pointer drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]`}
                style={{
                  top: `${house.y}%`,
                  left: `${house.x}%`,
                  transform: "translate(-50%, -50%)",
                }}
                data-aos="fade-down"
                data-aos-delay={`${200 + index * 100}`}
              >
                {house.numer}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={listRef}
          className="w-full md:w-[45%] flex justify-center items-start overflow-y-auto max-h-[50vh]"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full">
            {houseOffers.map((house, index) => (
              <div
                key={index}
                id={`house-${house.numer}`}
                className="flex flex-col justify-between bg-white p-4 rounded-lg shadow-md space-y-4 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <p className="text-[#344E41] text-xl font-semibold">
                    Dom nr {house.numer}
                  </p>
                  <p className="text-gray-600">
                    Status:{" "}
                    <span
                      className={`${
                        house.dostepnosc === 0
                          ? "text-red-500"
                          : house.dostepnosc === 1
                          ? "text-green-500"
                          : "text-yellow-500"
                      } font-semibold`}
                    >
                      {getStatusText(house.dostepnosc)}
                    </span>
                  </p>
                  <p className="text-gray-600">Metraż: {house.metraz} m²</p>
                  <p className="text-gray-600">Pokoje: {house.pokoje}</p>
                  <p className="text-gray-600">Ogródek: {house.ogrodek} ara</p>
                  <div className="relative">
                    <div className="text-gray-600 font-bold flex items-center flex-wrap space-x-1">
                      <span>Cena: {formatPrice(house.cenaDew)} zł </span>
                      <span className="text-sm text-gray-500">
                        (standard deweloperski)
                      </span>
                      <button
                        onClick={() => toggleOpen(`${index}-deweloperski`)}
                        className="p-1 rounded-full hover:bg-gray-200 transition"
                      >
                        <FaInfoCircle size={18} className="text-gray-500" />
                      </button>
                      {house.price_history &&
                        house.price_history.length > 0 && (
                          <button
                            onClick={() => toggleHistory(index)}
                            className="p-1 rounded-full hover:bg-gray-200 transition"
                          >
                            <FaClock size={18} className="text-gray-500" />
                          </button>
                        )}
                    </div>
                    {openIndex === `${index}-deweloperski` && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 
                        bg-white text-gray-700 text-sm shadow-lg rounded-lg p-3 
                        border w-max z-10"
                      >
                        Najniższa cena z ostatnich 30 dni:{" "}
                        {formatPrice(house.cenaDew30)} zł
                      </div>
                    )}
                    {historyIndex === index && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 
      bg-white text-gray-700 text-sm shadow-lg rounded-lg p-3 
      border w-max z-10 max-h-48 overflow-y-auto"
                      >
                        Historia cen:
                        <ul className="space-y-1 mt-2">
                          {house.price_history &&
                            house.price_history.map(
                              (
                                entry: {
                                  date: string | number | Date;
                                  cenaDew: number;
                                },
                                i: Key | null | undefined
                              ) => (
                                <li key={i} className="text-gray-700">
                                  {new Date(entry.date).toLocaleDateString(
                                    "pl-PL"
                                  )}{" "}
                                  –{" "}
                                  <span className="font-semibold">
                                    {formatPrice(entry.cenaDew)} zł
                                  </span>
                                </li>
                              )
                            )}
                        </ul>
                      </div>
                    )}
                    <p className="text-gray-600 font-bold">
                      Cena za metr:{" "}
                      {formatPrice(
                        Number(
                          Number(house.cenaDew) / Number(house.metraz)
                        ).toFixed(2)
                      )}{" "}
                      zł{" "}
                    </p>
                  </div>
                  {["1", "2", "5", "6"].includes(house.numer) && (
                    <div className="mt-3 relative">
                      <div className="text-gray-600 font-bold flex items-center flex-wrap space-x-1">
                        <span>
                          Cena: {formatPrice(house.cenaZam ?? "")} zł{" "}
                        </span>
                        <span className="text-sm text-gray-500">
                          (stan surowy zamknięty)
                        </span>
                        <button
                          onClick={() => toggleOpen(`${index}-surowy`)}
                          className="p-1 rounded-full hover:bg-gray-200 transition"
                        >
                          <FaInfoCircle size={18} className="text-gray-500" />
                        </button>
                        {house.price_history_zam &&
                          house.price_history_zam.length > 0 && (
                            <button
                              onClick={() => toggleHistoryZam(index)}
                              className="p-1 rounded-full hover:bg-gray-200 transition"
                            >
                              <FaClock size={18} className="text-gray-500" />
                            </button>
                          )}
                      </div>
                      {openIndex === `${index}-surowy` && (
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 
                        bg-white text-gray-700 text-sm shadow-lg rounded-lg p-3 
                        border w-max z-10"
                        >
                          Najniższa cena z ostatnich 30 dni:{" "}
                          {formatPrice(house.cenaZam30 ?? "")} zł
                        </div>
                      )}
                      {historyZamIndex === index && (
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 
      bg-white text-gray-700 text-sm shadow-lg rounded-lg p-3 
      border w-max z-10 max-h-48 overflow-y-auto"
                        >
                          Historia cen:
                          <ul className="space-y-1 mt-2">
                            {house.price_history_zam &&
                              house.price_history_zam.map(
                                (
                                  entry: {
                                    date: string | number | Date;
                                    cenaZam: number;
                                  },
                                  i: Key | null | undefined
                                ) => (
                                  <li key={i} className="text-gray-700">
                                    {new Date(entry.date).toLocaleDateString(
                                      "pl-PL"
                                    )}{" "}
                                    –{" "}
                                    <span className="font-semibold">
                                      {formatPrice(entry.cenaZam)} zł
                                    </span>
                                  </li>
                                )
                              )}
                          </ul>
                        </div>
                      )}
                      <p className="text-gray-600 font-bold">
                        Cena za metr:{" "}
                        {formatPrice(
                          Number(
                            Number(house.cenaZam) / Number(house.metraz)
                          ).toFixed(2)
                        )}{" "}
                        zł{" "}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <a
                    className="w-full bg-[#457b9d] p-4 rounded-xl text-white flex justify-center items-center gap-2 hover:bg-[#1d3557] transition-all duration-200 "
                    href={`/kartyMieszkan/${house.numer}.jpg`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaDownload className="w-5 h-5 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]" />
                    <span className="text-base drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
                      Szczegóły oferty
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
