import Button from "./ui/button";

function Footer() {
  return (
    <footer>
      <div>
        <strong className="name">Tech Talks</strong>
        <nav>
          {/* <Button href="/blog" invert>Blog</Button> */}
          <Button href="/cfp" invert>
            Dar una charla
          </Button>
          <Button href="/coc" invert>
            Código de Conducta
          </Button>
        </nav>
      </div>

      <style jsx>{`
        footer {
          background: black;
          color: white;
          padding: 2rem 0;
        }

        footer > div {
          max-width: 64rem;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .name {
          font-size: 1.25rem;
          letter-spacing: -0.05em;
        }
        a {
          color: white;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
