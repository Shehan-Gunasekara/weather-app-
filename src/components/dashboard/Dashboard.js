import React, { Component } from "react";
import { Grid } from "@mui/material";
import city from "../../data/cities.json";
import WeatherCard from "./weatherCard/WeatherCard";
import Background from "../../assets/iconeImage/titleIcon.png";
import ToDoService from "../../Services/ToDoService";
import "./Dashboard.css";

//this function return weather details of all cities
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.check = React.createRef();
    this.check.current = true;
  }

  state = {
    cities: [],
    weather: [],
  };

  componentDidMount = async () => {
    if (this.check.current) {     //componentDidMount run only one time 
      this.check.current = false;

      var tempWeatherData = [];
      var localData = [];
      const services = new ToDoService();

      //data caching mechanism
      localData = JSON.parse(localStorage.getItem("weather"));
      var timespan = localStorage.getItem("date");
      if (localData) {
        const res = new Date().getTime() > timespan;
        if (res) {
          localStorage.removeItem("weather");
          localData = [];
        }
      }
      if (localData == null || localData.length == 0) {
        const cities = [];

        //fetch data from json file
        Object.values(city.List).map((rec) => {
          cities.push(rec);
        });
        this.setState({ weather: [] });
        this.setState({ cities: cities });

        //get Data from API
        for (var i = 0; i < cities.length; i++) {
          await services
            .getLonLat(cities[i].CityName)
            .then(async (cityData) => {
              await services
                .getWeatherData(cityData.data[0].lon, cityData.data[0].lat)
                .then((weatherData) => {
                  tempWeatherData.push(weatherData.data);
                });
            });
        }
        this.setState({ weather: tempWeatherData });

        //store data in local storage
        if (tempWeatherData.length != 0) {
          var dates = new Date().setMinutes(new Date().getMinutes() + 5);
          localStorage.setItem("date", dates);
          localStorage.setItem("weather", JSON.stringify(tempWeatherData));
        }
      } else {
        tempWeatherData = localData;
        this.setState({ weather: tempWeatherData });
      }
    }
  };

  //removing item function
  deleteCity = (id) => {
    const { weather } = this.state;
    const newWeather = weather.filter((wd) => wd.id !== id);
    this.setState({ weather: newWeather });
  };

  render() {
    return (
      <div>
        <div className="body-div">
          <div className="Dashcloud one"></div>
          <div className="Dashcloud2 two"></div>
          <div className="Dashcloud3 three"></div>

          {/* Titile */}
          <div className="title">
            <p>
              <img src={Background} />
              Weather App
            </p>
          </div>

          {/*search Bar*/}
          <div className="search">
            <Grid container spacing={0}>
              <Grid item xs={120} xl={80} lg={60} md={30} sm={30}>
                <form>
                  <input
                    type="text"
                    className="inputText"
                    placeholder="    Enter a city"
                  />
                  <button className="btn" type="submit">
                    Add City
                  </button>
                </form>
              </Grid>
            </Grid>
          </div>

          {/* Weather Cards */}
          <div className="contentDataMain">
            <br />
            <Grid container spacing={9}>
              <Grid
                item
                xs={1.95}
                xl={2.15}
                lg={2.14}
                md={2.11}
                sm={2.0}
              ></Grid>
              <Grid item xs={8.1} xl={7.72} lg={7.69} md={7.9} sm={7.9}>
                <Grid
                  container
                  spacing={{ xs: 2, xl: 4.5, lg: 3.5, sm: 2, md: 3 }}
                >
                  {this.state.weather.length != 0 &&
                    this.state.weather.map((data) => {
                      return (
                        <Grid item xs={6} xl={6} lg={6} md={6} sm={6}>
                          {/*call sub component*/}
                          <WeatherCard
                            dataSet={data}
                            deleteClickHandler={this.deleteCity.bind(
                              this,
                              data.id
                            )}
                          />
                        </Grid>
                      );
                    })}
                </Grid>
              </Grid>
            </Grid>
          </div>

          {/* Footer */}
          <div className="Footer1">
            <div className="content2">
              <p>2021 Fidenz Technologies</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
