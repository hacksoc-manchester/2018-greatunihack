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

  $("#timer").width($("#header-container").width() - Number($("#timer").css("padding-left").substring(0, 2)) * 2);
  $("#timer").css("left", $("#header-container").offset().left);

  // console.log($(".question-card"));

  // var maxHeight = 0;
  // $(".question-card").each(function (index, card) {
  //   var height = $(card).height();
  //     // + $(card).css("padding-top").substring(0, $(card).css("padding-top").indexOf("px"));
  //   if (height > maxHeight) {
  //     maxHeight = height;
  //   }
  // });
  
  // console.log(maxHeight);
  
  // $(".question-card").height(maxHeight);
});