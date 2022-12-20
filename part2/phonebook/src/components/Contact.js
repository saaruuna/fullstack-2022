import contactService from '../services/contacts'

const Contact = ({ contact, persons, setPersons }) => {
    const deleteContact = (event) => {
      event.preventDefault()
      if (window.confirm("Delete " + contact.name + "?")) {
        const contactId = contact.id
        contactService
        .deleteContact(contactId)
        .then(response => {   
          setPersons(persons.filter(person => person.id !== contactId))    
        })
      }
    }

    return (
      <li>
        {contact.name} 
        {contact.number} 
        <button onClick={deleteContact}>delete</button>
      </li>
    )
  }
  
  export default Contact