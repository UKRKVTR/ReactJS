import React, { useEffect, useState } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&current=temperature_2m&hourly=temperature_2m,rain,visibility,temperature_80m&timezone=Europe%2FLondon"
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    console.log("count :>> ", count);
  }, [count]);
  return (
    <div>
      {weather?.current?.temperature_2m} {weather?.hourly_units?.temperature_2m}
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Weather;
