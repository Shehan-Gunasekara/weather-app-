import React , {useState} from 'react';
import "../../assets/LayoutCSS/Search.css"
import {Grid } from '@mui/material'

export default function () {

    return (
        <div className="search">
            <Grid container spacing={0}>
                <Grid item xs={120} xl={80} lg={60} md={30} sm={30}>
                <form >
                    <input type="text" className="inputText"  placeholder="Enter a city" />
                    <button className="btn" type="submit">Add City</button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}