import { Hero } from "@/components/home/Hero";
import { V3Unlocks } from "@/components/home/V3Unlocks";
import { OurTeam } from "@/components/home/OurTeam";
import { Advisors } from "@/components/home/Advisors";
import { Investors } from "@/components/home/Investors";

export default function Home() {
  return (
    <div data-component="HomePage" className="w-full">
      <Hero />
      <div className="section-divider-dark-to-deeper" aria-hidden="true" />
      <V3Unlocks />
      <OurTeam />
      <Advisors />
      <div className="hidden md:block">
        <div className="section-divider-deeper-to-green" aria-hidden="true" />
        <Investors />
      </div>
    </div>
  );
}
