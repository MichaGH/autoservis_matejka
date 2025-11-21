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
        <div className="max-w-xl sm:max-w-2xl space-y-6">
          {/* Overline */}
          
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-primary leading-tight text-white">
            Profesionálny servis pre vaše vozidlo
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
            Kompletné opravy, pravidelná údržba, diagnostika a pneuservis.
            Spoľahlivé riešenia pre bezpečnú jazdu a dlhú životnosť vášho auta
            aj motocyklu.
          </p>

          {/* CTA buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#contactSection"
              className="inline-flex items-center justify-center rounded-lg bg-yellow-400 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-500 transition"
            >
              Objednať servis
            </a>

            <a
              href="/autoservis"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-600 px-6 py-3 text-sm font-medium text-gray-100 hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              Viac o službách
            </a>
          </div>

          {/* Badges */}
          <div className="pt-2 flex flex-wrap gap-3 text-xs sm:text-sm">
            {["Autoservis", "Pneuservis", "Dezinfekcia ozónom O₃"].map(
              (label) => (
                <span
                  key={label}
                  className="rounded-full border border-zinc-700/80 bg-black/60 px-4 py-1.5 text-gray-200 uppercase tracking-[0.12em] text-[10px] sm:text-[11px]"
                >
                  {label}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
