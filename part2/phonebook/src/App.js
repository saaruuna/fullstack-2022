import { useState } from 'react'
import Contacts from './components/Contacts'
import NewContactForm from './components/NewContactForm'
import SearchForm from './components/SearchForm'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [searchName, setNewSearchName] = useState('')

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
