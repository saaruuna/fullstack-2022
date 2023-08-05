import { useState, useEffect} from 'react'
import countryService from './services/countries'
import SearchForm from './components/SearchForm'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchName, setNewSearchName] = useState('')

  useEffect(() => {        
    countryService.getAll()     
    .then(response => {                
      setCountries(response.data)      
    })  
  }, [])

  return (
    <div>
      <SearchForm searchName={searchName} setNewSearchName={setNewSearchName} />
      <Countries countries={countries} searchName={searchName}/>
    </div>
  )
}

export default App