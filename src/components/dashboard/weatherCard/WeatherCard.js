import React from "react";
import PropTypes from "prop-types";
import { Card, Typography, Grid } from "@mui/material";
import "./WeatherCard.css";
import { FiNavigation } from "react-icons/fi";
import Calculation from "../../../Utility/Calculation";

const oneCityData = (props) => {
  const Calculations = new Calculation();

  //Get weather Data
  var dataObj = Calculations.getData(
    props.dataSet.sys.sunrise,
    props.dataSet.sys.sunset,
    props.dataSet.dt,
    props.dataSet.main.temp,
    props.dataSet.main.temp_min,
    props.dataSet.main.temp_max
  );

  //redirection functions
  const handleClick = (data) => {
    localStorage.setItem("tempData", JSON.stringify(data));
    window.location.href = "/ViewWeather";
  };

  //Item remove props function
  const onDelete = () => {
    props.deleteClickHandler();
  };

  //get Random background color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const divStyle = {
    backgroundColor: `${getRandomColor()}`,
  };

  return (
    <div>
      <Card sx={{ maxWidth: 4500 }} className="clickable">
        {/* Card Top part */}
        <Typography variant="body2" color="text.secondary">
          <div style={divStyle} className="bgDesign">
            <div className="cardCloud one"></div>
            <div className="base"></div>
            <Grid container spacing={0}>
              <Grid
                item
                xs={10.8}
                xl={10.8}
                lg={10.8}
                md={10.8}
                sm={10.8}
                onClick={() => handleClick(props.dataSet)}
              ></Grid>
              <Grid item xs={1} xl={1} lg={1} md={1} sm={1}>
                <div className="close">
                  <button className="cbtn" onClick={() => onDelete()}>
                    x
                  </button>
                </div>
              </Grid>
              <Grid
                container
                spacing={0}
                onClick={() => handleClick(props.dataSet)}
              >
                <Grid item xs={6} xl={6} lg={6} md={6} sm={6}>
                  <div className="lnt">
                    <div className="location">
                      <p>
                        {props.dataSet.name},{props.dataSet.sys.country}
                      </p>
                    </div>
                    {
                      <div className="time">
                        <p>
                          {dataObj.currentTime.Hour}.{dataObj.currentTime.Min}
                          {dataObj.currentTime.Period} ,{" "}
                          {dataObj.currentDate.month} {dataObj.currentDate.day}
                        </p>
                      </div>
                    }
                  </div>
                </Grid>
                <Grid item xs={6} xl={6} lg={6} md={6} sm={6}>
                  <div className="tempSet">
                    <div className="temp">
                      <h1>{dataObj.currentTemp}&deg;</h1>
                      <p>C</p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6} xl={6} lg={6} md={6} sm={6}>
                  <div className="des">
                    <p>
                      <img
                        src={`http://openweathermap.org/img/wn/${props.dataSet.weather[0].icon}@2x.png`}
                      />
                      {props.dataSet.weather[0].description}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={6} xl={6} lg={6} md={6} sm={6}>
                  <div className="tempMinMax">
                    <div className="minMax">
                      <p>Temp Min:{dataObj.Mintemp}&deg;C</p>
                      <p>Temp Max:{dataObj.Maxtemp}&deg;C</p>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Typography>

        {/* Card bottom part*/}
        <Typography variant="body2" onClick={() => handleClick(props.dataSet)}>
          <div className="details">
            <Grid container spacing={0}>
              <Grid item xs={4} xl={4} lg={4} md={4} sm={4}>
                <div className="b01">
                  <h1>
                    <b>Pressure :</b>
                    {props.dataSet.main.pressure}hpa
                  </h1>
                  <h1>
                    <b>Hummidity :</b>
                    {props.dataSet.main.humidity}%
                  </h1>
                  <h1>
                    <b>Visibility :</b>
                    {props.dataSet.visibility / 1000}km
                  </h1>
                </div>
              </Grid>
              <Grid xs={4} xl={4} lg={4} md={4} sm={4}>
                <div className="b02">
                  <h1>
                    <FiNavigation style={{ color: "white" }} />
                  </h1>
                  <h1>
                    {props.dataSet.wind.speed} m/s {props.dataSet.wind.deg}{" "}
                    degree
                  </h1>
                </div>
              </Grid>
              <Grid xs={4} xl={4} lg={4} md={4} sm={4}>
                <div className="b02">
                  <h1>
                    <b>Sunrise :</b>
                    {dataObj.sunRiseTime.Hour}.{dataObj.sunRiseTime.Min}{" "}
                    {dataObj.sunRiseTime.Period}
                  </h1>
                  <h1>
                    <b>Sunset :</b>
                    {dataObj.sunSetTime.Hour}.{dataObj.sunSetTime.Min}{" "}
                    {dataObj.sunSetTime.Period}
                  </h1>
                </div>
              </Grid>
            </Grid>
          </div>
        </Typography>
      </Card>
    </div>
  );
};

//calling remove data props function
oneCityData.protoTypes = {
  deleteClickHandler: PropTypes.func.isRequired,
};

export default oneCityData;