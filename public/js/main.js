// $(".owl-carousel").owlCarousel();
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        "<i class='fas fa-caret-left'></i>",
        "<i class='fas fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})