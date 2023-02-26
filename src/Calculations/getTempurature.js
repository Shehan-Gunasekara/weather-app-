import React from "react"
import "../assets/LayoutCSS/oneCity.css"


const getTempurature = props => {

     
    //convert kelvin to celcius

    var temp = Math.floor(props.currentTemp - 273.15)
    var Mintemp = Math.floor(props.minTemp - 273.15)
    var Maxtemp = Math.floor(props.maxTemp - 273.15)
   
    return (
        <div className='tempSet'>
                            <div className='temp'><h1>{temp}&deg;C</h1></div>
                            <div className='minMax'><h2>Temp Min:{Mintemp}&deg;C</h2>
                                <h2>Temp Max:{Maxtemp}&deg;C</h2>
                            </div>
                        </div>
    )}

    export default getTempurature;