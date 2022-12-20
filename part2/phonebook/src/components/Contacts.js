import Contact from './Contact'

const Contacts = ({ persons, searchName, setPersons}) => {
    return (
        <div>
            <ul>
                {persons.filter(person => 
                    person.name.toLowerCase()
                    .includes(searchName.toLowerCase()))
                    .map(contact =>          
                    <Contact key={contact.id} contact={contact} persons={persons} setPersons={setPersons}/>
                )}  
            </ul>
        </div>
    )
}

export default Contacts