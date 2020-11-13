import Link from "next/link";
import { ReactNode } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { Able } from "./logo";

type NavProps = {
  hasLive?: boolean;
  links?: { href: string; content: ReactNode }[];
};

export function Nav({ hasLive = false, links = [] }: NavProps) {
  return (
    <nav className="flex items-center h-15">
      <div className="container mx-auto px-4 flex space-x-6 items-center">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <a className="hidden sm:flex items-center space-x-2 text-gray-800 hover:text-black hover:underline">
              {link.content}
            </a>
          </Link>
        ))}

        {hasLive ? (
          <Link href="/live">
            <a className="flex items-center space-x-2 text-gray-800 hover:text-black hover:underline">
              <GoPrimitiveDot className="text-red-500 w-4 h-4" />
              <span>Live</span>
            </a>
          </Link>
        ) : null}

        <div className="flex-grow" />

        <div className="flex items-baseline space-x-1">
          <span className="text-sm">Sponsored by</span>
          <a href="https://able.co" title="Able.co">
            <Able className="w-auto h-4 text-brand-able" />
          </a>
        </div>
      </div>
    </nav>
  );
}
