import App, { Container } from "next/app";
import Router from "next/router";
import Head from "next/head";
import NProgress from "next-nprogress/component";
import withGA from "next-ga";
import Button from "../components/ui/button";

class TechTalks extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <title>Tech Talks - La comunidad de tecnología del Perú</title>

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Tech Talks es una comunidad de tecnología libre y abierta, realizamos eventos mensuales para aprender de cualquier tema de tecnología."
          />
          <meta name="language" content="es" />
          <meta name="pagename" content="Tech Talks" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="MobileOptimized" content="320" />
          <meta name="robots" content="all" />
          <meta name="theme-color" content="#000000" />
          <meta name="apple-mobile-web-app-title" content="Tech Talks" />
          <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Tech Talks" />
          <meta
            property="og:description"
            content="La comunidad de tecnología del Perú"
          />
          <meta property="og:image" content="/static/open-graph.png" />
          <meta property="og:image:alt" content="Tech Talks - Tu Meetup" />
          <meta property="og:url" content="https://techtalks.pe" />
          <meta property="og:site_name" content="Tech Talks" />
          <meta property="og:locale" content="es" />

          <meta name="twitter:card" value="summary_large_image" key="type" />
          <meta name="twitter:site" value="@techtalks_pe" key="site" />
          <meta name="twitter:creator" value="@able_co" key="creator" />
          <meta name="twitter:url" value="https://techtalks.pe" key="url" />
          <meta
            name="twitter:title"
            value="Tech Talks - Tu Meetup"
            key="title"
          />
          <meta
            name="twitter:description"
            value="La comunidad de tecnología del Perú"
            key="description"
          />
          <meta
            name="twitter:image"
            value="/static/open-graph.png"
            key="image"
          />
          <meta
            name="twitter:summary"
            value="La comunidad de tecnología del Perú"
            key="summary"
          />

          <link rel="manifest" href="/static/manifest.json" />
        </Head>

        <NProgress color="black" />

        <Component {...pageProps} />

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
        </footer>

        <style jsx global>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            margin: 0;
          }
        `}</style>

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
      </Container>
    );
  }
}

export default withGA("UA-132043466-1", Router)(TechTalks);
