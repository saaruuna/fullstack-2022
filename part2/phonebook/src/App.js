import { useState, useEffect} from 'react'
import contactService from './services/contacts'
import Contacts from './components/Contacts'
import NewContactForm from './components/NewContactForm'
import SearchForm from './components/SearchForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchName, setNewSearchName] = useState('')

  useEffect(() => {        
    contactService.
    getAll()     
    .then(response => {                
      setPersons(response.data)      
    })  
  }, [])  
  return (
    <div>
      <h2>Phonebook</h2>
      <SearchForm searchName={searchName} setNewSearchName={setNewSearchName} />
      <h2>add a new</h2>
      <NewContactForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Contacts persons={persons} searchName={searchName} />
    </div>
  )
}

export default App
