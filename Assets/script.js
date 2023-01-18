var currentDayEl = $('#currentDay')

// function to display time
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY hh:mm:ss a');
  currentDayEl.text(rightNow);
}

displayTime()

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
});

function timeTracker () {
    
  var currentTime = dayjs().hour();
  console.log("Current Time " + currentTime);
     
// How the blocks know if they are past, present or future
  $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id"));
      console.log("Block Time" + blockTime);

      if (currentTime > blockTime) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
      } else if (currentTime < blockTime) {
          $(this).removeClass("future");
          $(this).removeClass("past");
          $(this).addClass("future");
      } else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("present");
      }
  });
}

// Pulls items from local storage
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
 // Gives live time feed
    setInterval(displayTime, 1000); 
    timeTracker();
  });