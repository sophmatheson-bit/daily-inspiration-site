const quotes = [
  "\"quote 1\"",
  "\"quote 2\"',
  "\"quote 3\"'
];

const photos = [
  "/photos/1.jpeg",
  "/photos/2.jpeg",
  "/photos/3.jpeg"
];

// Pick random quote and photo AFTER defining the arrays
const quote = quotes[Math.floor(Math.random() * quotes.length)];
const photo = photos[Math.floor(Math.random() * photos.length)];

// Set content
document.getElementById("quote").textContent = quote;
document.getElementById("photo").src = photo;

// Optional: register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

