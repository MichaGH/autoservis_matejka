import {
  Geist,
  Geist_Mono,
  Space_Grotesk,
  Inter,
  Meie_Script,
} from "next/font/google";
import "./globals.css";
import NavBar from "../components/UI/NavBar";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-primary",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-secondary",
});

const meieScript = Meie_Script({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-fancy",
});

export const metadata = {
  title: "Autoservis Matejka Zdenko",
  description: "Kompletné opravy áut, pravidelná údržba a diagnostika. Spoľahlivé riešenia pre bezpečnú jazdu a dlhú životnosť vášho vozidla.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="sk">
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          spaceGrotesk.variable,
          inter.variable,
          meieScript.variable,
          "antialiased",
        ].join(" ")}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
