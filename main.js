const snake = document.getElementById("snake");
const ball = document.getElementById("ball");

window.addEventListener("keydown", move);
let distanceX = 0;
let distanceY = 0;
var myInterval;
let positionX = Math.floor(Math.random() * 495);
let positionY = Math.floor(Math.random() * 495);
function ballPosition() {
var found = false;
  while (positionX % 15 !== 0 && positionY% 15 !== 0)  {
    ball.style.top = `${positionY}px`
    ball.style.left = `${positionX}px`
    console.log("x", positionX)
    console.log("y", positionY)

    found = true;

  }

}

ballPosition();


function move(event) {

  if (event.key === "ArrowDown") {
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

