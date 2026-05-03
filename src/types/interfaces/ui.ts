import React from "react";

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export interface ProfileCardProps extends BaseProps {
  name: string;
  role: string | readonly string[];
  image: string;
  variant?: "portrait" | "landscape";
  background?: "core" | "team" | "advisor";
  /**
   * Controls card dimensions and text scale.
   * "mobile"  — portrait 156×210px, landscape full-width, 11px text.
   * "desktop" — portrait 223×300px, landscape 270px fixed, 16px text.
   * Defaults to "desktop". Mobile layout files always pass "mobile" explicitly.
   */
  size?: "mobile" | "desktop";
  /** Allow data-* debug attribute overrides e.g. data-ui="AdvisorCard" */
  [key: `data-${string}`]: string | undefined;
}
