"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <section id="contact" className="mt-5 grid gap-8 md:grid-cols-2 max-w-7xl mx-auto px-6 text-gray-100">

      {/* Lava časť - kontaktný formulár */}
      <div className="bg-zinc-900 p-8 rounded-xl shadow-lg w-full">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Vaše meno"
            className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Váš email"
            className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            placeholder="Vaša správa"
            className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 h-14"
          />

          <button
            type="submit"
            className="mt-2 bg-yellow-400 text-zinc-900 font-semibold py-3 rounded-md hover:bg-yellow-500 transition"
          >
            Odoslať správu
          </button>
        </form>
      </div>

      {/* Pravá časť - info o firme */}
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-semibold">Kontaktujte nás</h2>
        <p className="text-gray-300 max-w-md">
          Ak potrebujete pomoc, chcete objednať servis alebo sa len informovať,
          sme tu pre vás.
        </p>

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-yellow-400" />
            <span className="text-white text-sm font-medium">
              +421 900 123 456
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-yellow-400" />
            <span className="text-white text-sm font-medium">
              info@autoservis.sk
            </span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-yellow-400" />
            <span className="text-white text-sm font-medium">
              Hlavná 123, Bratislava
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
