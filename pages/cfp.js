import Head from "next/head";
import format from "date-fns/format";
import locale from "date-fns/locale/es";

import Navigation from "../components/navigation";
import Section from "../components/ui/section";
import Subtext from "../components/ui/subtext";
import Wrapper from "../components/ui/wrapper";
import Button from "../components/ui/button";

import useLocalState from "../lib/use-local-state";

const ONE_MONTH = 2592000000;

function CallForPapersPage() {
  const [email, setEmail, clearEmail] = useLocalState("cfp-email", "");
  const [topic, setTopic, clearTopic] = useLocalState("cfp-topic", "");
  const [months, setMonths, clearMonths] = useLocalState("cfp-months", []);

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
            <fieldset>
              <label htmlFor="email">
                <legend>¿A qué email podríamos contactarte?</legend>
              </label>
              <Subtext className="form-desc">
                Nos vamos a contactar a este email para confirmar la fecha de la
                charla y, si lo necesitas, ayudarte a prepararla.
              </Subtext>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                placeholder="tu@email.com"
                onChange={event => setEmail(event.target.value)}
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="topic">
                <legend>¿De qué tema te gustaría hablar?</legend>
              </label>
              <Subtext className="form-desc">
                Cuéntanos más sobre que te gustaría hablar, no importa si ya
                tienes todo listo o es apenas una idea ¡Nosotros te ayudamos a
                prepararte!
              </Subtext>
              <input
                id="topic"
                name="topic"
                type="text"
                value={topic}
                placeholder="React.js, Unity, Rails, Android"
                onChange={event => setTopic(event.target.value)}
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="months">
                <legend>¿En qué meses podrías dar la charla?</legend>
              </label>
              <Subtext className="form-desc">
                Cuentanos en que meses podrías venir a dar tu charla, ten en
                cuenta normalmente los eventos se realizan el segundo martes de
                cada mes.
              </Subtext>
              <input
                id="months"
                name="months"
                type="text"
                value={months}
                placeholder={format(new Date().getTime() + ONE_MONTH, "MMMM", {
                  locale
                })}
                onChange={event => setMonths(event.target.value)}
                required
              />
            </fieldset>
            <div className="button-container">
              <Button type="submit" invert big>
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

        form {
          max-width: 1000px;
        }

        fieldset {
          border: none;
          background: white;
          padding: 1em 1em 1em 3em;
          padding: 0;
          margin: 0 0 5rem;
        }

        legend {
          background: white;
          font-size: 2rem;
          font-weight: 600;
          margin-top: 0;
          margin-bottom: 0rem;
        }

        fieldset :global(.form-desc) {
          font-size: 1.125rem;
        }

        input {
          border: 2px solid black;
          border-radius: 0.5rem;
          box-sizing: border-box;
          color: gray;
          font-size: 1.25rem;
          padding: 0.75em 1.5em;
          transition: 100ms color ease-in-out;
          width: 100%;
        }

        input:focus {
          color: black;
          outline: none;
        }

        @media (min-width: 64em) {
          input {
            width: 75%;
          }
        }
      `}</style>
    </main>
  );
}

export default CallForPapersPage;
