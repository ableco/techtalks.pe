import App, { Container } from "next/app";
import Head from "next/head";
import NProgress from "next-nprogress/component";

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
          <meta name="twitter:title" value="Tech Talks - Tu Meetup" key="title" />
          <meta
            name="twitter:description"
            value="La comunidad de tecnología del Perú"
            key="description"
          />
          <meta name="twitter:image" value="/static/open-graph.png" key="image" />
          <meta name="twitter:summary" value="La comunidad de tecnología del Perú" key="summary" />
        </Head>
        <Component {...pageProps} />
        <NProgress color="black" />
      </Container>
    );
  }
}

export default TechTalks;
