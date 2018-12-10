import Navigation from "./navigation";
import Name from "./name";
import Slogan from "./slogan";
import Button from "./button";

function Hero() {
  return (
    <section className="hero">
      <Navigation />
      <Name />
      <Slogan />
      <div className="button-container">
        <Button href="https://goo.gl/forms/0XRxomZaK9gK13F03" invert>
          Dar una charla
        </Button>
      </div>
      <style jsx>{`
        .hero {
          background-color: white;
          background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);
          background-size: 28px 28px;
          height: 50vh;
          min-height: 400px;
          text-align: center;
          display: flex;
          justify-content: center;
          align-content: center;
          flex-direction: column;
          width: 100%;
          position: relative;
        }
        .button-container {
          position: absolute;
          bottom: 3em;
          left: 0;
          right: 0;
          text-align: center;
        }
        @media (max-width: 60em) {
          .button-container {
            bottom: 1.5em;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
