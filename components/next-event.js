import format from "date-fns/format";
import locale from "date-fns/locale/es";

import Button from "./ui/button";
import { H2 } from "./ui/heading";
import Talk from "./talk";
import getNextEvent from "../lib/get-next-event";

function LastEvent() {
  const nextEvent = getNextEvent(new Date());
  if (!nextEvent) return null;

  return (
    <div className="container">
      <H2>Próximo Evento</H2>
      <p>
        Este{" "}
        <strong>
          {format(nextEvent.date, "dddd DD [de] MMMM [a las] h a", { locale })}
        </strong>{" "}
        vamos a{" "}
        {nextEvent.talks.map((talk, index) => (
          <Talk
            key={talk.title + talk.name}
            talk={talk}
            isFirst={index === 0}
            isLast={index === nextEvent.talks.length - 1}
          />
        ))}
      </p>

      <div className="button-container">
        <Button href={nextEvent.url}>Asistir</Button>
      </div>

      <style jsx>{`
        .container {
          flex: 1;
          margin-bottom: 2rem;
        }
        p {
          font-size: 16px;
          line-height: 1.5;
        }
        @media (min-width: 64rem) {
          .container {
            max-width: 40%;
            text-align: right;
            margin-bottom: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default LastEvent;
