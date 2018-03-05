$(function() {
	var carouselList = $('#carousel ul'),
			circles = $('.circles'),
  		interval,
			currentSlide = 0,
			slidesCount = 4;

	function moveRight() {
		if (currentSlide < slidesCount) {
			currentSlide++;
		} else {
			currentSlide = 0;
		}
		showSlide(currentSlide);
	}

	function moveLeft() {
		if (currentSlide === 0) {
			currentSlide = slidesCount;
		} else {
			currentSlide--;
		}
		showSlide(currentSlide);
	}

	function setActiveCircle(index) {
		circles.find('.active').removeClass('.active');
		circles.find('span').eq(index).addClass('.active');
	}

	function showSlide(index) {
		setActiveCircle(index);
		carouselList.animate({'marginLeft': -1000 * index}, 600);
	}

	function setDefaultInterval() {
		interval = setInterval(moveRight, 3000);
	}

	function resetInterval() {
		clearInterval(interval);
		setDefaultInterval();
	}

	// ARROWS
	$('.fa-angle-right').click(function() {
		moveRight();
		resetInterval();
	});

	$('.fa-angle-left').click(function() {
		moveLeft();
		resetInterval();
	});

	// CIRCLES
	circles.on('click', 'span', function() {
		currentSlide = $(this).index();
		showSlide(currentSlide);
		resetInterval();
	});

	setDefaultInterval();

});
