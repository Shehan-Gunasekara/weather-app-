//import dependencies
import React, { Component } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material'

//import json file
import city from '../../data/cities.json';

//import css
import "./PageContainer.css"
import "./Footer.css"
import "./Search.css"
import "./Title.css"

//import sub component

import WeatherCard from "./weatherCard/WeatherCard";

import Background from "../../assets/backgroundImages/iconeImage/titleIcon.png";
import ToDoService from '../../Services/ToDoService';



//this function return weather details of all cities
export default class componentName extends Component {

    state = {
        cities: [],
        weather: [],

    }

    componentDidMount = async () => {

        var weatherArr = [];
        var localArr = [];

        const services = new ToDoService();

        //get API key from environment variable


        //data caching mechanism
        localArr = JSON.parse(localStorage.getItem('weather'))  //get data from local storage
        var timespan = localStorage.getItem('date');

        if (localArr) {
            const res = (((new Date()).getTime()) > timespan);
            if (res) {
                localStorage.removeItem('weather'); //delete cached
                console.log("timePassed");
            } else {
                console.log("not timePassed");
            }

        }

        if (localArr == null || localArr.length == 0) {
            const cities = [];

            //fetch data from json file

            Object.values(city.List).map(rec => {
                cities.push(rec);
            })
            this.setState({ weather: [] })
            this.setState({ cities: cities })

            //calling api

            for (var i = 0; i < cities.length; i++) {


                //convert city name to the ln and lat

                await services.getLonLat(cities[i].CityName)
                    .then(async (cityData) => {

                        //request weather data using lan and lot

                        await services.getWeatherData(cityData.data[0].lon, cityData.data[0].lat)
                            .then((weatherData) => {
                                weatherArr.push(weatherData.data);
                            })
                    })

            }
            console.log("API called");
            console.log(weatherArr);
            this.setState({ weather: weatherArr })

            if (weatherArr.length != 0) {
                //set time to expire local storage 
                var dates = new Date().setMinutes(new Date().getMinutes() + 5);

                //store data in local storage
                localStorage.setItem('date', dates);
                localStorage.setItem('weather', JSON.stringify(weatherArr))  //store data in localStorage
            }
        } else {
            weatherArr = localArr;
            console.log("Not API called");
            this.setState({ weather: weatherArr })
        }

    }


    //removing item function

    deleteCity = (id) => {

        const { weather } = this.state;
        const newWeather = weather.filter(wd => wd.id !== id);
        this.setState({ weather: newWeather });
    }

    render() {
        return (
            <div>
                <div className="body-div">
                    <div className="cloud one"></div>
                    <div className="cloud2 two"></div>
                    <div className="cloud3 three"></div>
             
                    {/*import title*/}
                    <div className="title">
                        <p><img src={Background} />Weather App</p>
                    </div>
                    {/*import search*/}
                    <div className="search">
                        {/*Creating search bar  */}
                        <Grid container spacing={0}>
                            <Grid item xs={120} xl={80} lg={60} md={30} sm={30}>
                                <form >
                                    <input type="text" className="inputText" placeholder="Enter a city" />
                                    <button className="btn" type="submit">Add City</button>
                                </form>
                            </Grid>
                        </Grid>
                    </div>


                    <div className="contentData">
                        <br />



                        <Grid container spacing={5}>
                            <Grid item xs={2.6} xl={2.215} lg={5} md={0.5} sm={0.5}>
                            </Grid>
                            <Grid item xs={9.2} xl={9} lg={10.5} md={11} sm={11.0}>
                                <Grid container spacing={0}>

                                    {   //get Data using map
                                        this.state.weather.length != 0 && this.state.weather.map((data) => {

                                            return (
                                                <Grid item xs={6} xl={6} lg={6} md={6} sm={6}>

                                                    {/*call sub component*/}
                                                    <WeatherCard
                                                        condition={false}
                                                        dataSet={data}
                                                        deleteClickHandler={this.deleteCity.bind(this, data.id)} />
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>
                        </Grid>

                    </div>

                    <div className="Footer">
                        <div className='content2'>
                            <p>2021 Fidenz Technologies</p>
                        </div>
                    </div>
                    
                </div>

            </div>
        );
    }
}

















