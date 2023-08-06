import Language from './Language'

const CountryInfo = ({country, weather}) => {
    const commonName = country.name.common
    const capital = country.capital[0]
    const area = country.area
    const languages = Object.values(country.languages)
    const flag = country.flags.svg
    const temperature = weather.main.temp
    const windspeed = weather.wind.speed

    return (
        <div>
            <h1>{commonName}</h1>
            <p>capital {capital}</p>
            <p>area {area}</p>
            <h3>languages:</h3>
            <ul>
                {languages.map(language => 
                    <li key={language}>
                        <Language key={language} language={language}/>
                    </li>
                )}
            </ul>
            <img src={flag} height="200"/>
            <h1>weather in {capital}</h1>
            <p>temperature {temperature} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} height="100"/>
            <p>wind {windspeed} m/s</p>
        </div>
    )
}

export default CountryInfo