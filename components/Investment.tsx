"use client";
import Image from "next/image";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function Investment() {
  const [isDay, setIsDay] = useState(true);

  const toggleImage = () => {
    setIsDay(!isDay);
  };

  return (
    <section
      id="investment"
      className="w-full h-full flex flex-col items-center bg-gradient-to-b from-[#f1faee] to-[#a8dadc] relative scroll-mt-20 overflow-hidden"
    >
      <div className="flex items-center justify-center pt-10">
        <span
          className="h-[2px] w-16 bg-[#1d3557] mr-4"
          data-aos="fade-right"
          data-aos-duration="800"
        ></span>

        <h1
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#1d3557]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          O INWESTYCJI
        </h1>

        <span
          className="h-[2px] w-16 bg-[#1d3557] ml-4"
          data-aos="fade-left"
          data-aos-duration="800"
        ></span>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center pt-4 p-2 sm:px-10 gap-2 relative max-w-[1722px] overflow-hidden w-full">
        <div className="lg:hidden relative w-full mx-auto" data-aos="fade-left">
          <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/0001.webp"
              alt="Modern houses - day"
              fill
              className={`rounded-lg shadow-lg transition-opacity duration-700 ease-in-out ${
                isDay ? "opacity-100" : "opacity-0"
              }`}
              style={{ objectFit: "cover" }}
              unoptimized
              loading="lazy"
            />

            <Image
              src="/dobranowice_zmierzch.webp"
              alt="Modern houses - night"
              fill
              className={`rounded-lg shadow-lg transition-opacity duration-700 ease-in-out ${
                !isDay ? "opacity-100" : "opacity-0"
              }`}
              style={{ objectFit: "cover" }}
              unoptimized
              loading="lazy"
            />
          </div>

          <button
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-28 h-auto bg-opacity-75 text-white px-4 py-2 rounded-md ${
              isDay ? "bg-[#457b9d]" : "bg-[#1d3557]"
            } transition-all duration-300 flex flex-row items-center justify-center gap-2`}
            onClick={toggleImage}
          >
            {isDay ? <FaSun /> : <FaMoon />}
            {isDay ? "Dzień" : "Wieczór"}
          </button>
        </div>

        <div className="bg-[#457b9d] rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full lg:w-4/5 lg:p-10">
          <div className="p-6 sm:p-8 lg:w-3/5 text-white" data-aos="fade-right">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Komfort i prywatność każdego dnia
            </h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Osiedle w Dobranowicach to kameralny kompleks domów
              jednorodzinnych, zaprojektowanych z myślą o wygodzie, prywatności
              i bezpieczeństwie mieszkańców. Każdy budynek posiada własny ogród,
              miejsce postojowe i dostęp do drogi wewnętrznej wykonanej z kostki
              brukowej. Ogrodzenie panelowe z bramą przesuwną zapewnia poczucie
              prywatności, a nowoczesna architektura łączy funkcjonalność z
              elegancką formą.
            </p>
          </div>
        </div>
        <div
          className="max-lg:hidden relative md:absolute md:w-2/5 max-w-[551px] max-h-[413px] md:-right-0 lg:mr-12 flex justify-center items-center -mt-20 md:mt-0"
          data-aos="fade-left"
        >
          <Image
            src="/0001.webp"
            alt="Modern houses - day"
            layout="responsive"
            objectFit="cover"
            className={`rounded-lg shadow-lg absolute transition-opacity duration-700 ease-in-out ${
              isDay ? "opacity-100" : "opacity-0"
            }`}
            width={533}
            height={400}
            unoptimized
          />
          <Image
            src="/dobranowice_zmierzch.webp"
            alt="Modern houses - night"
            layout="responsive"
            objectFit="cover"
            className={`rounded-lg shadow-lg absolute transition-opacity duration-700 ease-in-out ${
              !isDay ? "opacity-100" : "opacity-0"
            }`}
            width={533}
            height={400}
            unoptimized
          />
          <button
            className={`absolute top-18 xl:top-24 w-1/3 h-auto bg-opacity-75 text-white px-4 py-2 rounded-md ${
              isDay ? "bg-[#457b9d]" : "bg-[#1d3557]"
            } transition-all duration-300 flex flex-row items-center justify-center gap-2`}
            onClick={toggleImage}
          >
            {isDay ? <FaSun /> : <FaMoon />}
            {isDay ? "Dzień" : "Wieczór"}
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center p-2 sm:px-10 gap-2 relative max-w-[1722px] w-full">
        <div
          className="max-lg:hidden relative md:absolute md:w-2/5 max-w-[551px] max-h-[413px] md:-left-0 lg:ml-12 flex justify-center items-center -mt-20 md:mt-0"
          data-aos="fade-right"
        >
          <Image
            src="/0002.webp"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            width={533}
            height={400}
            unoptimized
            loading="lazy"
          />
        </div>

        <div
          className="lg:hidden relative flex justify-center items-center overflow-hidden"
          data-aos="fade-right"
        >
          <Image
            src="/0002.webp"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            width={533}
            height={400}
            unoptimized
            loading="lazy"
          />
        </div>

        <div className="bg-[#457b9d] rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full lg:w-4/5 justify-start lg:justify-end lg:p-10">
          <div className="p-6 sm:p-8 lg:w-3/5 text-white" data-aos="fade-left">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ">
              Ekologia w standardzie
            </h2>
            <p className="text-base sm:text-lg">
              Domy w Dobranowicach powstają w oparciu o wysokie standardy
              izolacji termicznej i ekologiczne technologie.
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg space-y-2">
              <li>
                Ogrzewanie podłogowe w całym budynku zasilane pompą ciepła
              </li>
              <li>Okna trzyszybowe o doskonałych parametrach izolacyjnych</li>
              <li>Hydroizolacje fundamentów i balkonów</li>
              <li>
                Gruba warstwa ocieplenia ścian (20 cm styropian EPS) i dachu
                (piana Icynene)
              </li>
              <li>Możliwość podłączenia światłowodu</li>
            </ul>
            <p className="text-base sm:text-lg">
              Dzięki temu domy są energooszczędne, ciepłe zimą i przyjemnie
              chłodne latem, co przekłada się na niższe koszty utrzymania i
              komfort codziennego życia.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center p-2 sm:px-10 gap-2 relative max-w-[1722px]">
        <div
          className="max-lg:hidden relative md:absolute md:w-2/5 max-w-[551px] max-h-[413px] md:-right-0 lg:mr-12 flex justify-center items-center -mt-20 md:mt-0"
          data-aos="fade-left"
        >
          <Image
            src="/0003.webp"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            width={533}
            height={400}
            unoptimized
            loading="lazy"
          />
        </div>
        <div
          className="lg:hidden relative flex justify-center items-center overflow-hidden"
          data-aos="fade-left"
        >
          <Image
            src="/0003.webp"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            width={533}
            height={400}
            unoptimized
            loading="lazy"
          />
        </div>
        <div className="bg-[#457b9d] rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full lg:w-4/5 lg:p-10">
          <div className="p-6 sm:p-8 lg:w-3/5 text-white" data-aos="fade-right">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Funkcjonalna przestrzeń dla całej rodziny
            </h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Każdy dom charakteryzuje się przemyślanym układem pomieszczeń,
              dużymi przeszkleniami i wygodnym wyjściem do własnego ogrodu.
              Jasne, dobrze doświetlone wnętrza sprzyjają zarówno relaksowi, jak
              i pracy zdalnej. Zastosowane materiały – m.in. stolarka WIŚNIOWSKI
              czy bramy Uni Therm – gwarantują trwałość, estetykę i komfort.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center p-2 sm:px-10 gap-2 relative max-w-[1722px] w-full">
        <div
          className="max-lg:hidden relative md:absolute md:w-2/5 max-w-[551px] max-h-[413px] md:-left-0 lg:ml-12 flex justify-center items-center -mt-20 md:mt-0"
          data-aos="fade-right"
        >
          <Image
            src="/dobranowice_zmierzch_2.webp"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            width={533}
            height={400}
            unoptimized
            loading="lazy"
          />
        </div>

        <div
          className="lg:hidden relative flex justify-center items-center overflow-hidden"
          data-aos="fade-right"
        >
          <Image
            src="/dobranowice_zmierzch_2.webp"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            width={533}
            height={400}
            unoptimized
            loading="lazy"
          />
        </div>
        <div className="bg-[#457b9d] rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full lg:w-4/5 justify-end lg:p-10">
          <div className="p-6 sm:p-8 lg:w-3/5 text-white" data-aos="fade-left">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ">
              Lokalizacja, która daje więcej
            </h2>
            <p className="text-base sm:text-lg">
              Dobranowice to spokojna miejscowość położona tuż obok Wieliczki, z
              szybkim dojazdem do Krakowa. Mieszkańcy mają dostęp do:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg space-y-2 mb-4">
              <li>Sklepy i punkty usługowe w pobliskiej Wieliczce</li>
              <li>Szkoły i przedszkola w okolicy</li>
              <li>Tereny zielone i trasy spacerowe</li>
              <li>Atrakcje kulturalne w Krakowie i Wieliczce</li>
            </ul>
            <p className="text-base sm:text-lg">
              Dobranowice to spokojna miejscowość z szybkim dojazdem do Krakowa
              – idealne miejsce, które łączy bliskość miasta ze spokojem natury.
            </p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-[#1d3557] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-[#e63946] transition font-semibold cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/KssHA4FVSg5khjQi8",
                    "_blank"
                  )
                }
              >
                Zobacz na mapie
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center p-2 sm:px-10 gap-2 relative max-w-[1722px] w-full">
        <div
          className="max-lg:hidden relative md:absolute md:w-2/5 max-w-[551px] max-h-[413px] md:-right-0 lg:mr-12 flex justify-center items-center -mt-20 md:mt-0"
          data-aos="fade-left"
        >
          <Image
            src="/dron_nowy2.webp"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            width={533}
            height={400}
            unoptimized
            loading="lazy"
          />
        </div>
        <div
          className="lg:hidden relative flex justify-center items-center overflow-hidden"
          data-aos="fade-left"
        >
          <Image
            src="/dron_nowy2.webp"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            width={533}
            height={400}
            unoptimized
            loading="lazy"
          />
        </div>
        <div className="bg-[#457b9d] rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full lg:w-4/5 lg:p-10">
          <div className="p-6 sm:p-8 lg:w-3/5 text-white" data-aos="fade-right">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Idealne miejsce dla Ciebie
            </h2>
            <ul className="list-disc list-inside text-base sm:text-lg space-y-2 mb-4">
              <li>Spokojna, zielona okolica w sąsiedztwie Wieliczki,</li>
              <li>Nowoczesne technologie i wysoki standard wykonania,</li>
              <li>Ogrzewanie podłogowe i pompy ciepła w standardzie,</li>
              <li>Przestronne wnętrza z prywatnym ogrodem.</li>
            </ul>
            <p className="text-base sm:text-lg">
              <strong>Osiedle Dobranowice</strong> – dom, w którym znajdziesz
              spokój, przestrzeń i wygodę, nie rezygnując z bliskości miasta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
