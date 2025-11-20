"use client";

import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Firma */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">
              Autoservis Matejka Zdenko
            </h3>
            <p className="text-sm text-gray-400">Kollárova 73, Martin</p>
            <p className="text-sm">
              Tel:{" "}
              <a
                href="tel:+421905236888"
                className="font-medium text-yellow-400 hover:text-yellow-300 transition"
              >
                +421 0905 236 888
              </a>
            </p>
            {/* <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:info@autoservis.sk"
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                info@autoservis.sk
              </a>
            </p> */}
          </div>

          {/* Navigácia */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Rýchle odkazy</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition">
                  Domov
                </Link>
              </li>
              <li>
                <Link
                  href="/autoservis"
                  className="hover:text-yellow-400 transition"
                >
                  Autoservis
                </Link>
              </li>
              <li>
                <Link
                  href="/motocykle"
                  className="hover:text-yellow-400 transition"
                >
                  Motocykle
                </Link>
              </li>
            </ul>
          </div>

          {/* Otváracie hodiny */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">
              Otváracie hodiny
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                Pondelok – Piatok:{" "}
                <span className="text-yellow-400">8:30 – 16:00</span>
              </li>
              <li>
                Sobota – Nedeľa:{" "}
                <span className="text-yellow-400">Zatvorené</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-zinc-800 pt-4 text-xs sm:text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {year} Autoservis Matejka Zdenko. Všetky práva vyhradené.</p>
          {/* Optional: add made-by later if you want */}
          {/* <p className="text-[11px] uppercase tracking-[0.2em] text-gray-600">
            Webdesign &amp; development – Micha
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
