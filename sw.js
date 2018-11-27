const HOST='https://macgyverbest.github.io/Agenda'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register(`${HOST}/sw.js`)
    .then(function () { console.log('Service Worker Registered'); });
}

var cacheName = 'todo-ap';
var filesToCache = [
  `${HOST}/imagens/edit.png`,
  `${HOST}/imagens/remove.png`,
  `${HOST}/imagens/icons/icon-128x128.png`,
  `${HOST}/imagens/icons/icon-144x144.png`,
  `${HOST}/imagens/icons/icon-152x152.png`,
  `${HOST}/imagens/icons/icon-192x192.png`,
  `${HOST}/imagens/icons/icon-256x256.png`,
  `${HOST}/lib/bulma.css`,
  `${HOST}/app.css`,
  `${HOST}/index.html`,
  `${HOST}/store.js`,
  `${HOST}/todo_e6.js`,
  `${HOST}/sw.js`,
  `${HOST}/manifest.json`
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cacheName).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
