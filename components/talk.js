function Talk({ talk, isLast, isFirst }) {
  return (
    <>
      {!isFirst
        ? isLast
          ? talk.copy[0].toLowerCase() === "i"
            ? " e "
            : " y "
          : ", "
        : null}
      <strong>{talk.copy}</strong> con{" "}
      <a href={talk.url} target="_blank" rel="nofollow noopener">
        {talk.name}
      </a>
      <style jsx>{`
        a {
          color: black;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

export default Talk;
