"use client";

const WarrantyInfoCompact = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-gray-200">
      <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center mb-10">
        Práva vlastníka vozidla v záruke
      </h2>

      <ul className="space-y-4">
        <li className="flex items-start gap-3 bg-zinc-950 border-l-4 border-yellow-400 p-4 rounded shadow-sm">
          <span className="font-bold text-yellow-400">✓</span>
          <span>Máte právo vybrať si nezávislý servis a optimalizovať náklady.</span>
        </li>
        <li className="flex items-start gap-3 bg-zinc-950 border-l-4 border-yellow-400 p-4 rounded shadow-sm">
          <span className="font-bold text-yellow-400">✓</span>
          <span>Bloková výnimka umožňuje údržbu a opravy vozidiel bez ohrozenia záruky.</span>
        </li>
        <li className="flex items-start gap-3 bg-zinc-950 border-l-4 border-yellow-400 p-4 rounded shadow-sm">
          <span className="font-bold text-yellow-400">✓</span>
          <span>Servisné práce musia byť riadne zdokumentované, pričom originálne alebo ekvivalentné diely sú akceptované.</span>
        </li>
      </ul>
    </section>
  );
};

export default WarrantyInfoCompact;
