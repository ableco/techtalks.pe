import Section from "../ui/section";
import Wrapper from "../ui/wrapper";
import { H2 } from "../ui/heading";

function Venue() {
  return (
    <Section id="venue" inverted>
      <Wrapper center>
        <H2>Ubicación</H2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8861616153126!2d-77.03942968468401!3d-12.11994079141858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c82330fcab3b%3A0x736db860c0e22a6f!2sAble!5e0!3m2!1sen!2spe!4v1544112055034"
          height="300"
          frameBorder="0"
          allowFullScreen
        />
      </Wrapper>
      <style jsx>{`
        iframe {
          border: none;
          width: 100%;
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
