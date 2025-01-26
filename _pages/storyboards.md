---
layout: page
title: Storyboards
permalink: /storyboards/
---

## Holmes and Moriarty | January 2025

A drama sequence (loosely) adapted from Sir Arthur Conan Doyle's *The Final Problem*, depicting Sherlock Holmes's first meeting with his famed nemesis, Professor Moriarty.

This was a personal project from the StoryboardArt Story Mentorship.

<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 74.9296%;">
<iframe src="https://speakerdeck.com/player/1452122a26a64492855944e36050dde7" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no">
</iframe>
</div>

A fully-edited animatic can be seen below:

<iframe width="753" height="423" src="https://www.youtube.com/embed/bhL5Gn70Ngg" title="Animatic -- Holmes and Moriarty" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Thumbnails:

<!-- Thumbnail Gallery -->
<div class="thumbnail-gallery">
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00001.png" alt="Thumbnail Thumbs 1"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00002.png" alt="Thumbnail Thumbs 2"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00003.png" alt="Thumbnail Thumbs 3"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00004.png" alt="Thumbnail Thumbs 4"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00005.png" alt="Thumbnail Thumbs 5"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00006.png" alt="Thumbnail Thumbs 6"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00007.png" alt="Thumbnail Thumbs 7"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00008.png" alt="Thumbnail Thumbs 8"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00009.png" alt="Thumbnail Thumbs 9"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00010.png" alt="Thumbnail Thumbs 10"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00011.png" alt="Thumbnail Thumbs 11"></div>
</div>

<!-- Full-size Image Viewer (initially hidden) -->
<div class="full-size-gallery" style="display: none;">
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00001.png" alt="Thumbs 1"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00002.png" alt="Thumbs 2"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00003.png" alt="Thumbs 3"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00004.png" alt="Thumbs 4"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00005.png" alt="Thumbs 5"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00006.png" alt="Thumbs 6"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00007.png" alt="Thumbs 7"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00008.png" alt="Thumbs 8"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00009.png" alt="Thumbs 9"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00010.png" alt="Thumbs 10"></div>
  <div><img src="../images/thumbs/Holmes_And_Moriarty/frame_00011.png" alt="Thumbs 11"></div>
  <button class="close-gallery">Close</button>
</div>

---
## Western Chase | October 2024

An action chase sequence set in the old West, where our two heroes try to lose their pursuers in an abandoned town using only their wits...and a little bit of dynamite.

This was an assignment from the StoryboardArt Story Mentorship, adapted from a scene from *Star Wars Rebels*.

<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.338%;">
<iframe src="https://speakerdeck.com/player/ed2e24d20fe94e099f2bab9d8ef0bcf9" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no">
</iframe>
</div>

A fully-edited animatic can be seen below:

<iframe width="753" height="423" src="https://www.youtube.com/embed/yJYkIwIEmak" title="Animatic -- Western Chase" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>






<!-- Slick JS -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>


<script>
$(document).ready(function() {
  // Initialize the thumbnail gallery with Slick
  $('.thumbnail-gallery').slick({
    slidesToShow: 4, // Adjust number of thumbnails shown
    slidesToScroll: 1,
    focusOnSelect: true, // Allow selection of thumbnails
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  // When a thumbnail is clicked, show the corresponding full-size image
  $('.thumbnail-gallery div').click(function() {
    var index = $(this).index();  // Get the index of the clicked thumbnail
    console.log("Thumbnail clicked, index:", index);
    // var fullSizeImages = $('.full-size-gallery .full-image');
    
    // // Hide all full-size images and show the one corresponding to the clicked thumbnail
    // fullSizeImages.hide();
    // $(fullSizeImages[index]).show();  // Show the full-size image based on the index
    
    // // Hide the thumbnails and show the full-size gallery
    // $('.thumbnail-gallery').hide();
    // $('.full-size-gallery').show();

    // // Initialize the Slick carousel for the full-size gallery only once
    // if (!$('.full-size-gallery').hasClass('slick-initialized')) {
    //   $('.full-size-gallery').slick({
    //     infinite: true,
    //     arrows: true,  // Enable navigation arrows
    //     prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    //     nextArrow: '<button type="button" class="slick-next">Next</button>',
    //     fade: true,  // Enable fade transition between images
    //   });
    // }
  });

  // Close the full-size gallery
  $('.close-gallery').click(function() {
    $('.full-size-gallery').hide();
    $('.thumbnail-gallery').show();
    $('.full-size-gallery').slick('unslick'); // Destroy Slick on full-size gallery close
  });
});
</script>

