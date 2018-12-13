import Head from "next/head";

import Hero from "../components/sections/hero";
import Features from "../components/sections/features";
import Venue from "../components/sections/venue";
import Sponsors from "../components/sections/sponsors";
import Organizers from "../components/sections/organizers";
import PreviousTalks from "../components/sections/previous-talks";
import NextEvent from "../components/sections/next-event";
import Footer from "../components/sections/footer";

function HomePage() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Tech Talks - Tu Meetup</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>
      </Head>

      <Hero />
      <NextEvent />
      <Venue />
      <Features />
      <Sponsors />
      <Organizers />
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
