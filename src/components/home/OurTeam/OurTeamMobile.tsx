import { Container, Row, Column } from "@/lib/ui/Layout";
import { ProfileCard } from "@/lib/ui/ProfileCard";
import { CORE_MEMBERS, SECTION_TITLES, TEAM_MEMBERS } from "@/utils/constants/home";

export function OurTeamMobile() {
  return (
    <section
      data-component="OurTeam"
      aria-labelledby="our-team-heading"
      className="pt-12 pb-[60px] bg-ts-surface"
    >
      <Container>
        <h2
          id="our-team-heading"
          className="text-white font-medium text-left text-[26px] leading-[1.2] mb-3"
        >
          {SECTION_TITLES.ourTeam}
        </h2>

        <p className="font-medium text-left text-[12px] leading-[1.5] text-white/80 max-w-[327px] mb-8">
          {SECTION_TITLES.ourTeamDescription}
        </p>

        {/* Team Members — 2-col portrait grid */}
        <Row wrap justify="center" className="gap-[15px]">
          {[...CORE_MEMBERS, ...TEAM_MEMBERS].map((m) => (
            <ProfileCard
              key={m.name}
              name={m.name}
              role={m.role}
              image={m.image}
              variant="portrait"
              background="core"
              size="mobile"
            />
          ))}
        </Row>
      </Container>
    </section>
  );
}
