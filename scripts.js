$(function(){
	var carouselList = $("#carousel ul");
  var interval;
	function setDefaultInterval() {
		interval = setInterval(changeSlide, 3000);
	}

	setDefaultInterval();

  function changeSlide() {
    carouselList.animate({'marginLeft':-1000}, 500, moveFirstSlide);
  };

  function moveFirstSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  };

// ARROWS
	$(".fa-angle-right").click(function() {
		clearInterval(interval);
		changeSlide();
		setDefaultInterval();
	});

	$(".fa-angle-left").click(function(){
		clearInterval(interval);
		moveLastSlide();
		carouselList.animate({'marginLeft':0}, 500, setDefaultInterval);
	});

	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
    carouselList.css({marginLeft:-1000});
  };
});

// CIRCLES
