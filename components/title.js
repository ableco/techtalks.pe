import Name from "./name";

function Title({ children, ...props }) {
  return (
    <h1 {...props}>
      <Name />
      <style jsx>{`
        h1 {
          font-size: 3em;
          margin: 2.5rem 0 1rem;
        }
        @media (min-width: 64em) {
          h1 {
            font-size: 5em;
            margin: 5rem 0 2.5rem;
          }
        }
      `}</style>
    </h1>
  );
}

export default Title;
