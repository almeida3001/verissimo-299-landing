import NavBar from "@/components/NavBar";
import HeroCinematico from "@/components/HeroCinematico";
import Empreendimento from "@/components/Empreendimento";
import GaleriaParallax from "@/components/GaleriaParallax";
import Planta from "@/components/Planta";
import Localizacao from "@/components/Localizacao";
import LeadForm from "@/components/LeadForm";
import FooterMarquee from "@/components/FooterMarquee";

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
        <LeadForm />
      </main>
      <FooterMarquee />
    </>
  );
}
