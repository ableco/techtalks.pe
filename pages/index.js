import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

function Able(props) {
  return (
    <svg viewBox="0 0 473 185" {...props}>
      <defs>
        <path id="a" d="M0 0L473 0 473 185 0 185z" />
      </defs>
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path
          d="M59.327 119.82l44.646-79.85.064 79.85h-44.71zm92.66 14.166V14.78L148.054 10l-66.51 18.67.138 4.768c6.529-.324 12.707-.903 17.331 2.549L35.445 148.546C26.058 165.192 16.262 175.568 0 175.568V181h67.756v-5.432c-26.5 0-34.44-9.112-25.058-26.173l13.229-23.857 48.11-.058v24.314c0 16.614-5.753 25.774-22.935 25.774V181H172v-5.432c-17.725 0-20.013-8.347-20.013-41.582zM403.837 116.204c.423-30.585 4.988-48.491 13.324-48.491 9.203 0 13.144 19.255 13.144 48.491h-26.468zM416.944 62C386.282 62 360 87.074 360 120.404 360 161.119 386.33 185 418.446 185c26.468 0 46.985-17.022 53.554-44.889l-4.485-.9c-4.464 14.682-18.439 27.04-33.444 27.04-17.29 0-30.509-17.533-30.509-44.728h65.957C474.121 85.822 455.71 62 416.944 62zM346.551 149.705V5.406L341.581 0l-47.4 13.277v4.531c8.12 0 10.931 6.535 10.931 15.28v116.617c0 15.969-6.218 24.894-18.112 24.894V180h76v-5.4c-12.389 0-16.449-8.926-16.449-24.895"
          fill="#1A1917"
          mask="url(#b)"
        />
        <path
          d="M232.737 176.305c-9.26 0-18.194-14.3-18.194-48.638V88.07c0-5.84 4.949-13.375 11.989-13.375 12.1 0 20.663 19.695 20.663 48.862 0 39.895-4.646 52.748-14.458 52.748zm16.847-114.191c-20.806 0-35.041 11.474-35.041 11.474V4.37L209.983 0 162 13.13v4.552c7.3 0 11.052 4.627 11.052 11.72v99.927C173.052 164.4 193.04 185 225.58 185 265.021 185 291 150.03 291 115.954c0-28.789-15.772-53.84-41.416-53.84z"
          fill="#1A1917"
          mask="url(#b)"
        />
      </g>
    </svg>
  );
}

function HomePage() {
  return (
    <main
      role="document"
      className="min-h-screen bg-white relative grid grid-rows-3"
      style={{
        gridTemplateRows: "60px 1fr 48px",
        backgroundSize: "28px 28px",
        backgroundImage:
          "radial-gradient(circle, #d7d7d7, #d7d7d7 1px, #ffffff 1px, #ffffff",
      }}
    >
      <nav className="flex items-end">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-6 items-center">
            <div className="flex-grow" />
            {/* <li>
              <Link href="/live">
                <a className="flex items-center space-x-2 text-gray-800 hover:text-black">
                  <GoPrimitiveDot className="text-red-500 w-4 h-4" />
                  <span>Live</span>
                </a>
              </Link>
            </li> */}
            <li className="flex items-baseline space-x-1">
              <span className="text-sm">Sponsored by</span>
              <a href="https://able.co" title="Able.co">
                <Able className="w-auto h-4" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="container mx-auto px-4 flex justify-center items-center flex-col space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl text-black text-center leading-none tracking-tighter">
            <span className="font-bold">Tech</span>{" "}
            <span className="font-light">Talks</span>
          </h1>
          <h2
            className="font-black text-5xl sm:text-7xl text-black text-center tracking-tight"
            style={{ lineHeight: ".8" }}
          >
            La comunidad de
            <br />
            tecnología del Perú
          </h2>
        </div>
        <div className="space-y-4 sm:space-x-4">
          <Link href="/cfp">
            <a className="block sm:inline-block font-semibold bg-black text-white border border-black transition-colors duration-300 rounded-full py-3 px-8 text-center hover:bg-white hover:text-black">
              Dar una charla
            </a>
          </Link>
          <Link href="/discord">
            <a className="block sm:inline-block font-semibold bg-discord text-white rounded-full py-3 px-8 space-x-2 text-center transition-colors duration-300 border border-discord hover:text-discord hover:bg-white">
              <FaDiscord className="w-6 h-6 inline-block" />
              <span>Únete a la comunidad </span>
            </a>
          </Link>
        </div>
      </header>

      <footer className="flex items-center justify-center px-4 divide-x divide-gray-600">
        {[]
          .concat({ href: "/coc", content: "Código de Conducta" })
          .map((link) => {
            return (
              <li key={link.href} className="hidden sm:block px-2">
                <Link href={link.href}>
                  <a className="text-gray-800 hover:text-black hover:underline">
                    {link.content}
                  </a>
                </Link>
              </li>
            );
          })}
      </footer>
    </main>
  );
}

export default HomePage;
