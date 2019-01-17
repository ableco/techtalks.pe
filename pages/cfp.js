import Head from "next/head";
import format from "date-fns/format";
import addMonths from "date-fns/add_months";
import locale from "date-fns/locale/es";
import useOnlineStatus from "@rehooks/online-status";

import Navigation from "../components/navigation";
import Section from "../components/ui/section";
import Subtext from "../components/ui/subtext";
import Wrapper from "../components/ui/wrapper";
import Button from "../components/ui/button";
import Fieldset from "../components/ui/fieldset";
import Input from "../components/ui/input";

import useLocalState from "../lib/use-local-state";

function CallForPapersPage() {
  const [name, setName] = useLocalState("cfp-name", "");
  const [email, setEmail] = useLocalState("cfp-email", "");
  const [topic, setTopic] = useLocalState("cfp-topic", "");
  const [months, setMonths] = useLocalState("cfp-months", []);
  const isOnline = useOnlineStatus();

  return (
    <main>
      <Head>
        <title>Propón una charla | Tech Talks</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="¡Si hay algo en lo que eres experto, o estás aprendiendo, o de lo que te gustaría hablarnos, eres más que bienvenido!"
        />
        <meta name="language" content="es" />
        <meta name="pagename" content="Tech Talks" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="robots" content="all" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-title" content="Tech Talks" />
        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
        <link rel="manifest" href="/static/manifest.json" />
      </Head>

      <Section style={{ paddingTop: 0 }}>
        <Navigation />
        <Wrapper>
          <h1>Propón una charla para Tech Talks</h1>
          <Subtext>
            ¡Si hay algo en lo que eres experto, o estás aprendiendo, o de lo
            que te gustaría contarnos, eres más que bienvenido a dar una charla!
          </Subtext>
          <form
            name="cfp"
            method="post"
            action="/cfp/gracias/"
            data-netlify="true"
            data-netlify-honeypot="true"
          >
            <input type="hidden" name="form-name" value="cfp" />

            <Fieldset htmlFor="name" legend="¿Cómo te llamas?">
              <Input
                autoFocus
                id="name"
                name="name"
                type="text"
                value={name}
                placeholder="Jane Doe"
                onChange={event => setName(event.target.value)}
                required
              />
            </Fieldset>

            <Fieldset
              htmlFor="email"
              legend="¿A qué email podríamos contactarte"
              description="Nos vamos a contactar a este email para confirmar la fecha de la
                charla y, si lo necesitas, ayudarte a prepararla."
            >
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                placeholder="tu@email.com"
                onChange={event => setEmail(event.target.value)}
                required
              />
            </Fieldset>

            <Fieldset
              htmlFor="topic"
              legend="¿De qué tema te gustaría hablar?"
              description="Cuéntanos más sobre que te gustaría hablar, no importa si ya
                tienes todo listo o es apenas una idea ¡Nosotros te ayudamos a
                prepararte!"
            >
              <Input
                id="topic"
                name="topic"
                type="text"
                value={topic}
                placeholder="React.js, Unity, Rails, Android"
                onChange={event => setTopic(event.target.value)}
                required
              />
            </Fieldset>

            <Fieldset
              htmlFor="months"
              legend="¿Cuándo podrías dar la charla?"
              description="Cuentanos en que meses podrías venir a dar tu charla, ten en
                cuenta normalmente los eventos se realizan el segundo martes de
                cada mes."
            >
              <Input
                id="months"
                name="months"
                type="text"
                value={months}
                placeholder={`Puedo dar la charla en ${format(
                  addMonths(new Date(), 3),
                  "MMMM",
                  {
                    locale
                  }
                )}`}
                onChange={event => setMonths(event.target.value)}
                required
              />
            </Fieldset>

            {!isOnline && (
              <Subtext className="form-desc">
                ¡Oops! Parece que actualmente <em>estás offline</em>, no te
                preocupes, hemos guardado lo que escribiste en tu navegador{" "}
                <em>
                  ¡Puedes volver a entrar cuando estés online de nuevo y
                  enviarlo!
                </em>
              </Subtext>
            )}

            <div className="button-container">
              <Button type="submit" invert big disabled={!isOnline}>
                Proponer charla
              </Button>
            </div>
          </form>
        </Wrapper>
      </Section>

      <style jsx global>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          margin: 0;
        }
      `}</style>

      <style jsx>{`
        h1 {
          font-size: 3rem;
          margin: 5rem 0 3rem;
          letter-spacing: -0.05em;
        }

        :global(input) {
          width: 100%;
        }

        .button-container {
          padding-left: 0.75rem;
        }

        @media (min-width: 64em) {
          :global(input) {
            width: 75%;
          }
        }
      `}</style>
    </main>
  );
}

export default CallForPapersPage;
