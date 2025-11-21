"use client";

import Image from "next/image";

const AutoservisKaroseriaSection = () => {
  return (
    <section className="bg-zinc-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 grid gap-16 lg:grid-cols-2 items-center">
        {/* TEXT SIDE */}
        <div className="space-y-5">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-yellow-400 uppercase">
            Karoséria & lakovanie
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-primary text-white leading-tight">
            Karoséria, lak & ochrana proti&nbsp;korózii
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Či ide o drobnú „ťukesku“ na parkovisku, väčšie poškodenie po nehode
            alebo ochranu podvozku pred soľou a koróziou – riešime vzhľad aj
            životnosť karosérie na jednom mieste.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 text-sm">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400">
                Karoséria & lak
              </p>
              <ul className="mt-1.5 space-y-1 text-gray-200">
                <li>• oprava karosérie po menších aj väčších poškodeniach</li>
                <li>• lokálne aj väčšie lakýrnické práce</li>
                <li>• korekcia laku a oprava škrabancov</li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400">
                Ochrana & sklá
              </p>
              <ul className="mt-1.5 space-y-1 text-gray-200">
                <li>• striekanie podvozkov a dutín automobilov</li>
                <li>• výmena čelných skiel</li>
              </ul>
            </div>
          </div>

   
        </div>

        {/* IMAGE SIDE */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-[0_0_40px_rgba(0,0,0,0.7)]">
            <div className="aspect-[4/3]">
              <Image
                src="/images/autoservis/cars1.png" // 👈 nahraď za reálnu fotku
                alt="Karosárske a lakýrnické práce"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoservisKaroseriaSection;
