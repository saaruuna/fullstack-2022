const CountryName = ({country, setNewShowCountry}) => {
    return (
      <>
        {country.name.common} 
        <button onClick={() => setNewShowCountry(country)}>          
          show       
        </button>      
      </>
    )

}

export default CountryName