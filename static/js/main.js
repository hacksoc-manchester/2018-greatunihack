/* globals $ */
"use strict";

function openImage(img) {
  $("#image-preview").attr("src", "/static/images/gallery/" + img.id + ".jpg");
  $("#image-preview-container").fadeIn();
}

function closeImage() {
  $("#image-preview-container").fadeOut();
}