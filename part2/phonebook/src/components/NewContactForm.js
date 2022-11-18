import { useState } from 'react'
import contactService from '../services/contacts'

const NewContactForm = ({persons, setPersons}) => {    
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

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
          contactService
          .create(nameObject)   
          .then(response => {      
            setPersons(persons.concat(response.data))    
          })
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

    return(
        <div>
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
        </div>
    )
}

export default NewContactForm