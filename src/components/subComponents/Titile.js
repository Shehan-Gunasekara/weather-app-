import React from "react";
import "../../assets/LayoutCSS/Title.css"
import Background from "../../assets/backgroundImages/iconeImage/titleIcon.png";


export default function(){
    return(
    <div className="title">
         <h1><img src={Background} />weather App</h1>
    </div>
    );
}