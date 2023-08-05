const SearchForm = ({searchName, setNewSearchName, setNewShowCountry}) => {
    const handleSearchNameChange = (event) => {    
        console.log(event.target.value)    
        setNewSearchName(event.target.value)
        setNewShowCountry(null)
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