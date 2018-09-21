/* globals $, window */
"use strict";

function openImage(img) {
  $("#image-preview").attr("src", "/static/images/gallery/" + img.id + ".jpg");
  $("#image-preview-container").fadeIn();
  var topPosition = (($(window).height() - $("#image-preview").height()) / 2) + "px";
  $("#image-preview").css("top", topPosition);
}

function closeImage() {
  $("#image-preview-container").fadeOut();
}

function scrollToSection(sectionId) {
  window.scroll({ top: $(sectionId).offset().top, left: 0, behavior: 'smooth' });
}

$(window).resize(function(){
  if ($(window).width() < 576) {
    $(".sponsor-row").addClass("justify-content-center");
  } else {
    $(".sponsor-row").removeClass("justify-content-center");
  }

  if ($(window).width() < 768) {
    $(".timer-column").addClass("col-3");
  } else {
    $(".timer-column").removeClass("col-3");
  }
});