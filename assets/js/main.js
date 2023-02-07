$(window).scroll(function() {
    if(scrollY > 10){ 
        $( ".header-1-box" ).addClass('scroll-header-class');
    }else{
        $( ".header-1-box" ).removeClass('scroll-header-class');
    }
});

 