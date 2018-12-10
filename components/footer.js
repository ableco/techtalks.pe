import { memo } from "react";
import css from "styled-jsx/css";
import Name from "./name";

const { className, styles} = css.resolve`
  h1 {
    font-size: 1.5em;
    margin-bottom: 0;
  }
`;

function Footer() {
  return (
    <footer>
      <Name className={className} />
      {styles}
      <style jsx>{`
        footer {
          width: 100%;
          margin: 0 auto;
          padding: 0 0;
          background-image: linear-gradient(
            to bottom,
            #121212 0%,
            #323232 100%
          );
          color: #f1f1f1;
          overflow: hidden;
        }
      `}</style>
    </footer>
  );
}

export default memo(Footer);
