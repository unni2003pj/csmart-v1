// Loader

$('body').append('<div class="loader"><span class="csmart-logo"></span></div>');

$(window).on('load', function(){
  $('body').addClass('no-scroll');
  setTimeout(removeLoader, 1500);
});

function removeLoader(){
  $('body').removeClass('no-scroll');
    $( ".loader" ).fadeOut(500, function() {      
      $( ".loader" ).remove();
  });  
}

$(document).ready(function(){  

    // Sticky

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
        $('.header-block').addClass('sticky');
        } else {
        $('#back-to-top').fadeOut();
        $('.header-block').removeClass('sticky');
        }
    });

    // Mobile Menu

    $(".hamburger-menu").click(function(){
        // $(this).closest('body').toggleClass('no-scroll');
        $(this).closest('.header-inner').find(".menu-panel").toggleClass('active');    
    });
  
    $(".ti-close").click(function(){
        // $(this).closest('body').toggleClass('no-scroll');
        $(this).closest('.header-inner').find(".menu-panel").toggleClass('active');    
    });

    // URL scroll

    $('a').on('click', function() {  
      $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 0);
      
      if ($(".menu-panel").hasClass("active")) {
        $('.ti-close').closest('.header-inner').find(".menu-panel").toggleClass('active');
        return false;
      }
      // $('.ti-close').closest('.header-inner').find(".menu-panel").toggleClass('active');
      return false;
    }); 
       

    // Banner 3D

    if($(document).width() > 1280){

      let preserve = document.querySelector('.banner-block');
      preserve.onmousemove = function(e) {
        let x = -(e.pageX - preserve.offsetLeft) * 0.015;
        let y = -(e.pageY - preserve.offsetTop) * 0.015;
        
        preserve.style.setProperty('--x', x+'px');
        preserve.style.setProperty('--y', y+'px');
      }

    }    

    // Banner Slider

    $('.main-banner-block').slick({
        arrows: true,
        fade: false,
        infinite: true,
        useTransform: true,
        adaptiveHeight: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });

    // Carousel Slider
    
    $('.carousel-card-block').on('init', function(event, slick) {
        $('.carousel-card-block .slick-slide.slick-current').addClass('is-active');
    }).slick({
        arrows: false,
        dots: false,        
        focusOnSelect: true,
        infinite: true,        
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 400,
        asNavFor: '.main-banner-block',
            responsive: [
                {
                  breakpoint: 1199,
                  settings: {
                      slidesToShow: 4,
                      slidesToScroll: 1,
                  }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }, 
                {
                    breakpoint: 640,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    }
                }, 
                {
                    breakpoint: 420,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    }
                }
            ]
        });
       
    $('.main-banner-block').on('afterChange', function(event, slick, currentSlide) {
        $('.carousel-card-block').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.carousel-card-block .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.carousel-card-block .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });
    
    $('.carousel-card-block').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');   
        $('.main-banner-block').slick('slickGoTo', goToSingleSlide);
    });

    // client slider

    $('.client-section').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 100,
        pauseOnHover:true,
        centerMode: false,        
        variableWidth: true,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ],
    });

    // Testimonial slider

    $('.testimonial-section').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 200,        
        centerMode: false,
        prevArrow: false,
        nextArrow: false,
        centerPadding:'80px',
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
        
    });


    // Gallery filter

    var $btns = $('.gallery-filter').click(function() {
      if (this.id == 'all') {
        $('.gallery-grid .each-grid-container').fadeIn(450);
      } else {
        var $el = $('.' + this.id).fadeIn(450);
        $('.gallery-grid .each-grid-container').not($el).hide();
      }
      $btns.removeClass('active');
      $(this).addClass('active');
    }) 

    // AOS
    
    AOS.init({
      disable: function() {
          var maxWidth = 800;
          return window.innerWidth < maxWidth;
      }
    });

    // Testimonial slider

    $('.card-slider').slick({
      autoplay: true,
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 400,        
      centerMode: false,
      prevArrow: false,
      nextArrow: false,
      centerPadding:'80px',
      responsive: [
          {
          breakpoint: 1024,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          },
          {
          breakpoint: 767,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          }
      ]
      
  });

// Back to top  

  $('#back-to-top').click(function () {
    $('body,html, .wrapper').animate({
      scrollTop: 0
    }, 400);
    return false;
  });

})
