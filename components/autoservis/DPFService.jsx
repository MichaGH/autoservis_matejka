"use client";

import { FaTools, FaShieldAlt } from "react-icons/fa";

const DPFServiceSection = () => {
    const features = [
        {
            icon: FaTools,
            title: "Bez demontáže filtra",
            description:
                "Čistenie prebieha priamo vo vozidle, bez zložitého rozoberania výfukového systému.",
        },
        {
            icon: FaShieldAlt,
            title: "Šetrné k materiálom",
            description:
                "Bezpečné pre hliník, horčík, zinok aj moderné konštrukcie DPF filtrov.",
        },
    ];

    return (
        <section className="bg-zinc-950 text-gray-100 bg-deev">
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 flex flex-col gap-16 md:flex-row md:items-start">
                {/* Text */}
                <div className="md:flex-1 max-w-xl">
                    <p className="text-[11px] font-semibold tracking-[0.25em] text-yellow-400 uppercase">
                        DPF filtra pevných častíc
                    </p>
                    <h2 className="mt-3 text-2xl md:text-3xl font-primary text-white">
                        Čistenie filtra pevných častíc DPF
                    </h2>
                    <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                        Používame DPF Top Gun Cleaner, ktorý rozpúšťa a odstraňuje sadze
                        usadené vo filtri pevných častíc. Celý proces prebieha bez
                        demontáže, šetrne k motoru aj materiálom filtra a je vhodný pre
                        všetky generácie DPF.
                    </p>
                    <p className="mt-3 text-xs sm:text-[13px] text-gray-400">
                        Včasným čistením predídete núdzovým režimom, zvýšenej spotrebe a
                        drahej výmene filtra.
                    </p>
                </div>

                {/* Features */}
                <div className="md:flex-1 flex flex-col gap-5">
                    {features.map(({ icon: Icon, title, description }) => (
                        <div
                            key={title}
                            className="h-24 flex items-center gap-4 rounded-lg border border-zinc-800 bg-zinc-950/70 px-4 py-3"
                        >
                            <div className="">
                                <div className=" flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-zinc-900 border border-yellow-400/60 shadow-[0_0_18px_rgba(0,0,0,0.7)]">
                                    <Icon className="text-yellow-400 text-2xl" />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-100">{title}</p>
                                <p className="mt-1 text-xs sm:text-sm text-gray-300">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DPFServiceSection;
