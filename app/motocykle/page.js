import HeroCustom from "@/components/autoservis/HeroCustom";
import ImageSection from "@/components/UI/ImageSection";
import SpacerFlag from "@/components/UI/SpacerFlag";
import SpacerFlag2 from "@/components/UI/SpacerFlag2";

export default function Autoservis() {
    return (
        <>
            <HeroCustom
                title="Servis motocyklov – rýchlo, precízne, bez kompromisov"
                text="U nás dostane tvoj motocykel presne to, čo potrebuje – žiadne obkecy, žiadne “uvidíme”. Robíme dôkladnú diagnostiku, profesionálny servis a rýchle opravy, aby si sa mohol čo najskôr vrátiť na cestu."
                image="/images/motorcycle.png"
            />

             <SpacerFlag2 />
            
            <div className="my-20">
                <ImageSection
                    title="Čo robíme najčastejšie:"
                    description={`• kompletný servis a sezónnu prípravu
                    • výmenu olejov, filtrov, brzdových prvkov a pneumatík
                    • údržbu a nastavenie podvozku
                    • servis reťazových sád a pohonných komponentov
                    • elektrické opravy, batérie, kabeláž`}
                    imageSrc="/images/motorcycle1.png"
                />
                <ImageSection
                    title="Ponúkame aj:"
                    description={`• montáž padacích rámov, kufrov, plexi a doplnkov
                    • úpravy osvetlenia a elektriky
                    • kontrolu a kalibráciu elektronických systémov
                    • diagnostiku palivového systému a výkonu
                    • základné aj pokročilé ladenie`}
                    imageSrc="/images/motorcycle3.png"
                    reverse
                />
            </div>

        </>
    );
}