import Link from "next/link";
import cn from "classnames";

export function LinkButton({
  children,
  href,
  as = href,
  invert,
  className,
  ...props
}) {
  return (
    <Link href={href} as={as}>
      <a className={cn(className, "button", { invert })} {...props}>
        {children}
        <style jsx>{`
          a {
            display: inline-block;
            font-size: 1em;
            cursor: pointer;
            text-decoration: none;
            padding: 0.25rem 0.5rem;
            margin: -0.25rem -0.5rem;
            border-radius: 7px;
            color: #0076ff;
            transition: background 0.2s ease, color 0.2s ease,
              box-shadow 0.2s ease;
          }
          a:hover {
            color: #0076ff;
            background: rgba(0, 118, 255, 0.1);
          }
          a.invert {
            margin: 0;
            padding: 0 2rem;
            height: 2.5rem;
            line-height: 2.5rem;
            border-radius: 7px;
            background: #0076ff;
            box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
            color: white;
          }
          a.invert:hover {
            background: rgba(0, 118, 255, 0.9);
            box-shadow: 0 6px 20px rgba(0, 118, 255, 0.23);
          }
          a.invert:active {
            background: #006ae6;
          }
        `}</style>
      </a>
    </Link>
  );
}

export function ActionButton({ children, invert, className, ...props }) {
  return (
    <button
      type="button"
      className={cn(className, "button", { invert })}
      {...props}
    >
      {children}
      <style jsx>{`
        button {
          background: none;
          border: none;
          font-size: 1em;
          display: inline-block;
          cursor: pointer;
          text-decoration: none;
          padding: 0.25rem 0.5rem;
          margin: -0.25rem -0.5rem;
          border-radius: 7px;
          color: #0076ff;
          transition: background 0.2s ease, color 0.2s ease,
            box-shadow 0.2s ease;
          outline: none;
        }
        button:hover {
          color: #0076ff;
          background: rgba(0, 118, 255, 0.1);
        }
        button.invert {
          margin: 0;
          padding: 0 2rem;
          height: 2.5rem;
          line-height: 2.5rem;
          border-radius: 7px;
          background: #0076ff;
          box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
          color: white;
        }
        button.invert:hover {
          background: rgba(0, 118, 255, 0.9);
          box-shadow: 0 6px 20px rgba(0, 118, 255, 0.23);
        }
        button.invert:active {
          background: #006ae6;
        }
      `}</style>
    </button>
  );
}

function Button(props) {
  if (props.href) return <LinkButton {...props} />;
  return <ActionButton {...props} />;
}

export default Button;
