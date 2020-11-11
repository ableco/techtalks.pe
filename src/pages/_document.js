import Document, { Html, Head, Main, NextScript } from 'next/document'

class TechTalksDocument extends Document {
  static getInitialProps = Document.getInitialProps;
  render() {
    return (
      <Html lang="es">
        <Head />
        <body className="font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default TechTalksDocument;
