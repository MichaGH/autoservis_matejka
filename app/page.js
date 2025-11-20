import SpacerFlag from "@/components/ui/SpacerFlag";
import SpacerLine from "@/components/ui/SpacerLine";
import SpacerRoad from "@/components/ui/SpacerRoad";

import Hero from "@/components/homepage/Hero";

import ServicesList from "@/components/homepage/Services";
import WarrantyInfo from "@/components/homepage/WarrantyInfo";
import OpeningHours from "@/components/contact/OpeningHours";

import Map from "@/components/contact/map/Map"
import ImageSection from "@/components/ui/ImageSection";

export default function Home() {
  return (
    <>
      <Hero />

      <SpacerFlag height="20vh" />
      <ServicesList />

      <SpacerLine />
      <div className="mt-20">
      <ImageSection
        title="Profesionálny servis a údržba"
        description="Opravujeme všetky značky áut s dôrazom na kvalitu a bezpečnosť. Využívame originálne alebo overené ekvivalentné diely a všetky práce sú riadne zdokumentované."
        imageSrc="/images/garage.png"
      />
      <ImageSection
        title="Rýchle a spoľahlivé opravy"
        description="Vaše auto bude opravené včas, bez zbytočného čakania. Naši technici používajú moderné vybavenie a postupy, aby ste mohli bezpečne jazdiť čím skôr."
        imageSrc="/images/wheel.png"
        reverse
      />
      <WarrantyInfo />
      </div>

      <SpacerRoad />
      <div className="my-20 grid gap-8 md:grid-cols-2 max-w-7xl mx-auto px-6 py-10">
        <OpeningHours />
        <Map />
      </div>
    </>
  );
}
