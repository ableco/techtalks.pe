function Name({ children, ...props }) {
  return (
    <h1 {...props}>
      Tech Talks
      <style jsx>{`
        h1 {
          font-weight: 300;
          margin: 0 0 1em;
        }
      `}</style>
    </h1>
  );
}

export default Name;
