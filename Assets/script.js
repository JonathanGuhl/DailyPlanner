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
})

// function to compare current time with block time and add css class accordingly
function timeTracker() {
  var timeNow = dayjs().hour();

    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        if (blockTime < timeNow) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
        } else if (blockTime === timeNow) {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
        } else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");

        }
    })
    }

    // Pulls items from local storage
    $("#eightAM .description").val(localStorage.getItem("eightAM"));
    $("#nineAM .description").val(localStorage.getItem("nineAm"));
    $("#tenAM .description").val(localStorage.getItem("tenAM"));
    $("#elevenAM .description").val(localStorage.getItem("elevenAM"));
    $("#twelvePM .description").val(localStorage.getItem("twelvePM"));
    $("#onePM .description").val(localStorage.getItem("onePM"));
    $("#twoPM .description").val(localStorage.getItem("twoPM"));
    $("#threePM .description").val(localStorage.getItem("threePM"));
    $("#fourPM .description").val(localStorage.getItem("fourPM"));

    timeTracker();
})