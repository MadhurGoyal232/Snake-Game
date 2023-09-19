const snake = document.getElementById("snake");
const ball = document.getElementById("ball");

window.addEventListener("keydown", move);
let distanceX = 0;
let distanceY = 0;
var myInterval;
let positionX = 0;
let positionY = 0;

function ballPosition() {
  var found = false;
  while (!found) {

    positionX = Math.floor(Math.random() * 495);
    positionY = Math.floor(Math.random() * 495);
    if (positionX % 15 == 0 && positionY % 15 == 0) {
      found = true;
      ball.style.top = `${positionY}px`
      ball.style.left = `${positionX}px`
    }
  }

}

ballPosition();
function overlapping(){

  if(positionX === distanceX && positionY === distanceY){
    
    ballPosition();
    
  }
}


function move(event) {
  
  if (event.key === "ArrowDown") {
    overlapping();
    clearInterval(myInterval);

    myInterval = setInterval(() => {

      distanceY += 15
      snake.style.top = `${distanceY}px`;
      console.log(distanceY);

      if (distanceY >= 495) {
        clearInterval(myInterval)
      }
    }, 200);

  }
  else if (event.key === "ArrowUp") {
    overlapping();
    clearInterval(myInterval);
    myInterval = setInterval(() => {
      distanceY -= 15
      snake.style.top = `${distanceY}px`;
      if (distanceY <= 0) {
        clearInterval(myInterval)
      }
    }, 200);
  }
  else if (event.key === "ArrowLeft") {
    overlapping();
    clearInterval(myInterval);
    myInterval = setInterval(() => {

      distanceX -= 15
      snake.style.left = `${distanceX}px`;
      if (distanceX <= 0) {
        clearInterval(myInterval)
      }
    }, 200);

  } else if (event.key === "ArrowRight") {
    {
      overlapping();
      clearInterval(myInterval);
      myInterval = setInterval(() => {
        distanceX += 15
        snake.style.left = `${distanceX}px`;
        if (distanceX >= 495) {
          clearInterval(myInterval)
        }
      }, 200);
    }
  }
 
}



  


