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

const OpeningHours = ({ hours = defaultHours }) => {
  return (
    <div className="max-w-md w-full mx-auto rounded-xl  bg-zinc-950/80 px-6 py-5 text-gray-100">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 flex items-center justify-between">
        <span>Otváracie hodiny</span>
        <span className="text-[11px] tracking-[0.2em] uppercase text-yellow-400">
          Servis
        </span>
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
  );
};

export default OpeningHours;
