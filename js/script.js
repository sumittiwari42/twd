$(document).ready(function() {
	
  $('#constructor').owlCarousel({
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    loop:true,
    autoplay: true,
    autoplayTimeout:6000,
    smartSpeed:650,
    margin:0,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:1
        },
        768:{
            items:1
        },
        980:{
            items:1
        }
    }
});

  $('#home-slider').owlCarousel({
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    loop:true,
    autoplay: true,
    autoplayTimeout:6000,
    smartSpeed:650,
    margin:0,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:1
        },
        768:{
            items:1
        },
        980:{
            items:1
        }
    }
});  

//navigation child open and close js
if(window.innerWidth < 1121) {
 $('.child-nav').hide();
 $('.has-child').click(function(){
  $('.child-nav').toggle();
  $('.has-child i').css('transform','rotate(0deg)');
 }); 
}

//accordian javascript
$('.accord-group h2').click(function(){
  $('.accord-para').slideUp();
  $(this).next().slideToggle();
  
  $('.accord-group h2').removeClass('act');
  if($(this).hasClass('act')) {
    $(this).removeClass('act');
  } else {
     $(this).addClass('act');
  }
  $('.num').hide();
  $('.num').removeClass('act-num');
  $(this).prev().show();;
}); 

$('.accord-group-child h3').click(function(){
  $('.accord-para-child').slideUp();
  $(this).next().slideToggle();
  
  $('.accord-group-child h3').removeClass('act');
  if($(this).hasClass('act')) {
    $(this).removeClass('act');
  } else {
     $(this).addClass('act');
  }
  $('.num-no').hide();
  $(this).prev().show();;
});   

//mobile hamburger
$('.hamburgar').click(function(){
if($(this).hasClass('active')) {
  $(this).removeClass('active');
 } else {
  $(this).addClass('active');
 }


 if($('.right-header').hasClass('mov-nav')) {
   $('.right-header').addClass('close-nav');
   setTimeout(function(){ $('.right-header').removeClass('mov-nav'); }, 100);
 } else {
   $('.right-header').addClass('mov-nav');
   $('.right-header').removeClass('close-nav');
 }
});

//text animation
var i = 0;
var txt = '#IAm';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
if (document.getElementById('demo')) {
  typeWriter();
}


var j = 0;
var txt1 = '    TheDrive';
var speed1 = 100;
function typeWriter1() {
  if (i < txt1.length) {
    document.getElementById("demo1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed1);
  }
}
  
if (document.getElementById('demo1')) {
  setTimeout(function(){
     typeWriter1();
   },400);
}

//gif play on scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var a =  $(".our-location-image img").attr("src");
    if( $('.our-location-image').hasClass('in-view')) {
      if(a == '') {
        $(".our-location-image img").attr("src", "images/map.gif");
      }
   }
});

//gif place in loop
setInterval(function(){ 
  $(".car-gif img").attr("src", " ");
  $(".car-gif img").attr("src", " ").delay(100);
  $(".car-gif img").attr("src", "images/carmotion.gif");
}, 1500);


//add class on scroll
var $animation_elements = $('.animation-element');
var $window = $(window);

$window.on('scroll', check_if_in_view);
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}
});


// $(document).ready(function() {
//  const second = 1000,
//        minute = second * 60,
//        hour = minute * 60,
//        day = hour * 24;

// var countDown = new Date('feb 5, 2018 00:00:00').getTime(),
//     x = setInterval(function() {
//       var len = $("#seconds").text().length;
//       var now = new Date().getTime(),
//           distance = countDown - now;

//       document.getElementById('days').innerHTML = Math.floor(distance / (day)),
//       document.getElementById('hours').innerHTML = Math.floor((distance % (day)) / (hour)),
//       document.getElementById('minutes').innerHTML = Math.floor((distance % (hour)) / (minute)),
//       document.getElementById('seconds').innerHTML = Math.floor((distance % (minute)) / second);
//       // document.getElementById('none').innerHTML = '0';
         
//     }, second);  

// });    


