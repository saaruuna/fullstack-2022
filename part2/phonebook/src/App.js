import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setNewSearchName] = useState('')

  const addNameAndNumber = (event) => {
    event.preventDefault()    
    const nameObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    }

    if (persons.map(person => person.name).includes(nameObject.name)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(nameObject))
    }

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {    
    console.log(event.target.value)    
    setNewName(event.target.value)  
  }

  const handleNumberChange = (event) => {    
    console.log(event.target.value)    
    setNewNumber(event.target.value)  
  }

  const handleSearchNameChange = (event) => {    
    console.log(event.target.value)    
    setNewSearchName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with <input
          value={searchName}
          onChange={handleSearchNameChange} 
          />
        </div>
      <h2>add a new</h2>
      <form onSubmit={addNameAndNumber}>
        <div>
          name: <input
          value={newName}
          onChange={handleNameChange}        
        />
        </div>
        <div>
          number: <input
          value={newNumber}
          onChange={handleNumberChange}        
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.filter(person => 
        person.name.toLowerCase().includes(searchName.toLowerCase()))
        .map(person =>          
          <Person key={person.id} person={person} />
        )}  
      </ul>
    </div>
  )
}

export default App
