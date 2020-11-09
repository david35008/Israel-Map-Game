import React, { useState } from "react";
import "./App.css";
import MyMap from "./components/MyMap";
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
    </>
  );
}

export default App;
