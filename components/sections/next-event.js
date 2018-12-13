import Section from "../ui/section";
import Wrapper from "../ui/wrapper";
import { H2 } from "../ui/heading";
import Subtext from "../ui/subtext";
import format from "date-fns/format";
import locale from "date-fns/locale/es";
import Person from "../person";

import talks from "../../data/talks.json";

const lastTalk = talks[0];

function Agenda({ speakers }) {
  return (
    <div>
      {speakers.map(speaker => (
        <Person {...speaker} key={speaker.name} />
      ))}

      <style jsx>{`
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
            margin-right: -1em;
          }
        }
      `}</style>
    </div>
  );
}

function NextEvent() {
  if (
    lastTalk.date.toLowerCase() === "tbd" ||
    new Date(lastTalk.date) < Date.now()
  ) {
    return null;
  }

  const date = format(lastTalk.date, "DD [de] MMMM", { locale });

  return (
    <Section id="next-event" inverted>
      <Wrapper center>
        <H2 style={{ margin: 0 }}>Próximo Evento</H2>
        <Subtext style={{ marginBottom: "3em" }}>
          Ven a nuestro próximo meetup el día {date}
        </Subtext>
        <Agenda speakers={lastTalk.speakers} />
      </Wrapper>
    </Section>
  );
}

export default NextEvent;
