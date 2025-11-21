"use client";

import Image from "next/image";

const AutoservisDiagnostikaSection = () => {
  return (
    <section className="bg-zinc-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 grid gap-16 lg:grid-cols-2 items-center bg-deev">

        {/* IMAGE STRIPS SIDE */}
        <div className="relative lg:order-1 order-2 flex items-center justify-center">

          {/* Wrapper for offset layout */}
          <div className="flex gap-8 *:border *:border-yellow-400">
            {/* LEFT STRIP – slightly higher */}
            <div className="relative  mb-10"> 
              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                <div className="w-[170px] sm:w-[200px] md:w-[220px] aspect-[9/16]">
                  <Image
                    src="/images/autoservis/car_strip1.png"
                    alt="Diagnostika vozidla"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT STRIP – slightly lower */}
            <div className="relative  mt-10">
              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                <div className="w-[170px] sm:w-[200px] md:w-[220px] aspect-[9/16]">
                  <Image
                    src="/images/autoservis/car_strip2.png"
                    alt="Diagnostika a elektroinštalácie"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* TEXT SIDE */}
        <div className="space-y-5 lg:order-2 order-1">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-yellow-400 uppercase">
            Diagnostika & elektroinštalácie
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-primary text-white leading-tight">
            Keď sa rozsvieti kontrolka, nejdeme&nbsp;naslepo
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Moderné autá sú plné riadiacich jednotiek a senzorov. Namiesto
            výmeny dielov „skúšame“ problém najskôr zistiť diagnostikou – aby
            ste neplatili za zbytočné opravy.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 text-sm">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400">
                Diagnostika
              </p>
              <ul className="mt-1.5 space-y-1 text-gray-200">
                <li>• diagnostika palubových počítačov</li>
                <li>• čítanie a mazanie chybových kódov</li>
                <li>• sledovanie živých dát a test komponentov</li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400">
                Elektro & svetlá
              </p>
              <ul className="mt-1.5 space-y-1 text-gray-200">
                <li>• oprava elektroinštalácie</li>
                <li>• denné osvetlenie</li>
                <li>• nastavenie svetiel</li>
              </ul>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default AutoservisDiagnostikaSection;
