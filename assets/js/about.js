$('#contact-form').submit(function (event) {
    var name = $('#contact-name').val()
    var message = $('#contact-message').val()

    var title = encodeURIComponent('About Shooty Game...')
    var content = encodeURIComponent('Hi there,\n\n' + message + '\n\nRegards,\n' + name)

    window.open('mailto:hi@chamburr.com?subject=' + title + '&body=' + content,'_blank')

    event.preventDefault()
    event.stopPropagation()
})
