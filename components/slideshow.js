import { Children, useEffect, useRef, useState } from "react";

function SlideShow({ children }) {
  const $slide = useRef(null);
  const [slide, setSlide] = useState(0);

  const maxSlide = children.length - 1;

  function nextSlide(currentSlide) {
    if (currentSlide === maxSlide) return currentSlide;
    return currentSlide + 1;
  }

  function prevSlide(currentSlide) {
    if (currentSlide === 0) return currentSlide;
    return currentSlide - 1;
  }

  // reset slides if the length changes
  useEffect(
    () => {
      if (slide > maxSlide) {
        setSlide(0);
      }
    },
    [maxSlide]
  );

  // listen global events
  useEffect(() => {
    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeydown);
    };
  });

  function handleClick(event) {
    const target = event.target;
    const width = document.body.clientWidth;
    const x = event.x;

    if (target !== $slide.current) return null;

    if (width / 2 < x) {
      setSlide(nextSlide);
    } else {
      setSlide(prevSlide);
    }
  }

  function handleKeydown(event) {
    switch (event.key) {
      case "ArrowRight": {
        return setSlide(nextSlide);
      }
      case "ArrowLeft": {
        return setSlide(prevSlide);
      }
    }
  }

  return (
    <div ref={$slide}>
      {Children.toArray(children)[slide]}
      <style jsx>{`
        div {
          background-size: 28px 28px;
          background-color: white;
          background-image: radial-gradient(
            circle,
            #d7d7d7,
            #d7d7d7 1px,
            #ffffff 1px,
            #ffffff
          );
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default SlideShow;
