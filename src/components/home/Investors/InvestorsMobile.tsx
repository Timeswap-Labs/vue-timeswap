import { Container, Row } from "@/lib/ui/Layout";
import { INVESTOR_LOGOS, INVESTOR_PEOPLE, SECTION_TITLES } from "@/utils/constants/home";
import { InvestorPersonCard, InvestorLogo } from "./InvestorCards";

export function InvestorsMobile() {
  return (
    <section
      data-component="Investors"
      aria-labelledby="investors-heading"
      className="bg-ts-deeper-green pt-12 pb-[60px]"
    >
      <Container>
        <h2
          id="investors-heading"
          className="text-white font-medium text-left text-[26px] leading-[1.2] mb-10"
        >
          {SECTION_TITLES.investors}
        </h2>

        {/* Investor logos */}
        <Row wrap align="center" justify="center" className="gap-6 mb-10">
          {INVESTOR_LOGOS.map((logo) => (
            <InvestorLogo key={logo.name} {...logo} />
          ))}
        </Row>

        {/* Person cards */}
        <Row wrap justify="center" className="gap-x-8 gap-y-6">
          {INVESTOR_PEOPLE.map((person) => (
            <InvestorPersonCard key={person.name} {...person} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
