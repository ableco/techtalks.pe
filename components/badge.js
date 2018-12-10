function Badge() {
  return (
    <span>
      <style jsx>{`
        span {
          position: absolute;
          display: inline-block;
          right: 0px;
          bottom: 4px;
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background-color: #2bdb66;
          pointer-events: none;
        }
      `}</style>
    </span>
  );
}

export default Badge;
