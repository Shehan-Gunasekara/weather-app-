import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

function setURL(baseURL, url) {
  return `${baseURL}/${url}`;
}

class ToDoService {
  constructor() {
    this.domain = process.env.REACT_APP_BASE_URL;
  }

  request=async(url)=>{
    url = setURL(this.domain, url);
    return await axios.get(url);
  }

  getLonLat(cityName) {
    const url = `geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    console.log("AAAAAAAAAAAAAAAAAAA");
    return this.request(url);
  }

  getWeatherData(longitude, latitude) {
    const url = `data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    console.log(this.request(url));
    return this.request(url);
  }
}
export default ToDoService;
