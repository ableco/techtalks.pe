import { CSSProperties, ReactNode } from "react";
import clsx, { ClassValue } from "clsx";

type MainProps = {
  children: ReactNode;
  style?: CSSProperties;
  className?: ClassValue;
};

export function Main({ children, className, style = {} }: MainProps) {
  return (
    <main
      role="document"
      className={clsx("min-h-screen bg-white", className)}
      style={{
        ...style,

        backgroundSize: "28px 28px",
        backgroundImage:
          "radial-gradient(circle, #d7d7d7, #d7d7d7 1px, #ffffff 1px, #ffffff",
      }}
    >
      {children}
    </main>
  );
}
