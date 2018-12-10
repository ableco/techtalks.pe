function Subtext({ children, ...props }) {
  return (
    <p {...props}>
      {children}
      <style jsx>{`
        p {
          color: #999;
          font-size: 1.25em;
          margin-bottom: 2em;
        }
      `}</style>
    </p>
  );
}

export default Subtext;
