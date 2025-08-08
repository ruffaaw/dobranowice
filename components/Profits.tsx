import {
  FaMapPin,
  FaTree,
  FaCouch,
  FaHeart,
  FaSolarPanel,
  FaLock,
} from "react-icons/fa";
import { FaTemperatureHalf, FaHouseChimneyWindow } from "react-icons/fa6";
export default function Profits() {
  const profitItems = [
    {
      icon: <FaMapPin className="text-[#e63946] text-5xl " />,
      title: "Blisko Krakowa i pełnej infrastruktury miejskiej",
      description:
        "Dogodna lokalizacja w pobliżu Krakowa i kluczowych miejsc, z łatwym dostępem do autostrady.",
      delay: 0,
    },
    {
      icon: <FaTree className="text-[#e63946] text-5xl" />,
      title: "Spokój i natura z dala od miejskiego zgiełku",
      description: "Zielona okolica łącząca ciszę i wygodę.",
      delay: 100,
    },
    {
      icon: <FaCouch className="text-[#e63946] text-5xl" />,
      title: "Przestronne wnętrza i nowoczesne rozwiązania architektoniczne",
      description: "Domy z przestronnymi pokojami i funkcjonalnym układem.",
      delay: 200,
    },
    {
      icon: <FaHeart className="text-[#e63946] text-5xl " />,
      title: "Prywatne, ogrodzone działki",
      description: "Działki zapewniające prywatność i przestrzeń do relaksu.",
      delay: 300,
    },
    {
      icon: <FaSolarPanel className="text-[#e63946] text-5xl" />,

      title: "Pompa ciepła, rekuperacja, przygotowanie pod fotowoltaikę",
      description: "Energooszczędne technologie redukujące koszty.",
      delay: 400,
    },
    {
      icon: <FaTemperatureHalf className="text-[#e63946] text-5xl" />,
      title: "Wysoka izolacja termiczna",
      description:
        "Ściany o wyjątkowej izolacji, gwarantujące oszczędność energii.",
      delay: 500,
    },
    {
      icon: <FaLock className="text-[#e63946] text-5xl" />,
      title: "Zamknięty teren",
      description: "Ogrodzona przestrzeń z przesuwaną bramą wjazdową i furtką.",
      delay: 600,
    },
    {
      icon: <FaHouseChimneyWindow className="text-[#e63946] text-5xl" />,

      title: "Elektryczne rolety",
      description:
        "Rolety podtynkowe sterowane elektrycznie dla większego bezpieczeństwa i wygody.",
      delay: 700,
    },
  ];
  return (
    <section
      id="profits"
      className="w-full h-full flex flex-col items-center bg-gradient-to-b from-[#a8dadc] to-[#1d3557] relative scroll-mt-20"
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
          PROFITY
        </h1>

        <span
          className="h-[2px] w-16 bg-[#1d3557] ml-4 "
          data-aos="fade-left"
          data-aos-duration="800"
        ></span>
      </div>

      <div className="flex w-full h-full flex-col p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profitItems.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col text-[#1d3557] justify-center items-center px-4 space-y-3 max-md:pt-5"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="max-md:h-full h-20 flex justify-center items-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
                {item.icon}
              </div>
              <div className="max-md:h-full h-12 lg:h-24 xl:h-16 flex justify-center items-center ">
                <p className="font-bold text-lg xl:text-xl text-center text-[#f1faee] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
                  {item.title}
                </p>
              </div>
              <div className="max-md:h-full h-16 lg:h-28 xl:h-24 flex justify-center items-center text-[#f1faee]">
                <p className=" text-base xl:text-lg text-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
