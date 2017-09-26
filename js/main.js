$('.navbar-toggle ,nav').click(function(e){
    //console.log(e);  
    //console.log(this);
    $('.navbar-toggle').toggleClass('active');
    $('nav').fadeToggle();
    $('nav').removeClass('nav-hide');
  
  })
  