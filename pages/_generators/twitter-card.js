import Head from "next/head";
import { withRouter } from "next/router";

import Person from "../../components/person-card";

// screenshot at 550pxx200px
function TwitterCard({ router: { query }}) {
  return (
    <main>
      <Head>
        <title>Twitter Card Template</title>
        <meta name="robots" content="none" />
      </Head>
      <Person
        name={query.name}
        avatar={`/static/avatars/${query.handle}.jpg`}
        title={query.title}
        twitter={query.handle}
      />

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

      <style jsx>{`
        main {
          width: 100vw;
        }
      `}</style>
    </main>
  );
}

TwitterCard.noFooter = true;

export default withRouter(TwitterCard);
