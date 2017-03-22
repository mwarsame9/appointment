$(document).ready(function(){

  $(".appointmentform").submit(function(e) {
    e.preventDefault();
    // declare global variables used in functions
    var name = $("#name").val();
    var reason = $("#reason").val();
    var date = $("#datepicker").val();
    var hour = $(".hour").val();
    var min = $(".min").val();
    var ampm = $(".ampm").val();

    // concatenate starttime from input values
    var starttime = hour + ":" + min + " " + ampm;

    // check to see if slected hour is 12
    if (parseInt(hour) === 12) {
      //reset hour to zero (one will be added to it later)
      var hour = 0;
    }

    // check to see if hour is 11
    if (parseInt(hour) === 11) {

      // if so, change AM to PM
      if (ampm === "AM") {
        ampm = "PM";
      } else {
        ampm = "AM";
      }
    }

    // concatenate endtime
    var endtime = (parseInt(hour) + 1) + ":" + min + " " + ampm;

    // concatenate appointment statement
    var appt = "Thanks, "
    + name
    + ". "
    + "Your appointement regarding "
    + reason
    + " will be held on "
    + date
    + " from "
    + starttime
    + " to "
    + endtime
    + ".";
    // insert appointment statement into selected paragraph
    $(".apptinfo p").text(appt);

    // send alert to user that appointment successfuly booked


    alert("Appoinment successfully booked!");
  });

});
