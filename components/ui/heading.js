export function H2({ children, ...props }) {
  return (
    <h2 {...props}>
      {children}
      <style jsx>{`
        h2 {
          font-size: 2em;
          font-weight: 600;
        }
      `}</style>
    </h2>
  );
}

export function H3({ children, ...props }) {
  return (
    <h3 {...props}>
      {children}
      <style jsx>{`
        h3 {
          font-size: 1.75em;
          font-weight: 300;
        }
      `}</style>
    </h3>
  );
}
