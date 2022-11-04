import Contact from './Contact'

const Contacts = ({ persons, searchName}) => {
    return (
        <div>
            <ul>
                {persons.filter(person => 
                    person.name.toLowerCase()
                    .includes(searchName.toLowerCase()))
                    .map(contact =>          
                    <Contact key={contact.id} contact={contact} />
                )}  
            </ul>
        </div>
    )
}

export default Contacts