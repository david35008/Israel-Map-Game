import React, { useState } from "react";
import "./App.css";
import MyMap from "./components/Map/MyMap";
import Target from "./components/Game/Target";
import Distance from "./components/Game/Distance";
import Places from "./csvjson.json";

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [places, setPlaces] = useState(Places);
  const [city, setCity] = useState(true);
  const [settlement, setSettlement] = useState(true);
  const [moshav, setMoshav] = useState(true);
  const [kibbutz, setKibbutz] = useState(true);
  const [currentLocation, setCurrentLocation] = useState();
  const [chosenLocation, setChosenLocation] = useState({});
  const [distance, setDistance] = useState('-');
  const [winDistance, setWinDistance] = useState(5);

  return (
    <>
      <MyMap
        gameStart={gameStart}
        distance={distance}
        places={places}
        setPlaces={setPlaces}
        chosenLocation={chosenLocation}
        setChosenLocation={setChosenLocation}
        currentLocation={currentLocation}
        winDistance={winDistance}
      />
      <Target
        setGameStart={setGameStart}
        setPlaces={setPlaces}
        places={places}
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
        setChosenLocation={setChosenLocation}
        setDistance={setDistance}
        city={city}
        setCity={setCity}
        settlement={settlement}
        setSettlement={setSettlement}
        moshav={moshav}
        setMoshav={setMoshav}
        kibbutz={kibbutz}
        setKibbutz={setKibbutz}
        winDistance={winDistance}
        setWinDistance={setWinDistance}
      />
      <Distance
        chosenLocation={chosenLocation}
        currentLocation={currentLocation}
        distance={distance}
        winDistance={winDistance}
        setWinDistance={setWinDistance}
        setDistance={setDistance}
      />
    </>
  );
}

export default App;
