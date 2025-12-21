const quotes = [
  "\"Death is not the greatest loss in life. The greatest loss is what dies inside us while we live.\" ~ Norman Cousins",
  "\"We should care as much about well-doing as well-being. I want to live in a world that values purpose as much as pleasure, contribution as much as contentment, honesty as much as excitement, and justice as much as joy.\" ~ Adam Grant",
  "\"Do you the best you can until you know better. Then when you know better, do better.\" ~ Maya Angelou",
  "\"There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.\" ~ Ernest Hemingway",
  "\"Be not afraid of growing slowly; be afraid only of standing still.\" ~ Chinese Proverb",
  "\"Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.\" ~ Carl Bard",
  "\"Incredible changes happen in your life when you decide to take control of what you have power over instead of craving control over what you don't.\" ~ Steve Maraboli",
  "\"People who are crazy enough to think they can change the world are the ones who do.\" ~ Steve Jobs",
  "\"What you do makes a difference, and you have to decide what kind of difference you want to make.\" ~ Jane Goodall",
  "\"Our greatest natural resource is the minds of our children.\" ~ Walt Disney",
  "\"Someone is sitting in the shade today because someone planted a tree a long time ago.\" ~ Warren Buffett",
  "\"Every strike brings me closer to the next home run.\" ~ Babe Ruth",
  "\"We are the products of our past, but we don't have to be prisoners of it.\" ~ Rick Warren",
  "\"You can waste your lives drawing lines. Or you can live your life crossing them.\" ~ Shonda Rhimes",
  "\"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.\" ~ Helen Keller",
  "\"As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.\"  ~ John F. Kennedy",
  "\"No act of kindness, no matter how small, is ever wasted.\" ~ Aesop.",
  "\"The undertaking of new action brings new strength.\" ~ Richard L. Evans",
  "\"There are two ways of spreading light: to be the candle or the mirror that reflects it.\" ~ Edith Wharton",
  "\"If opportunity doesn't knock, build a door.\" ~ Milton Berle",
  "\"Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.\" ~ Marcus Aurelius",
  "\"Don't judge each day by the harvest you reap but by the seeds that you plant.\" ~ Robert Louis Stevenson",
  "\"Happiness is not something you postpone for the future; it is something you design for the present.\" ~ Jim Rohn",
  "\"If you always put limit on everything you do, physical or anything else, it will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\" ~ Bruce Lee",
  "\"In a gentle way, you can shake the world.\" ~ Mahatma Gandhi",
  "\"We relish news of our heroes, forgetting that we are extraordinary to somebody too.\" ~ Helen Hayes",
  "\"Tomorrow is the most important thing in life. Comes into us at midnight very clean. It's perfect when it arrives and it puts itself in our hands. It hopes we've learned something from yesterday.\" ~ John Wayne",
  "\"When we seek to discover the best in others, we somehow bring out the best in ourselves.\" ~ William Arthur Ward",
  "\"Miracles are a retelling in small letters of the very same story which is written across the whole world in letters too large for some of us to see.\" ~ C.S. Lewis",
  "\"What we achieve inwardly will change outer reality.\" ~ Plutarch",
  "\"From what we get, we can make a living; what we give, however, makes a life.\" ~ Arthur Ashe",
  "\"Happiness is a butterfly, which when pursued, is always just beyond your grasp, but which, if you will sit down quietly, may alight upon you.\" ~ Nathaniel Hawthorne",
  "\"The things that we love tell us what we are.\" ~ Thomas Aquinas",
  "\"Never let success go to your head, never let failure get to your heart.\" ~ Beyonce",
  "\"I'm going to use all my tools, my God-given ability, and make the best life I can with it.\" ~ Lebron James",
  "\"We have two lives, and the second one begins when we realize we only have one.\" ~ Confucius",
  "\"The best way to get started is to quit talking and begin doing.\" ~ Walt Disney",
  "\"If I cannot do great things, I can do SMALL things in a great way.\" ~ Martin Luther King Jr.",
  "\"A person who never made a mistake never tried anything new.\" ~ Albert Einstein",
  "\"Challenges are gifts that force us to search for a new center of gravity. Don't fight them. Just find a new way to stand.\" ~ Oprah Winfrey",
  "\"It ain't about how hard you hit. It's about hard you can get hit and keep moving forward.\" ~ Sylvester Stallone as Rocky Balboa",
  "\"It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.\" ~ William James",
  "\"Some people look for a beautiful place. Others make a place beautiful.\" ~ Hazrat Inayat Khan",
  "\"If you want to lift yourself up, lift up someone else.\" ~ Booker T. Washington",
  "\"It has alwasy been easy to hate and destroy. To build and to cherish is much more difficult.\" ~ Queen Elizabeth ||",
  "\"Tough times never last, but tough people do.\" ~ Robert H. Schuller",
  "\"You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.\" ~ Mandy Hale",
  "\"We must be willing to let go of the life we planned so as to have the life that is waiting for us.\" ~ Joseph Campbell",
  "\"Remember that the airplane takes off against the wind, not with it.\" ~ Henry Ford",
  "\"The most wasted of days is one without laughter.\" ~ E.E. Cummings",
  "\"Sometimes you will never know the value of a moment, until it becomes a memory.\" ~ Dr. Seuss",
  "\"My least favorite phrase in the English language is 'I don't care.'\" ~ James Caan",
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

