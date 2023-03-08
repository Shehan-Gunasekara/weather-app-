class Calculation {
  constructor() {}

  getTime(time) {
    var date = new Date(time * 1000);
    var Hour = date.getHours();
    var Min = date.getMinutes();
    var timePeriod;
    if (Hour > 12) {
      Hour = Hour - 12;
      timePeriod = "pm";
    } else {
      timePeriod = "am";
    }
    
    return { Hour: Hour, Min: Min, Period: timePeriod };
  }

  getDate(timeSpan) {
    var date = new Date(timeSpan * 1000);
    var day = date.getDate();
    var month = date.getMonth();
    switch (month) {
      case 1:
        month = "Jan";
        break;
      case 2:
        month = "Feb";
        break;
      case 3:
        month = "Mar";
        break;
      case 4:
        month = "Apr";
        break;
      case 5:
        month = "May";
        break;
      case 6:
        month = "Jun";
        break;
      case 7:
        month = "Jul";
        break;
      case 8:
        month = "Aug";
        break;
      case 9:
        month = "Sep";
        break;
      case 10:
        month = "Oct";
        break;
      case 11:
        month = "Nov";
        break;
      case 12:
        month = "Dec";
        break;
    }

    return { month: month, day: day };
  }

  getData(sunRise, sunSet, currentTime, currentTemp, minTemp, maxTemp) {
    var dataObject = {};
    var temp = Math.floor(currentTemp - 273.15);
    var Mintemp = Math.floor(minTemp - 273.15);
    var Maxtemp = Math.floor(maxTemp - 273.15);

    dataObject = {
      currentTemp: temp,
      Mintemp: Mintemp,
      Maxtemp: Maxtemp,
      sunRiseTime: this.getTime(sunRise),
      sunSetTime: this.getTime(sunSet),
      currentTime: this.getTime(currentTime),
      currentDate: this.getDate(currentTime),
    };

    return dataObject;
  }
}

export default Calculation;
