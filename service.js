
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');


workbox.precaching.precacheAndRoute([
  './index.html',
  './app.js',
  './service.js',
  './manifest.webmanifest',
  './index.js',
  './estrenos.html',
  './todo.html',
   './css/animaciones.css',
 './css/generales.css',
 './css/header.css',
 './css/busqueda.css',
 './css/index.css',
 './css/menu.css',
 './css/mobile.css',
 './css/modal.css',
 './css/normalize.css',
 './css/peliculas.css',
 './css/variables.css',
 './assets/logo.png',
 './assets/menu.png',

]);


// registerRoute(
//   new RegExp('/styles/.*\\.css'),
//   handlerCb
// );
workbox.routing.registerRoute(
new RegExp('\\.html'),
new workbox.strategies.CacheFirst()
);
workbox.routing.registerRoute(
  new RegExp('\\.css'),
  new workbox.strategies.CacheFirst()
  );



// Files to cache
// const cacheName = 'app-V1';

// const contentToCache= [
// './index.html',
// './app.js',
// './service.js',
// './manifest.webmanifest',
// './index.js',
// './estrenos.html',
// './todo.html',
// './css/animaciones.css',
// './css/generales.css.css',
// './css/header.css',
// './css/busqueda.css',
// './css/index.css',
// './css/menu.css',
// './css/mobile.css',
// './css/modal.css',
// './css/normalize.css',
// './css/peliculas.css',
// './css/variables.css'
// ]

//para instalar y para mandar al cache
// Installing Service Worker
// self.addEventListener('install', (e) => {
//   console.log('[Service Worker] Install');
//   e.waitUntil((async () => {
//     const cache = await caches.open(cacheName);
//     console.log('[Service Worker] Caching all: app shell and content');
//     await cache.addAll(contentToCache);
//   })());
// });



//vamos a solicitar el cache 
// Fetching content using Service Worker
// self.addEventListener('fetch', (e) => {
//   e.respondWith((async () => {
//     const r = await caches.match(e.request);
//     console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
//     if (r) return r;
//     const response = await fetch(e.request);
//     const cache = await caches.open(cacheName);
//     console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
//     cache.put(e.request, response.clone());
//     return response;
//   })());
// });