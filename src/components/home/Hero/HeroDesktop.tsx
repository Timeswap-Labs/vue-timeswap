import { Container, Column, Row, Box } from "@/lib/ui/Layout";
import { HOME_HERO } from "@/utils/constants/home";

export function HeroDesktop() {
  return (
    <section
      data-component="Hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center overflow-hidden bg-background w-full"
    >
      {/* Decorative background blur */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/teal_blur.svg"
          alt=""
          className="absolute block top-[-22.47%] bottom-[-22.47%] left-[1.18%] right-[1.18%] w-[97.64%] h-[144.94%] max-w-none"
        />
      </div>

      <Container className="relative z-10 pt-[160px] lg:pt-[300px] pb-[80px] lg:pb-[120px]">
        {/* Heading and Button — centered */}
        <Column align="center" className="text-center mb-10 lg:mb-[160px]">
          <h1
            id="hero-heading"
            className="text-white font-medium text-[32px] lg:text-[40px] xl:text-[48px] xxl:text-[56px] leading-[1.2] mb-8 lg:mb-[120px] animate-fade-in-up"
          >
            {HOME_HERO.title}
          </h1>

          <a
            href={HOME_HERO.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 w-[160px] rounded-full bg-ts-primary text-[16px] font-bold text-black hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(121,255,234,0.3)]"
          >
            {HOME_HERO.ctaText}
          </a>
        </Column>

        {/* Description + Quote / Hourglass — stacked on small desktop, side-by-side on lg+ */}
        <Row align="center" className="flex-col lg:flex-row lg:justify-between gap-10 lg:gap-20">
          <Column align="start" className="text-left flex-1">
            <p className="text-white font-medium text-[18px] lg:text-[24px] leading-[1.5] mb-6 lg:mb-8">
              {HOME_HERO.description}
            </p>

            {/* Styled quote block with left accent bar */}
            <Box className="relative w-full py-4">
              <Box
                className="absolute inset-0 bg-[var(--background-ts-quote)]"
                aria-hidden="true"
              />
              <Box
                className="absolute top-0 left-0 bottom-0 w-[5px] bg-ts-primary"
                aria-hidden="true"
              />
              <p className="relative pl-[15px] font-medium text-[14px] xl:text-[16px] leading-[1.5] text-ts-primary">
                {HOME_HERO.quote}
              </p>
            </Box>
          </Column>

          {/* Hourglass */}
          <Box className="flex items-center justify-center lg:justify-end lg:flex-shrink-0">
            <div className="relative">
              <div
                className="absolute inset-0 bg-ts-primary/10 blur-[80px] rounded-full"
                aria-hidden="true"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HOME_HERO.previewImage}
                alt={HOME_HERO.previewAlt}
                className="relative object-contain pointer-events-none w-[280px] lg:w-[380px] xl:w-[440px] xxl:w-[520px] h-auto animate-fade-in-up delay-200"
              />
            </div>
          </Box>
        </Row>
      </Container>
    </section>
  );
}
