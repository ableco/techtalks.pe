import formatDate from "date-fns/format";
import locale from "date-fns/locale/es";
import capitalize from "capitalize";

import Navigation from "../components/navigation";
import Name from "../components/name";

import Section from "../components/ui/section";
import Wrapper from "../components/ui/wrapper";

import getPastEvents from "../lib/get-past-events";

const events = getPastEvents();

const format = (date, desiredFormat) => formatDate(date, desiredFormat, { locale });

function Names({ names, urls }) {
  return (
    <>
      {Array.isArray(names) && Array.isArray(urls) ? (
        names.map((name, index) => (
          <>
            {index !== 0 && (index === names.length - 1 ? " y " : ", ")}
            <a href={urls[index]} target="_blank" rel="nofollow noopener">
              {name}
            </a>
          </>
        ))
      ) : (
        <a href={urls} target="_blank" rel="nofollow noopener">
          {names}
        </a>
      )}
      <style jsx>{`
        a {
          color: black;
        }
      `}</style>
    </>
  );
}

function Talk({ name, url, title }) {
  return (
    <li>
      {title} con <Names names={name} urls={url} />
    </li>
  );
}

function Event({ date, url, talks }) {
  const name = <><Name /> - {capitalize(format(date, "MMMM YYYY"))}</>;
  return (
    <article>
      <h2>{name}</h2>

      <p>
        El día <time dateTime={date}>{format(date, "dddd D [de] MMMM")}</time> tuvimos el <strong>{name}</strong> con las siguientes charlas:
      </p>
      <ul>
        {talks.map(talk => <Talk {...talk} key={talk.name} />)}
      </ul>
      {url && <p>Más información y fotos en <a href={url} rel="nofollow noopener">{url}</a></p>}
      <style jsx>{`
        article {
          font-size: 1.25rem;
          margin-bottom: 7.5rem;
        }
        a {
          color: black;
        }
      `}</style>
    </article>
  );
}

function PastEvents() {
  return (
    <Section style={{ paddingTop: 0, minHeight: "95vh" }}>
      <Navigation />
      <Wrapper>
        <h1>Eventos pasados de <Name /></h1>
        <section>
          {events.map(event => (
            <Event {...event} key={event.date} />
          ))}
        </section>
      </Wrapper>
      <style jsx>{`
        h1 {
          font-size: 3rem;
          margin: 5rem 0 3rem;
          letter-spacing: -0.05em;
        }
      `}</style>
    </Section>
  );
}

export default PastEvents;
