import React from "react";
import { Card, Typography, Grid } from "@mui/material";
import Calculation from "../../../Utility/Calculation";
import "./largeWeatherCard.css";
import { FiNavigation } from "react-icons/fi";
import { BsArrowLeftShort } from "react-icons/bs";

const LargeWeatherCard = (props) => {
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

  //Navigate to Dashboard
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <Card sx={{ maxWidth: 4500 }}>
        {/* Card Top part */}
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            backgroundColor: "#388ee7",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "auto",
          }}
        >
          {/* Back button */}
          <Grid container spacing={0}>
            <Grid item xs={10.8} xl={10.8} lg={10.8} md={10.8} sm={10.8}>
              <div className="back">
                <button className="cbtn2" onClick={() => handleClick()}>
                  <BsArrowLeftShort />
                </button>
              </div>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={12} xl={12} lg={12} md={12} sm={12}>
                <div className="lnt">
                  <div className="location">
                    <p>
                      {props.dataSet.name},{props.dataSet.sys.country}
                    </p>
                  </div>
                  <div className="time">
                    <p>
                      {dataObj.currentTime.Hour}.{dataObj.currentTime.Min}
                      {dataObj.currentTime.Period} , {dataObj.currentDate.month}{" "}
                      {dataObj.currentDate.day}
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={3} xl={3} lg={3} md={3} sm={3}></Grid>
              <Grid item xs={3} xl={3} lg={3} md={3} sm={3} className="Spacer">
                <div className="description">
                  <p>
                    <img
                      src={`http://openweathermap.org/img/wn/${props.dataSet.weather[0].icon}@2x.png`}
                    />
                    <br /> {props.dataSet.weather[0].description}
                  </p>
                </div>
              </Grid>
              <Grid item xs={3} xl={3} lg={3} md={3} sm={3} className="Spacer">
                <div className="devider">
                  <div className="tempSet">
                    <div className="temp">
                      <h1>{dataObj.currentTemp}&deg;</h1>
                      <p>C</p>
                    </div>
                  </div>
                  <div className="tempMinMax">
                    <div className="minMax">
                      <p>Temp Min:{dataObj.Mintemp}&deg;C</p>
                      <p>Temp Max:{dataObj.Maxtemp}&deg;C</p>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Typography>

        {/* Card bottom part*/}
        <Typography variant="body2">
          <div className="Ldetails">
            <Grid container spacing={0}>
              <Grid item xs={2} xl={2} lg={2} md={2} sm={2}></Grid>
              <Grid item xs={2.45} xl={2.45} lg={2.45} md={2.45} sm={2.45}>
                <div className="Lb01">
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
              <Grid xs={3.05} xl={3.05} lg={3.05} md={3.05} sm={3.05}>
                <div className="Lb02">
                  <h1>
                    <FiNavigation style={{ color: "white" }} />
                  </h1>
                  <h1>
                    {props.dataSet.wind.speed} m/s {props.dataSet.wind.deg}{" "}
                    degree
                  </h1>
                </div>
              </Grid>
              <Grid xs={3} xl={3} lg={3} md={3} sm={3}>
                <div className="Lb03">
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
export default LargeWeatherCard;