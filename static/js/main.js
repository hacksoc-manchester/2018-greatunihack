/* globals $, window */
"use strict";

function openImage(img) {
  $("#image-preview").attr("src", "/static/images/gallery/" + img.id + ".jpg");
  $("#image-preview-container").fadeIn();
}

function closeImage() {
  $("#image-preview-container").fadeOut();
}

function scrollToSection(sectionId) {
  window.scroll({ top: $(sectionId).offset().top, left: 0, behavior: 'smooth' });
}