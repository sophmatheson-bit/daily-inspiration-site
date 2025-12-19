const CACHE_NAME = "inspirational-quotes-v1";
const FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./photos/1.jpeg",
  "./photos/2.jpeg",
  "./photos/3.jpeg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});
