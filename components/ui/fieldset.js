import Subtext from "./subtext";

function Fieldset({ children, htmlFor, legend, description, ...props }) {
  return (
    <fieldset {...props}>
      {legend && (
        <label htmlFor={htmlFor}>
          <legend>{legend}</legend>
        </label>
      )}
      <Subtext className="form-desc">{description}</Subtext>
      {children}
      <style jsx>{`
        fieldset {
          border: none;
          background: transparent;
          padding: 1em 1em 1em 3em;
          padding: 0;
          margin: 0 0 5rem;
        }
        fieldset :global(.form-desc) {
          font-size: 1.125rem;
        }
        legend {
          background: transparent;
          font-size: 2rem;
          font-weight: 600;
          margin-top: 0;
          margin-bottom: 0rem;
        }
      `}</style>
    </fieldset>
  );
}

export default Fieldset;
