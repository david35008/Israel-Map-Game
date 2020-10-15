import React from "react";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";


function Search({ panTo }) {

    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
            location: {
                lat: () => 31.768318,
                lng: () => 35.213711
            },
            radius: 200 * 1000,
        }
    })

    return (
        <Combobox
            onSelect={async (address) => {
                setValue(address, false);
                clearSuggestions();
                // console.log(address);
                try {
                    const results = await getGeocode({ address });
                    // console.log(results[0]);
                    const { lat, lng } = await getLatLng(results[0]);
                    // console.log(lat, lng);
                    panTo({ lat, lng })
                } catch (error) {
                    console.error(error);
                }
            }}
        >
            <ComboboxInput value={value} onChange={(e) => {
                setValue(e.target.value)
            }}
                disabled={!ready}
                placeholder="Enter an address"
            />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" &&
                        data.map(({ id, description }) => (
                            <ComboboxOption key={id + description} value={description} />
                        ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    )

}

export default Search;