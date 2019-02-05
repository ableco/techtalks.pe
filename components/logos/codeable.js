function Codeable() {
  return (
    <span>
      {"{"}code<em>able</em>
      {"}"}
      <style jsx>{`
        span {
          font-weight: bold;
        }
        em {
          color: #999b9e;
          font-style: normal;
        }
      `}</style>
    </span>
  );
}

export default Codeable;
