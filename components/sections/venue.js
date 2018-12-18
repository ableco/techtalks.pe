import Section from "../ui/section";
import Wrapper from "../ui/wrapper";
import { H2 } from "../ui/heading";
import venue from "../../data/venue.json";

function Venue() {
  return (
    <Section id="venue" inverted>
      <Wrapper center>
        <H2>Ubicación</H2>
        <iframe
          src={venue.map}
          height="300"
          frameBorder="0"
          allowFullScreen
        />
      </Wrapper>
      <style jsx>{`
        iframe {
          border: none;
          width: 70%;
        }
        @media (max-width: 30em) {
          iframe {
            width: 100%;
          }
        }
      `}</style>
    </Section>
  );
}

export default Venue;
