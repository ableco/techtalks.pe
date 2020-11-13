import { ReactNode } from "react";
import Link from "next/link";
import clsx, { ClassValue } from "clsx";

type LinkButtonProps = {
  href: string;
  label: ReactNode;
  icon?: ReactNode;
  className?: ClassValue;
};

type FormButton = {
  label: ReactNode;
  icon?: ReactNode;
  className?: ClassValue;
};

export function LinkButton({ href, label, icon, className }: LinkButtonProps) {
  return (
    <Link href={href}>
      <a
        className={clsx(
          "block sm:inline-block font-semibold border transition-colors duration-300 rounded-full py-1 px-8 sm:py-2 sm:px-8 space-x-2 text-center select-none",
          className
        )}
      >
        {icon}
        {label}
      </a>
    </Link>
  );
}

export function FormButton({ label, icon, className }: FormButton) {
  return (
    <button
      className={clsx(
        "block sm:inline-block font-semibold border transition-colors duration-300 rounded-full py-1 px-8 sm:py-2 sm:px-8 space-x-2 text-center select-none",
        className
      )}
    >
      {icon}
      {label}
    </button>
  );
}
