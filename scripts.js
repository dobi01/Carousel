$(function() {

  var carouselList = $('#carousel ul'),
      circle = $('.circles span'),
      interval = setInterval(changeSlide, 3000);  

  // CIRCLES FOR CHANGE SLIDES
  function changeCircle() {
    var currentSlide = carouselList.find('li img').first(),
        currentSlideIndex = currentSlide.data('tmp');
        console.log("slide: " + currentSlideIndex);
    circle.each(function(index) {
      if (index == currentSlideIndex) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  }

  function resetInterval() {
    changeCircle();
    clearInterval(interval);
    interval = setInterval(changeSlide, 3000);
  }

  circle.click(function() {
    var currentSlide = carouselList.find('li img').first(),
        currentSlideIndex = currentSlide.data('tmp'),
        circleClickedIndex = $(this).data('tmp'),
        currentDistance;

    if (currentSlideIndex < circleClickedIndex) {
      currentDistance = circleClickedIndex - currentSlideIndex;
    } else if (currentSlideIndex > circleClickedIndex) {
      currentDistance = currentSlideIndex - circleClickedIndex;
    } else {
      currentDistance = 1;
    }
        
    carouselList.animate({'marginLeft': -1000 * currentDistance}, 500, moveFirstSlide);
    resetInterval();
  });

  function changeSlide() {
    carouselList.animate({'marginLeft': -1000}, 500, moveFirstSlide);  
    resetInterval();
  }

  function moveFirstSlide() {
    var firstItem = carouselList.find('li:first'),
        lastItem = carouselList.find('li:last');

    lastItem.after(firstItem);
    carouselList.css({marginLeft: 0});    
  }

  // ARROWS TO CHANGE SLIDES
  $('.fa-angle-right').click(changeSlide);

  $('.fa-angle-left').click(function () {
    var firstItem = carouselList.find('li:first'),
        lastItem = carouselList.find('li:last');

    firstItem.before(lastItem);
    carouselList.css({marginLeft: -1000});
    
    carouselList.animate({'marginLeft': 0}, 500);
    resetInterval();
  });

});
