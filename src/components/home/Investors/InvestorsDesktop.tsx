import { Container, Row } from "@/lib/ui/Layout";
import { cn } from "@/utils/core/cn";
import { INVESTOR_LOGOS, INVESTOR_PEOPLE, SECTION_TITLES } from "@/utils/constants/home";
import { InvestorPersonCard, InvestorLogo } from "./InvestorCards";

export function InvestorsDesktop() {
  return (
    <section
      data-component="Investors"
      aria-labelledby="investors-heading"
      className="bg-ts-deeper-green pt-12 lg:pt-20 pb-[60px] lg:pb-[120px]"
    >
      <Container>
        <h2
          id="investors-heading"
          className="text-white font-medium text-center text-[28px] lg:text-[44px] leading-[1.2] mb-10 lg:mb-[104px]"
        >
          {SECTION_TITLES.investors}
        </h2>

        {/* Investor logos — centered with 32px gap */}
        <Row wrap align="center" justify="center" className="gap-x-8 gap-y-6 mb-10 lg:mb-[120px]">
          {INVESTOR_LOGOS.map((logo) => (
            <InvestorLogo key={logo.name} {...logo} className="flex-shrink-0" />
          ))}
        </Row>

        {/* Person cards — centered rows (card uses internal absolute layout at fixed 256px) */}
        <Row wrap justify="center" className="gap-x-8 gap-y-6">
          {INVESTOR_PEOPLE.map((person) => (
            <InvestorPersonCard key={person.name} {...person} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
