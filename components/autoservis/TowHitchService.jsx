"use client";

import React from "react";
import { FaCheckCircle, FaRegStar , FaBalanceScale } from "react-icons/fa";

const TowHitchService = () => {
  const features = [
    {
      icon: <FaCheckCircle className="text-yellow-400 text-3xl" />,
      title: "ISO 50",
      description: "Kompatibilné so všetkými typmi osobných a úžitkových vozidiel.",
    },
    {
      icon: <FaRegStar  className="text-yellow-400 text-3xl" />,
      title: "Najlepšia povrchová úprava",
      description: "Zaručuje odolnosť a dlhú životnosť, žiadna farba sa jej nevyrovná.",
    },
    {
      icon: <FaBalanceScale className="text-yellow-400 text-3xl" />,
      title: "Schválené E27",
      description: "Spĺňajú medzinárodné normy a smernice ISO 9001:2008.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-0 pb-30">
      <div className="flex flex-col md:flex-row md:items-start gap-12">
        {/* Výhody vľavo */}
        <div className="md:flex-1 flex flex-col gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="shrink-0 flex items-center justify-center w-14 h-14 bg-zinc-800 rounded-full shadow-md">
                {f.icon}
              </div>
              <div>
                <p className="font-semibold text-gray-100 mb-1">{f.title}</p>
                <p className="text-gray-400 text-sm">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Hlavný text vpravo */}
        <div className="md:flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100 text-center md:text-left">
            Ťažné zariadenia
          </h2>
          <p className="text-gray-300 text-center md:text-left">
            Montáž ťažného zariadenia s guľou ISO 50 pre všetky typy vozidiel. Naša najkvalitnejšia povrchová úprava zaručuje odolnosť a dlhú životnosť. Všetky zariadenia sú schválené podľa E27 a ISO 9001:2008.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TowHitchService;
