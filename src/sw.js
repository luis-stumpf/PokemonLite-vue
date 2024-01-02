import { precacheAndRoute } from 'workbox-precaching'

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate' && event.request.url !== location.origin) {
    event.respondWith(async function() {
      try {
        return await fetch(event.request);
      } catch (err) {
        return caches.match('offline.html');
      }
    }());
  }
});

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('offline-cache').then((cache) => {
      return cache.add('offline.html');
    })
  );
});
precacheAndRoute(self.__WB_MANIFEST)