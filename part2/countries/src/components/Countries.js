import { useState, useEffect} from 'react'
import CountryInfo from "./CountryInfo"
import CountryName from "./CountryName"

const Countries = ({ countries, searchName, showCountry, setNewShowCountry, weather, setLatitude, setLongitude}) => {
    const [display, setDisplay] = useState(null)

    useEffect(() => {
        const searchMatches = countries
        .filter(country => country.name.common.toLowerCase().includes(searchName.toLowerCase()))

        if (searchMatches.length > 10) {
            setDisplay("Too many matches, specify another filter")
        } else if (searchMatches.length === 1) {
            setLatitude(searchMatches[0].capitalInfo.latlng[0])
            setLongitude(searchMatches[0].capitalInfo.latlng[0])
            setDisplay(<CountryInfo country={searchMatches[0]} weather={weather}/>)
        } else if (showCountry) {
            setLatitude(showCountry.capitalInfo.latlng[0])
            setLongitude(showCountry.capitalInfo.latlng[1])
            setDisplay(<CountryInfo country={showCountry} weather={weather}/>)
        } else {
            setDisplay(
                <ul>
                    {searchMatches.map((match) => 
                        <li key={match.name.common}> 
                            <CountryName country={match} setNewShowCountry={setNewShowCountry}/> 
                        </li>
                        )}
                </ul>
            )
        }
    }, [searchName, showCountry])

    return (
        <div>
            {display}
        </div>
    )
}

export default Countries