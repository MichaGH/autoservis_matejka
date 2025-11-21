"use client";

import Image from "next/image";

const TowHitchService = () => {
    return (
        <section className="bg-zinc-950 text-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 grid gap-16 lg:grid-cols-2 items-center">
                <div className="relative">
                    <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-[0_0_40px_rgba(0,0,0,0.7)]">
                        <div className="aspect-[4/3]">
                            <Image
                                src="/images/autoservis/tow_hitch.webp" // 👈 nahraď za reálnu fotku ťažného
                                alt="Montáž ťažného zariadenia"
                                fill
                                sizes="(min-width: 1024px) 40vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/10" />
                    </div>
                </div>
                {/* TEXT SIDE */}
                <div className="space-y-5">
                    <p className="text-[11px] font-semibold tracking-[0.25em] text-yellow-400 uppercase">
                        Ťažné zariadenia
                    </p>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-primary text-white leading-tight">
                        Montáž ťažných zariadení GALIA
                    </h2>

                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        Odborná montáž ťažných zariadení s guľou ISO 50 pre osobné aj
                        úžitkové vozidlá. Dbáme na správnu montáž podľa odporúčaní výrobcu
                        a platnej legislatívy, aby bolo vozidlo pripravené na bezpečné
                        ťahanie prívesu alebo nosiča bicyklov.
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2 text-sm">
                        <div>
                            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400">
                                Montáž & použitie
                            </p>
                            <ul className="mt-1.5 space-y-1 text-gray-200">
                                <li>• ťažné zariadenia GALIA s guľou ISO 50</li>
                                <li>• pre osobné aj úžitkové vozidlá</li>
                                <li>• vhodné pre príves, nosič bicyklov a pracovné využitie</li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400">
                                Kvalita & schválenie
                            </p>
                            <ul className="mt-1.5 space-y-1 text-gray-200">
                                <li>• zinková povrchová úprava s vysokou odolnosťou</li>
                                <li>• schválené podľa E27 a EHK 55</li>
                                <li>• výroba v súlade s ISO 9001:2008</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* IMAGE SIDE */}

            </div>
        </section>
    );
};

export default TowHitchService;
