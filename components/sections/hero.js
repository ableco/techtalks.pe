import Navigation from "../navigation";
import Title from "../title";
import Slogan from "../slogan";
import Button from "../ui/button";
import Wrapper from "../ui/wrapper";
import NextEvent from "../next-event";

function Hero() {
  return (
    <section id="hero" className="hero">
      <Navigation />
      <Wrapper>
        <header>
          <div>
            <Title />
            <Slogan />
            <div className="button-container">
              <Button href="/cfp" invert>
                Quiero dar una charla
              </Button>
            </div>
          </div>
          <NextEvent />
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
