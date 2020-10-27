// script.js

$('.slider').slick({
    // autoplay:true,
    autoplaySpeed:5000,
    dots:true,
});

$('.burger-btn').on('click',function(){//.burger-btnをクリックすると
    $('.burger-btn').toggleClass('close');
    //.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
    $('.header__inner__sp').toggleClass('open');
    //.gnav__wrapperにopenクラスを付与
});
