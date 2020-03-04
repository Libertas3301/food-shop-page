$(function() {
  $(".bubble2").on("click", function() {
    $(".slider__content1").addClass(".goForward");
    $(".slider__content1").hide("slow");
    $(".slider__content3").addClass(".goForward");
    $(".slider__content3").hide("slow");
    $(".slider__content2").show("slow");
    $(".bubble2").addClass("filled-bubble");
    $(".bubble1").removeClass("filled-bubble");
    $(".bubble3").removeClass("filled-bubble");
  });

  $(".bubble1").on("click", function() {
    $(".slider__content2").addClass(".goForward");
    $(".slider__content3").addClass(".goForward");
    $(".slider__content3").hide("slow");
    $(".slider__content2").hide("slow");
    $(".slider__content1").show("slow");
    $(".bubble1").addClass("filled-bubble");
    $(".bubble2").removeClass("filled-bubble");
    $(".bubble3").removeClass("filled-bubble");
  });

  $(".bubble3").on("click", function() {
    $(".slider__content1").addClass(".goForward");
    $(".slider__content1").hide("slow");
    $(".slider__content2").addClass(".goForward");
    $(".slider__content2").hide("slow");
    $(".slider__content3").show("slow");
    $(".bubble3").addClass("filled-bubble");
    $(".bubble1").removeClass("filled-bubble");
    $(".bubble2").removeClass("filled-bubble");
  });
});

$(function(){
  $('.burger').on('click', function(){
    $('.left__nav').addClass('selected__left_nav');
    $('.burger').css('display','none');
    $('.left__nav').css('display','block');
    $('body').css('overflow-y', 'hidden');
  });

  $('.close').on('click', function(){
    $('.left__nav').removeClass('selected__left_nav');
    $('.burger').css('display','block');
    $('.left__nav').css('display','none');
    $('body').css('overflow-y', 'scroll');
  });
});

