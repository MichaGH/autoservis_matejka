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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../UI/tabs";


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

const ServicesList = () => {
  return (
    <section className="relative w-full py-30 text-gray-100 flex justify-center">
  <div className="max-w-7xl w-full px-6">
    <div className="flex flex-col items-start">
      <h2 className="text-4xl sm:text-5xl mb-4 text-white">
        Služby servisu automobilov a motocyklov
      </h2>

      <p className="mb-10 text-gray-300 max-w-3xl">
        Ponúkame kompletné servisné služby pre osobné vozidlá aj motocykle –
        od diagnostiky až po karosárske práce.
      </p>

      <Tabs defaultValue="udrzba" className="w-full">
        <TabsList className="flex flex-wrap gap-2 bg-transparent p-0 mb-8">
          {categories.map((c) => (
            <TabsTrigger
              key={c.id}
              value={c.id}
              className="px-4 py-2 rounded-sm border border-yellow-400 bg-black data-[state=active]:bg-yellow-400 data-[state=active]:text-black transition"
            >
              {c.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id}>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              style={{ gridAutoRows: "1fr" }}
            >
              {services
                .filter((s) => s.cat === cat.id)
                .map((service, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center p-6 border border-white bg-zinc-950 hover:bg-zinc-800 transition h-full"
                    style={{ minHeight: "170px" }} // pevná minimálna výška
                  >
                    <div className="text-5xl text-yellow-400 mb-3 shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-lg flex-1">{service.title}</h3>
                  </div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </div>
</section>

  );
};

export default ServicesList;
