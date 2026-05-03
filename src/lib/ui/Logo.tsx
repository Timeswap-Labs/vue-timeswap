import { BaseProps } from "@/types/interfaces/ui";

export function Logo({ className }: BaseProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26 6V8C26 10.2091 24.2091 12 22 12L16 16L10 12C7.79086 12 6 10.2091 6 8V6C6 4.89543 6.89543 4 8 4H24C25.1046 4 26 4.89543 26 6Z"
          fill="#7B78FF"
        />
        <path
          d="M16 16L22 20C24.2091 20 26 21.7909 26 24V26C26 27.1046 25.1046 28 24 28H8C6.89543 28 6 27.1046 6 26V24C6 21.7909 7.79086 20 10 20L16 16Z"
          fill="#79FFEA"
        />
        <path
          d="M16 16L22 12C24.2091 12 26 10.2091 26 8V24C26 21.7909 24.2091 20 22 20L16 16Z"
          fill="#12429F"
        />
      </svg>
      <span className="text-xl font-bold tracking-tight text-white">TIMESWAP</span>
    </div>
  );
}
