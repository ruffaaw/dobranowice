"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Gallery() {
  const galleryImages = [
    "/0001.png",
    "/0002.png",
    "/0003.png",
    "/dobranowice_dron.jpg",
    "/dobranowice_zmierzch_2.png",
    "/dobranowice_zmierzch.png",
    "/dron_z _cienia.jpg",
  ];

  return (
    <section
      id="gallery"
      className="w-full h-full flex flex-col items-center bg-gradient-to-b from-[#a8dadc] to-[#f1faee] relative scroll-mt-28 pt-10"
    >
      <div className="flex items-center justify-center pt-10">
        <span
          className="h-[2px] w-16 bg-[#1d3557] mr-4 "
          data-aos="fade-right"
          data-aos-duration="800"
        ></span>

        <h1
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#1d3557] "
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          GALERIA
        </h1>

        <span
          className="h-[2px] w-16 bg-[#1d3557] ml-4 "
          data-aos="fade-left"
          data-aos-duration="800"
        ></span>
      </div>
      <div
        className="w-full lg:w-7/12 rounded-lg py-10"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full"
        >
          {galleryImages.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center rounded-lg">
              <Image
                src={src}
                alt={`Galeria ${index + 1}`}
                width={1200}
                height={500}
                className="rounded-lg shadow-lg object-cover"
                unoptimized
                quality={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
