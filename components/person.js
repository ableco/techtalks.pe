function Person({ name, github, twitter, avatar, title }) {
  return (
    <div className="wrapper">
      <figure className="avatar">
        <img src={avatar} width="75" height="75" alt={`Avatar de ${name}`} />
      </figure>
      <div className="content">
        <h3>{name}</h3>
        {title && <p>{title}</p>}
        <div className="links">
          {github && (
            <a
              href={`https://github.com/${github}`}
              title={`GitHub de ${name}`}
            >
              GitHub
            </a>
          )}
          {twitter && (
            <a
              href={`https://twitter.com/${twitter}`}
              title={`Twitter de ${name}`}
            >
              Twitter
            </a>
          )}
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          display: inline-flex;
          background: white;
          box-shadow: 0 0 0.25em #ccc;
          color: black;
          padding: 1em 1em 1em 3em;
          border-radius: 0.25em;
          font-size: 1.25em;
          margin: 0 1.5em 1em;
          flex: 1;
          box-sizing: border-box;
          min-width: calc(30% - 1em);
          max-width: calc(30% - 1em);
          position: relative;
        }
        .avatar {
          margin: 0;
          width: 75px;
          height: 75px;
          position: absolute;
          left: -1.75em;
          top: 50%;
          transform: translateY(-50%);
        }
        .content {
          text-align: left;
        }
        img {
          object-fit: cover;
          max-width: 100%;
          border-radius: 50%;
          border: 2px solid white;
          box-sizing: border-box;
        }
        a {
          color: #666;
          text-decoration: none;
          font-size: 0.8em;
          margin-right: 1em;
        }
        a:last-child {
          margin-right: 0;
        }
        p {
          font-size: 0.75em;
          font-weight: lighter;
          margin: -0.75em 0 0.5em;
        }
        h3 {
          margin: 0 0 0.5em 0;
          font-size: 1.25em;
          font-weight: 700;
        }
        @media (max-width: 60em) {
          .wrapper {
            min-width: calc(100% - 5em);
            max-width: calc(100% - 5em);
          }
        }
      `}</style>
    </div>
  );
}

export default Person;
