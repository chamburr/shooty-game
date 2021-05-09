var fullScreenMode = false

function resizeFrame(fullScreen) {
    var width = Math.min($('#frame').width(), $(window).height() * 0.8)

    if (fullScreen) {
        width = Math.min(window.screen.width, window.screen.height)
    }

    var scale = (width / 500).toFixed(2).toString()

    $('#frame').css('height', width + 21 * scale)
    $('#frame iframe').css({
        '-ms-zoom': scale,
        '-moz-transform': 'scale(' + scale + ')',
        '-o-transform': 'scale(' + scale + ')',
        '-webkit-transform': 'scale(' + scale + ')'
    })
}

$(window).resize(function () {
    if (fullScreenMode) return
    resizeFrame()
})

$('#frame').bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function() {
    fullScreenMode = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen
    if (!fullScreenMode) resizeFrame()
})

$('#frame-full-screen').click(function () {
    fullScreenMode = true
    resizeFrame(true)
    $('#frame')[0].requestFullscreen()
})

resizeFrame()
