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
  "/photos/16.jpeg",
  "/photos/17.jpeg",
  "/photos/18.jpeg",
  "/photos/19.jpeg",
  "/photos/20.jpeg",
  "/photos/21.jpeg",
  "/photos/22.jpeg",
  "/photos/23.jpeg",
  "/photos/24.jpeg",
  "/photos/25.jpeg",
  "/photos/26.jpeg",
  "/photos/27.jpeg",
  "/photos/28.jpeg",
  "/photos/29.jpeg",
  "/photos/30.jpeg",
  "/photos/31.jpeg"
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

