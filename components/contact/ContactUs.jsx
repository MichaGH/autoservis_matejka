"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <section id="contactSection" className="bg-deev pb-20">
      <div className="max-w-7xl mx-auto px-6 text-gray-100">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-yellow-400 uppercase">
            Kontakt
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
            Kontaktujte nás
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-400">
            Objednanie servisu, cenová ponuka alebo len otázka? Ozvite sa
            a nájdeme pre vás najlepšie riešenie.
          </p>
        </div>

        {/* Content – 1/2 + 1/2 */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 items-start">
          {/* Left – form */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-6 sm:p-7">
            

            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-300">Vaše meno</label>
                <input
                  type="text"
                  placeholder="Zadajte vaše meno"
                  className="w-full rounded-md bg-zinc-900 border border-zinc-700 px-3 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-300">Váš email</label>
                <input
                  type="email"
                  placeholder="napr. meno@domena.sk"
                  className="w-full rounded-md bg-zinc-900 border border-zinc-700 px-3 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-300">Správa</label>
                <textarea
                  rows={4}
                  placeholder="Stručne popíšte, s čím vám môžeme pomôcť."
                  className="w-full rounded-md bg-zinc-900 border border-zinc-700 px-3 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-yellow-400 px-5 py-3 text-sm font-semibold text-black hover:bg-yellow-500 transition"
              >
                Odoslať správu
              </button>
            </form>
            
          </div>

          {/* Right – contact info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Priamy kontakt
              </h3>
              <p className="mt-2 text-sm text-gray-400 max-w-md">
                Preferujete telefonát alebo email? Ozvite sa priamo, dohodneme
                termín servisu, diagnostiky alebo prehliadky.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 border border-zinc-700">
                  <Phone className="w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Telefón
                  </p>
                  <p className="text-sm font-medium text-white">
                    +421 900 123 456
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 border border-zinc-700">
                  <Mail className="w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Email
                  </p>
                  <p className="text-sm font-medium text-white">
                    info@autoservis.sk
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 border border-zinc-700">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Adresa servisu
                  </p>
                  <p className="text-sm font-medium text-white">
                    Hlavná 123, Bratislava
                  </p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
