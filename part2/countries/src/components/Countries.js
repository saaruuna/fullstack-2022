import CountryInfo from "./CountryInfo"
import CountryName from "./CountryName"

const Countries = ({ countries, searchName, showCountry, setNewShowCountry}) => {
    const searchMatches = countries
    .filter(country => country.name.common.toLowerCase().includes(searchName.toLowerCase()))

    let display
    if (searchMatches.length > 10) {
        display = "Too many matches, specify another filter"
    } else if (searchMatches.length === 1) {
        display = <CountryInfo country={searchMatches[0]}/>
    } else if (showCountry) {
        display = <CountryInfo country={showCountry} />
    } else {
        display = searchMatches.map((match) => <CountryName key={match.id} country={match} setNewShowCountry={setNewShowCountry}/>)
    }

    return (
        <div>
            {display}
        </div>
    )
}

export default Countries