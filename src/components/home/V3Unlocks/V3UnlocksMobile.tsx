import { Container, Column } from "@/lib/ui/Layout";
import { V3_UNLOCK_CARDS, SECTION_TITLES } from "@/utils/constants/home";
import { UnlockCard } from "./UnlockCard";

export function V3UnlocksMobile() {
  return (
    <section
      data-component="V3Unlocks"
      aria-labelledby="v3-unlocks-heading"
      className="pt-12 pb-[60px] bg-ts-surface"
    >
      <Container>
        <h2
          id="v3-unlocks-heading"
          className="text-white font-medium text-left text-[26px] leading-[1.2] mb-8"
        >
          {SECTION_TITLES.v3Unlocks}
        </h2>

        <Column gap={4}>
          {V3_UNLOCK_CARDS.map((card) => (
            <UnlockCard key={card.title} {...card} size="mobile" />
          ))}
        </Column>
      </Container>
    </section>
  );
}
