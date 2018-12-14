import cn from "classnames";

function Wrapper({ children, className, flex, center, vertical, ...props}) {
  return (
    <section className={cn(className, { flex, center, vertical })} {...props}>
      {children}
      <style jsx>{`
        section {
          max-width: 64em;
          margin: 0 auto;
          padding: 0 1em;
          box-sizing: border-box;
        }
        section.flex {
          display: flex;
        }
        section.center {
          text-align: center;
          justify-content: center;
          align-content: center;
        }
        section.vertical {
          flex-direction: column;
        }
        @media (min-width: 64em) {
          section {
            padding: 0;
          }
        }
      `}</style>
    </section>
  )
}

export default Wrapper;
