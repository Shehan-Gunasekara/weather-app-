import React from "react"
import "../assets/LayoutCSS/oneCity.css"


const getSunDetails = props => {
    console.log(props)

     //set sunrise 
     var riseTimeStamp = props.sunRise; 
     var date = new Date(riseTimeStamp * 1000);
     var riseHour = date.getHours();
     var riseMin = date.getMinutes();
     var riseTime;
     if (riseHour > 12) {
         riseHour = riseHour - 12;
         riseTime = "pm";
     } else {
         riseTime = "am"
     }
     
     //set sunset
      
     var setTimeStamp = props.sunSet; // timespan in milliseconds
     var date = new Date(setTimeStamp * 1000);
     var setHour = date.getHours();
     var setMin = date.getMinutes();
     var setTime;
     if (setHour > 12) {
         setHour = setHour - 12;
         setTime = "pm";
     } else {
         setTime = "am"
     }

    return (
        <div className='b02'>
                                    <h1><b>Sunrise :</b>{riseHour}.{riseMin} {riseTime}</h1>
                                    <h1><b>Sunset :</b>{setHour}.{setMin} {setTime}</h1>

                                </div>
    )}

    export default getSunDetails;