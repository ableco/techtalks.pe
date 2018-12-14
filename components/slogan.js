import { useState, useEffect, useRef } from "react";
import useDocumentVisibility from "@rehooks/document-visibility";
import useOnScreen from "../lib/use-on-screen";
import shuffle from "../lib/shuffle";
import slogans from "../data/slogans.json";

const words = ["de Desarrollo"].concat(
  shuffle(new Set(slogans)),
  "de Tecnología"
);

// it should be a number max 2s and min 600ms or calculated to be completed in 2m 30s
const duration =
  60000 / words.length >= 2000
    ? 2000
    : 60000 / words.length < 600
    ? 600
    : 60000 / words.length;

function Slogan() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(true);
  const documentVisibility = useDocumentVisibility();
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref, '-40px');

  useEffect(
    () => {
      if (documentVisibility === "hidden" || !isOnScreen) return;
      let timer;
      if (running) {
        timer = setTimeout(
          () =>
            count + 1 === words.length
              ? setRunning(false)
              : setCount(count + 1),
          duration
        );
      } else {
        timer = setTimeout(() => {
          setCount(0);
          setRunning(true);
        }, 10000);
      }
      return () => clearTimeout(timer);
    },
    [count, running, documentVisibility, isOnScreen]
  );

  return (
    <h2 ref={ref}>
      {running ? (
        <>
          <span>Tu Meetup</span> <strong>{words[count]}</strong>
        </>
      ) : (
        <span className="finished">Tu Meetup</span>
      )}
      <style jsx>{`
        h2 {
          font-size: 1.75em;
          margin: 0 0 2.5rem;
          font-weight: 400;
          height: 83px;
        }
        h2 strong {
          font-size: 1em;
          font-weight: 700;
        }
        .finished {
          animation-name: slideDown;
          animation-duration: 300ms;
          animation-timing-function: linear;
          animation-delay: 0s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
          will-change: font-size, font-weight;
        }
        @media (min-width: 64em) {
          h2 {
            margin-bottom: 1.5rem;
          }
        }
        @keyframes slideDown {
          from {
            font-size: 1em;
            font-weight: 600;
          }

          to {
            font-size: 1.5em;
            font-weight: 700;
          }
        }
      `}</style>
    </h2>
  );
}

export default Slogan;
