---
layout: page
title: Comics
permalink: /comics/
---

<!-- Thumbnail Gallery -->
<div class="thumbnail-gallery">
  <div class="thumbnail" data-index="0">
    <img src="../images/comics/Lat_Pulldown/Lat_Pulldown_1.PNG" alt="Lat Pulldown Thumbs 1">
  </div>
  <div class="thumbnail" data-index="1">
    <img src="../images/comics/Lat_Pulldown/Lat_Pulldown_2.PNG" alt="Lat Pulldown Thumbs 2">
  </div>
  <div class="thumbnail" data-index="2">
    <img src="../images/comics/Lat_Pulldown/Lat_Pulldown_3.PNG" alt="Lat Pulldown Thumbs 3">
  </div>
  <div class="thumbnail" data-index="3">
    <img src="../images/comics/Lat_Pulldown/Lat_Pulldown_4.PNG" alt="Lat Pulldown Thumbs 4">
  </div>
  <div class="thumbnail" data-index="4">
    <img src="../images/comics/Lat_Pulldown/Lat_Pulldown_5.PNG" alt="Lat Pulldown Thumbs 5">
  </div>
</div>

<!-- Full-size Image Viewer (initially hidden) -->
<div class="full-size-gallery">
  <button class="close-gallery">X</button>
  <div class="image-container">
    <img class="full-image" src="../images/comics/Lat_Pulldown/Lat_Pulldown_1.png" alt="Lat Pulldown 1">
    <img class="full-image" src="../images/comics/Lat_Pulldown/Lat_Pulldown_2.png" alt="Lat Pulldown 2">
    <img class="full-image" src="../images/comics/Lat_Pulldown/Lat_Pulldown_3.png" alt="Lat Pulldown 3">
    <img class="full-image" src="../images/comics/Lat_Pulldown/Lat_Pulldown_4.png" alt="Lat Pulldown 4">
    <img class="full-image" src="../images/comics/Lat_Pulldown/Lat_Pulldown_5.png" alt="Lat Pulldown 5">
  </div>
  <button class="prev-image">&#10094;</button>
  <button class="next-image">&#10095;</button>
</div>

---







<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
$(document).ready(function() {
  // Show the full-size gallery when a thumbnail is clicked
  $('.thumbnail').click(function() {
    var index = $(this).data('index');  // Get the index of the clicked thumbnail
    console.log("thumbnail clicked; index ", index);
    showFullSizeImage(index);  // Show the corresponding full-size image
  });

  // Show the full-size image gallery
  function showFullSizeImage(index) {
    var fullSizeImages = $('.full-size-gallery .full-image');
    fullSizeImages.hide();  // Hide all images

    // Show the image corresponding to the clicked thumbnail
    $(fullSizeImages[index]).show();

    // Show the full-size gallery
    $('.thumbnail-gallery').hide();
    $('.full-size-gallery').show();

    // Store the current index for navigation
    $('.full-size-gallery').data('currentIndex', index);
  }

  // Handle closing the gallery
  $('.close-gallery').click(function() {
    $('.full-size-gallery').hide();
    $('.thumbnail-gallery').show();
  });

  // Handle next image navigation
  $('.next-image').click(function() {
    var currentIndex = $('.full-size-gallery').data('currentIndex');
    var totalImages = $('.full-size-gallery .full-image').length;
    if ((currentIndex + 1) < totalImages) {
        var nextIndex = (currentIndex + 1); 
        showFullSizeImage(nextIndex);  // Show the next image
    }
  });

  // Handle previous image navigation
  $('.prev-image').click(function() {
    var currentIndex = $('.full-size-gallery').data('currentIndex');
    var totalImages = $('.full-size-gallery .full-image').length;
    if ((currentIndex - 1) >= 0){
        var prevIndex = (currentIndex - 1);
        showFullSizeImage(prevIndex);  // Show the previous image
    }
  });
});
</script>
