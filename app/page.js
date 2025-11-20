import ContactUs from "@/components/contact/ContactUs";
import RealMapComponent from "@/components/contact/Map";
import OpeningHours from "@/components/contact/OpeningHours";
import Hero from "@/components/homepage/Hero";
import ServicesList from "@/components/homepage/Services";
import WarrantyInfoCompact from "@/components/homepage/WarrantyInfo";
import ImageSection from "@/components/UI/ImageSection";
import SpacerFlag from "@/components/UI/SpacerFlag";
import SpacerLine from "@/components/UI/SpacerLine";
import SpacerRoad from "@/components/UI/SpacerRoad";


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
      <WarrantyInfoCompact />
      </div>

      <SpacerRoad />
      <div className="mt-30 mb-10">
      <ContactUs />
      </div>
      <div className="mb-20 grid gap-8 md:grid-cols-2 max-w-7xl mx-auto px-6">
        <OpeningHours />
        <RealMapComponent />
      </div>
    </>
  );
}
