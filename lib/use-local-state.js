import { useState, useLayoutEffect } from "react";

function useLocalState(key, initialValue) {
  const [state, setState] = useState(initialValue);

  useLayoutEffect(
    () => {
      const value = localStorage.getItem(key);
      try {
        setState(JSON.parse(value));
      } catch (error) {
        setState(value);
      }
    },
    [key]
  );

  function update(newState) {
    localStorage.setItem(key, JSON.stringify(newState));
    setState(newState);
  }

  function clear() {
    localStorage.removeItem(key);
    setState(initialValue);
  }

  return [state, update, clear];
}

export default useLocalState;
