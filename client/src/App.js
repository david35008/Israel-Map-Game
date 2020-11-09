import React, { useState, useEffect } from "react";
import "./App.css";
import MyMap from "./components/Map/MyMap";
import ConfigPanel from "./components/Game/ConfigPanel";
import Target from "./components/Game/Target";
import Places from "./csvjson.json";

function App() {
    const [places, setPlaces] = useState(Places);
    const [currentLocation, setCurrentLocation] = useState();
    const [chosenLocation, setChosenLocation] = useState({});
    const [darkMode, setDarkMode] = useState(true);

    return (
        <>
            <MyMap
                places={places}
                setPlaces={setPlaces}
                chosenLocation={chosenLocation}
                setChosenLocation={setChosenLocation}
                currentLocation={currentLocation}
                darkMode={darkMode}
            />
            <ConfigPanel
                places={places}
                setPlaces={setPlaces}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <Target
                places={places}
                currentLocation={currentLocation}
                setCurrentLocation={setCurrentLocation}
                setChosenLocation={setChosenLocation}
            />
        </>
    );
}

export default App;
