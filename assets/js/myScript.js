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

    $('.owl-carousel-1').owlCarousel({
        rtl: true,
        dots: true,
        nav: true,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
        center: true,
        loop: true
    })


    $(".owl-carousel").owlCarousel({
        rtl: true,
        dots: true,
        nav: true,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
        loop:true
    });


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

// window.addEventListener('contextmenu', (event) => {
//     event.preventDefault()
// })