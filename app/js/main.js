$(function(){

$('.header__slider').slick({
	infinite: true,
	//fade: true,
	prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrow">',
	nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrow">',
	asNavFor: '.slider-dotshead',
	autoplay: true,
	autoplaySpeed: 5000,
	speed: 1000,
});

$('.slider-dotshead').slick({
	slidesToShow: 4,
	slidesToScroll: 4,
	asNavFor: '.header__slider',
	responsive: [
	  {
	    breakpoint: 961,
	    settings: 'unslick'
	  },
	]  

})

$('.surf-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrow">',
	nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrow">',
	asNavFor: '.slider-map',
	responsive: [
	  {
	    breakpoint: 1210,
	    settings: {
	      slidesToShow: 3,
	    }
	  },
	  {
	    breakpoint: 900,
	    settings: {
	      slidesToShow: 2,
	    }
	  },
	  {
	    breakpoint: 720,
	    settings: {
	      slidesToShow: 1,
	      centerMode: true,
	    }
	  },
	  {
	    breakpoint: 426,
	    settings: {
	      slidesToShow: 1,
	      centerMode: false,
	    }
	  },
	]  
})

$('.slider-map').slick({
	slidesToShow: 8,
	slidesToScroll: 1,
	arrows: false,
	asNavFor: '.surf-slider',
	focusOnSelect: true,
	responsive: [
	  {
	    breakpoint: 1103,
	    settings: {
	      slidesToShow: 3,
	    }
	  },
	  {
	    breakpoint: 900,
	    settings: {
	      slidesToShow: 2,
	      centerMode: true,
	    }
	  },
	  {
	    breakpoint: 720,
	    settings: {
	      slidesToShow: 1,
	      centerMode: true,
	    }
	  },
	]
})

$('.holder__slider, .shop__slider').slick({
	infinite: true,
	//fade: true,
	prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrow">',
	nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrow">',
	speed: 1000,
})

jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/sleep/Plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/sleep/Minus.svg" alt=""></div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }

    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }

    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});

$('.quantity-button').on('click', function(){
	let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() -1) * $('.summ').data('guests');

	$('.summ').html('$' + summ);
});

let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() -1) * $('.summ').data('guests');
$('.summ').html('$' + summ);

$('.surfboard-box__circle').on('click', function(){
	$(this).toggleClass('active');
}) 

$('.menu-btn').on('click', function(){
	$('.menu').toggleClass('active');
})

new WOW().init();


$(".header_link").click(function() {
	console.log('click')
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination
  }, 600);
  return false;
});

});