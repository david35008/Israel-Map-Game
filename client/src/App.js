import React, { useState } from "react";
import "./App.css";
import MyMap from "./components/Map/MyMap";
import ConfigPanel from "./components/Game/ConfigPanel";
import Places from "./csvjson.json";

function App() {
    const [places, setPlaces] = useState(Places);
    const [darkMode, setDarkMode] = useState(true);

    return (
        <>
            <MyMap
                places={places}
                setPlaces={setPlaces}
                darkMode={darkMode}
            />
            <ConfigPanel
                places={places}
                setPlaces={setPlaces}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
        </>
    );
}

export default App;
