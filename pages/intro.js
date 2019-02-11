import SlideShow from "../components/slideshow";
import Name from "../components/name";
import CodeableLogo from "../components/logos/codeable";
import AbleLogo from "../components/logos/able";

function SlidePresentation() {
  return (
    <section>
      <h1><small><small>Bienvenidos a</small></small><br /><Name /></h1>
      <style jsx>{`
        section {
          text-align: center;
          width: 75%;
        }
        h1 {
          font-size: 5vw;
        }
      `}</style>
    </section>
  );
}

function SlideSponsors() {
  return (
    <section>
      <h2>Sponsors</h2>
      <div>
        <figure className="able">
          <AbleLogo />
        </figure>
        <figure className="codeable">
          <CodeableLogo />
        </figure>
      </div>
      <style jsx>{`
        section {
          text-align: center;
          width: 75%;
        }
        h2 {
          font-size: 4vw;
        }
        div {
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 100%;
        }
        .codeable {
          font-size: 5vw;
        }
      `}</style>
    </section>
  );
}

function SlideNextEvents() {
  return (
    <section>
      <h2>Próximo evento</h2>
      <style jsx>{`
        section {
          text-align: center;
          width: 75%;
        }
        h2 {
          font-size: 5vw;
        }
      `}</style>
    </section>
  );
}

function Intro() {
  return (
    <SlideShow>
      <SlidePresentation />
      <SlideSponsors />
      <SlideNextEvents />
    </SlideShow>
  );
}

Intro.noFooter = true;

export default Intro;
