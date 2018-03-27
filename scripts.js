$(function() {
	var carouselList = $('#carousel ul'),
			// circle = $('.circles span'),
			interval = setInterval(changeSlide, 3000);

	function changeSlide() {
		// changeCircle();
		carouselList.animate({'marginLeft': -1000}, 500, moveFirstSlide);
	}


	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first'),
				lastItem = carouselList.find('li:last');

		lastItem.after(firstItem);
		carouselList.css({marginLeft: 0});
		// changeCircle();
	}

	// ARROWS TO CHANGE SLIDES
	$('.fa-angle-right').click(changeSlide);

	$('.fa-angle-left').click(function () {
		var firstItem = carouselList.find('li:first'),
				lastItem = carouselList.find('li:last');

		firstItem.before(lastItem);
		carouselList.css({marginLeft: -1000});
		// changeCircle();
		carouselList.animate({'marginLeft': 0}, 500);
	});

	// // CIRCLES FOR CHANGE SLIDES
	// function changeCircle() {
	// 	var currentSlide = carouselList.find('li:first'),
	// 			currentSlideIndex = currentSlide.data('data-tmp');

	// 	circle.each(function(index) {
	// 		if (index == currentSlideIndex) {
	// 			$(this).addClass('active');
	// 			console.log('success');
	// 		} else {
	// 			$(this).removeClass('active');
	// 			console.log('err');
	// 		}
	// 	});
	// }

});