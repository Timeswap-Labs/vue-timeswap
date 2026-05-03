import React from "react";
import { cn } from "@/utils/core/cn";

type AsProp<T extends React.ElementType> = {
  as?: T;
};

type PolymorphicComponentProps<T extends React.ElementType, Props = object> = AsProp<T> &
  React.ComponentPropsWithoutRef<T> &
  Props;

export function Container<T extends React.ElementType = "div">({
  className,
  children,
  as,
  ...props
}: PolymorphicComponentProps<T>) {
  const Component = as || "div";
  return (
    <Component
      data-ui="Container"
      className={cn(
        "w-full !max-w-none mx-auto px-6 md:px-8 lg:px-12 xl:px-[80px] xxl:px-[116px]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Section<T extends React.ElementType = "section">({
  className,
  children,
  as,
  ...props
}: PolymorphicComponentProps<T>) {
  const Component = as || "section";
  return (
    <Component data-ui="Section" className={cn("py-20 md:py-32", className)} {...props}>
      {children}
    </Component>
  );
}

export function Box<T extends React.ElementType = "div">({
  className,
  children,
  as,
  ...props
}: PolymorphicComponentProps<T>) {
  const Component = as || "div";
  return (
    <Component data-ui="Box" className={cn(className)} {...props}>
      {children}
    </Component>
  );
}

interface FlexProps {
  align?: "start" | "end" | "center" | "baseline" | "stretch";
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  gap?: number | string;
  wrap?: boolean;
}

const alignMap = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch",
};

const justifyMap = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const gapMap: Record<number, string> = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  7: "gap-7",
  8: "gap-8",
  9: "gap-9",
  10: "gap-10",
  11: "gap-11",
  12: "gap-12",
  14: "gap-14",
  16: "gap-16",
  20: "gap-20",
  24: "gap-24",
  28: "gap-28",
  32: "gap-32",
  36: "gap-36",
  40: "gap-40",
  44: "gap-44",
  48: "gap-48",
  52: "gap-52",
  56: "gap-56",
  60: "gap-60",
  64: "gap-64",
};

export function Row<T extends React.ElementType = "div">({
  className,
  children,
  as,
  align,
  justify,
  gap,
  wrap,
  ...props
}: PolymorphicComponentProps<T, FlexProps>) {
  const Component = as || "div";
  const gapClass =
    typeof gap === "number"
      ? gapMap[gap] || `gap-[${gap * 4}px]`
      : gap?.startsWith("[")
        ? `gap-${gap}`
        : `gap-[${gap}]`;

  return (
    <Component
      data-ui="Row"
      className={cn(
        "flex flex-row w-full",
        align && alignMap[align],
        justify && justifyMap[justify],
        gap && gapClass,
        wrap && "flex-wrap",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Column<T extends React.ElementType = "div">({
  className,
  children,
  as,
  align,
  justify,
  gap,
  ...props
}: PolymorphicComponentProps<T, FlexProps>) {
  const Component = as || "div";
  const gapClass =
    typeof gap === "number"
      ? gapMap[gap] || `gap-[${gap * 4}px]`
      : gap?.startsWith("[")
        ? `gap-${gap}`
        : `gap-[${gap}]`;

  return (
    <Component
      data-ui="Column"
      className={cn(
        "flex flex-col w-full",
        align && alignMap[align],
        justify && justifyMap[justify],
        gap && gapClass,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

interface GridProps {
  cols?: number | string;
  gap?: number | string;
  align?: "start" | "end" | "center" | "baseline" | "stretch";
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
}

export function Grid<T extends React.ElementType = "div">({
  className,
  children,
  as,
  cols = 1,
  gap = 4,
  align,
  justify,
  ...props
}: PolymorphicComponentProps<T, GridProps>) {
  const Component = as || "div";
  const gapClass =
    typeof gap === "number"
      ? gapMap[gap] || `gap-[${gap * 4}px]`
      : gap?.startsWith("[")
        ? `gap-${gap}`
        : `gap-[${gap}]`;

  return (
    <Component
      data-ui="Grid"
      className={cn(
        "grid w-full",
        cols === 1 && "grid-cols-1",
        cols === 2 && "grid-cols-1 md:grid-cols-2",
        cols === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        cols === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        gap && gapClass,
        align && alignMap[align],
        justify && justifyMap[justify],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
