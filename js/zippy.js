/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.exampleBehavior = {
    attach: function (context, settings) {
      //alert("I'm alive!");
    }
  };
  $('.home-page-slider-wrapper').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('.categories-slider-wrapper').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Scroll to top Effect
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    if (scroll >= 120) {
      $("#back-to-top").addClass("show");
    } else {
      $("#back-to-top").removeClass("show");
    }
  });

  $('#back-to-top').click(function() {
   $("html, body").animate({ scrollTop: 0 }, "slow");
   return false;
  });

  $(document).ready(function(){
    //prevent text selecting
    $('.blast-box' ). attr('unselectable' , 'on' )
    .css('user-select' , 'none' )
    .on('selectstart' , false);

    //appear the colors box
    $('.blast-box .blast-icon').on('click', function(){
      $('.blast-box').toggleClass('appear-it');
      $(this).toggleClass('flip-it');
    });

    //store the color value in a variable
    $('.blast-color').each(function(i){
      $('.blast-color').eq(i).css('backgroundColor', $(this).text());
      $('.blast-color').eq(i).on('click', function(){
        color = $(this).css('backgroundColor');
        // Save the color in local storage
        localStorage.setItem('my_custom_color', color);
        $(this).css('border', '2px solid black').siblings().css('border', '2px solid white');
      });
    });

    //custom colors
    $('input[name="blastCustomColor"]').on('change', function(){
      color = $(this).val();
      // Save the color in local storage
      localStorage.setItem('my_custom_color', color);
      setColor(color);
    });

    //fixed colors
    $('*').on('click', function(){
      setColor(color);
    });

  });

  var color;

  // Get custom color
  var my_custom_color = localStorage.getItem('my_custom_color');
  if(my_custom_color) {
    color = my_custom_color;
    setColor(color);
  }

  //change elements colors
  function setColor(color){
    $('h1, h2, h3, h4, h5, h6').css('color', color);
  }

})(jQuery, Drupal);
