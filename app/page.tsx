import NavBar from "@/components/NavBar";
import HeroCinematico from "@/components/HeroCinematico";
import Empreendimento from "@/components/Empreendimento";
import GaleriaParallax from "@/components/GaleriaParallax";
import Planta from "@/components/Planta";
import Localizacao from "@/components/Localizacao";
import SobreAbsoluto from "@/components/SobreAbsoluto";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import FooterMarquee from "@/components/FooterMarquee";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroCinematico />
        <Empreendimento />
        <Localizacao />
        <GaleriaParallax />
        <Planta />
        <SobreAbsoluto />
        <FAQ />
        <LeadForm />
      </main>
      <FooterMarquee />
      <FloatingWhatsApp />
    </>
  );
}
