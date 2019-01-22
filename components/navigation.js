import Link from "next/link";
import { withRouter } from "next/router";
import cn from "classnames";
import parse from "parse-path";

import IconSpectrum from "./icons/spectrum";

import Badge from "./badge";

const mainLinks = [
  {
    content: "Inicio",
    href: "/",
    title: "Ir a la página principal"
  },
  {
    content: "Dar una charla",
    short: "CFP",
    href: "/cfp",
    title: "¡Da una charla en uno de nuestros eventos!"
  },
  {
    content: "Eventos anteriores",
    short: "Eventos",
    href: "/eventos",
    title: "La lista de todos los eventos pasados de Tech Talks"
  }
];

const extraLinks = [
  // {
  //   content: "Blog",
  //   href: "/blog",
  //   title: "Lee sobre nuestros últimos eventos"
  // },
  {
    content: <IconSpectrum />,
    href: "https://spectrum.chat/tech-talks-pe/",
    title: "Únete a la comunidad de Tech Talks en Spectrum",
    badge: true
  }
];

function Item({ href, title, short, content, badge, current }) {
  const a = (
    <a
      href={href}
      className={"link" + (current === href ? " is-active" : "")}
      title={title}
    >
      <span className={cn({ long: !!short })}>{content}</span>
      {short && <span className="short">{short}</span>}
      {badge && <Badge />}
      <style jsx>{`
        .link {
          color: #757575;
          text-decoration: none;
          transition: color 0.2s ease;
          position: relative;
          padding: 0.25em;
        }
        .link:hover {
          color: black;
        }
        .link.is-active {
          color: black;
        }
        .short {
          display: none;
        }
        @media (max-width: 36em) {
          .short {
            display: initial;
          }
          .long {
            display: none;
          }
        }
      `}</style>
    </a>
  );

  return (
    <li className="item">
      {parse(href).resource === "" ? <Link href={href}>{a}</Link> : a}
      <style jsx>{`
        .item {
          display: inline-flex;
          margin-right: 1rem;
        }
        .item:last-of-type {
          margin-right: 0;
        }
      `}</style>
    </li>
  );
}

function List({ data, current }) {
  return (
    <ul className="list">
      {data.map(link => (
        <Item {...link} current={current} key={link.href} />
      ))}

      <style jsx>{`
        .list {
          padding-left: 0;
          list-style-type: none;
          display: flex;
        }
      `}</style>
    </ul>
  );
}

function Navigation({ router, ...props }) {
  return (
    <nav {...props}>
      <List data={mainLinks} current={router.route} />
      <List data={extraLinks} current={router.route} />
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          width: 64em;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }

        @media (max-width: 64em) {
          nav {
            padding: 0 1em;
          }
        }
      `}</style>
    </nav>
  );
}

export default withRouter(Navigation);
