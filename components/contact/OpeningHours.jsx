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
    <div className="text-foreground rounded-2xl py-6 shadow-lg max-w-2xl w-full mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Otváracie hodiny</h2>
      <table className="w-full text-left border-collapse">
        <tbody>
          {hours.map((item) => (
            <tr key={item.day} className="even:bg-(--background)/20">
              <td className="py-2 font-medium">{item.day}</td>
              <td className="py-2 text-right">
                {item.close ? `${item.open} - ${item.close}` : item.open}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OpeningHours;
