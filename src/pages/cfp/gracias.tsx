import { LinkButton } from "../../components/button";
import { Footer } from "../../components/footer";
import { Main } from "../../components/main";
import { Nav } from "../../components/nav";

type GraciasPageProps = {};

export default function GraciasPage({}: GraciasPageProps) {
  return (
    <Main
      className="grid grid-rows-3"
      style={{ gridTemplateRows: "60px 1fr 48px" }}
    >
      <Nav
        links={[
          { href: "/", content: "Inicio" },
          { href: "/cfp", content: "Proponer otra charla" },
        ]}
      />

      <section className="container max-w-screen-md mx-auto pt-12 px-4 space-y-12">
        <h1 className="text-3xl md:text-5xl font-bold leading-none">
          ¡Muchas gracias por enviar tu propuesta de charla!
        </h1>

        <p className="text-lg text-gray-600">
          Vamos a contactarnos contigo a la dirección de correo que escribiste
          para coordinar la fecha de tu charla y ayudarte a prepararte en caso
          de necesitarlo
        </p>

        <LinkButton
          href="/cfp"
          label="Proponer otra charla"
          className="bg-black text-white border-black hover:bg-white hover:text-black"
        />
      </section>

      <Footer />
    </Main>
  );
}
