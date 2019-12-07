$(document).ready(function () {
    $(".link-on-map,.contact__data,.header__btn,.my-nav__link a").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({ scrollTop: destination }, 800);
    });

    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.header__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    })
    $('.contact__card').hide()
    $('#contact__btn').on('click', () => {
        $('.contact__card').show('5000');

    })
    $('.close ').on('click', () => {
        $('.contact__card').hide('5000');
    })
});
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.694809,
            lng: -73.926723
        },
        zoom: 15,
    });
    var marker = new google.maps.Marker({
        position: {
            lat: 40.694809,
            lng: -73.926723
        },
        map: map,
        title: "Мы находимся здесь!",
        icon: 'images/marker.png'
    })
    var marker = new google.maps.Marker({
        position: {
            lat: 22.317670,
            lng: 114.169963
        },
        map: map,
        title: "International Commerce Centre",
        icon: 'images/marker.png'
    })
    var marker = new google.maps.Marker({
        position: {
            lat: 40.727644,
            lng: -74.001292
        },
        map: map,
        title: "One World Trade Center",
        icon: 'images/marker.png'
    })
}

