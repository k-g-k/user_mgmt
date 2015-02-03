$(function () {

  $('.remove').click(function(){
    var theButton = $(this);

    theButton.closest('li').remove();



  });

});
