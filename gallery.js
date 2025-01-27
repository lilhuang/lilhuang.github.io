$(document).ready(function() {
    // Loop through each slideshow
    $('.slideshow').each(function() {
    var slideshowId = $(this).attr('id');  // Get the unique ID for each slideshow

    // $(this).find(' .full-size-gallery').hide();

    // Handle thumbnail click to open the full-size gallery
    $(this).find(' .thumbnail-gallery .thumbnail').click(function() {
      console.log(slideshowId);
      var index = $(this).data('index');  // Get the index of the clicked thumbnail
      showFullSizeImage(slideshowId, index);  // Show the corresponding full-size image for this slideshow
    });

    // Show the full-size image gallery
    function showFullSizeImage(slideshowId, index) {
        var fullSizeImages = $('#' + slideshowId + ' .full-size-gallery .full-image');
        fullSizeImages.hide();  // Hide all images

        // Show the image corresponding to the clicked thumbnail
        $(fullSizeImages[index]).show();

        // Show the full-size gallery
        // $('#' + slideshowId + ' .thumbnail-gallery').hide();
        $('#' + slideshowId + ' .full-size-gallery').show();
        // if ($('#' + slideshowId + ' .full-size-gallery').style.display === "none") {
        //     $('#' + slideshowId + ' .full-size-gallery').style.display = "flex";
        // }

        // Store the current index for navigation
        $('#' + slideshowId + ' .full-size-gallery').data('currentIndex', index);
    }

    // Handle closing the gallery
    $('.close-gallery').click(function() {
        $('#' + slideshowId + ' .full-size-gallery').hide();
        $('#' + slideshowId + ' .thumbnail-gallery').show();
        // $('#' + slideshowId + ' .full-size-gallery').style.display = "none";
    });

    // Handle next image navigation
    $('#' + slideshowId + ' .next-image').click(function() {
        var currentIndex = $('#' + slideshowId + ' .full-size-gallery').data('currentIndex');
        var totalImages = $('#' + slideshowId + ' .full-size-gallery .full-image').length;
        if ((currentIndex + 1) < totalImages) {
            var nextIndex = (currentIndex + 1); 
            showFullSizeImage(slideshowId, nextIndex);  // Show the next image
        }
    });

    // Handle previous image navigation
    $('#' + slideshowId + ' .prev-image').click(function() {
        var currentIndex = $('#' + slideshowId + ' .full-size-gallery').data('currentIndex');
        var totalImages = $('#' + slideshowId + ' .full-size-gallery .full-image').length;
        if ((currentIndex - 1) >= 0){
            var prevIndex = (currentIndex - 1);
            showFullSizeImage(slideshowId, prevIndex);  // Show the previous image
        }
    });
});
});