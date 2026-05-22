"use client";

import { useState, useCallback } from "react";
import { AnimatePresence } from "motion/react";
import LoadingScreen from "@/components/LoadingScreen";
import NavBar from "@/components/NavBar";
import HeroCinematico from "@/components/HeroCinematico";
import Empreendimento from "@/components/Empreendimento";
import GaleriaParallax from "@/components/GaleriaParallax";
import Planta from "@/components/Planta";
import Localizacao from "@/components/Localizacao";
import LeadForm from "@/components/LeadForm";
import FooterMarquee from "@/components/FooterMarquee";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <AnimatePresence>
        {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {loaded && (
        <>
          <NavBar />
          <main>
            <HeroCinematico />
            <Empreendimento />
            <GaleriaParallax />
            <Planta />
            <Localizacao />
            <LeadForm />
          </main>
          <FooterMarquee />
        </>
      )}
    </>
  );
}
