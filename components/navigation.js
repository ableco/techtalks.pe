import Link from "next/link";
import { withRouter } from "next/router";
import cn from "classnames";

import IconSpectrum from "./icons/spectrum";

import Badge from "./badge";

const mainLinks = [
  {
    content: "Inicio",
    href: "/",
    title: "Ir a la página principal",
  },
  {
    content: "Dar una charla",
    short: "CFP",
    href: "https://goo.gl/forms/0XRxomZaK9gK13F03",
    title: "¡Da una charla en uno de nuestros eventos!"
  }
];

const extraLinks = [
  {
    content: "Blog",
    href: "/blog",
    title: "Lee sobre nuestros últimos eventos"
  },
  {
    content: <IconSpectrum />,
    href: "https://spectrum.chat/tech-talks/",
    title: "Únete a la comunidad de Tech Talks en Spectrum",
    badge: true
  }
];

function List({ data, current }) {
  return (
    <ul className="list">
      {data.map(link => (
        <li className="item" key={link.href}>
          <Link href={link.href}>
            <a className={"link" + (current === link.href ? ' is-active' : '')} title={link.title}>
              <span className={cn({ long: !!link.short })}>{link.content}</span>
              {link.short && <span className="short">{link.short}</span>}
              {link.badge && <Badge />}
            </a>
          </Link>
        </li>
      ))}

      <style jsx>{`
        .list {
          padding-left: 0;
          list-style-type: none;
          display: flex;
        }

        .item {
          display: inline-flex;
          margin-right: 1rem;
        }
        .item:last-of-type {
          margin-right: 0;
        }

        .link {
          color: #757575;
          text-decoration: none;
          transition: color 0.2s ease;
          position: relative;
          padding: .25em;
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
    </ul>
  );
}

function Navigation({ router }) {
  return (
    <nav className="nav">
      <List data={mainLinks} current={router.route} />
      <List data={extraLinks} current={router.route} />
      <style jsx>{`
        .nav {
          display: flex;
          justify-content: space-between;
          width: 60em;
          max-width: 100%;
          margin: 0 auto;
          position: absolute;
          top: 1em;
          left: 0;
          right: 0;
          box-sizing: border-box;
        }

        @media (max-width: 60em) {
          .nav {
            padding: 0 1em;
          }
        }
      `}</style>
    </nav>
  );
}

export default withRouter(Navigation);
