import cn from "classnames";

function Section({ children, inverted, className, ...props }) {
  return (
    <section className={cn(className, { inverted })} {...props}>
      {children}
      <style jsx>{`
        section {
          padding: 2em 0;
          background-size: 28px 28px;
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
          background-size: 28px 28px;
        }
      `}</style>
    </section>
  );
}

export default Section;
