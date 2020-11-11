import { FaDiscord } from "react-icons/fa";
import { LinkButton } from "../components/button";
import { Footer } from "../components/footer";
import { Main } from "../components/main";
import { Nav } from "../components/nav";

type HomePageProps = {};

function HomePage({}: HomePageProps) {
  return (
    <Main
      className="grid grid-rows-3"
      style={{ gridTemplateRows: "60px 1fr 48px" }}
    >
      <Nav />

      <header className="container mx-auto px-4 flex justify-center items-center flex-col space-y-12">
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-4xl text-black text-center leading-none tracking-tighter">
            <span className="font-bold">Tech</span>{" "}
            <span className="font-light">Talks</span>
          </h1>
          <h2
            className="font-black text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black text-center tracking-tight"
            style={{ lineHeight: ".8" }}
          >
            La comunidad de
            <br />
            tecnología del Perú
          </h2>
        </div>
        <div className="space-y-4 sm:space-x-4 text-center">
          <LinkButton
            href="/cfp"
            label="Dar una charla"
            className="bg-black text-white border-black hover:bg-white hover:text-black"
          />

          <LinkButton
            href="/discord"
            label={<span>Únete a la comunidad </span>}
            className="bg-discord text-white border-discord hover:text-discord hover:bg-white"
            icon={<FaDiscord className="w-6 h-6 inline-block" />}
          />
        </div>
      </header>

      <Footer />
    </Main>
  );
}

export default HomePage;
