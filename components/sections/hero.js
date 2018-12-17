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
          {lastEvent.date !== "tbd" && (
            <div>
              <H2>Próximo Evento</H2>
              <strong>{format(lastEvent.date, "[El] dddd DD [de] MMMM", { locale })}</strong>
            </div>
          )}
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
