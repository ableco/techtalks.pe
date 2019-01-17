function Input(props) {
  return (
    <>
      <input {...props} />
      <style jsx>{`
        input {
          border: 2px solid black;
          border-radius: 0.5rem;
          box-sizing: border-box;
          color: #666;
          font-size: 1.25rem;
          padding: 0.75em 1.5em;
          transition: 100ms color ease-in-out;
        }

        input:focus {
          color: black;
          outline: none;
        }
      `}</style>
    </>
  );
}

export default Input;
