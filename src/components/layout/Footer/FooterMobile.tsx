import { Row, Column } from "@/lib/ui/Layout";
import { SOCIAL_LINKS } from "@/utils/constants/social";
import { FOOTER_LINKS } from "@/utils/constants/navigation";
import { SocialIcon } from "@/lib/ui/SocialIcon";
import Link from "next/link";

export function FooterMobile() {
  return (
    <Column className="px-6 py-8 gap-6">
      {/* Social icons — 44px circles */}
      <Row align="center" gap={4}>
        {SOCIAL_LINKS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="flex items-center justify-center w-11 h-11 rounded-full bg-ts-dark-green hover:opacity-80 transition-opacity"
          >
            <SocialIcon name={s.iconName} />
          </a>
        ))}
      </Row>

      {/* Copyright + nav links + sitemap */}
      <Column gap={1}>
        <span className="font-medium text-[12px] leading-[1.4] text-white/80">
          Copyright © 2026 Timeswap.
        </span>
        <Row align="center" gap={1}>
          {FOOTER_LINKS.map((link, i) => (
            <Row key={link.label} align="center" gap={1}>
              {i > 0 && <span className="text-white/40 text-[12px]"> • </span>}
              <Link
                href={link.href}
                className="font-medium text-[12px] leading-[1.4] text-white/80 hover:text-ts-primary transition-colors"
              >
                {link.label}
              </Link>
            </Row>
          ))}
        </Row>
        <Link
          href="/sitemap"
          className="font-medium text-[12px] leading-[1.4] text-white/80 hover:text-ts-primary transition-colors"
        >
          Sitemap
        </Link>
      </Column>
    </Column>
  );
}
