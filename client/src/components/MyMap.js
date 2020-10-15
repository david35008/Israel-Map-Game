import React, { useState } from "react";
import { GoogleMap, Marker, useLoadScript, InfoWindow, } from "@react-google-maps/api";
import env from '../env.js';
import { formatRelative } from "date-fns";
import mapStyles from '../mapStyles.js';
import Search from './Search';
import Locate from './Locate'


function App() {
    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);
    const [libraries] = useState(["places"])
    const [myFocus, setMyFocus] = useState({
        lat: 31.768318,
        lng: 35.213711,
    })


    const mapContainerStyle = {
        width: "100vw",
        height: "100vh",
    };

    // const myFocus = {
    //     lat: 31.768318,
    //     lng: 35.213711,
    // };

    const options = {
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true,
    }

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: env.GOOGLE_MAPS_KEY,
        libraries,
    }, []);

    const mapRef = React.useRef();

    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const onMapClick = React.useCallback((e) => {
        setMarkers((markers) => [
            ...markers,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                date: new Date(),
            },
        ]);
        setMyFocus({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
        })
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, [])


    if (loadError) return "Error loading Map";
    if (!isLoaded) return "Loading Map";
    return (
        <div className="app">
            <div className="control">
                <h1>
                    Bears {" "}
                    <span role='img' aria-label='bear' >
                        🐻
                        ⛺
                    </span>
                </h1>

                <Search panTo={panTo} />
                <Locate panTo={panTo} />
            </div>
            <div className="map">
                <GoogleMap
                    onClick={onMapClick}
                    mapContainerStyle={mapContainerStyle}
                    zoom={8}
                    center={myFocus}
                    options={options}
                    onLoad={onMapLoad}
                >
                    {markers.map((marker) => {
                        return (
                            <Marker
                                key={`${marker.lat}-${marker.lng}`}
                                position={{ lat: marker.lat, lng: marker.lng }}
                                // icon={{
                                //     url: `/bear.png`,
                                //     origin: new window.google.maps.Point(0, 0),
                                //     anchor: new window.google.maps.Point(15, 15),
                                //     scaledSize: new window.google.maps.Size(30, 30),
                                // }}
                                onClick={() => {
                                    setSelected(marker)
                                }}
                            />
                        );
                    })}
                    {selected ? (
                        <InfoWindow
                            position={{ lat: selected.lat, lng: selected.lng }}
                            onCloseClick={() => {
                                setSelected(null);
                            }}
                        >
                            <div>
                                <h2>Bear Spotted</h2>
                                <p>Spotted {formatRelative(selected.date, new Date())}</p>
                            </div>
                        </InfoWindow>
                    )
                        :
                        null
                    }
                </GoogleMap>
            </div>
        </div>
    );
}

export default App;