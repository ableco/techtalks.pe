import Name from "./name";

function Person({ name, twitter, avatar, title }) {
  return (
    <div className="wrapper">
      <h1 className="logo"><Name /></h1>
      {twitter && (
        <figure className="avatar">
          <img src={avatar} width="75" height="75" alt={`Avatar de ${name}`} />
        </figure>
      )}
      <div className="content">
        <h3>{name}</h3>
        <div className="links">
          {twitter && (
            <a
              href={`https://twitter.com/${twitter}`}
              title={`Twitter de ${name}`}
            >
              @{twitter}
            </a>
          )}
        </div>
        {title && <p>{title}</p>}
      </div>
      <style jsx>{`
        .wrapper {
          display: inline-flex;
          background: white;
          box-shadow: 0 0 0.25em #ccc;
          color: black;
          padding: 1em 1em 1em 4.75em;
          border-radius: 0.25em;
          font-size: 1.25em;
          margin: 0 1.5em;
          flex: 1;
          box-sizing: border-box;
          position: relative;
          width: 80%;
        }
        .logo {
          font-size: 0.75em;
          margin-top: 0;
          position: absolute;
          right: 1em;
          top: .25em;
        }
        .avatar {
          margin: 0;
          width: 75px;
          height: 75px;
          position: absolute;
          top: 50%;
          left: 0.5em;
          transform: translateY(-50%);
        }
        .content {
          text-align: left;
          min-height: 64.5px;
        }
        img {
          object-fit: cover;
          max-width: 100%;
          border-radius: 50%;
          border: 2px solid white;
          box-sizing: border-box;
          box-shadow: 0 0 0.5em #ccc;
        }
        a {
          color: #004bcc;
          text-decoration: none;
          font-size: 0.8em;
          margin-right: 1em;
        }
        a:last-child {
          margin-right: 0;
        }
        p {
          font-size: 0.75em;
          margin: 0.75em 0 0.5em;
        }
        h3 {
          margin: 0 0 0.5em 0;
          font-size: 1.25em;
          font-weight: 700;
        }
        .links {
          margin-top: -0.75em;
        }
      `}</style>
    </div>
  );
}

export default Person;
