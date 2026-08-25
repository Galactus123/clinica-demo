"use client";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  const colors = {
    dark: {
      bg: "bg-primary",
      text: "text-white",
      subtext: "text-navy-300",
      icon: "text-accent",
    },
    light: {
      bg: "bg-white",
      text: "text-primary",
      subtext: "text-navy-500",
      icon: "text-accent",
    },
  };

  const c = colors[variant];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${c.bg} shadow-lg`}>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
        >
          <path
            d="M16 4C12.5 4 10 6.5 10 9C10 11 11 12.5 11.5 13.5C11 14.5 10 15.5 9 16.5C7.5 18 6 20 6 22.5C6 25.5 8.5 28 11.5 28C13.5 28 15 27 16 26C17 27 18.5 28 20.5 28C23.5 28 26 25.5 26 22.5C26 20 24.5 18 23 16.5C22 15.5 21 14.5 20.5 13.5C21 12.5 22 11 22 9C22 6.5 19.5 4 16 4Z"
            fill="currentColor"
            className={c.icon}
          />
          <path
            d="M16 8C14 8 12.5 9.5 12.5 11C12.5 12 13 12.8 13.5 13.5L16 16L18.5 13.5C19 12.8 19.5 12 19.5 11C19.5 9.5 18 8 16 8Z"
            fill="currentColor"
            className={c.bg}
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`text-lg font-bold leading-tight ${c.text} sm:text-xl tracking-wide`}>
          Oral Premium
        </span>
        <span className={`hidden text-[10px] font-semibold uppercase tracking-[0.2em] ${c.subtext} sm:block`}>
          Clínica Dentária
        </span>
      </div>
    </div>
  );
}
