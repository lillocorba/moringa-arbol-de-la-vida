$(document).ready(function () {
    $('.beneficios__carrousel').slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoWidth: true,
        variableWidth: true,
        infinite: true,
        arrows: true,
        mobileFirst: true,
        prevArrow: '.contenedor-left-arrow',
        nextArrow: '.contenedor-right-arrow'
    });
});