import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import SocialProof from "@/components/SocialProof";
import Solution from "@/components/Solution";
import Meditations from "@/components/Meditations";
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
        <SocialProof />                                       {/* light */}
        <WaveDivider bg={DAY} fill={NIGHT} />
        <Problem />                                           {/* dark  */}
        <WaveDivider bg={NIGHT} fill={DAY} />
        <Solution />                                          {/* light */}
        <WaveDivider bg={DAY} fill={NIGHT} />
        <Meditations />                                       {/* dark  */}
        <WaveDivider bg={NIGHT} fill={DAY} />
        <Science />                                           {/* light */}
        <WaveDivider bg={DAY} fill={NIGHT} />
        <FinalCTA />                                          {/* dark  */}
      </main>
      <Footer />
    </>
  );
}
