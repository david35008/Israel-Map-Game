import React, { useState } from "react";
import "./App.css";
import MyMap from "./components/Map/MyMap";
import ConfigPanel from "./components/Game/ConfigPanel";
import Target from "./components/Game/Target";
import Distance from "./components/Game/Distance";
import Places from "./csvjson.json";

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [places, setPlaces] = useState(Places);
  const [currentLocation, setCurrentLocation] = useState();
  const [chosenLocation, setChosenLocation] = useState({});
  const [distance, setDistance] = useState('-');
  const [winDistance, setWinDistance] = useState(5);
  const [darkMode, setDarkMode] = useState(true);

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
        darkMode={darkMode}
        winDistance={winDistance}
      />
      <ConfigPanel
        places={places}
        setPlaces={setPlaces}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Target
        setGameStart={setGameStart}
        places={places}
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
        setChosenLocation={setChosenLocation}
        setDistance={setDistance}
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
