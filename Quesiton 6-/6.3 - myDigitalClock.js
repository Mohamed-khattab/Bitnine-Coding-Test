function myDigitalClock() {
  var d1 = new Date();
  var hours = d1.getHours(); // 0 - 23
  var minutes = d1.getMinutes(); // 0 - 59
  var seconds = d1.getSeconds(); // 0 - 59
  var zone = "AM";

  // Format hours, minutes, and seconds to display leading zeros
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Convert to 12-hour format and set the zone (AM/PM)
  if (hours >= 12) {
    zone = "PM";
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours is 0, display 12 instead
  }

  // Display the digital clock time in the console or on a web page
  var digitalClockTime = hours + ":" + minutes + ":" + seconds + " " + zone;
  console.log(digitalClockTime); // Output to console
}

// Call the function every second to update the digital clock
setInterval(myDigitalClock, 1000);
