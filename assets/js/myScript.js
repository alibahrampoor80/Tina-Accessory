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

