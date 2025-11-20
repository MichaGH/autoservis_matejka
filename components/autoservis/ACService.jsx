"use client";

import React from "react";
import { FaVirus, FaLeaf, FaBiohazard } from "react-icons/fa"; // Ikonky pre výhody



const ACService = ({
  title = "Servis a čistenie klimatizácií",
  description = "Čistenie ozónom O3 je účinnejšie než klasické metódy. Ozón sterilizuje a dezinfikuje interiér, ničí choroboplodné zárodky aj spóry odolné voči bežným dezinfekciám. Šetrí životné prostredie a zanecháva vo vozidle čistý a zdravý vzduch.",
}) => {
  const benefits = [
    {
      icon: <FaVirus className="text-yellow-400 text-3xl mx-auto mb-3" />,
      title: "Sterilizácia",
      description: "Úplne odstraňuje choroboplodné zárodky a spóry.",
    },
    {
      icon: <FaLeaf className="text-yellow-400 text-3xl mx-auto mb-3" />,
      title: "Šetrné",
      description: "Prirodzená a bezpečná metóda pre vaše auto i životné prostredie.",
    },
    {
      icon: <FaBiohazard className="text-yellow-400 text-3xl mx-auto mb-3" />,
      title: "Ozón O3",
      description: "Efektívny a overený prostriedok zo zdravotníctva.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-0 pb-20 pt-30">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-100">{title}</h2>
      <p className="text-gray-300 max-w-3xl mx-auto text-center mb-12">{description}</p>

      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((b, idx) => (
          <div
            key={idx}
            className="bg-linear-to-br from-zinc-900/80 to-zinc-800/80 border border-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {b.icon}
            <p className="font-semibold text-lg mb-2 text-gray-100">{b.title}</p>
            <p className="text-gray-300 text-sm">{b.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ACService;
