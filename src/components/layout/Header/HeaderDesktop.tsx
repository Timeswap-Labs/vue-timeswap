import { Container, Row } from "@/lib/ui/Layout";
import { HEADER_NAV_LINKS } from "@/utils/constants/navigation";
import Image from "next/image";
import Link from "next/link";

const APP_HREF = "https://time-v3-frontend-git-mainnet-only-timeswap.vercel.app/trade/markets";

const NAV_LINK_CLASS =
  "text-[16px] font-medium text-white/80 hover:text-ts-primary transition-colors";

export function HeaderDesktop() {
  return (
    <>
      {/* Decorative background blur — desktop only, exact Figma geometry */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/teal_blur.svg"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none -z-10 top-[-400px] left-0 w-[100vw] h-auto max-w-none"
      />

      <Container className="py-[46px]">
        <div className="w-full flex flex-row items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/timeswap-logo.svg"
              alt="Timeswap"
              width={158}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Nav links + App button */}
          <nav className="flex flex-row items-center gap-[40px]">
            {HEADER_NAV_LINKS.map((link) =>
              link.isExternal ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={NAV_LINK_CLASS}
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href} className={NAV_LINK_CLASS}>
                  {link.label}
                </Link>
              )
            )}

            <a
              href={APP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-ts-primary h-9 px-6 rounded-full hover:opacity-90 transition-opacity"
            >
              <span className="text-[16px] font-bold text-black leading-none">App</span>
            </a>
          </nav>
        </div>
      </Container>
    </>
  );
}
