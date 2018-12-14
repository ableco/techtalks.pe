function Name({ children, ...props }) {
  return (
    <h1 {...props}>
      Tech Talks
      <style jsx>{`
        h1 {
          font-weight: 700;
          font-size: 5em;
          margin: 2.5rem 0 1rem;
        }
        @media (min-width: 64em) {
          h1 {
            margin: 5rem 0 2.5rem;
          }
        }
      `}</style>
    </h1>
  );
}

export default Name;
