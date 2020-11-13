import { FaDiscord } from "react-icons/fa";
import { LinkButton } from "../components/button";
import { Footer } from "../components/footer";
import { TechTalks } from "../components/logo";
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
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl text-black text-center leading-none tracking-tighter">
            <TechTalks className="inline-block h-3 sm:h-5 md:h-6 lg:h-8" />
          </h1>
          <h2
            className="font-extrabold text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-black text-center tracking-tight"
            style={{ lineHeight: ".8" }}
          >
            Crecemos más
            <br />
            cuando compartimos
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
            className="bg-brand-discord text-white border-brand-discord hover:text-brand-discord hover:bg-white"
            icon={<FaDiscord className="w-6 h-6 inline-block" />}
          />
        </div>
      </header>

      <Footer />
    </Main>
  );
}

export default HomePage;
