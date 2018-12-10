import Head from "next/head";

import Hero from "../components/hero";
import Features from "../components/features";
import Venue from "../components/venue";
import Sponsors from "../components/sponsors";
import Organizers from "../components/organizers";
import PreviousTalks from "../components/previous-talks";
import Footer from "../components/footer";

function HomePage() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Tech Talks - Tu Meetup</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
      </Head>

      <Hero />
      <Features />
      <Venue />
      <Organizers />
      <Sponsors />
      <PreviousTalks />
      <Footer />

      <style jsx global>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          margin: 0;
        }
      `}</style>
    </main>
  );
}

export default HomePage;
