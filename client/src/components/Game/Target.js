import React from "react";
import Button from "@material-ui/core/Button";
import "../Styles/Target.css";

export default function Target({
    setGameStart,
    setDistance,
    places,
    currentLocation,
    setCurrentLocation,
    setChosenLocation,
}) {
    const CreateNewTarget = () => {
        setDistance()
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
                        <div>מיקום : {currentLocation.NAME}</div>
                        <div>סוג : {GetType(currentLocation.TYPE)}</div>
                    </div>
                )}
                <Button style={{ margin: "20px" }} variant="contained" onClick={CreateNewTarget}>
                    {currentLocation ? "Next" : "Get Start"}
                </Button>
            </div>
        </>
    );
}
