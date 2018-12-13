import Section from "../ui/section";
import Wrapper from "../ui/wrapper";

function Sponsors() {
  return (
    <Section id="sponsors">
      <Wrapper center>
        <h2>Sponsors</h2>
        <p>Las siguientes empresas son sponsors de Tech Talks</p>
        <div>
          <figure>
            <a
              href="https://able.co"
              title="Ir al sitio de Able"
              target="_blank"
              rel="nofollow noopener"
            >
              <img src="/static/logos/able.png" alt="Able" />
            </a>
          </figure>
        </div>
      </Wrapper>

      <style jsx>{`
        h2 {
          font-size: 2em;
          font-weight: 600;
        }
        p {
          color: #999;
          font-size: 1.25em;
          margin-bottom: 2em;
        }
        figure {
          margin: 0;
        }
        div {
          padding: 2em 0;
        }
      `}</style>
    </Section>
  );
}

export default Sponsors;
