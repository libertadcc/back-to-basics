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

const btnStart = document.querySelector('.btn__start');
const btnStop = document.querySelector('.btn__stop');
const timer = document.querySelector('.timer');

let second = setInterval(startTimer, 1000);
let ss = 0;
function startTimer () {

  ss = ss + 1;
  timer.innerHTML = ss;
}

function stopTimer () {
  clearInterval(ss);
}
btnStart.addEventListener('click', startTimer);
btnStop.addEventListener('click', stopTimer);
