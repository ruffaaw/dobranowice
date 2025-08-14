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
        className={`flex justify-center items-center w-full h-screen flex-col relative z-20 ${
          !imageLoaded ? "invisible" : ""
        }`}
      >
        <Image
          src="/dron_z _cienia.jpg"
          alt="Nowoczesne osiedle mieszkaniowe Pułaskiego 32 w Wieliczce"
          fill
          quality={100}
          unoptimized
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          onLoad={() => {
            setTimeout(() => setImageLoaded(true), 300);
          }}
        />
        {imageLoaded && (
          <>
            <p
              className="text-3xl md:text-5xl text-white font-bold mb-6 text-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              TWÓJ WYMARZONY DOM
            </p>
            <p
              className="text-3xl md:text-5xl text-white font-bold text-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="1000"
            >
              W IDEALNEJ LOKALIZACJI.
            </p>
            <div className="flex max-md:flex-col max-md:space-y-5 max-md:w-full max-md:items-center md:space-x-10 mt-8">
              <Link
                className="py-3 w-56 max-md:w-3/5 bg-[#457b9d] text-white rounded-2xl hover:bg-[#1d3557] hover:text-white font-semibold transition break-words max-w-full text-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
                href="#houses"
                data-aos="zoom-in"
                data-aos-delay="900"
                data-aos-duration="1000"
              >
                Zobacz ofertę
              </Link>
              <Link
                className="py-3 w-56 max-md:w-3/5 bg-[#457b9d] text-white rounded-2xl hover:bg-[#1d3557] hover:text-white font-semibold transition break-words max-w-full text-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
                href="#contact"
                data-aos="zoom-in"
                data-aos-delay="1100"
                data-aos-duration="1000"
              >
                Skontaktuj się
              </Link>
            </div>
          </>
        )}
      </section>
    </>
  );
}
