import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Identification from "@/components/Identification";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Meditations from "@/components/Meditations";
import SocialProof from "@/components/SocialProof";
import Science from "@/components/Science";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import WaveDivider from "@/components/WaveDivider";

const NIGHT = "#0D0B1A";
const DAY   = "#F2EBE0";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />                                              {/* dark  */}
        <WaveDivider bg={NIGHT} fill={DAY} />
        <Identification />                                    {/* light — identificação */}
        <WaveDivider bg={DAY} fill={NIGHT} />
        <Problem />                                           {/* dark  — quebra de crença + mecanismo */}
        <WaveDivider bg={NIGHT} fill={DAY} />
        <Solution />                                          {/* light — solução + como funciona */}
        <WaveDivider bg={DAY} fill={NIGHT} />
        <Meditations />                                       {/* dark  */}
        <WaveDivider bg={NIGHT} fill={DAY} />
        <SocialProof />                                       {/* light — prova social */}
        <WaveDivider bg={DAY} fill={NIGHT} />
        <Science />                                           {/* light */}
        <WaveDivider bg={DAY} fill={NIGHT} />
        <FinalCTA />                                          {/* dark  — virada emocional + CTA */}
      </main>
      <Footer />
    </>
  );
}
