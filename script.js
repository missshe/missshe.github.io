$(document).ready(function() {
    $('.happy,.birthday,.to,.you').hide('slow');
   $('.first,.second,.third,.fourth').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
      $('.first').hover(function(){
          $('.happy').fadeIn('slow')});
    $('.second').hover(function(){
        $('.birthday').fadeIn('slow')});
    $('.third').hover(function(){
          $('.to').fadeIn('slow')});
    $('.fourth').hover(function(){
          $('.you').fadeIn('slow')});
       
       
   });
   
   $('.first,.second,.third,.fourth').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   


});