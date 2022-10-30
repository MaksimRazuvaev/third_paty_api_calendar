
// to display current day at the top of the calendar
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// to iterate over timeblock elements to set color and text
$("div.row").each(function() {
    // to color timeblock to indicate whether it is in the past, present, or future
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

    //to fill up input text from local storage
    var textFromLocalStorage = localStorage.getItem(getCalendarHour);
    $(this).children(".col-10").children().attr("value", textFromLocalStorage);
});

//save to local storage
$(".saveBtn").click(function() {
    var parentTag = $(this).parent().parent();
    var getText = parentTag.children(".col-10").children().val();
    var getTimeId = parentTag.children().children().attr("id");
    
    localStorage.setItem(getTimeId, getText);
});