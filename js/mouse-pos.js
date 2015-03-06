window.onload = function(){
	var canvas = document.getElementById('canvasId'),
		mouse = utils.captureMouse(canvas);

	canvas.addEventListener('mousedown', function(){
		console.log(mouse);
	}, false);

};