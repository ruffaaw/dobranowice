"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else if (scrollPosition === 0) {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 ${
        isScrolled ? "bg-[#1d3557]" : "bg-transparent"
      }  transition-colors duration-300`}
    >
      <div
        className={`md:px-8 py-4 flex justify-between items-center w-full ${
          isMenuOpen ? "bg-[#1d3557]" : ""
        }`}
      >
        <div
          className="flex items-center pl-4"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <Link
            href="#home"
            className="font-bold text-3xl text-white drop-shadow-[2px_4px_4px_rgba(0,0,0,0.5)] text-center hover:scale-125"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Domy Dobranowice
            {/* <img
              src="favicon.ico"
              alt="Logo"
              className="h-16 w-60 mr-2 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] object-contain"
            /> */}
          </Link>
        </div>

        <nav
          className="hidden md:flex justify-center space-x-7 lg:space-x-14 md:text-lg lg:text-xl w-dvw items-center"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <Link
            href="#investment"
            className="block text-white hover:text-[#a8dadc] font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
          >
            O INWESTYCJI
          </Link>
          <Link
            href="#profits"
            className="block text-white hover:text-[#a8dadc] font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
          >
            PROFITY
          </Link>
          <Link
            href="#houses"
            className="block text-white hover:text-[#a8dadc] font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
          >
            DOMY
          </Link>
          <Link
            href="#gallery"
            className="block text-white hover:text-[#a8dadc] font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
          >
            GALERIA
          </Link>
        </nav>
        <div
          className="w-1/6 flex justify-end"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <nav
            className={`max-md:hidden md:text-lg lg:text-xl bg-[#457b9d] p-3  rounded-2xl w-40 text-center hover:bg-[#e63946] ${
              isScrolled ? "bg-[#1d3557]" : ""
            }`}
          >
            <Link
              href="#contact"
              className={
                "block text-white w-full font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
              }
            >
              KONTAKT
            </Link>
          </nav>
        </div>

        <button
          className="md:hidden flex items-center text-white pr-4 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed flex flex-col items-center top-24 bg-[#1d3557]  shadow-md z-30 w-screen h-auto">
          <Link
            href="#investment"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-[#457b9d] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">O inwestycji</p>
          </Link>
          <Link
            href="#profits"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-[#457b9d] break-words max-w-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Profity</p>
          </Link>
          <Link
            href="#houses"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-[#457b9d] break-words max-w-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Domy</p>
          </Link>
          <Link
            href="#gallery"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-[#457b9d] break-words max-w-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Galeria</p>
          </Link>
          <Link
            href="#contact"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-[#457b9d] break-words max-w-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Kontakt</p>
          </Link>
        </div>
      )}
    </header>
  );
}
