"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-200 pt-10 pb-3 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Kontaktné informácie */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Autoservis Matejka Zdenko</h3>
          <p>Kollárova 73, Martin</p>
          <p>Tel: <a href="tel:+421905123456" className="text-yellow-400 hover:text-xl transition-all ease-in">+421 0905 236 888</a></p>
          {/* <p>Email: <a href="mailto:info@autoservis.sk" className="hover:text-yellow-400">info@autoservis.sk</a></p> */}
        </div>

        {/* Odkazy */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Rýchle odkazy</h3>
          <ul>
            <li>
              <Link href="/" className="hover:text-yellow-400">Domov</Link>
            </li>
            <li>
              <Link href="/autoservis" className="hover:text-yellow-400">Autoservis</Link>
            </li>
            <li>
              <Link href="/motocykle" className="hover:text-yellow-400">Motocykle</Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-yellow-400">Kontakt</Link>
            </li>
          </ul>
        </div>

        {/* Otváracie hodiny */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Otváracie hodiny</h3>
          <ul>
            <li>Pondelok - Piatok: <span className="text-yellow-400">8:30 - 16:00</span></li>
            <li>Sobota - Nedeľa: <span className="text-yellow-400">Zatvorené</span></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-zinc-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Autoservis Matejka Zdenko. Všetky práva vyhradené.
      </div>
    </footer>
  );
};

export default Footer;
