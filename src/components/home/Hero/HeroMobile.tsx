import { Container, Column, Box } from "@/lib/ui/Layout";
import { HOME_HERO } from "@/utils/constants/home";

export function HeroMobile() {
  return (
    <section
      data-component="Hero"
      aria-labelledby="hero-heading"
      className="relative flex flex-col overflow-hidden bg-background"
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

      <div className="relative z-10 pt-[232px] pb-12 px-[12px] flex flex-col items-center gap-[240px]">
        {/* Heading and Button */}
        <div className="flex flex-col items-center text-center">
          <h1
            id="hero-heading"
            className="text-white font-medium text-[25px] leading-[1.2] mb-6 max-w-[360px] animate-fade-in-up"
          >
            {HOME_HERO.title}
          </h1>

          <a
            href={HOME_HERO.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 w-[130px] rounded-full bg-ts-primary text-[14px] font-bold text-black hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(121,255,234,0.3)]"
          >
            {HOME_HERO.ctaText}
          </a>
        </div>

        {/* Description + Quote + Hourglass */}
        <div className="flex flex-col items-start gap-8 w-full max-w-[327px] mx-auto">
          <div className="flex flex-col gap-6">
            <p className="text-white font-medium text-[16px] leading-[1.5]">
              {HOME_HERO.description}
            </p>

            <p className="font-medium text-[14px] leading-[1.5] text-ts-primary opacity-60">
              {HOME_HERO.quote}
            </p>
          </div>

          {/* Hourglass */}
          <div className="w-full flex items-center justify-center pt-4">
            <div className="relative">
              <div
                className="absolute inset-0 bg-ts-primary/10 blur-[80px] rounded-full"
                aria-hidden="true"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HOME_HERO.previewImage}
                alt={HOME_HERO.previewAlt}
                className="relative object-contain pointer-events-none w-[308px] max-w-full h-auto animate-fade-in-up delay-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
