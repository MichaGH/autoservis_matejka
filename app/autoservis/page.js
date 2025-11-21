"use client";

import ACService from "@/components/autoservis/ACService";
import AutoservisDiagnostikaSection from "@/components/autoservis/AutoservisDiagnostikaSection";
import AutoservisKaroseriaSection from "@/components/autoservis/AutoservisKaroseriaSection";
import AutoservisMechanikaSection from "@/components/autoservis/AutoservisMechanikaSection";
import DPFService from "@/components/autoservis/DPFService";
import HeroCustom from "@/components/autoservis/HeroCustom";
import TowHitchService from "@/components/autoservis/TowHitchService";
import SpacerFlag from "@/components/UI/SpacerFlag";
import SpacerFlag2 from "@/components/UI/SpacerFlag2";

export default function Autoservis() {
	return (
		<div className="w-full text-gray-100">
			<HeroCustom
				title="Autoservis – profesionálny servis pre vaše vozidlo"
				text="Spoľahlivé služby a moderné technológie pre bezpečnosť a komfort vášho auta."
				image="/images/autoservice.png"
			/>
			<SpacerFlag2 squareSize={20} rows={4} />
			<AutoservisMechanikaSection />
			<AutoservisDiagnostikaSection />
			<AutoservisKaroseriaSection />
            
			<ACService />
			<DPFService />
			<TowHitchService />
		</div>
	);
}
