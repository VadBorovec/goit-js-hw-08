// // Скрипт на змін кольору фону

// ==========================================================================================
// 1st SCRIPT

// const colors = [
//   'teal',
//   'indigo',
//   'tomato',
//   'maroon',
//   'plum',
//   'cyan',
//   'violet',
//   'skyblue',
//   'orange',
//   'aquamarine',
// ];

// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;

// // ==========================================================================================
// // 3rd SCRIPT

const colors = [
  'linear-gradient(to right, #3d7eaa, #ffe47a)',
  'linear-gradient(to right, #70e1f5, #ffd194)',
  'linear-gradient(to right, #cc95c0, #dbd4b4, #7aa1d2)',
  'linear-gradient(to right, #1d976c, #93f9b9)',
  'linear-gradient(to right, #fc354c, #0abfbc)',
  'linear-gradient(to right, #fc354c, #0abfbc)',
  'linear-gradient(to right, #fc354c, #0abfbc)',
  'linear-gradient(to right, #fc354c, #0abfbc)',
  'linear-gradient(to right, #fc354c, #0abfbc)',
  'linear-gradient(to right, #e9d362, #333333)',
  'linear-gradient(to right, #f1f2b5, #135058)',
  'linear-gradient(to right, #237a57, #093028)',
  'linear-gradient(to right, #4ca1af, #2c3e50)',
  'linear-gradient(to right, #be93c5, #7bc6cc)',
  ' linear-gradient(to right, #decba4, #3e5151)',
];

const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];

document.body.style.background = randomColor;
document.body.style.backgroundSize = 'cover';

console.log(randomColor);

// const colors = [
//   'linear-gradient(to right, #f4a69a, #f4b0ab, #f4baba, #f4c2ca, #f4cae0)',
//   'linear-gradient(to right, #f7c1bb, #f9b9ce, #fbb0e2, #fca8f6, #ecbaf5)',
//   'linear-gradient(to right, #b4e0e7, #a4d1dc, #94c2d0, #85b2c5, #7592b0)',
//   'linear-gradient(to right, #c8b5e5, #b5a6d5, #a297c6, #8f88b7, #7c7997)',
//   'linear-gradient(to right, #a2dbcd, #8cd2c2, #77c9b8, #62c0ae, #4cb7a4)',
//   'linear-gradient(to right, #f9e9b2, #f7e2a4, #f5db96, #f3d488, #f1cd7a)',
//   'linear-gradient(to right, #f9d6b2, #f8cfa4, #f7c896, #f6c189, #f5ba7b)',
//   'linear-gradient(to right, #f9b2b2, #f6a3a3, #f29494, #ef8585, #ec7676)',
//   'linear-gradient(to right, #c6f3c6, #b6e6b6, #a6d9a6, #96cc96, #86bf86)',
//   'linear-gradient(to right, #d4b4e2, #c4a4d2, #b594c2, #a584b2, #9574a2)',
//   ' linear-gradient(to right, #70e1f5, #ffd194)',
// ];
