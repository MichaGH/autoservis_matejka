"use client";

import React from "react";
import { FaTools, FaShieldAlt } from "react-icons/fa";

const DPFService = () => {
  const features = [
    {
      icon: <FaTools className="text-yellow-400 text-3xl" />,
      title: "Bezočná demontáž",
      description: "Filter nemusíte vyberať – šetríme čas a prácu.",
    },
    {
      icon: <FaShieldAlt className="text-yellow-400 text-3xl" />,
      title: "Šetrné k motorom",
      description: "Bezpečné pre moderné motory a materiály filtrov.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-0 pb-20">
      <div className="flex flex-col md:flex-row md:items-start gap-12">
        {/* Hlavný text vľavo */}
        <div className="md:flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">
            Čistenie filtra pevných častíc DPF
          </h2>
          <p className="text-gray-300 mb-8 md:mb-0">
            DPF Top Gun Cleaner umožňuje čistenie bez demontáže filtra. Odstraňuje sadze šetrne k moderným motorom a materiálom ako hliník, horčík alebo zinok. Vhodné pre všetky generácie filtrov DPF.
          </p>
        </div>

        {/* Výhody vpravo */}
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
      </div>
    </section>
  );
};

export default DPFService;
