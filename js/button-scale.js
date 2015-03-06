window.onload = function(){
	var canvas = document.getElementById('canvasId'),
		context = canvas.getContext('2d'),
		mouse = utils.captureMouse(canvas),
		ball = new Ball(),
		angle = 0,
		centerY = 600,
		centerScale = 1;
		range = 0.5,
		speed = 0.05;

	ball.x = canvas.width/2;
	ball.y = canvas.height/2;

	(function drawFrame(){
		window.requestAnimationFrame(drawFrame, canvas);
		context.clearRect(0, 0, canvas.width, canvas.height);

		ball.scaleX = ball.scaleY = centerScale + Math.sin(angle) * range;
		angle += speed;

		ball.draw(context);

	}());

};

function Ball(radius, color){
	if(radius === undefined) { radius = 40; }
	if(color === undefined) { color = "#ff0000"; }
	this.x = 0;
	this.y = 0;
	this.radius = radius;
	this.rotation = 0;
	this.scaleX = 1;
	this.scaleY = 1;
	this.color = utils.parseColor(color);
	this.lineWidth = 1;
}

Ball.prototype.draw = function(context){
	context.save();
	context.translate(this.x,this.y);
	context.rotate(this.rotation);
	context.scale(this.scaleX, this.scaleY);
	context.lineWidth = this.lineWidth;
	context.fillStyle = this.color;
	context.beginPath();
	context.arc(0,0,this.radius, 0, (Math.PI * 2), true);
	context.closePath();
	context.fill();
	if(this.lineWidth > 0){
		context.stroke();
	}
	context.restore();
};