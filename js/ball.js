var ballX = 50;
var ballY = 50;
var ballSpeedX = 2;
var ballSpeedY = 4;
const BALL_SPEED_Y_DEFAULT = 2;
const BALL_SPEED_X_DEFAULT = 4;

const BALL_TRAIL_LENGTH = 5;

var oldBallX;
var oldBallY;

var deltaBallX;
var deltaBallY;

var oldBallSpeedX;
var oldBallSpeedY;
var nextBallSpeedX;
var nextBallSpeedY;
var deltaBallSpeedX;
var deltaBallSpeedY;
var m;
var b;
var y;

var ballDirection;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ballReset (){
  if(player1Score >= WINING_SCORE ||
     player2Score >= WINING_SCORE) {
          showingWinScreen = true;
  }
	ballSpeedX = BALL_SPEED_X_DEFAULT;
	ballSpeedY = getRandomInt(5, 9);
	ballSpeedX = -ballSpeedX;
	hitCounter = 0;
  ballX = canvas.width/2;
  ballY = canvas.height/2;
}

function ballMove(){
  oldBallX = ballX;
  oldBallY = ballY;

  oldBallSpeedX = ballSpeedX;
  oldBallSpeedY = ballSpeedY;
  ballX += ballSpeedX;
	ballY += ballSpeedY;

  function ballSpeedXIncrement(){
  	if(hitCounter > SPEED_INC_1){
  		//TODO - LOL
  		//acting on ballspeed doesn't seem to b the right way of going about doing this.
  		ballSpeedX += 2;
  		console.log(ballSpeedX);
  	}
  	if(hitCounter > SPEED_INC_2){
  		//TODO - LOL
  		//acting on ballspeed doesn't seem to b the right way of going about doing this.
  		ballSpeedX += 5;
  		console.log(ballSpeedX);
  	}
  }

  //TODO if ball is < 0 or > canvas.width run that shit

  if(ballX < 0) {
    player2Score++; //MUST BE BEFORE BALL RESET
    ballReset();
  }

  if(ballX > canvas.width) {
    player1Score++; //MUST BE BEFORE BALL RESET
    ballReset();
  }

  if(ballX < PADDLE_DIST_FROM_WALL + PADDLE_WIDTH + 10) {
    if(ballY > paddle1Y &&
       ballY < paddle1Y+PADDLE_HEIGHT) {
          ballSpeedX = -ballSpeedX;
          var deltaY = ballY - (paddle1Y + PADDLE_HEIGHT/2);
          ballSpeedY = deltaY * DELTA_DAMPENER;
  				hitCounter++;
          ballDirection = "right";
  				ballSpeedXIncrement();
          //console.log(slope);
    }
  }
  if(ballX > canvas.width - PADDLE_DIST_FROM_WALL - PADDLE_WIDTH - 10) {
    if(ballY > paddle2Y &&
       ballY < paddle2Y+PADDLE_HEIGHT) {
          ballSpeedX = -ballSpeedX;
          var deltaY = ballY - (paddle2Y + PADDLE_HEIGHT/2);
          ballSpeedY = deltaY *  DELTA_DAMPENER;
          ballDirection = "left";
  				hitCounter++
          //console.log(slope);
    }
  }
  if(ballY < 0) {
  	ballSpeedY = -ballSpeedY;
  }
  if(ballY > canvas.height) {
  	ballSpeedY = -ballSpeedY;
  }

  /*
  deltaBallSpeedX = ballSpeedX - oldBallSpeedX;
  deltaBallSpeedY = ballSpeedY - oldBallSpeedY;
  slope = deltaBallSpeedY/deltaBallSpeedX;
  //console.log(deltaBallSpeedY);
  */

  deltaBallX = ballX - oldBallX;
  deltaBallY = ballY - oldBallY;
  m = deltaBallY/deltaBallX;
  b = ballY - (m * ballX);
  var paddle2Coord = canvas.width - PADDLE_DIST_FROM_WALL - PADDLE_WIDTH - 10;
  ballAtPaddleYCoord = (m*paddle2Coord) + b;
  //console.log("deltaY: " + deltaBallY);
  console.log(y);
}
