"use client";

import {
  FaCar,
  FaTools,
  FaSnowflake,
  FaOilCan,
  FaCarBattery,
  FaCarSide,
  FaWrench,
  FaSprayCan,
  FaBolt,
  FaRegLightbulb,
  FaCog,
} from "react-icons/fa";
import { useState } from "react";

const services = [
  { icon: <FaCar />, title: "Bežná údržba motorových vozidiel", cat: "udrzba" },
  { icon: <FaOilCan />, title: "Výmena olejov a kvapalín", cat: "udrzba" },
  { icon: <FaRegLightbulb />, title: "Denné osvetlenie", cat: "elektrika" },
  { icon: <FaBolt />, title: "Oprava elektroinštalácie", cat: "elektrika" },
  { icon: <FaCarBattery />, title: "Diagnostika palubných počítačov", cat: "diagnostika" },
  { icon: <FaTools />, title: "Výmena čelných skiel", cat: "karoseria" },
  { icon: <FaCarSide />, title: "Oprava karosérie", cat: "karoseria" },
  { icon: <FaSprayCan />, title: "Lakýrnické práce", cat: "karoseria" },
  { icon: <FaSnowflake />, title: "Oprava klimatizácie", cat: "klima" },
  { icon: <FaSnowflake />, title: "Čistenie klimatizácie", cat: "klima" },
  { icon: <FaTools />, title: "Montáž ťažných zariadení GALIA", cat: "montaze" },
  { icon: <FaCarSide />, title: "Montáž autodoplnkov", cat: "montaze" },
  { icon: <FaWrench />, title: "Pravidelné prehliadky automobilov", cat: "udrzba" },
  { icon: <FaTools />, title: "Predaj náhradných dielov", cat: "ostatne" },
  { icon: <FaBolt />, title: "Nastavenie svetiel", cat: "elektrika" },
  { icon: <FaWrench />, title: "Oprava podvozkov", cat: "opravy" },
  { icon: <FaCog />, title: "Oprava motorov", cat: "opravy" },
  { icon: <FaCar />, title: "Oprava bŕzd", cat: "opravy" },
  { icon: <FaRegLightbulb />, title: "Príprava vozidiel na STK a EK", cat: "ostatne" },
];

const categories = [
  { id: "udrzba", label: "Údržba" },
  { id: "opravy", label: "Opravy" },
  { id: "elektrika", label: "Elektrika" },
  { id: "diagnostika", label: "Diagnostika" },
  { id: "karoseria", label: "Karoséria & Lak" },
  { id: "klima", label: "Klimatizácia" },
  { id: "montaze", label: "Montáže" },
  { id: "ostatne", label: "Ostatné" },
];

export default function ServicesList() {
  const [activeTab, setActiveTab] = useState("udrzba");

  const filtered = services.filter((s) => s.cat === activeTab);

  return (
    <section className="w-full py-24  text-gray-100 flex justify-center">
      <div className="max-w-7xl w-full px-6 flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl mb-4 text-white text-center">
          Široké spektrum služieb
        </h2>

        <p className="mb-10 text-gray-300 max-w-3xl text-center">
          Ponúkame kompletné servisné služby pre osobné vozidlá aj motocykle –
          od diagnostiky až po karosárske práce.
        </p>

        {/* CATEGORY BUTTONS */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={[
                "px-4 py-2 text-sm sm:text-base rounded-full border transition",
                "border-yellow-400",
                activeTab === c.id
                  ? "bg-yellow-400 text-black"
                  : "bg-black/70 text-white hover:bg-zinc-900",
              ].join(" ")}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* SERVICES – FLEX LAYOUT FOR CENTERED CARDS */}
        <div className="mt-4 flex flex-wrap justify-center gap-6 w-full">
          {filtered.map((service, idx) => (
            <div
              key={idx}
              className={[
                "flex flex-col items-center text-center",
                "p-6 border border-white/10 bg-zinc-950/80 hover:bg-zinc-900 transition",
                "rounded-md shadow-sm",
                "min-h-[170px]",
                // responsive "columns": 1 / 2 / 3 / 4
                "basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4",
                "max-w-xs",
              ].join(" ")}
            >
              <div className="text-4xl sm:text-5xl text-yellow-400 mb-3 shrink-0">
                {service.icon}
              </div>
              <h3 className="text-base sm:text-lg leading-snug">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
