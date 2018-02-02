var paddle1Y = 250;
var paddle2Y = 250;

const PADDLE_MOVE_SPEED = 20;

function paddle1Move() {
  if(player1KeyHeldUp && paddle1Y > 0) {
    paddle1Y -= PADDLE_MOVE_SPEED;
  }
  if(player1KeyHeldDown && paddle1Y < (canvas.height - PADDLE_HEIGHT)) {
    paddle1Y += PADDLE_MOVE_SPEED;
  }
}

function paddle2MoveHuman(){
  if(player2KeyHeldUp && paddle2Y > 0) {
    paddle2Y -= PADDLE_MOVE_SPEED;
  }
  if(player2KeyHeldDown && paddle2Y < (canvas.height - PADDLE_HEIGHT)) {
    paddle2Y += PADDLE_MOVE_SPEED;
  }
}

function paddle2MoveComputer(){
  var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT/2);
  //TODO change this conditional
  if(ballDirection == "right"){ //ballX > canvas.width/2
    if(paddle2YCenter < ballAtPaddleYCoord-35){
      paddle2Y += PADDLE_MOVE_SPEED;
    } else if(paddle2YCenter > ballAtPaddleYCoord-35){
      paddle2Y -= PADDLE_MOVE_SPEED;
    }
  }
}
