"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen text-gray-100 overflow-hidden flex items-center">
      {/* Background image */}
      <div className="absolute top-20 bottom-2 right-0 left-0 -z-10">
        <Image
          src="/images/carBanner.png"
          alt="Car Banner"
          fill
          priority
          className="object-contain object-right"
        />
      </div>

      {/* Gradients */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/10 to-black" />
      {/* Čierny overlay len ak je šírka menšia ako 1300px */}
      <div className="absolute inset-0 bg-black/80 hidden max-[1300px]:block -z-10" />

      {/* Content wrapper */}
      <div className="relative px-6 sm:px-10 lg:px-16 lg:ml-16 max-w-7xl w-full">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-primary leading-tight">
            Profesionálny autoservis pre vaše vozidlo
          </h1>

          <p className="mt-4 text-gray-300 max-w-lg">
            Kompletné opravy áut, pravidelná údržba a diagnostika. Spoľahlivé riešenia pre bezpečnú jazdu a dlhú životnosť vášho vozidla.
          </p>

          {/* CTA button */}
          <div className="mt-8 flex flex-wrap">
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) {
                  const yOffset = -80; // výška navbaru v px
                  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="px-6 py-3 border-2 border-yellow-400 text-gray-200 font-semibold rounded-lg hover:bg-yellow-500/50 transition"
            >
              Objednať servis
            </button>
          </div>

          {/* Badges */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-400">
            <p>Autoservis</p>
            <p>Pneuservis</p>
            <p>Dezinfekcia ozónom O3</p>
          </div>
        </div>
      </div>
    </section>
  );
}
