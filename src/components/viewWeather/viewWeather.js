//import dependencies
import React, { Component } from 'react';
import {Grid } from '@mui/material'

//import css
import "./PageContainer.css"
import "./Footer.css"
import "./Title.css"

//import sub components

import LargeWeatherCard from "./largeWeatherCard/LargeWeatherCard";
import Background from "../../assets/backgroundImages/iconeImage/titleIcon.png";
//this function return the selected wheather data of one city
export default class componentName2 extends Component {

    state = {
        cities: [],
        temp: {},
    }
    componentDidMount = () => {
        var localArr = [];
        var data = [];
        //get data from local storage
        localArr = JSON.parse(localStorage.getItem('tempData'));

        data.push(localArr)
        
        //store data in states
        this.setState({ cities: data })
        this.setState({ temp: localArr })
    }

    //function for return to the home page
    handleClick = () => {
        window.location.href = "/";
    }

    render() {
        return (
        <div>
        <div className="body-div">
            <br />
            {/*call subcomponent*/}
            <div className="title">
         <h1><img src={Background} />Weather App</h1>
    </div>

            <div >
                <Grid container spacing={5}>
                    <Grid item xs={2.7} xl={2.7} lg={2.7} md={2.7} sm={2.7}>
                    </Grid>
                    {
                        this.state.cities.map((city) => {  
                            return (
                                <Grid item xs={7} xl={7} lg={7} md={7} sm={7}>
                                    <div className="contentController">
                                        {/*call sub component*/}
                                        <LargeWeatherCard
                                             dataSet={city}
                                            condition={true}
                                        />
                                    </div>
                                </Grid>
                            )
                        })
                    }
                    <Grid item xs={1} xl={1} lg={1} md={1} sm={1}>
                    </Grid>
                </Grid>
            </div>
        </div>
             <div className="Footer">
             <div className='content'>
               <p>2021 Fidenz Technologies</p>
             </div>
           </div></div>
        );
    }
}

















