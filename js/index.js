const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const currentColour = randomIntegerFromInterval(0, 5)

const buttonStart = document.querySelector('#start')
const buttonStop = document.querySelector('#stop')
const body = document.querySelector('body')
// let intervalId = null;

buttonStart.addEventListener('click', onStartClick)
buttonStop.addEventListener('click', onStopClick)
let intervalId = null;


function onStartClick() {
console.log('start')
    // document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)]
    intervalId = setInterval('document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)]', 1000)
    buttonStart.setAttribute("disabled", "disabled");
    

    
}

function onStopClick() {
    console.log("stop")
    clearInterval(intervalId)

}





