import { About } from "@/components/About";
import { Commitments } from "@/components/Commitments";
import { CtaBanner } from "@/components/CtaBanner";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { TenderBlock } from "@/components/TenderBlock";
import { WhyUs } from "@/components/WhyUs";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About compact />
      <Stats />
      <Services limit={6} showCta />
      <WhyUs />
      <Process />
      <Projects limit={3} showCta />
      <Commitments />
      <TenderBlock />
      <CtaBanner />
    </main>
  );
}
