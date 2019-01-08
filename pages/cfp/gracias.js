import Head from "next/head";

import Navigation from "../../components/navigation";
import Section from "../../components/ui/section";
import Wrapper from "../../components/ui/wrapper";
import Subtext from "../../components/ui/subtext";
import Button from "../../components/ui/button";

function CFPThanks(props) {
  console.log(props);
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
        <meta name="robots" content="none" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-title" content="Tech Talks" />
        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
        <link rel="manifest" href="/static/manifest.json" />
      </Head>

      <Section id="thanks" style={{ paddingTop: 0 }}>
        <Navigation />
        <Wrapper>
          <h1>¡Muchas gracias por enviar tu propuesta de charla!</h1>
          <Subtext>
            Vamos a contactarnos contigo a [email] para coordinar la fecha de tu charla y ayudarte a prepararte en caso de necesitarlo.
          </Subtext>
          <Button href="/cfp" invert>Proponer otra charla</Button>
        </Wrapper>
      </Section>

      <style jsx global>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          margin: 0;
        }

        #thanks {
          min-height: 100vh;
        }
      `}</style>

      <style jsx>{`
        h1 {
          font-size: 3rem;
          margin: 5rem 0 3rem;
          letter-spacing: -0.05em;
        }
      `}</style>
    </main>
  );
}

export default CFPThanks;
