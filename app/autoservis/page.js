"use client";

import ACService from "@/components/autoservis/ACService";
import DPFService from "@/components/autoservis/DPFService";
import HeroCustom from "@/components/autoservis/HeroCustom";
import TowHitchService from "@/components/autoservis/TowHitchService";
import SpacerFlag from "@/components/ui/SpacerFlag";

export default function Autoservis() {
    return (
        <div className="w-full text-gray-100">

            <HeroCustom
                title="Autoservis – profesionálny servis pre vaše vozidlo"
                text="Spoľahlivé služby a moderné technológie pre bezpečnosť a komfort vášho auta."
                image="/images/autoservice.png"
            />
            <SpacerFlag height={"20vh"} />
            <ACService />
            <DPFService />
            <TowHitchService />
        </div>
    );
};

