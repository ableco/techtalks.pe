import Head from "next/head";

import Name from "../components/name";
import Slogan from "../components/slogan";

function OpenGraphPage() {
  return (
    <main>
      <Head>
        <title>Open Graph Template</title>
        <meta name="robots" content="none" />
      </Head>
      <Name />
      <Slogan animate={false} />

      <style jsx global>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          text-align: center;
          font-size: 1.5rem;

          background-color: white;
          background-image: radial-gradient(
            circle,
            #d7d7d7,
            #d7d7d7 1px,
            #ffffff 1px,
            #ffffff
          );
          background-size: 1em 1em;
        }
      `}</style>
    </main>
  );
}

OpenGraphPage.noFooter = true;

export default OpenGraphPage;
