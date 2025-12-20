const quotes = [
  "You are loved more than you know.",
  "Every day you inspire me.",
  "I’m so proud to be your daughter."
];

const photos = [
  "/photos/1.jpeg",
  "/photos/2.jpeg",
  "/photos/3.jpeg",
  "/photos/4.jpeg",
  "/photos/5.jpeg",
  "/photos/6.jpeg",
  "/photos/7.jpeg",
  "/photos/8.jpeg",
  "/photos/9.jpeg",
  "/photos/10.jpeg",
  "/photos/12.jpeg",
  "/photos/13.jpeg",
  "/photos/14.jpeg",
  "/photos/15.jpeg",
  "/photos/16.jpeg"
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

