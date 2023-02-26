import React from "react";

import Footer from "../layouts/Footer"

import OneCityData from "../components/singleCityData";
function  allCities() {
    return(
        <div>
            <OneCityData/>
            <Footer />
        </div>
    )
}

export default allCities;