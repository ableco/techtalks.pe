import Document, { Head, Main, NextScript } from "next/document";

class TechTalksDocument extends Document {
  static getInitialProps = Document.getInitialProps;
  render() {
    return (
      <html lang="es">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default TechTalksDocument;
