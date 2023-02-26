
import "../assets/LayoutCSS/PageContainer.css"

import { withRouter } from 'react-router-dom';


import React, { Component } from 'react';
import city from '../data/cities.json';
import axios from 'axios';



import Titile from "./subComponents/Titile";
import Search from "./subComponents/searchBar";
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@mui/material'

import OneCityData from "./subComponents/oneCityData";

import { Link, Redirect } from 'react-router-dom';






export default class componentName extends Component {

    
    state = {
        cities: [],
        weather: [],
      
    }
    componentDidMount = async () => {
        var weatherArr = [];

        var localArr = [];
        const API_KEY = process.env.REACT_APP_API_KEY
        console.log("pppppppppppppppppppppppppppppppppppppppppppppp");
        console.log(API_KEY);
        
        localArr = JSON.parse(localStorage.getItem('weather'))  //get data from local storage
        var timespan = localStorage.getItem('date');

        if (localArr) {
            const res = ((new Date()).getTime()) > timespan;
            console.log((new Date()).getTime())
            if (res) {
                localStorage.removeItem('weather'); //delete cached
                console.log("time passed")
            } else {
                console.log("not timepassed")
            }

        }

        if (localArr == null || localArr.length == 0) {
            const cities = [];

            //fetch data from json file
  
            Object.values(city.List).map(rec => {
                cities.push(rec);
            })

            this.setState({ cities: cities })
      
            //calling api
            for (var i = 0; i < cities.length; i++) {
                console.log(i)
                await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${cities[i].CityName}&limit=1&appid=${API_KEY}`)
                    .then(async (getData) => {


                        await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${getData.data[0].lat}&lon=${getData.data[0].lon}&appid=${API_KEY}`)
                            .then((getData2) => {

                                weatherArr.push(getData2.data);
                            })
                    })

            }
            //set time to expire local storage 
            var dates = new Date().setMinutes(new Date().getMinutes() + 5);


            localStorage.setItem('date', dates);

        } else {
            weatherArr = localArr;
            console.log("not run")
            console.log(weatherArr)
        }




        this.setState({ weather: weatherArr })
        console.log("pppppppppppp")
        console.log(this.state.weather);

        if (this.state.weather.length != 0) {

            localStorage.setItem('weather', JSON.stringify(this.state.weather))  //store data in localStorage

            var timestamp;

        }
    }

    deleteCity = (id) => {
        console.log(id)
        const { weather } = this.state;

        const newWeather = weather.filter(wd => wd.id !== id);

        this.setState({ weather: newWeather });
    }




    render() {


        return (<div className="body-div">
            <br />


            <Titile />
            <Search />


            <Grid container spacing={5}>
                <Grid item xs={2.6} xl={1} lg={1.5} md={0.5} sm={0.5}
                >
                </Grid>
                <Grid item xs={9.2} xl={10} lg={10.5} md={11} sm={11.0}
                >
                    <Grid container spacing={5}>


                        {
                            this.state.weather.length != 0 && this.state.weather.map((data) => {


                                return (

                                    <Grid item xs={10} xl={4} lg={5.2} md={6} sm={6}
                                    >

                                        <div >
                                            <OneCityData
                     
                                                condition={false}
                                                dataSet={data}
                                                deleteClickHandler={this.deleteCity.bind(this, data.id)}

                                            />
                                        </div>

                                    </Grid>

                                )
                            })

                        }
                    </Grid>
                </Grid>

            </Grid>



        </div>
        );
    }
}

















