$(function(){
  // header stickypart
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('sticky_name');
    }
    else {
         $('.navbar').removeClass('sticky_name');
    }
    });
  // header stickypart
    // banner slick
$('.banner_slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
  });
    // service slick
    $('.service_slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
      });
      $('.client_slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
      });
    // service slick
    // counter part
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // counter part
    // portfolio part
    var containerEl = document.querySelector('.filter_gal');

    var mixer = mixitup(containerEl);

    // portfolio part
});