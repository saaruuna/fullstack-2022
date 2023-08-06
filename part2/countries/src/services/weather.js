import axios from 'axios'
const baseUrl = "https://api.openweathermap.org/data/2.5/weather"
const apiKey = process.env.REACT_APP_API_KEY

const getWeather = (lat, lon) => {
    const weather = axios.get(`${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    return weather
}

export default {getWeather: getWeather}