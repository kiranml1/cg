window.onload = function(){
	
	var canvas = document.getElementById('canvasId'),
		context = canvas.getContext('2d'),
		video = document.getElementById('movieClip');

	(function drawFrame(){

		window.requestAnimationFrame(drawFrame, canvas);

		context.drawImage(video, 0, 0, canvas.width, canvas.height);

	}());

};