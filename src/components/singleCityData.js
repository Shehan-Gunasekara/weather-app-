
import "../assets/LayoutCSS/PageContainer.css"



import React, { Component } from 'react';

import Titile from "./subComponents/Titile";

import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@mui/material'

import OneCityData from "./subComponents/oneCityData";



export default class componentName2 extends Component {


    state = {
        cities: [],
        temp: {},
        sys: ""
    }
    componentDidMount = () => {


        var localArr = [];
        var data = [];

        localArr = JSON.parse(localStorage.getItem('tempData'));

        console.log("AAAAAAAAAAAAAAA")
        console.log(localArr)
        console.log(localArr.name)
        data.push(localArr)
        console.log("data", data)
        this.setState({ cities: data })

        this.setState({ temp: localArr })

        //this.setState({sys:localArr.temp.sys})
        console.log(this.state.temp)
    }


    handleClick = () => {


        window.location.href = "/";
    }

    render() {
        console.log("sSSSSSSSSSSSSSSSSSSSSSSSS")

        const gg = this.state.temp.sys
        this.state.cities.map((city) => {
            console.log(city.sys)
        })
        return (<div className="body-div">
            <br />

            <Titile />

            <div >
                <Grid container spacing={5}>


                    <Grid item xs={2.7} xl={2.7} lg={2.7} md={2.7} sm={2.7}>
                    </Grid>


                    {
                        this.state.cities.map((city) => {


                            return (

                                <Grid item xs={7} xl={7} lg={7} md={7} sm={7}
                                >

                                    <div className="contentController">
                                        <OneCityData
                                             dataSet={city}
                                            condition={true}
                                        />
                                    </div>

                                </Grid>

                            )
                        })

                    }

                    <Grid item xs={1} xl={1} lg={1} md={1} sm={1}
                    >
                    </Grid>

                </Grid>
            </div>




        </div>
        );
    }
}

















