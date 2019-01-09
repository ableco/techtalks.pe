import { useState, useLayoutEffect } from "react";

function useLocalState(key, initialValue = "") {
  const [state, setState] = useState(initialValue);

  useLayoutEffect(
    () => {
      setState(localStorage.getItem(key) || "");
    },
    [key]
  );

  function update(newState) {
    localStorage.setItem(key, newState);
    setState(newState);
  }

  function clear() {
    localStorage.setItem(key, initialValue);
    setState(initialValue);
  }

  return [state, update, clear];
}

export default useLocalState;
