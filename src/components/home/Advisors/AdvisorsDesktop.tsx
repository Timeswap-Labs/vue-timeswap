import { Container } from "@/lib/ui/Layout";
import { ProfileCard } from "@/lib/ui/ProfileCard";
import { ADVISORS, SECTION_TITLES } from "@/utils/constants/home";

export function AdvisorsDesktop() {
  return (
    <section
      data-component="Advisors"
      aria-labelledby="advisors-heading"
      className="bg-ts-surface pt-12 lg:pt-20 pb-[60px] lg:pb-[120px] w-full overflow-hidden"
    >
      <Container>
        <h2
          id="advisors-heading"
          className="text-white font-medium text-center text-[28px] lg:text-[44px] leading-[1.2] mb-8 lg:mb-[39px]"
        >
          {SECTION_TITLES.advisors}
        </h2>

        {/* Center advisor(s) with 20px gap */}
        <div className="flex justify-center w-full">
          {ADVISORS.length === 1 ? (
            <ProfileCard
              key={ADVISORS[0].name}
              data-ui="AdvisorCard"
              name={ADVISORS[0].name}
              role={ADVISORS[0].role}
              image={ADVISORS[0].image}
              variant="landscape"
              background="advisor"
              size="desktop"
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ADVISORS.map((a) => (
                <ProfileCard
                  key={a.name}
                  data-ui="AdvisorCard"
                  name={a.name}
                  role={a.role}
                  image={a.image}
                  variant="landscape"
                  background="advisor"
                  size="desktop"
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
