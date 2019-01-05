import { useState, useEffect } from "react";

function useAmbientLightSensor(hasPermission) {
  const [illuminance, setIlluminance] = useState(null);

  function handleIlluminanceChange(sensor) {
    setIlluminance(sensor.illuminance);
  }

  useEffect(() => {
    let sensor = { stop() {} };
    if ("AmbientLightSensor" in window && hasPermission && hasPermission === "granted") {
      sensor = new AmbientLightSensor();
      
      sensor.onreading = handleIlluminanceChange;

      // sensor.onerror = event => {
      //   console.log(event.error.name, event.error.message);
      // };

      sensor.start();
    }

    return () => sensor.stop();
  }, [hasPermission]);

  return illuminance;
}

export default useAmbientLightSensor;
