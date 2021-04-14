import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import "../Styles/ConfigPanel.css";
import Places from "../../csvjson.json";

export default function ConfigPanel({
    places, setPlaces,
    city, setCity,
    settlement, setSettlement,
    moshav, setMoshav,
    kibbutz, setKibbutz, }) {

    const checkForMinPlace = (current) => {
        switch (current) {
            case "city": {
                if (!settlement && !moshav && !kibbutz) {
                    alert('חייב לבחור לפחות סוג מקום אחד')
                    return false
                }
                return true
            }
            case "settlement": {
                if (!city && !moshav && !kibbutz) {
                    alert('חייב לבחור לפחות סוג מקום אחד')
                    return false
                }
                return true
            }
            case "moshav": {
                if (!city && !settlement && !kibbutz) {
                    alert('חייב לבחור לפחות סוג מקום אחד')
                    return false
                }
                return true
            }
            case "kibbutz": {
                if (!city && !settlement && !moshav) {
                    alert('חייב לבחור לפחות סוג מקום אחד')
                    return false
                }
                return true
            }
            default:
                return true
        }
    }

    const handleChange = (event) => {
        switch (event.target.name) {
            case "city": {
                setCity(event.target.checked);
                if (event.target.checked) {
                    const citys = Places.filter((obj) => obj.TYPE.includes("תושבים"));
                    setPlaces([...places, ...citys]);
                } else {
                    if (!checkForMinPlace("city")) {
                        return setCity(true);
                    }
                    const filtering = places.filter((obj) => !obj.TYPE.includes("תושבים"));
                    setPlaces(filtering);
                }
                break;
            }
            case "settlement": {
                setSettlement(event.target.checked);
                if (event.target.checked) {
                    const citys = Places.filter((obj) => obj.TYPE.includes("ישובים"));
                    setPlaces([...places, ...citys]);
                } else {
                    if (!checkForMinPlace("settlement")) {
                        return setSettlement(true);
                    }
                    const filtering = places.filter((obj) => !obj.TYPE.includes("ישובים"));
                    setPlaces(filtering);
                }
                break;
            }
            case "moshav": {
                setMoshav(event.target.checked);
                if (event.target.checked) {
                    const citys = Places.filter((obj) => obj.TYPE.includes("מושבים"));
                    setPlaces([...places, ...citys]);
                } else {
                    if (!checkForMinPlace("moshav")) {
                        return setMoshav(true);
                    }
                    const filtering = places.filter((obj) => !obj.TYPE.includes("מושבים"));
                    setPlaces(filtering);
                }
                break;
            }
            case "kibbutz": {
                setKibbutz(event.target.checked);
                if (event.target.checked) {
                    const citys = Places.filter((obj) => obj.TYPE.includes("קיבוצים"));
                    setPlaces([...places, ...citys]);
                } else {
                    if (!checkForMinPlace("kibbutz")) {
                        return setKibbutz(true);
                    }
                    const filtering = places.filter((obj) => !obj.TYPE.includes("קיבוצים"));
                    setPlaces(filtering);
                }
                break;
            }
            default:
                break;
        }
    };

    return (
        <div className="GuiContainer">
            <div>
                <h2 className='hebrew-text-small important' >בחר את סוג המקומות:</h2>
                <FormGroup columns>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={city}
                                onChange={handleChange}
                                name="city"
                                color="primary"
                            />
                        }
                        label="ערים"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={settlement}
                                onChange={handleChange}
                                name="settlement"
                                color="primary"
                            />
                        }
                        label="ישובים"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={moshav}
                                onChange={handleChange}
                                name="moshav"
                                color="primary"
                            />
                        }
                        label="מושבים"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={kibbutz}
                                onChange={handleChange}
                                name="kibbutz"
                                color="primary"
                            />
                        }
                        label="קיבוצים"
                    />
                </FormGroup>
            </div>
        </div>
    );
}
