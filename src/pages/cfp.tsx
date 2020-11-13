import { FormButton } from "../components/button";
import { Footer } from "../components/footer";
import { Main } from "../components/main";
import { Nav } from "../components/nav";

type CFPPageProps = {};

export default function CFPPage({}: CFPPageProps) {
  return (
    <Main className="space-y-12">
      <Nav links={[{ href: "/", content: "Inicio" }]} />

      <header className="container mx-auto max-w-screen-sm px-4 space-y-2">
        <h1 className="text-3xl md:text-5xl font-bold leading-none">Enséñanos algo</h1>
        <p className="text-lg text-gray-600">
          ¡Da una charla en Tech Talks y enséñanos algo que sepas, en lo que
          eres experto o que hayas creado!
        </p>
      </header>

      <form
        name="cfp"
        method="post"
        action="/cfp/gracias/"
        data-netlify="true"
        data-netlify-honeypot="true"
        className="container mx-auto max-w-screen-sm px-4 space-y-10"
      >
        <label className="block space-y-2">
          <span className="text-2xl sm:text-3xl font-medium">
            ¿Cómo te llamas?
          </span>
          <input name="name" autoComplete="given-name" type="text" placeholder="Jane Doe" className="form-input w-full" required />
        </label>

        <label className="block space-y-2">
          <span className="text-2xl sm:text-3xl font-medium">
            ¿A qué email podríamos contactarte?
          </span>
          <p className="text-gray-500">
            Nos vamos a contactar a este email para confirmar la charla y, si lo
            necesitas, ayudarte a prepararla
          </p>
          <input name="email" type="email" placeholder="tu@email.com" className="form-input w-full" required />
        </label>

        <label className="block space-y-2">
          <span className="text-2xl sm:text-3xl font-medium">
            ¿De qué tema te gustaría hablar?
          </span>
          <p className="text-gray-500">
            Cuéntanos más sobre el tema del que te gustaría hablar, no importa
            si ya tienes todo listo o es apenas una idea ¡Nosotros te ayudamos a
            prepararte!
          </p>
          <input name="topic" type="text" placeholder="Diseño de APIs" className="form-input w-full" required />
        </label>

        <FormButton
          label="Enviar propuesta"
          className="bg-black text-white border-black hover:bg-white hover:text-black"
        />
      </form>

      <Footer />
    </Main>
  );
}
