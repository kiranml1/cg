window.onload = function(){
	var canvas = document.getElementById('canvasId'),
		context = canvas.getContext('2d'),
		mouse = utils.captureMouse(canvas),
		arrow = new Arrow();

	arrow.x = canvas.width / 2;
	arrow.y = canvas.height / 2;

	(function drawFrame(){
		window.requestAnimationFrame(drawFrame, canvas);
		context.clearRect(0, 0, canvas.width, canvas.height);

		var dx = mouse.x - arrow.x,
			dy = mouse.y - arrow.y;

		arrow.rotation = Math.atan2(dy,dx);
		arrow.draw(context);

	}());

};

function Arrow(){
	this.x = 0;
	this.y = 0;
	this.color = "#ffff00";
	this.rotation = 0;	
}

Arrow.prototype.draw = function(context){
	context.save();
	context.translate(this.x,this.y);
	context.rotate(this.rotation);
	context.lineWidth = 2;
	context.fillStyle = this.color;
	context.beginPath();
	context.moveTo(-50, -25);
	context.lineTo(0, -25);
	context.lineTo(0, -50);
	context.lineTo(50, 0);
	context.lineTo(0, 50);
	context.lineTo(0, 25);
	context.lineTo(-50, 25);
	context.lineTo(-50, -25);
	context.closePath();
	context.fill();
	context.stroke();
	context.restore();
}