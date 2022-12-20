import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const deleteContact = contactId => {
    return axios.delete(baseUrl + '/' + contactId)
}

export default { 
  getAll: getAll, 
  create: create, 
  deleteContact: deleteContact
}