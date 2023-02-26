//import dependencies
import React, { Component } from 'react';
import {Grid } from '@mui/material'

//import css
import "../assets/LayoutCSS/PageContainer.css"

//import sub components
import Titile from "./subComponents/Titile";
import OneCityData from "./subComponents/oneCityData";

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
        return (<div className="body-div">
            <br />
            {/*call subcomponent*/}
            <Titile />

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
                                        <OneCityData
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
        );
    }
}

















