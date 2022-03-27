$(document).ready(function(){
    // находим блок с слайдами
    const owl = $('#clients-slider');
    // запуск карусели
    owl.owlCarousel({
        items: 1,
        loop: true
    });

    // находим кастомные кнопки вперед/назад
    const prev = $('#sliderPrev');
    const next = $('#sliderNext');

    // клик на кнопку назад и прокрутка
    prev.click(function() {
        owl.trigger('prev.owl.carousel');
    })

    // клик на кнопку вперед и прокрутка
    next.click(function() {
        owl.trigger('next.owl.carousel');
    })
});
