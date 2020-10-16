var now = document.getElementById("currentDay");
var date = moment().format("dddd, MMMM Do YYYY");
now.textContent = date;

$(".timeSlot").each(checkForms);

function checkForms(){
date = moment().format("hh");
let timeId = convertTimeId($(this).children("button").attr("data-id"));

date = parseInt(date, 10);

console.log("TIMEID: " + timeId);
console.log("RIGHTNOW: " + date);

if  (timeId < date) {  ///color forms based on time
  $(this).children("input").css("background-color", "#eedad1").attr("placeholder", "Past Event");
} else if (timeId === date){
  $(this).children("input").css("background-color", "#ff847c").attr("placeholder", "Present Event");
} else {
  $(this).children("input").css("background-color", "#91d18b").attr("placeholder", "Future Event");
}

}

function convertTimeId (hours) { ///convert time id to number to compare time
  switch(hours) {
    case "9AM": return 9;
    case "10AM": return 10;
    case "11AM": return 11;
    case "12PM": return 12;
    case "1PM": return 13;
    case "2PM": return 14;
    case "3PM": return 15;
    case "4PM": return 16;
    case "5PM": return 17;
  }
}

$(".saveButton").on("click", function (){  ///save user event on click

  var getItemId = $(this).attr("data-id");
  console.log(getItemId);
  var userText = $(this).siblings("input").val();
  console.log(userText);
  localStorage.setItem(getItemId, userText);

})

//display user event in timeslot
$("#firstForm").val(localStorage.getItem("9AM"));
$("#secondForm").val(localStorage.getItem("10AM"));
$("#thirdForm").val(localStorage.getItem("11AM"));
$("#fourthForm").val(localStorage.getItem("12PM"));
$("#fifthForm").val(localStorage.getItem("1PM"));
$("#sixthForm").val(localStorage.getItem("2PM"));
$("#seventhForm").val(localStorage.getItem("3PM"));
$("#eighthForm").val(localStorage.getItem("4PM"));
$("#ninthForm").val(localStorage.getItem("5PM"));


/*

# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
*/
