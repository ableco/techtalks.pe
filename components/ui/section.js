import cn from "classnames";

function Section({ children, inverted, className, ...props }) {
  return (
    <section className={cn(className, { inverted })} {...props}>
      {children}
      <style jsx>{`
        section {
          padding: 5rem 0;
          background-size: 28px 28px;
          box-sizing: border-box;
        }
        section:not(.inverted) {
          background-color: white;
          background-image: radial-gradient(
            circle,
            #d7d7d7,
            #d7d7d7 1px,
            #ffffff 1px,
            #ffffff
          );
        }
        section.inverted {
          background-color: #f6f6f6;
          background-image: radial-gradient(
            circle,
            #d7d7d7,
            #d7d7d7 1px,
            #f6f6f6 1px,
            #f6f6f6
          );
          box-shadow: inset 0 0 .25em rgba(0, 0, 0, .1);
        }
      `}</style>
    </section>
  );
}

export default Section;
