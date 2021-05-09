var cacheName = 'shooty-v1'

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll([
                './',
                'android-chrome-192x192.png',
                'android-chrome-512x512.png',
                'apple-touch-icon.png',
                'browserconfig.xml',
                'favicon.ico',
                'favicon-16x16.png',
                'favicon-32x32.png',
                'mstile-150x150.png',
                'safari-pinned-tab.svg',
                'site.webmanifest',
                'about.html',
                'index.html',
                'play.html',
                'privacy.html',
                'terms.html',
                'tutorial.html',
                'assets/css/about.css',
                'assets/css/global.css',
                'assets/css/index.css',
                'assets/css/play.css',
                'assets/css/tutorial.css',
                'assets/icons/chevron-up.svg',
                'assets/icons/expand.svg',
                'assets/icons/facebook.svg',
                'assets/icons/github.svg',
                'assets/icons/globe.svg',
                'assets/icons/twitter.svg',
                'assets/images/feature-1.svg',
                'assets/images/feature-2.svg',
                'assets/images/feature-3.svg',
                'assets/images/feature-4.svg',
                'assets/images/hero-1.svg',
                'assets/images/hero-2.svg',
                'assets/images/hero-pattern.svg',
                'assets/images/icon.png',
                'assets/images/profile-cenhan.png',
                'assets/images/profile-kangyiming.png',
                'assets/images/tutorial-1.svg',
                'assets/images/tutorial-2.svg',
                'assets/images/tutorial-3.svg',
                'assets/images/tutorial-4.svg',
                'assets/js/about.js',
                'assets/js/global.js',
                'assets/js/index.js',
                'assets/js/play.js',
                'assets/vendor/aos.min.css',
                'assets/vendor/aos.min.js',
                'assets/vendor/bootstrap.min.css',
                'assets/vendor/bootstrap.min.js',
                'assets/vendor/jquery.min.js'
            ]).then(function () {
                self.skipWaiting()
            })
        })
    )
})

self.addEventListener('fetch', function (event) {
    if (navigator.onLine) {
        event.respondWith(fetch(event.request))
        return
    }

    event.respondWith(
        caches.open(cacheName).then(function (cache) {
            return cache.match(event.request).then(function (res) {
                return res || fetch(event.request)
            })
        })
    )
})
