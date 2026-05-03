import { Container, Column } from "@/lib/ui/Layout";
import { ProfileCard } from "@/lib/ui/ProfileCard";
import { ADVISORS, SECTION_TITLES } from "@/utils/constants/home";

export function AdvisorsMobile() {
  return (
    <section
      data-component="Advisors"
      aria-labelledby="advisors-heading"
      className="bg-ts-surface pt-12 pb-[60px]"
    >
      <Container>
        <h2
          id="advisors-heading"
          className="text-white font-medium text-left text-[26px] leading-[1.2] mb-8"
        >
          {SECTION_TITLES.advisors}
        </h2>

        <div className="flex justify-center w-full">
          {ADVISORS.map((a) => (
            <ProfileCard
              key={a.name}
              data-ui="AdvisorCard"
              name={a.name}
              role={a.role}
              image={a.image}
              variant="portrait"
              background="advisor"
              size="mobile"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
