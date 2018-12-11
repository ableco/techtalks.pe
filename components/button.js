import Link from "next/link";
import cn from "classnames";
import { parse } from "url";

export function LinkButton({
  children,
  href,
  as = href,
  invert,
  className,
  ...props
}) {
  const a = (
    <a href={href} className={cn(className, "button", { invert })} {...props}>
      {children}
      <style jsx>{`
      .button {
          display: inline-block;
          font-size: 1em;
          cursor: pointer;
          text-decoration: none;
          padding: 0.5rem 0.5rem;
          margin: -0.25rem -0.5rem;
          border-radius: 7px;
          color: black;
          transition: background 0.2s ease, color 0.2s ease,
            box-shadow 0.2s ease;
        }
        .button:hover {
          color: black;
          background: rgba(11, 11, 11, 0.1);
        }
        .button.invert {
          margin: 0;
          padding: 0 2rem;
          height: 2.5rem;
          line-height: 2.5rem;
          border-radius: 7px;
          background: black;
          box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.39);
          color: white;
          font-weight: 600;
        }
        .button.invert:hover {
          background: rgba(11, 11, 11, 0.9);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.23);
        }
        .button.invert:active {
          background: #006ae6;
        }
      `}</style>
    </a>
  );

  if (parse(href).hostname === null) {
    return <Link href={href} as={as}>{a}</Link>;
  }

  return a;
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
        .button {
          display: inline-block;
          font-size: 1em;
          cursor: pointer;
          text-decoration: none;
          padding: 0.5rem 0.5rem;
          margin: -0.25rem -0.5rem;
          border-radius: 7px;
          color: black;
          transition: background 0.2s ease, color 0.2s ease,
            box-shadow 0.2s ease;
        }
        .button:hover {
          color: black;
          background: rgba(11, 11, 11, 0.1);
        }
        .button.invert {
          margin: 0;
          padding: 0 2rem;
          height: 2.5rem;
          line-height: 2.5rem;
          border-radius: 7px;
          background: black;
          box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.39);
          color: white;
          font-weight: 600;
        }
        .button.invert:hover {
          background: rgba(11, 11, 11, 0.9);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.23);
        }
        .button.invert:active {
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
