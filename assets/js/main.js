$(document).ready(function(){
    $('.slider_1').slick({  
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: $('.left-arrow'),
        prevArrow: $('.right-arrow'),
        responsive: [
          {
            breakpoint: 1638,
            settings: {
              centerMode: true,
              centerPadding: '90px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 1399,
            settings: {
              centerMode: true,
              centerPadding: '90px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 1199,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 991,
            settings: {
              centerMode: true,
              centerPadding: '60px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 574,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '90px',
              slidesToShow: 1
            }
          }
        ]
      });
  });



$(window).scroll(() => {
    if(scrollY > 10){ 
        $( ".header-1-box" ).addClass('scroll-header-class');
    }else{
        $( ".header-1-box" ).removeClass('scroll-header-class');
    }
    
    if(scrollY >= 35){
      $( ".header-box" ).css('top', '0px');;
    }else{
      $( ".header-box" ).css('top', '35px');;
    }
});

$(document).ready(() => {
    if(scrollY > 10){ 
        $( ".header-1-box" ).addClass('scroll-header-class');
    }else{
        $( ".header-1-box" ).removeClass('scroll-header-class');
    }

    if(scrollY >= 35){
      $( ".header-box" ).css('top', '0px'); 
    }else{
      $( ".header-box" ).css('top', '35px');
    }
});

 
 

 