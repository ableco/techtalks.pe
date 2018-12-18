import format from "date-fns/format";
import locale from "date-fns/locale/es";

import Navigation from "../navigation";
import Name from "../name";
import Slogan from "../slogan";
import Button from "../ui/button";
import { H2 } from "../ui/heading";
import Wrapper from "../ui/wrapper";
import events from "../../data/events.json";

const lastEvent = events[0];

function Talk({ talk, isLast, isFirst }) {
  return (
    <>
      {!isFirst
        ? isLast
          ? talk.title[0].toLowerCase() === "i"
            ? " e "
            : " y "
          : ", "
        : null}
      <strong>{talk.title}</strong> con{" "}
      <a href={talk.url} target="_blank" rel="nofollow noopener">
        {talk.name}
      </a>
      <style jsx>{`
        a {
          color: black;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

function LastEvent() {
  return (
    <div className="container">
      <H2>Próximo Evento</H2>
      <p>
        Este{" "}
        <strong>
          {format(lastEvent.date, "dddd DD [de] MMMM", { locale })}
        </strong>{" "}
        vamos a hablar de{" "}
        {lastEvent.talks.map((talk, index) => (
          <Talk
            talk={talk}
            isFirst={index === 0}
            isLast={index === lastEvent.talks.length - 1}
          />
        ))}
      </p>
      <div className="button-container">
        <Button href={lastEvent.url}>Asistir</Button>
      </div>
      <style jsx>{`
        .container {
          flex: 1;
        }
        p {
          font-size: 16px;
          line-height: 1.5;
        }
        @media (min-width: 64em) {
          .container {
            max-width: 40%;
          text-align: right;
          }
        }
      `}</style>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <Navigation />
      <Wrapper>
        <header>
          <div>
            <Name />
            <Slogan />
            <div className="button-container">
              <Button href="https://goo.gl/forms/0XRxomZaK9gK13F03" invert>
                Quiero dar una charla
              </Button>
            </div>
          </div>
          {lastEvent.date !== "tbd" && <LastEvent />}
        </header>
      </Wrapper>
      <style jsx>{`
        .hero {
          background-color: white;
          background-image: radial-gradient(
            circle,
            #d7d7d7,
            #d7d7d7 1px,
            #fff 1px,
            #fff
          );
          background-size: 28px 28px;
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-direction: column;
        }
        .button-container {
          margin-bottom: 2.5rem;
        }
        @media (min-width: 64em) {
          .button-container {
            margin-bottom: 5rem;
          }
          header {
            flex-direction: row;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
