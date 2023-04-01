const colors = [
  'linear-gradient(to right, #3d7eaa, #ffe47a)',
  'linear-gradient(to right, #70e1f5, #ffd194)',
  'linear-gradient(to right, #cc95c0, #dbd4b4, #7aa1d2)',
  'linear-gradient(to right, #cc95c0, #dbd4b4, #7aa1d2)',
  'linear-gradient(to right, #1d976c, #93f9b9)',
  'linear-gradient(to right, #fc354c, #0abfbc)',
  'linear-gradient(to right, #fc354c, #0abfbc)',
  'linear-gradient(to right, #fc354c, #0abfbc)',
  'linear-gradient(to right, #e9d362, #333333)',
  'linear-gradient(to right, #f1f2b5, #135058)',
  'linear-gradient(to right, #4ca1af, #2c3e50)',
  'linear-gradient(to right, #be93c5, #7bc6cc)',
  // ' linear-gradient(to right, #decba4, #3e5151)',
];

const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];

// console.log(randomColor);

document.body.style.background = randomColor;
document.body.style.backgroundSize = 'cover';
