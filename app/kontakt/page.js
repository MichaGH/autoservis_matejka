import MapComponent from "@/components/contact/map/MapComponent";
import OpeningHours from "@/components/contact/OpeningHours";
import ContactUs from "@/components/contact/ContactUs"

export default function Kotakt() {
    return (
        <>
            <section className="relative w-full h-screen flex mb-10 flex-col items-center justify-start">
                <div className="mt-30 max-w-7xl w-full px-6 mx-auto">
                    <ContactUs />
                </div>
                <div className="mt-5 grid gap-8 md:grid-cols-2 max-w-7xl mx-auto px-6 py-5">
                    <OpeningHours />
                    <MapComponent />
                </div>
            </section>
        </>
    );
}