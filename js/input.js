function setUpMouseInput(){
	function calculateMousePos(evt) {
		var rect = canvas.getBoundingClientRect();
		var root = document.documentElement;
		var mouseX = evt.clientX - rect.left - root.scrollLeft;
		var mouseY = evt.clientY - rect.top - root.scrollTop;
		return {
			x:mouseX,
			y:mouseY
		};
	}

	function handleMouseClick(evt){
		if(showingTitleScreen){
			showingTitleScreen = false;
		}

	  if(showingWinScreen){
	    player1Score = 0;
	    player2Score = 0;
	    showingWinScreen= false;
	  }
	}

	canvas.addEventListener('mousedown', handleMouseClick);

	canvas.addEventListener('mousemove',
	  function(evt) {
	    var mousePos = calculateMousePos(evt);
			//this code binds paddle 1 to mouse movement
			if(showingTitleScreen == false){
				paddle1Y = mousePos.y - PADDLE_HEIGHT/2;
			}
	});
}
