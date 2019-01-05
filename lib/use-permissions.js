import { useState, useEffect } from "react";

const usePermissions = name => {
  const [result, setResult] = useState(null);
  useEffect(() => {
    navigator.permissions.query({ name })
      .then(result => setResult(result.state));
  }, [name]);
  return result;
}

export default usePermissions;
