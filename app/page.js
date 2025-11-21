import ContactUs from "@/components/contact/ContactUs";
import RealMapComponent from "@/components/contact/Map";
import MapSection from "@/components/contact/MapSection";
import OpeningHours from "@/components/contact/OpeningHours";
import Hero from "@/components/homepage/Hero";
import ServicesList from "@/components/homepage/Services";
import WarrantyInfoCompact from "@/components/homepage/WarrantyInfo";
import ImageSection from "@/components/UI/ImageSection";
import SpacerFlag from "@/components/UI/SpacerFlag";
import SpacerFlag2 from "@/components/UI/SpacerFlag2";
import SpacerLine from "@/components/UI/SpacerLine";
import SpacerRoad from "@/components/UI/SpacerRoad";


export default function Home() {
  return (
    <>
      <Hero />

      {/* <SpacerFlag height="20vh" /> */}
      <SpacerFlag2 />
      <ServicesList />

      
      
      <ImageSection
        title="Profesionálny servis a údržba"
        description="Opravujeme všetky značky áut s dôrazom na kvalitu a bezpečnosť. Využívame originálne alebo overené ekvivalentné diely a všetky práce sú riadne zdokumentované."
        imageSrc="/images/car1.png"
      />
      <ImageSection
        title="Rýchle a spoľahlivé opravy"
        description="Vaše auto bude opravené včas, bez zbytočného čakania. Naši technici používajú moderné vybavenie a postupy, aby ste mohli bezpečne jazdiť čím skôr."
        imageSrc="/images/interior1.png"
        reverse
      />
      <div className="w-full mt-14">
<SpacerLine />
      </div>
      
      

      {/* <SpacerRoad /> */}
      <div className="mt-30 mb-10">
      <ContactUs />
      </div>
      <MapSection />
    </>
  );
}
