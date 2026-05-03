import { Container } from "@/lib/ui/Layout";
import { V3_UNLOCK_CARDS, SECTION_TITLES } from "@/utils/constants/home";
import { UnlockCard } from "./UnlockCard";

export function V3UnlocksDesktop() {
  return (
    <section
      data-component="V3Unlocks"
      aria-labelledby="v3-unlocks-heading"
      className="pt-12 lg:pt-20 pb-[80px] lg:pb-[120px] bg-ts-surface w-full overflow-hidden"
    >
      <Container>
        <h2
          id="v3-unlocks-heading"
          className="text-white font-medium text-center text-[28px] lg:text-[44px] leading-[1.2] mb-8 lg:mb-[164px]"
        >
          {SECTION_TITLES.v3Unlocks}
        </h2>

        {/* 2-col grid on small desktop, 4-col on lg+ — cards stretch to fill each column */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 items-start w-full">
          {V3_UNLOCK_CARDS.map((card) => (
            <UnlockCard key={card.title} {...card} size="desktop" />
          ))}
        </div>
      </Container>
    </section>
  );
}
