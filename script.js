let showDate = document.getElementById("showDate");
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function updateDateTime() {
  let date = new Date();
  let dispDate =
    date.getDate() +
    " " +
    monthNames[date.getMonth()] +
    " " +
    date.getFullYear();
  showDate.innerHTML = dispDate;

  let dispHrs = date.getHours();
  let dispMin = date.getMinutes();
  let dispSec = date.getSeconds();

  dispHrs = (dispHrs < 10 ? "0" : "") + dispHrs;
  dispMin = (dispMin < 10 ? "0" : "") + dispMin;
  dispSec = (dispSec < 10 ? "0" : "") + dispSec;

  hrs.innerHTML = dispHrs;
  min.innerHTML = dispMin;
  sec.innerHTML = dispSec;
}

updateDateTime(); // Initial call
setInterval(updateDateTime, 1000); // Update every second
