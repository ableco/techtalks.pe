function Name({ children, ...props }) {
  return (
    <span {...props}>
      Tech Talks
      <style jsx>{`
        span {
          font-weight: 700;
          letter-spacing: -0.5px;
        }
      `}</style>
    </span>
  );
}

export default Name;
