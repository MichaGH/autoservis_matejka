"use client";

import { FaVirus, FaLeaf, FaBiohazard } from "react-icons/fa";

const ACServiceSection = () => {
  const benefits = [
    {
      icon: FaVirus,
      title: "Sterilizácia",
      description: "Ozón likviduje baktérie, plesne, vírusy aj odolné spóry.",
    },
    {
      icon: FaLeaf,
      title: "Šetrné riešenie",
      description:
        "Bez chemického zápachu, ozón je prirodzenou súčasťou atmosféry.",
    },
    {
      icon: FaBiohazard,
      title: "Ozón O₃",
      description:
        "Overená metóda zo zdravotníctva na dezinfekciu a sterilizáciu prostredia.",
    },
  ];

  return (
    <section className="bg-zinc-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-yellow-400 uppercase">
            Klimatizácia & dezinfekcia
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-primary text-white">
            Servis a čistenie klimatizácií ozónom O₃
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300">
            Čistenie ozónom O₃ je účinnejšie než bežné spreje. Ozón sterilizuje
            a dezinfikuje celý vzduchový okruh – ničí choroboplodné zárodky,
            plesne aj pachy, bez zanechania chemických zvyškov.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="h-full rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 p-6 text-center shadow-[0_0_30px_rgba(0,0,0,0.6)]"
            >
              <div className="mb-3 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 border border-yellow-400/60">
                  <Icon className="text-yellow-400 text-2xl" />
                </div>
              </div>
              <p className="text-base font-semibold text-gray-100">{title}</p>
              <p className="mt-2 text-sm text-gray-300">{description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs sm:text-[13px] text-gray-400 text-center">
          Odporúčame čistenie klimatizácie minimálne 1× ročne alebo pri
          nepríjemnom zápachu po zapnutí klimatizácie.
        </p>
      </div>
    </section>
  );
};

export default ACServiceSection;
