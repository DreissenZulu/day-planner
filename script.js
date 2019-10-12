var hourlyArray;
var currentTime = moment();

// If a local hourly tasks exist, import them, otherwise initialize the array
if (localStorage.getItem("localHourlyTasks")) {
    hourlyArray = JSON.parse(localStorage.getItem("localHourlyTasks"));
} else {
    hourlyArray = [];
}

$("#currentDay").text(`${currentTime.format('dddd, MMMM Do')}`);