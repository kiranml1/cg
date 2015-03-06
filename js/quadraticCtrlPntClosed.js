window.onload = function(){
	
	var canvas = document.getElementById('canvasId'),
		context = canvas.getContext('2d'),
		mouse = utils.captureMouse(canvas),
		points = [],
		numPoints = 9,
		ctrlPoint = {},
		ctrlPoint1 = {};

	for( var i=0; i < numPoints; i++ ){
		points.push({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height
		});
	}

	ctrlPoint1.x = (points[0].x + points[numPoints-1].x)/2;
	ctrlPoint1.y = (points[0].y + points[numPoints-1].y)/2;

	context.beginPath();
	context.moveTo(ctrlPoint1.x, ctrlPoint1.y);

	for( var i = 1; i < numPoints - 1; i++){
		ctrlPoint.x = (points[i].x + points[i+1].x)/2;
		ctrlPoint.y = (points[i].y + points[i+1].y)/2;
		context.quadraticCurveTo(points[i].x, points[i].y, ctrlPoint.x, ctrlPoint.y);
	}

	context.quadraticCurveTo(points[i].x, points[i].y, ctrlPoint1.x, ctrlPoint1.y);

	context.stroke();

};