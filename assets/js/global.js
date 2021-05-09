if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('./sw.js')
    })
}

$(window).scroll(function () {
    if ($(window).scrollTop() > 250) {
        $('#scroll-to-top').addClass('show')
    } else {
        $('#scroll-to-top').removeClass('show')
    }
})

$('#scroll-to-top').click(function (event) {
    event.preventDefault()

    $('html, body').animate({scrollTop: 0}, 250)
})

$('.needs-validation').each(function () {
    var form = $(this)
    form.submit(function (event) {
        if (!form[0].checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
        form.addClass('was-validated')
    })
})

AOS.init({
    duration: 500,
    once: true
})

$('#footer-year').text(new Date().getFullYear())
