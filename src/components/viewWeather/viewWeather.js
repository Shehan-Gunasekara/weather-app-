import React, { Component } from "react";
import { Grid } from "@mui/material";
import LargeWeatherCard from "./largeWeatherCard/LargeWeatherCard";
import Background from "../../assets/iconeImage/titleIcon.png";
import "./viewWeather.css";

export default class componentName2 extends Component {
  state = {
    weatherData: [],
  };

  //Get data and store
  componentDidMount = () => {
    var localData = [];
    var data = [];
    localData = JSON.parse(localStorage.getItem("tempData"));
    data.push(localData);
    this.setState({ weatherData: data });
  };

  //Redirect to dashboard
  handleClick = () => {
    window.location.href = "/";
  };

  render() {
    return (
      <div>
        <div className="body-div">
          <div className="cloud one"></div>
          <div className="cloud2 two"></div>
          <div className="cloud3 three"></div>

          {/*Title*/}
          <div className="title">
            <p>
              <img src={Background} />
              Weather App
            </p>
          </div>

          {/*Content*/}
          <div className="ViewWeather">
            <br />
            <Grid container spacing={5}>
              <Grid item xs={2.0} xl={2.2} lg={2.2} md={2.15} sm={2.1}></Grid>
              {this.state.weatherData.map((city) => {
                return (
                  <Grid item xs={8.25} xl={7.6} lg={7.7} md={7.7} sm={7.8}>
                    <div className="contentController">
                      {/*call sub component*/}
                      <LargeWeatherCard dataSet={city} />
                    </div>
                  </Grid>
                );
              })}
              <Grid item xs={1} xl={1} lg={1} md={1} sm={1}></Grid>
            </Grid>
          </div>
        </div>
        {/* Footer */}
        <div className="Footer">
          <div className="content2">
            <p>2021 Fidenz Technologies</p>
          </div>
        </div>
      </div>
    );
  }
}