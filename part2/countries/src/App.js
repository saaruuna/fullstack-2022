import { useState, useEffect} from 'react'
import countryService from './services/countries'
import SearchForm from './components/SearchForm'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchName, setNewSearchName] = useState('')
  const [showCountry, setNewShowCountry] = useState(null)

  useEffect(() => {        
    countryService.getAll()     
    .then(response => {                
      setCountries(response.data)      
    })  
  }, [])

  return (
    <div>
      <SearchForm searchName={searchName} setNewSearchName={setNewSearchName} setNewShowCountry={setNewShowCountry}/>
      <Countries countries={countries} searchName={searchName} showCountry={showCountry} setNewShowCountry={setNewShowCountry}/>
    </div>
  )
}

export default App