import cn from "classnames";

function Wrapper({ children, className, flex, center, vertical, ...props}) {
  return (
    <section className={cn(className, { flex, center, vertical })} {...props}>
      {children}
      <style jsx>{`
        section {
          max-width: 64em;
          margin: 0 auto;
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
      `}</style>
    </section>
  )
}

export default Wrapper;
