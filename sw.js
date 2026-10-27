/* Bio-score service worker — app shell cache for both portals */
var CACHE = 'bio-score-v2';
var SHELL = [
  './', './index.html', './staff.html',
  './style.css', './common.js', './config.js',
  './manifest.json', './manifest-staff.json',
  './icon-192.png', './icon-512.png',
  './icon-staff-192.png', './icon-staff-512.png'
];

self.addEventListener('install', function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(SHELL.map(function (u) { return c.add(u).catch(function () {}); }));
  }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; })
      .map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var url = e.request.url;
  // never cache API calls — always go to the network
  if (e.request.method !== 'GET' || url.indexOf('script.google.com') > -1) return;

  e.respondWith(
    fetch(e.request).then(function (res) {
      if (res && res.status === 200 && url.indexOf('http') === 0) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy).catch(function () {}); });
      }
      return res;
    }).catch(function () {
      return caches.match(e.request).then(function (hit) {
        if (hit) return hit;
        // offline fallback: keep each portal on its own page
        return caches.match(url.indexOf('staff') > -1 ? './staff.html' : './index.html');
      });
    })
  );
});
