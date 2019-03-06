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

  $(document).ready(function(){
    //store the color value in a variable
    $('.blast-bg-color').each(function(i){
      $('.blast-bg-color').eq(i).css('backgroundColor', $(this).text());
      $('.blast-bg-color').eq(i).on('click', function(){
        bgcolor = $(this).css('backgroundColor');
        // Save the color in local storage
        localStorage.setItem('my_custom_bgcolor', bgcolor);
        $(this).css('border', '2px solid black').siblings().css('border', '2px solid white');
      });
    });

    //custom colors
    $('input[name="blastCustomBgColor"]').on('change', function(){
      bgcolor = $(this).val();
      // Save the color in local storage
      localStorage.setItem('my_custom_bgcolor', bgcolor);
      setColor(bgcolor);
    });

    //fixed colors
    $('*').on('click', function(){
      setColor(bgcolor);
    });

  });

  var bgcolor;

  // Get custom color
  var my_custom_bgcolor = localStorage.getItem('my_custom_bgcolor');
  if(my_custom_bgcolor) {
    bgcolor = my_custom_bgcolor;
    setColor(bgcolor);
  }

  //change elements colors
  function setColor(bgcolor){
    $('body').css('backgroundColor', bgcolor);
  }

})(jQuery, Drupal);
