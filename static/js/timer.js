/* globals $ */
"use strict";

var countDownDate = new Date("Nov 10, 2018 9:00:00").getTime();

var x = setInterval(updateTime, 1000);
updateTime();

function updateTime() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $("#days").html(days);
  $("#hours").html(hours);
  $("#minutes").html(minutes);
  $("#seconds").html(seconds);

  if (distance < 0) {
    clearInterval(x);
    $("#days").html("00");
    $("#hours").html("00");
    $("#minutes").html("00");
    $("#seconds").html("00");
  }
}