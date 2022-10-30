
// to display current day at the top of the calendar
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, hhA"));

// to color timeblock to indicate whether it is in the past, present, or future
$("div.row").each(function() {
    var getCurrentHour = today.hour();
    var getCalendarHour = $(this).children().children().attr("id");

    if (getCurrentHour == getCalendarHour){
        $(this).children(".col-10").children().attr("class", "present");
    }
    else if(getCurrentHour > getCalendarHour){
        $(this).children(".col-10").children().attr("class", "past");
    }else{
        $(this).children(".col-10").children().attr("class", "future");
    }
  });

//save to local storage
$( ".saveBtn" ).click(function() {
    alert( "Handler for .click() called." );
  });