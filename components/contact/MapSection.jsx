"use client";

import React from "react";

const defaultHours = [
  { day: "Pondelok", open: "08:30", close: "16:00" },
  { day: "Utorok", open: "08:30", close: "16:00" },
  { day: "Streda", open: "08:30", close: "16:00" },
  { day: "Štvrtok", open: "08:30", close: "16:00" },
  { day: "Piatok", open: "08:30", close: "16:00" },
  { day: "Sobota", open: "Zatvorené", close: "" },
  { day: "Nedeľa", open: "Zatvorené", close: "" },
];

export default function MapSection({ hours = defaultHours }) {
  const handleNavigate = () => {
    const position = [49.052298194403846, 18.916140275371166];
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`,
      "_blank"
    );
  };

  return (
    <section className=" pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 items-start ">
          {/* Opening hours */}
          <div className="w-full rounded-xl flex flex-col justify-center h-full bg-deev border-zinc-800 px-6 py-5 text-gray-100">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 flex items-center justify-between">
              <span className="bg-deev mx-auto">Otváracie hodiny</span>
              
            </h2>

            <table className="w-full text-sm border-collapse">
              <tbody>
                {hours.map((item) => {
                  const isClosed = item.open.toLowerCase() === "zatvorené";

                  return (
                    <tr
                      key={item.day}
                      className="border-t border-zinc-800 first:border-t-0"
                    >
                      <td className="py-2.5 pr-3 align-middle">
                        <span className="font-medium text-gray-200">
                          {item.day}
                        </span>
                      </td>
                      <td className="py-2.5 pl-3 text-right align-middle">
                        {isClosed ? (
                          <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                            Zatvorené
                          </span>
                        ) : (
                          <span className="tabular-nums text-gray-100">
                            {item.open} – {item.close}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            
          </div>

          {/* Map + address */}
          <div className="w-full rounded-xl  px-6 py-5 text-gray-100">
            

            <div className="mt-4 rounded-lg overflow-hidden border border-zinc-800 bg-black">
              <div className="aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d777.386604105816!2d18.915631444940562!3d49.05230390132612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDAzJzA4LjMiTiAxOMKwNTQnNTguMSJF!5e0!3m2!1ssk!2ssk!4v1763648609107!5m2!1ssk!2ssk"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                  title="Mapa servisu"
                />
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
}
