import React from "react";

//import components
import Footer from "../layouts/Footer"
import OneCityData from "../components/singleCityData";

function  allCities() {

    //return selected one city weather data
    return(
        <div>
            <OneCityData/>
            <Footer />
        </div>
    )
}

export default allCities;