import Head from "next/head";
import dynamic from "next/dynamic";

import useAmbientLight from "../lib/use-ambient-light";
import usePermissions from "../lib/use-permissions";

import Hero from "../components/sections/hero";
import Features from "../components/sections/features";
import Sponsors from "../components/sections/sponsors";
import Organizers from "../components/sections/organizers";
import PreviousTalks from "../components/sections/previous-talks";

const Venue = dynamic(() => import("../components/sections/venue"));

function HomePage() {
  const hasPermission = usePermissions("ambient-light-sensor");
  const illuminance = useAmbientLight(hasPermission);
  console.log('illuminance', illuminance);
  return (
    <main>
      <Head>
        <title>Tech Talks - Tu Meetup</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Tech Talks es una comunidad de tecnología libre y abierta, realizamos eventos mensuales para aprender de cualquier tema de tecnología." />
        <meta name="language" content="es" />
        <meta name="pagename" content="Tech Talks" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-title" content="Tech Talks" />
        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
        <link rel="manifest" href="/static/manifest.json" />
      </Head>

      <Hero />
      <Features />
      <Venue />
      <Organizers />
      <Sponsors />
      <PreviousTalks />

      {illuminance}

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
