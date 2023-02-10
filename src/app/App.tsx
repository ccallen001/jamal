import { useEffect, useRef, useState } from 'react';
import './App.css';

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [zipCode, setZipCode] = useState('46052');
  const zipCodeInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${zipCode}`
      );
      const respJson = await resp.json();
      setWeather(respJson);
    })();
  }, [zipCode]);

  function getWeather() {
    setZipCode(zipCodeInput.current?.value || '');
  }

  return (
    <div className="App">
      <h1>Jamal</h1>
      <div className="input-container">
        <input ref={zipCodeInput} placeholder="Zip Code" />
        <button onClick={getWeather}>Get Weather</button>
      </div>
      <pre>{weather && JSON.stringify(weather, null, 2)}</pre>
    </div>
  );
}

export default App;
