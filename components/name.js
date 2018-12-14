function Name({ children, ...props }) {
  return (
    <h1 {...props}>
      Tech Talks
      <style jsx>{`
        h1 {
          font-weight: 700;
          font-size: 2.5em;
          margin: 2.5rem 0 1.5rem;
        }
        @media (min-width: 64em) {
          h1 {
            margin: 7.5rem 0 5rem;
          }
        }
      `}</style>
    </h1>
  );
}

export default Name;
