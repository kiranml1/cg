window.onload = function(){
	var canvas = document.getElementById('canvasId'),
		mouse = utils.captureMouse(canvas),
		touch = utils.captureTouch(canvas);

	canvas.addEventListener('mousedown', function(){
		console.log(mouse);
	}, false);

	canvas.addEventListener('touchmove', function(){
		if(touch.isPressed){
			console.log(touch);
		}
	}, false);

	window.addEventListener('keydown', function(event){
		switch (event.keyCode) {
			case utils.keyCode.UP:
				console.log('UP');
				break;
			case utils.keyCode.DOWN:
				console.log('DOWN');
				break;
			case utils.keyCode.RIGHT:
				console.log('RIGHT');
				break;
			case utils.keyCode.LEFT:
				console.log('LEFT');
				break;
			default:
				console.log('Press Valid Key');
				break;
		}
	});

};