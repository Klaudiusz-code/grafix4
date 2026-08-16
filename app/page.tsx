import { DM_Serif_Display, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EditorialGrid from "@/components/EdtitorialGrid";
import Statement from "@/components/Statement";
import Process from "@/components/Process";
import DesignGrid from "@/components/DesignGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Topbar from "@/components/TopBar";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});
const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });

export default function Home() {
  return (
    <main
      className={`${manrope.variable} ${dmSerif.variable} font-sans antialiased bg-[#FAFAF8] text-[#1A1A1A]`}
    >
      <Topbar />
      <Header />
      <Hero />
      <EditorialGrid />
      <Statement />
      <Process />
      <DesignGrid />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
