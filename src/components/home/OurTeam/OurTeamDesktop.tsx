import { Container } from "@/lib/ui/Layout";
import { ProfileCard } from "@/lib/ui/ProfileCard";
import { CORE_MEMBERS, SECTION_TITLES, TEAM_MEMBERS } from "@/utils/constants/home";

export function OurTeamDesktop() {
  return (
    <section
      data-component="OurTeam"
      aria-labelledby="our-team-heading"
      className="pt-12 lg:pt-20 pb-[60px] lg:pb-[120px] bg-ts-surface w-full overflow-hidden"
    >
      <Container>
        <h2
          id="our-team-heading"
          className="text-white font-medium text-center text-[28px] lg:text-[44px] leading-[1.2] mb-3 lg:mb-4"
        >
          {SECTION_TITLES.ourTeam}
        </h2>

        <p className="font-medium text-center text-[13px] lg:text-[14px] leading-[1.5] text-white/80 mb-8 lg:mb-[39px]">
          {SECTION_TITLES.ourTeamDescription}
        </p>

        {/* Core members — 3-col portrait grid with 20px gap */}
        <div className="flex justify-center w-full mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_MEMBERS.map((m) => (
              <ProfileCard
                key={m.name}
                name={m.name}
                role={m.role}
                image={m.image}
                variant="portrait"
                background="core"
                size="desktop"
              />
            ))}
          </div>
        </div>

        {/* Extended team — 3-col landscape grid with 20px gap */}
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM_MEMBERS.map((m) => (
              <ProfileCard
                key={m.name}
                name={m.name}
                role={m.role}
                image={m.image}
                variant="landscape"
                background="team"
                size="desktop"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
