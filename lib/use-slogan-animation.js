import { useState, useEffect } from "react";
import useDocumentVisibility from "@rehooks/document-visibility";
import useOnScreen from "../lib/use-on-screen";

function useSloganAnimation(ref, words) {
  // it should be a number max 2s and min 600ms or calculated to be completed in 2m 30s
  const duration =
    60000 / words.length >= 2000
      ? 2000
      : 60000 / words.length < 600
      ? 600
      : 60000 / words.length;

  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(true);
  const documentVisibility = useDocumentVisibility();
  const isOnScreen = useOnScreen(ref, "-40px");

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

  return { running, word: words[count] };
}

export default useSloganAnimation;
