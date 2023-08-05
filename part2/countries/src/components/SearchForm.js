const SearchForm = ({searchName, setNewSearchName}) => {
    const handleSearchNameChange = (event) => {    
        console.log(event.target.value)    
        setNewSearchName(event.target.value)
    }

    return (
        <div>
          find countries <input
          value={searchName}
          onChange={handleSearchNameChange} 
          />
        </div>
    )
}

export default SearchForm