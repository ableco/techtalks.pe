import Section from "../ui/section";
import Wrapper from "../ui/wrapper";
import { H2, H3 } from "../ui/heading";
import Button from "../ui/button";

function Features() {
  return (
    <Section id="features" inverted>
      <Wrapper center>
        <header>
          <H2 style={{ margin: 0, marginBottom: "1em" }}>¿Por qué ser parte de Tech Talks?</H2>
        </header>
        <div className="row">
          <div className="column">
            <H3>Comunidad de Tecnología</H3>
            <p>
              Como a tí, nos encanta la tecnología y hablar de ella, <strong>puedes
              formar parte de nuestra comunidad en Spectrum</strong> donde puedes
              encontrarnos todos los días para seguir hablando.
            </p>
            <Button href="https://spectrum.chat/tech-talks-pe/">
              Únete a nuestra comunidad
            </Button>
          </div>
          <div className="column">
            <H3>Espacio Libre y Abierto</H3>
            <p>
              Somos una comunidad con ganas de aprender siempre abierta a nuevas
              propuesta de charlas. Si hay algo en lo que eres experto o estás
              aprendiendo, <strong>la mejor forma de aprender es enseñar</strong>.
            </p>
            <Button href="https://goo.gl/forms/0XRxomZaK9gK13F03">
              Propón una charla
            </Button>
          </div>
        </div>
      </Wrapper>
      <style jsx>{`
        .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .column {
          flex: 1;
          margin: 0 2em;
          text-align: justify;
          hyphens: auto;
        }
        .column:first-of-type {
          margin-left: 0;
        }
        .column:last-of-type {
          margin-right: 0;
        }
        p {
          line-height: 1.5;
        }
        @media (max-width: 64em) {
          .row {
            flex-direction: column;
          }
          .column {
            margin: 0;
          }
          header {
            padding: 0 1em;
            text-align: left;
          }
        }
      `}</style>
    </Section>
  );
}

export default Features;
