import React from "react";

//import css
import "../../assets/LayoutCSS/Title.css"

//impport background image
import Background from "../../assets/backgroundImages/iconeImage/titleIcon.png";


export default function(){
    return(

    <div className="title">
         <h1><img src={Background} />Weather App</h1>
    </div>
    );
}