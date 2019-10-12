var hourlyArray;
var currentTime = moment();
var textBlock = $(".col-8");

// If a local hourly tasks exist, import them, otherwise initialize the array
if (localStorage.getItem("localHourlyTasks")) {
    hourlyArray = JSON.parse(localStorage.getItem("localHourlyTasks"));
} else {
    hourlyArray = [];
}

// Write the current date by "DayofWeek, Month DayofMonth"
$("#currentDay").text(`${currentTime.format('dddd, MMMM Do')}`);

// The current hour is offset by 9 to match the array indicies, since 9AM is the first slot
function updateCurrentScheduleTime() {
    textBlock.removeClass('past present future');
    $.each(textBlock, function(scheduleBlockHour) {
        if(scheduleBlockHour < (currentTime.hour()-9)) {
            $(this).addClass('past');
        } else if (scheduleBlockHour == (currentTime.hour()-9)) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    })
}