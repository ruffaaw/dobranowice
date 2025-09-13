import {
  FaShoppingCart,
  FaGraduationCap,
  FaBus,
  FaTheaterMasks,
  FaHospital,
  FaLeaf,
} from "react-icons/fa";
export default function Profits() {
  const profitItems = [
    {
      icon: <FaShoppingCart className="text-[#e63946] text-5xl" />,
      title: "Zakupy",
      description: (
        <span>
          Codzienne zakupy zrobisz wygodnie w&nbsp;pobliskiej Wieliczce –
          supermarkety, sklepy osiedlowe i&nbsp;lokalne punkty usługowe.
          W&nbsp;samej miejscowości dostępne są także mniejsze sklepy spożywcze.
        </span>
      ),
      delay: 0,
    },
    {
      icon: <FaGraduationCap className="text-[#e63946] text-5xl" />,
      title: "Edukacja",
      description: (
        <span>
          W Dobranowicach i&nbsp;okolicy działają przedszkola i&nbsp;szkoły
          podstawowe. W&nbsp;Wieliczce znajdziesz szkoły średnie i&nbsp;prywatne
          placówki edukacyjne – szybki dojazd ułatwia codzienną organizację.
        </span>
      ),
      delay: 100,
    },
    {
      icon: <FaBus className="text-[#e63946] text-5xl" />,
      title: "Transport",
      description: (
        <span>
          Dogodny dojazd do Wieliczki i&nbsp;Krakowa – kilka minut do autostrady
          A4 i&nbsp;DK94. W&nbsp;pobliżu kursują także linie autobusowe, które
          ułatwiają komunikację.
        </span>
      ),
      delay: 200,
    },
    {
      icon: <FaTheaterMasks className="text-[#e63946] text-5xl" />,
      title: "Rozrywka",
      description: (
        <span>
          Kraków i&nbsp;Wieliczka oferują kina, teatry, restauracje
          i&nbsp;atrakcje turystyczne, takie jak Kopalnia Soli czy Tężnia
          Solankowa – idealne na czas wolny.
        </span>
      ),
      delay: 300,
    },
    {
      icon: <FaHospital className="text-[#e63946] text-5xl" />,
      title: "Usługi",
      description: (
        <span>
          W&nbsp;Wieliczce znajdziesz przychodnie, apteki, banki i&nbsp;inne
          punkty usługowe – codzienne sprawy załatwisz szybko i&nbsp;wygodnie.
        </span>
      ),
      delay: 400,
    },
    {
      icon: <FaLeaf className="text-[#e63946] text-5xl" />,
      title: "Rekreacja",
      description: (
        <span>
          Dobranowice to spokojna, zielona okolica z&nbsp;trasami spacerowymi
          i&nbsp;rowerowymi. Własny ogród i&nbsp;taras to dodatkowa przestrzeń
          do relaksu.
        </span>
      ),
      delay: 500,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
