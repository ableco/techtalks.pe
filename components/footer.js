import Link from "next/link";
import Name from "./name";

function Footer() {
  return (
    <footer>
      <div>
        <div className="name"><Name /></div>
        <nav>
          {/* <Link href="/blog">
            <a>Blog</a>
          </Link> */}
          <Link href="/cfp">
            <a>Dar una charla</a>
          </Link>
          <Link href="/eventos">
            <a>Eventos anteriores</a>
          </Link>
          <Link href="/coc">
            <a>Código de Conducta</a>
          </Link>
        </nav>
      </div>

      <style jsx>{`
        footer {
          background-color: black;
          color: white;
          padding: 2rem 0;
          font-size: 1.25rem;
        }

        footer > div {
          max-width: 64rem;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
        }

        .name {
          font-size: 1.25em;
          display: block;
          text-align: center;
        }

        a {
          color: white;
          text-decoration: underline;
          display: block;
          margin: 1rem 0;
        }

        nav {
          display: block;
        }

        @media (min-width: 64rem) {
          footer > div {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          nav {
            display: flex;
            justify-content: space-between;
          }

          a {
            display: inline-flex;
            margin: 0 1rem;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
