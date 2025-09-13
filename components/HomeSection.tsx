"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomeSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!imageLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [imageLoaded]);

  return (
    <>
      {!imageLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#1d3557] z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white"></div>
        </div>
      )}
      <section
        id="home"
        className={`relative w-full h-screen flex items-center justify-center ${
          !imageLoaded ? "invisible" : ""
        }`}
      >
        <Image
          src="/dron_nowy2.webp"
          alt="Zdjęcie w tle Domy Dobranowice"
          fill
          quality={100}
          unoptimized
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          onLoad={() => {
            setTimeout(() => setImageLoaded(true), 300);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/70 via-black/40 via-20% to-transparent z-10" />

        {imageLoaded && (
          <div
            className="absolute max-sm:bottom-10 sm:top-1/2 sm:left-12 lg:left-24 z-20 w-full sm:max-w-xl text-center sm:text-left sm:transform sm:-translate-y-1/2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1
              className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-snug drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Nowoczesne osiedle domów <br /> w sąsiedztwie Wieliczki <br />
              <span className="text-[#457b9d]">Twój azyl spokoju</span> blisko
              miasta.
            </h1>

            <div
              className="mt-6 flex flex-col sm:flex-row gap-4 items-center sm:items-start"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link
                href="#houses"
                className="bg-[#1d3557] text-white text-lg sm:text-xl lg:text-2xl px-6 py-3 rounded-lg font-semibold shadow-lg transition hover:bg-[#e63946] w-fit"
              >
                Zobacz ofertę
              </Link>
              <Link
                href="#contact"
                className="bg-white text-[#1d3557] text-lg sm:text-xl lg:text-2xl px-6 py-3 rounded-lg font-semibold shadow-lg transition hover:bg-[#457b9d] hover:text-[white] w-fit"
              >
                Skontaktuj się
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
