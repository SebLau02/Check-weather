import "./App.css";
import { useEffect, useState, Fragment } from "react";

import theme from "./utils/theme";

import Rain from "./components/rain";
import Snow from "./components/snow";
import Mist from "./components/mist";
import Cloud from "./components/cloud";
import Main from "./components/main";
import Nav from "./components/nav";

//---------------------------------------------

//********** liste a faire **********
// - chute de neige ✔
// - chute de pluie ✔
// - mode jour mode nuit
// - calculer l'heure locale
// - ajouter lever/coucher du soleil

//---------------------------------------------

function App() {
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState("paris");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  //---------------------------------------------

  const fetchApi = (event) => {
    event?.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&APPID=833f1affa492d03b5756a933c5b64e57`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
        setIsLoading(false);
      })
      .catch((error) => setError(true));
  };

  //---------------------------------------------

  useEffect((e) => {
    fetchApi();
  }, []);

  return (
    <div
      className="App"
      style={{ background: theme[weatherData?.weather[0].main] }}
    >
      <Nav setCity={setCity} fetchApi={fetchApi} />

      <Rain weatherData={weatherData} />
      <Snow weatherData={weatherData} />
      <Mist weatherData={weatherData} />
      <Cloud weatherData={weatherData} />

      {isLoading ? (
        <div>Loading</div>
      ) : error ? (
        <div>Error </div>
      ) : (
        <Main weatherData={weatherData} />
      )}
    </div>
  );
}

export default App;
