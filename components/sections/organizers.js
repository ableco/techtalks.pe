import Section from "../ui/section";
import Wrapper from "../ui/wrapper";
import Subtext from "../ui/subtext";
import { H2 } from "../ui/heading";
import Person from "../person";

import organizers from "../../data/organizers.json";

function Organizers() {
  return (
    <Section id="organizers" inverted>
      <Wrapper center>
        <H2>Organizadores</H2>
        <Subtext>Las siguiente personas hacen posible Tech Talks</Subtext>
        <div>
          {organizers.map(organizer => <Person key={organizer.name} {...organizer} />)}
        </div>
      </Wrapper>

      <style jsx>{`
        figure {
          margin: 0;
        }
        div {
          padding: 2em 0 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        @media (max-width: 60em) {
          div {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </Section>
  )
}

export default Organizers;
