'use strict';

//<---------- Counter ---------->

const btnClick = document.querySelector('.btn__click');
const btnReset = document.querySelector('.btn__reset');
const counter = document.querySelector('.counter');

let acc = 0;
function add (){
  acc = acc + 1;
  console.log(acc);
  counter.innerHTML = acc;
}

function reset () {
  acc = 0;
  counter.innerHTML = acc;
}

btnClick.addEventListener('click', add);
btnReset.addEventListener('click', reset);

//<---------- Timer ---------->
//                AYUDA
const time = document.querySelector('.time');
const btnStart = document.querySelector('.btn__start');
const btnStop = document.querySelector('.btn__stop');


let timer = 0;
let temp;
const incrementAndShowTimer = () => {
  timer++;
  time.innerHTML = timer;

};
temp = setInterval(incrementAndShowTimer, 1000);

const stopTimer = () => {
  clearInterval(temp)
}
btnStart.addEventListener('click', incrementAndShowTimer);
btnStop.addEventListener('click', stopTimer);
//<---------- Arrays ---------->

// examples with .MAP
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const inflatedMarks = numbers.map(item => item + 1);
console.log('inflatedMarks', inflatedMarks);

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const helloNames = names.map(name => 'Hola ' + name);
console.log('helloNames', helloNames);

// examples with .FILTER
const longNames = names.filter(name => name.length >5);
console.log('longNames', longNames);

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];
const premium = users.filter(user => user.isPremium === true);
console.log('premium', premium);

const pins = [2389, 2384, 2837, 5232, 8998];
const evenPins = pins.filter(pin => pin%2 === 0);
console.log('evenPins', evenPins);

const evenNumbers = numbers.filter(number => number%2 === 0);
console.log('evenNumbers', evenNumbers);

const usuarias = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];
const usuariasTop = usuarias.filter(user =>  user.pin%2===0);
console.log('usuariasTop', usuariasTop);

//examples with .REDUCE
const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];
const result = scores.reduce((acc, number) => acc + number, 0);
console.log('result', result);

const resultNumber = numbers.reduce((acc, number) => acc + number, 0);
console.log('resultNumber', resultNumber);

const times = [56, 9, 45, 28, 35];
const half = times.reduce((acc, number) => acc + number, 0)/times.length;
console.log('half', half);


