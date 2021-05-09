$(window).scroll(function () {
    if (window.top.scrollY >= 5) {
        $('#nav')
            .addClass('bg-dark')
            .removeClass('bg-transparent')
            .removeClass('border-bottom')
    } else {
        $('#nav')
            .addClass('bg-transparent')
            .removeClass('bg-dark')
            .addClass('border-bottom')
    }
})
