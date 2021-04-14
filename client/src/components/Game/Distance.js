import React, { useEffect } from "react";
import Swal from "sweetalert2";
import "../Styles/Distance.css";
export default function Distance({ chosenLocation, currentLocation, distance, setDistance, winDistance }) {
    function haversineDistance(mk1, mk2) {
        var R = 3958.8; // Radius of the Earth in miles
        var rlat1 = mk1.lat * (Math.PI / 180); // Convert degrees to radians
        var rlat2 = mk2.location.lat * (Math.PI / 180); // Convert degrees to radians
        var difflat = rlat2 - rlat1; // Radian difference (latitudes)
        var difflon = (mk2.location.lng - mk1.lng) * (Math.PI / 180); // Radian difference (longitudes)

        var d =
            2 *
            R *
            Math.asin(
                Math.sqrt(
                    Math.sin(difflat / 2) * Math.sin(difflat / 2) +
                    Math.cos(rlat1) *
                    Math.cos(rlat2) *
                    Math.sin(difflon / 2) *
                    Math.sin(difflon / 2)
                )
            );
        return Math.round(d);
    }
    useEffect(() => {
        if (distance <= winDistance) {
            Swal.fire({
                icon: "success",
                title: "כל הכבוד !",
                text: `קמ ${distance} המרחק בין המיקומים הינו `,
            });
        }
    }, [distance]);
    useEffect(() => {
        if (!!Object.keys(chosenLocation).length && !!Object.keys(currentLocation).length) {
            setDistance(haversineDistance(chosenLocation, currentLocation));
        }
    }, [chosenLocation, currentLocation, setDistance]);
    return (
        <div className="distanceContainer">
            <div
                style={
                    distance <= winDistance
                        ? { backgroundColor: "green" }
                        : distance
                            ? { backgroundColor: "red" }
                            : {}
                }

            >
                <h1 className='hebrew-text Calibri' > המרחק מהיעד הוא  : {distance} ק"מ</h1>
            </div>
        </ div>
    );
}
