let display = document.getElementById("time")
let seconds = 0;
let minutes = 0;
let hours = 0;
let active = false;

function start(){
  if (!active){
    seconds++
    display.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    active = true;
    increment = setInterval(() => {
      seconds++
      if (seconds === 60){
        seconds = 0;
        minutes++
      }
      if (minutes === 60){
        minutes = 0;
        hours++
      }
      display.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    }, 1000)
  }
}

function pause(){
  active = false;
  clearInterval(increment)
}

function reset(){
  seconds = 0;
  minutes = 0;
  hours = 0;
  display.textContent = "00:00:00"
  active = false
  clearInterval(increment)
}