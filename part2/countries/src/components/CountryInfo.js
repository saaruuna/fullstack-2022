import countryService from '../services/countries'
import Language from './Language'

const CountryInfo = ({country}) => {
    const commonName = country.name.common
    const capital = country.capital[0]
    const area = country.area
    const languages = Object.values(country.languages)
    const flag = country.flags.svg

    return (
        <div>
            <h1>{commonName}</h1>
            <p>capital {capital}</p>
            <p>area {area}</p>
            <h3>languages:</h3>
            <ul>
                {languages.map(language => <Language key={language.id} language={language}/>)}
            </ul>
            <img src={flag} height="200"/>
        </div>
    )
}

export default CountryInfo