const quotes = [
  "quote 1",
  "quote 2",
  "quote 3",
  "quote 4",
  "quote 5"
];

const photos = [
  "photos/1.jpeg",
  "photos/2.jpeg",
  "photos/3.jpeg"
];

const quote = quotes[Math.floor(Math.random() * quote.length)];
const photo = photos[Math.floor(Math.random() * photo.length)];

document.getElementById("quote").textContent = quote;
document.getElementById("photo").src = photo;

//Register service worker
if("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
