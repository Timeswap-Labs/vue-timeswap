import { Container, Row } from "@/lib/ui/Layout";
import { HEADER_NAV_LINKS } from "@/utils/constants/navigation";
import Image from "next/image";
import Link from "next/link";

const APP_HREF = "https://time-v3-frontend-git-mainnet-only-timeswap.vercel.app/trade/markets";

export function HeaderMobile() {
  return (
    <Container className="pt-10 pb-6 px-[12px]">
      <div className="w-full flex flex-row items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logos/timeswap-logo.svg"
            alt="Timeswap"
            width={158}
            height={40}
            className="h-8 md:h-10 w-auto"
            priority
          />
        </Link>

        {/* Nav links + App button */}
        <nav className="flex flex-row items-center gap-4 md:gap-[40px]">
          {HEADER_NAV_LINKS.filter((l) => l.label !== "Docs").map((link) =>
            link.isExternal ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] md:text-[16px] font-medium text-white/80 hover:text-ts-primary transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] md:text-[16px] font-medium text-white/80 hover:text-ts-primary transition-colors"
              >
                {link.label}
              </Link>
            )
          )}

          <a
            href={APP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-ts-primary h-8 md:h-9 px-4 md:px-6 rounded-full hover:opacity-90 transition-opacity"
          >
            <span className="text-[14px] md:text-[16px] font-bold text-black leading-none">
              App
            </span>
          </a>
        </nav>
      </div>
    </Container>
  );
}
