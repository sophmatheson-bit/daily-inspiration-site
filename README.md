# daily-inspiration-site
A simple web app that displays a fresh inspirational quote and image on each page load.

# Features
- Displays a random image and inspirational quote on each page load
- Fully client-side (no backend required)
- Lightweight and fast
- Easy to customize and extend

# How it Works
When the page loads:
1. A random quote is selected from a predefined list
2. A random image is selected from the photos array
3. The quote and image are rendered together in the browser

## Tech Stack
- **HTML** - structure
- **CSS** - styling and layout
- **JavaScript** - logic for selecting and displaying quotes and images

## Prerequisites
✔️ A modern web browser
(Optional)
✔️ A local web server for development (e.g. Python, VS Code Live Server)

## Installation/Usage
:one: Clone the repository:  

`git clone https://github.com/sophmatheson-bit/daily-inspiration-site.git`

:two: Navigate into the project directory  

`cd daily-inspiration-site`

:three: Open `index.html` directly in your browser or serve it locally:  

`python -m http.server`

:four: Then visit:  

`http://localhost:8000`

Each page load or refresh will display a new quote and image.

# Enhancement Ideas
- Automate quotes from external sources
  - Pull quotes from public APIs or curated quote websites
- Expand image selection
  - Allow for more photos to be added by creating an array that cycles through *n* images in the folder
- Improve quote-image pairing
  - Tag quotes and images by theme and match them dynamically
- Favorites or history
  - Allow users to save favorite quotes or photos using `localStorage`
