console.log("fh")
let positionX;
let positionY;
function ballPosition() {
    var found = false;
    while (!found) {

        positionX = Math.floor(Math.random() * 495);
        positionY = Math.floor(Math.random() * 495);
        if (positionX % 15 !== 0 && positionY % 15 !== 0){
            found = true;
        }
        console.log("x", positionX)
        console.log("y", positionY)


    }

}

ballPosition();