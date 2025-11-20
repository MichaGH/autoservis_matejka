"use client";

const points = [
  "Neprídete o záruku, ak sú dodržané servisné intervaly a postupy výrobcu.",
  "Používame originálne alebo kvalitatívne rovnocenné diely.",
  "Všetky úkony riadne zdokumentujeme – faktúra, servisná knižka, diely.",
];

const WarrantyInfoCompact = () => {
  return (
    <section className="bg-black">
      <div className="max-w-3xl mx-auto px-6 py-16 text-gray-200 text-center">
        
        {/* Overline */}
        <p className="text-[11px] font-semibold tracking-[0.25em] text-yellow-400 uppercase">
          Záruka & servis
        </p>

        {/* Main heading */}
        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">
          Auto v záruke? Môžete k nám!
        </h2>

        {/* Short description */}
        <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-lg mx-auto">
          Európska legislatíva (bloková výnimka) umožňuje servisovať vozidlá v záruke
          aj v nezávislých servisoch pri dodržaní odporúčaní výrobcu.
        </p>

        {/* Centered bullet list */}
        <ul className="mt-10 flex flex-col items-center gap-4">
          {points.map((text, i) => (
            <li
              key={i}
              className="flex items-center gap-3 bg-zinc-950/70 border border-zinc-800 px-4 py-3 rounded-md w-full max-w-md"
            >
              <span className="flex h-6 w-6 items-center justify-center  text-xs font-bold text-yellow-400">
                ✓
              </span>

              <p className="text-sm sm:text-[15px] text-left text-gray-200 leading-relaxed">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WarrantyInfoCompact;
