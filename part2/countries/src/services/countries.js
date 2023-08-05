import axios from 'axios'
const baseUrl = "https://studies.cs.helsinki.fi/restcountries"

const getAll = async () => {
  const countries = await axios.get(baseUrl + "/api/all")
  return countries
} 

const getCountry = async name => {
  const country = await axios.get(baseUrl + "api/name/" + name)
  return country
}

export default { 
  getAll: getAll, 
  getCountry: getCountry
}