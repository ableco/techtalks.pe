import App from "next/app";
import Head from "next/head";
import Footer from "../components/footer";

class TechTalks extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
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
            value="/open-graph.png"
            key="image"
          />
          <meta
            name="twitter:summary"
            value="La comunidad de tecnología del Perú"
            key="summary"
          />

          <link rel="manifest" href="/manifest.json" />
        </Head>

        <Component {...pageProps} />

        {!Component.noFooter && <Footer />}

        <style jsx global>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            margin: 0;
          }
        `}</style>
      </>
    );
  }
}

export default TechTalks;
