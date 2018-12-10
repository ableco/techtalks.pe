import React, { Children, memo, useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";

function WordSlider({ children, duration }) {
  const count = Children.count(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const pauseAnimation = useRef(false);

  useEffect(
    () => {
      let timer;
      function handleTimeout() {
        if (window.document.visibilityState === "hidden") {
          // tab invisible; pause for one round to avoid flickering
          pauseAnimation.current = true;
          timer = setTimeout(handleTimeout, duration || 1500);
          return;
        }
        if (!pauseAnimation.current) {
          setCurrentIndex((currentIndex + 1) % count);
        } else {
          pauseAnimation.current = false;
        }
      }
      timer = setTimeout(handleTimeout, duration || 1500);

      return () => clearTimeout(timer);
    },
    [count, duration]
  );

  const [props] = useSpring({
    from: { opacity: 0, y: -50 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 60 }
  });
  console.log(props.opacity);

  return (
    <div>
      <animated.div
        style={{
          position: "absolute",
          transform: props.y.interpolate(y => `translate3d(0, ${y}%, 0)`),
          opacity: props.opacity
        }}
      >
        {Children.toArray(children)[currentIndex]}
      </animated.div>
      <style jsx>{`
        div {
          width: 100%;
          height: 3.4em;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1rem;
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
}

export default memo(WordSlider);
