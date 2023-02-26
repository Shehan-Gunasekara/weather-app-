
const getTimeDate = props => {


     // get date and time from timespan
    var timeSpan = props.timeSpan; 
                            var date = new Date(timeSpan * 1000);
                            var day = date.getDate();
                            var month = date.getMonth();
                            var hour = date.getHours();
                            var min = date.getMinutes();
                            var time;
                            if (hour > 12) {
                                hour = hour - 12;
                                time = "pm";
                            } else {
                                time = "am"
                            }
                            switch (month) {
                                case 1: month = "Jan";
                                    break;
                                case 2: month = "Feb";
                                    break;
                                case 3: month = "Mar";
                                    break;
                                case 4: month = "Apr";
                                    break;
                                case 5: month = "May";
                                    break;
                                case 6: month = "Jun";
                                    break;
                                case 7: month = "Jul";
                                    break;
                                case 8: month = "Aug";
                                    break;
                                case 9: month = "Sep";
                                    break;
                                case 10: month = "Oct";
                                    break;
                                case 11: month = "Nov";
                                    break;
                                case 12: month = "Dec";
                                    break;
                            }
    return (
        <div>
            {hour}.{min}{time} , {month} {day}
        </div>
    )}

    export default getTimeDate;