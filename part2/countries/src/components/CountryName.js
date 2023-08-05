const CountryName = ({country, setNewShowCountry}) => {
    return (
      <li>
        {country.name.common} 
        <button onClick={() => setNewShowCountry(country)}>          
          show       
        </button>      
      </li>
    )

}

export default CountryName