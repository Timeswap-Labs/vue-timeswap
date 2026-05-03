import type { ReactNode } from "react";

interface ViewportShellProps {
  /** Rendered and visible below 480px (md breakpoint). Hidden above. */
  mobile: ReactNode;
  /** Rendered and visible at 480px and above (md breakpoint). Hidden below. */
  desktop: ReactNode;
}

/**
 * Renders two separate layout trees and uses CSS display to show only the
 * appropriate one. `display: none` removes the hidden branch from both visual
 * rendering and screen-reader traversal — no JS or hydration required.
 *
 * Split point: md = 480px (project breakpoint contract).
 *
 * Usage:
 *   <ViewportShell mobile={<HeroMobile />} desktop={<HeroDesktop />} />
 *
 * Rule: mobile slot must contain zero md:/lg:/xl:/xxl: modifiers.
 *       desktop slot must contain zero block/hidden mobile-detection patterns.
 */
export function ViewportShell({ mobile, desktop }: ViewportShellProps) {
  return (
    <>
      <div className="md:hidden w-full left-0 right-0">{mobile}</div>
      <div className="hidden md:block w-full left-0 right-0">{desktop}</div>
    </>
  );
}
