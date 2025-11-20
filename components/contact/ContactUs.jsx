import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="relative w-full text-gray-100 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Textová časť */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Kontaktujte nás
          </h2>
          <p className="mt-3 text-gray-300 max-w-lg">
            Ak potrebujete pomoc, chcete objednať servis alebo sa len informovať,
            sme tu pre vás.
          </p>
        </div>

        {/* Kontakt info v jednoduchom layoute */}
        <div className="flex flex-col gap-4 w-full md:w-80">
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
