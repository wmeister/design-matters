$(document).ready(function() {
   $('#projects ul li a').click(function() {
     $('.project').addClass('invisible');
     $('.project').removeClass('d-block');
     var id = '#'+$(this).attr('image-id');
     $(id).addClass('d-block');
     $(id).removeClass('invisible');
     $('#projects ul li a').removeClass('active');
     $(this).addClass('active');
   });
});