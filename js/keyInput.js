const KEY_P1_UP = 87;
const KEY_P1_DOWN = 83;
const KEY_P2_UP = 38;
const KEY_P2_DOWN = 40;

const ONE_PLAYER = 49;
const TWO_PLAYER = 50;

const RESET_KEY = 32;

var player1KeyHeldUp;
var player1KeyHeldDown;

var player2KeyHeldUp;
var player2KeyHeldDown;

function setupKeyInput() {
	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);
}

function keySet(keyEvent, setTo) {
	//RESET GAME AFTER ROUND
	if(showingWinScreen && keyEvent.keyCode == RESET_KEY){
		player1Score = 0;
		player2Score = 0;
		showingTitleScreen = true;
		showingWinScreen= false;
	}

	//ONE OR TWO PLAYER MODE + START GAME
	if(keyEvent.keyCode == ONE_PLAYER && showingTitleScreen) {
		isTwoPlayer = false;
		showingTitleScreen = false;
	}
	if(keyEvent.keyCode == TWO_PLAYER && showingTitleScreen) {
		isTwoPlayer = true;
		showingTitleScreen = false;
	}

  //PLAYER 1
	if(keyEvent.keyCode == KEY_P1_UP) {
    player1KeyHeldUp = setTo;
	}
	if(keyEvent.keyCode == KEY_P1_DOWN) {
		player1KeyHeldDown = setTo;
	}

  //PLAYER 2
  if(keyEvent.keyCode == KEY_P2_UP) {
    player2KeyHeldUp = setTo;
  }
  if(keyEvent.keyCode == KEY_P2_DOWN) {
    player2KeyHeldDown = setTo;
  }
}

function keyPressed(evt) {
	//console.log("Key pressed: "+evt.keyCode);
	keySet(evt, true);
	evt.preventDefault();
}

function keyReleased(evt) {
	// console.log("Key pressed: "+evt.keyCode);
	keySet(evt, false);
}
