import CountryInfo from "./CountryInfo"
import CountryName from "./CountryName"

const Countries = ({ countries, searchName}) => {
    const searchMatches = countries
    .filter(country => country.name.common.toLowerCase().includes(searchName.toLowerCase()))

    let display
    if (searchMatches.length > 10) {
        display = "Too many matches, specify another filter"
    } else if (searchMatches.length === 1) {
        display = <CountryInfo country={searchMatches[0]}/>
    } else {
        display = searchMatches.map((match) => <CountryName key={match.id} name={match.name.common}/>)
    }

    return (
        <div>
            {display}
        </div>
    )
}

export default Countries