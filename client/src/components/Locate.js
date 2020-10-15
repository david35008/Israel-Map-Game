import React from "react";

function Locate({ panTo }) {
    return (
        <button  
        onClick={()=> {
            navigator.geolocation.getCurrentPosition((posiotion) => {
                console.log(posiotion);
                panTo({
                    lat: posiotion.coords.latitude,
                    lng: posiotion.coords.longitude
                })
            } , () => null);
        }}
        >
            <img src='' alt='' />
        </button>
    )
}

export default Locate;