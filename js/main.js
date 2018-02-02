var canvas;
var canvasContext;

var player1Score = 0;
var player2Score = 0;
//TODO move this back up
const WINING_SCORE = 2;

var hitCounter = 0;
const SPEED_INC_1 = 1;
const SPEED_INC_2 = 2;

var showingTitleScreen = true;
var showingWinScreen = false;
var winnerText = "";

const DELTA_DAMPENER = 0.70;

const PADDLE_DIST_FROM_WALL = 30;
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 10;

var isTwoPlayer = false;


canvas = document.getElementById('gameCanvas');
canvasContext = canvas.getContext('2d');

//setUpMouseInput();
setupKeyInput();

window.onload = function() {
	var framesPerSecond = 30;
	ballReset();
	setInterval(updateAll, 1000/framesPerSecond);
}

function updateAll(){
	moveEverything();
	drawEverything();
}

function moveEverything() {
	if(showingWinScreen){
    return;
  } else if(showingTitleScreen){
    return;
  }

	ballMove();
	paddle1Move();

	if(isTwoPlayer){
		paddle2MoveHuman();
	} else {
		paddle2MoveComputer();
	}
}

function drawNet() {
  for(i = 0; i < canvas.height; i+= 40){
    colorRect(canvas.width/2-1,i,2,20,'white');
  }
}

function drawEverything() {
	// next line blanks out the screen with black
	colorRect(0,0,canvas.width,canvas.height,'black');

	if(showingTitleScreen){
			var titleText = "pong, more or less."
			var subText = "to control paddle: player 1: w/s keys, player 2: up/down keys."
			var subSubText = "press 1 for single player mode, 2 for two player mode."
			canvasContext.fillStyle = "white";
			canvasContext.textAlign="center";
			canvasContext.font = "14px Arial";
			canvasContext.fillText((subText), canvas.width/2, 270);
			canvasContext.font = "14px Arial";
			canvasContext.fillText((subSubText), canvas.width/2, 300);
			canvasContext.font = "20px Arial";
			canvasContext.fillText((titleText), canvas.width/2, 250);
	} else if(showingWinScreen){
			canvasContext.fillStyle = "white";
			if(player1Score >= WINING_SCORE){
				winnerText = "player 1 wins!";
			} else {
				winnerText = "player 2 wins!";
			}
			canvasContext.textAlign="center";
			canvasContext.fillText((winnerText + " space to reset"), canvas.width/2, 250);
	} else {
		  //draw net
		  drawNet();
			// this is left player paddle
			colorRect(PADDLE_DIST_FROM_WALL,paddle1Y,PADDLE_WIDTH,PADDLE_HEIGHT,'white');
		  // this is right player paddle
		  colorRect((canvas.width-(PADDLE_WIDTH+PADDLE_DIST_FROM_WALL)),paddle2Y,PADDLE_WIDTH,PADDLE_HEIGHT,'white');
			// ball trail, above ball bc of overlapping
			for(var i = 0; i < BALL_TRAIL_LENGTH; i++){
				colorCircle(ballX - (ballSpeedX*i), ballY - (ballSpeedY*i), 10 - i, 'white');
			}
			// next line draws the ball
			colorCircle(ballX, ballY, 10, 'white');


		  canvasContext.fillText(player1Score, 100, 100);
		  canvasContext.fillText(player2Score, canvas.width-100, 100);
	}
}
