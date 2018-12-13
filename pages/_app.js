import App, { Container } from "next/app";
import NProgress from "next-nprogress/component";

class TechTalks extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
        <NProgress color="black" />
      </Container>
    )
  }
}

export default TechTalks;
