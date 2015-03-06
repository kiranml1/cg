window.onload = function(){
	
	var canvas = document.getElementById('canvasId'),
		context = canvas.getContext('2d'),
		mouse = utils.captureMouse(canvas),
		angle = 0,
		centerY = canvas.height/2,
		range = 50,
		xspeed = 1,
		yspeed = 0.05,
		xpos = 0,
		ypos = centerY;

	(function drawFrame(){
		window.requestAnimationFrame(drawFrame, canvas);
		context.beginPath();
		context.moveTo(xpos,ypos);
		xpos += xspeed;
		angle += yspeed;
		ypos = centerY + Math.sin(angle) * range;
		context.lineTo(xpos, ypos);
		context.stroke();

	}());

};