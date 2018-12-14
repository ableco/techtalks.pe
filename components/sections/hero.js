import Navigation from "../navigation";
import Name from "../name";
import Slogan from "../slogan";
import Button from "../ui/button";

import Wrapper from "../ui/wrapper";

function Hero() {
  return (
    <section id="hero" className="hero">
      <Navigation />
      <Wrapper>
        <Name style={{ fontSize: "5rem" }} />
        <Slogan />
        <div className="button-container">
          <Button href="https://goo.gl/forms/0XRxomZaK9gK13F03" invert>
            Quiero dar una charla
          </Button>
        </div>
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
        .button-container {
          margin-bottom: 2.5rem;
        }
        @media (min-width: 64em) {
          .button-container {
            margin-bottom: 5rem;
          }
        }
      `}</style>
    </section>
  );
}

function OldHero() {
  return (
    <section id="hero" className="hero">
      <Navigation />
      <header>
        <Name />
        <Slogan />
        <div className="button-container">
          <Button href="https://goo.gl/forms/0XRxomZaK9gK13F03" invert>
            Dar una charla
          </Button>
        </div>
      </header>
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
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .button-container {
          margin-bottom: 2.5rem;
        }
        @media (min-width: 64em) {
          .button-container {
            margin-bottom: 5rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
