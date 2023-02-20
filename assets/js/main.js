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
              slidesToShow: 3
            }
          },
          {
            breakpoint: 991,
            settings: {
              centerMode: true,
              centerPadding: '60px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false, 
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 574,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '35px',
              slidesToShow: 1
            }
          }
        ]
      });
  });


  $('.burger-lines').click(() => { 
    $('.burger-menu-box').addClass('open-burger-menu');
  })
  $('.burger-close-btn').click(() => { 
    $('.burger-menu-box').removeClass('open-burger-menu');
  })


  // Scroll Header

  var scrollNum = 35;

$(window).scroll(() => {
    if(scrollY > 10){ 
        $( ".header-1-box" ).addClass('scroll-header-class');
    }else{
        $( ".header-1-box" ).removeClass('scroll-header-class');
    }
    
    if(scrollY >= scrollNum){ 
      $( ".header-box" ).css('top', '0px');
    }else{
      $( ".header-box" ).css('top', '35px');
    }
});
 

$(document).ready(() => {  
    if(scrollY > 10){ 
        $( ".header-1-box" ).addClass('scroll-header-class');
    }else{
        $( ".header-1-box" ).removeClass('scroll-header-class');
    } 
    if(scrollY >= scrollNum){  
      $( ".header-box" ).css('top', '0px'); 
    }else{
      $( ".header-box" ).css('top', '35px');
    }
});

// Scroll Header


$(document).ready(() => {
   $('.close-btn').click(()=>{
    $('.sent-form-det').css('display', 'none');
    $('.send-btn-active').css('display', 'flex');
   });
});
$(document).ready(() => {
  $('.send-btn-active').click(()=>{
   $('.sent-form-det').css('display', 'flex');
   $('.send-btn-active').css('display', 'none');
  });
});
  

$(document).ready(()=> {
  $('.upload-file-input').change(()=>{ 
    var inpSplit = $('.upload-file-input').val().split('\\'); 
    var index = inpSplit.length - 1;  
    $('.file-text').html(inpSplit[index]);
  });
});




 

 