import Link from "next/link";

type FooterProps = {};

export function Footer({}: FooterProps) {
  return (
    <footer className="flex items-center justify-center divide-x divide-gray-600 h-12">
      {[]
        .concat({ href: "/coc", content: "Código de Conducta" })
        .map((link) => {
          return (
            <Link href={link.href} key={link.href}>
              <a className="text-gray-800 hover:text-black hover:underline px-2 block">
                {link.content}
              </a>
            </Link>
          );
        })}
    </footer>
  );
}
