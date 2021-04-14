import React from "react";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import ConfigDrawer from './ConfigDrawer';
import "../Styles/Target.css";

export default function Target({
    setGameStart,
    setDistance,
    currentLocation,
    setCurrentLocation,
    setChosenLocation,
    places, setPlaces,
    city, setCity,
    settlement, setSettlement,
    moshav, setMoshav,
    kibbutz, setKibbutz,
    winDistance, setWinDistance
}) {
    const CreateNewTarget = () => {
        setDistance('-')
        setGameStart(true)
        const random = Math.floor(Math.random() * (places.length - 1) + 1);
        setCurrentLocation(places[random]);
        setChosenLocation({});
    };
    const GetType = (type) => {
        if (type.includes("מושבים")) {
            return "מושב";
        } else if (type.includes("ישובים")) {
            return "מושב";
        } else if (type.includes("קיבוצים")) {
            return "קיבוץ";
        } else if (type.includes("תושבים")) {
            return "עיר";
        }
    };

    return (
        <>
            <div className="targetContainer">
                {currentLocation && (
                    <div className="targetDetailsContainer">
                        <div className='hebrew-text' >מיקום : {currentLocation.NAME}</div>
                        <div className='hebrew-text'>סוג : {GetType(currentLocation.TYPE)}</div>
                    </div>
                )}
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >

                    <Button style={{ margin: "5px 20px 5px 20px" }} variant="contained" onClick={CreateNewTarget}>
                        <span className='hebrew-text'>{currentLocation ? "היעד הבא" : "בוא נתחיל"}</span>
                    </Button>
                    <ConfigDrawer
                        setPlaces={setPlaces}
                        places={places}
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
                </Grid>
            </div>
        </>
    );
}
