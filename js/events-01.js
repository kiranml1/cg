window.onload = function(){
	var canvas = document.getElementById('canvasId');

	/*
		Event Lisnterners for canvas
	 */
	
	function onMouseEvent(event){
		console.log(event.type);
	}

	canvas.addEventListener('mouseup', onMouseEvent, false);
	canvas.addEventListener('mousedown', onMouseEvent, false);
	canvas.addEventListener('mouseover', onMouseEvent, false);
	canvas.addEventListener('click', onMouseEvent, false);
	canvas.addEventListener('dblclick', onMouseEvent, false);
	canvas.addEventListener('mousewheel', onMouseEvent, false);
	canvas.addEventListener('mouseover', onMouseEvent, false);
	canvas.addEventListener('mouseout', onMouseEvent, false);

};