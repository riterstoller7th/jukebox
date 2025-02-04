function hakari() {
rng = Math.floor(Math.random() * 10)
// this is the random number generator 
if(rng  ==  0) // i was too lazy to set rng to 1, 11 instead of 10 lol
  document.getElementById('main').src = "1.mp3"
  // .src allows u to change the src of an element
else if(rng == 1)
  document.getElementById('main').src = "2.mp3"
else if(rng == 2)
  document.getElementById('main').src = "3.mp3"
else if(rng == 3)
  document.getElementById('main').src = "4.mp3"
else if(rng == 4)
  document.getElementById('main').src = "5.mp3"
else if(rng == 5)
  document.getElementById('main').src = "6.mp3"
else if(rng == 6)
  document.getElementById('main').src = "7.mp3"
else if(rng == 7)
  document.getElementById('main').src = "8.mp3"
else if(rng == 8)
  document.getElementById('main').src = "9.mp3"
else if(rng == 9)
  document.getElementById('main').src = "10.mp3"
}
// function is named after hakari because of gambling
