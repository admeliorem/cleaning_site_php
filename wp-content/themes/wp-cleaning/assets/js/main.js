$(function () {
    $('.product__adv').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
    });
    $('.rewivs__items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev review"></div>',
        nextArrow: '<div class="next review"></div>',
        });
});