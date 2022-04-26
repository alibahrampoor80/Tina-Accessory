$(function () {

    $('.tab_container:first').show()
    $('.tab_navigation li:first').addClass('active')
    $('.tab_navigation li').click(function (event) {
        index = $(this).index()
        $('.tab_navigation li').removeClass('active')
        $(this).addClass('active')
        $('.tab_container').hide()
        $('.tab_container').eq(index).show()
    })

    $('.header__toggle').click(function () {
        $('ul#menu').slideToggle()

    })

    $('.search-bar').click(function () {
        $('body').css('overflow-y', 'hidden')
        $('.search-layer').show()
        $('.overlay').show()
    })
    $('.overlay').click(function () {
        $('body').css('overflow-y', 'auto')
        $('.search-layer').hide()
        $(this).hide()
    })

})

$(function () {

    $('.tab_container:first').show()
    $('.tab_navigation li:first').addClass('active')
    $('.tab_navigation li').click(function (event) {
        index = $(this).index()
        $('.tab_navigation li').removeClass('active')
        $(this).addClass('active')
        $('.tab_container').hide()
        $('.tab_container').eq(index).show()
    })

})

//counter products
function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
        // console.log(value)
    }
}


$(function () {
    $('.bxslider').bxSlider({
        mode: 'vertical',
        captions: true,

    });


    $(".owl-carousel-3").owlCarousel({
        rtl: true,
        dots: true,
        nav: true,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
        loop: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false
            },
            600: {
                items: 2,
                dots: false,
            },
            1000: {
                items: 3,

            }
        }

    });

    $('.owl-carousel-1').owlCarousel({
        rtl: true,
        dots: true,
        nav: true,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
        center: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false,
                center: false,
                loop:false
            },
            600: {
                items: 2,
                dots: false,
                center: false,
                loop:false
            },
            992: {
                items: 2,
                center: false,
                // dots: false,
            },
            1000: {
                items: 3,

            }
        }
    })

})
$(function () {
    $('ul#menu-grouping li:has(ul)')
        .children('a')
        .append('<i class="fa fa-angle-left"></i>')

    $('ul#menu-grouping li').hover(function () {
        $(this).children('ul').show()
    }, function () {
        $(this).children('ul').hide()
    })
})

// window.addEventListener('contextmenu', (event) => {
//     event.preventDefault()
// })