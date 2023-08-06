import { useState, useEffect} from 'react'
import weatherService from './services/weather'
import countryService from './services/countries'
import SearchForm from './components/SearchForm'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchName, setNewSearchName] = useState('')
  const [showCountry, setNewShowCountry] = useState(null)
  const [weather, setWeather] = useState(null)
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {        
    countryService.getAll()     
    .then(response => {                
      setCountries(response.data)      
    })  
  }, [])

  useEffect(() => {        
    weatherService.getWeather(latitude, longitude)     
    .then(response => {                
      setWeather(response.data)      
    })
  }, [latitude, longitude])

  return (
    <div>
      <SearchForm searchName={searchName} setNewSearchName={setNewSearchName} setNewShowCountry={setNewShowCountry}/>
      <Countries countries={countries} searchName={searchName} showCountry={showCountry} setNewShowCountry={setNewShowCountry} weather={weather} setLatitude={setLatitude} setLongitude={setLongitude}/>
    </div>
  )
}

export default App