import React from "react";

//import components
import Citiesdata from "../components/citiesData"
import Footer from "../layouts/Footer"


//return all cities's weather data
function  allCities() {
    return(
        <div>
            <Citiesdata />
            <Footer />
        </div>
    )
}

export default allCities;