$(function(){

	try {
	  console.log(d3, "D3 is Intialiased");
	}
	catch(err) {
       throw "D3 is not initialised";
	}

	/*
		Container
	 */

	var container = {
	    width:800,
	    height:300
	};

	/*
	 	Canvas for the Plane & Projection
	 */

	var canvas = d3.select('#line-naive-algo').attr({
	   "width":container.width,
	   "height":container.height
	});

	/*
		Drawing a line from ht d3 API
	 */
	
	canvas.append('line')
		.attr({
			"x1":300,
			"y1":300,
			"x2":500,
			"y2":500,
			"stroke-width":5
		});

	/**
	 * Naive Line Drawing Algorithm 
	 */

	 /**
	  * {param} x-point, y-point
	  * Constructor for the point
	  */

	 function Point(x,y){
	 	this.x = x;
	 	this.y = y;
	 }

	 var ptOne = new Point(10,10),
	 	 ptTwo = new Point(200,200);

	 var _dx = ptTwo.x - ptOne.x,
	 	 _dy = ptTwo.y - ptOne.y,
	 	 x,y,
	 	 _tempArray = [],
	 	 _pathCoords;

	  for(x = ptOne.x; x <= ptTwo.x; x++){
	  	y = ptOne.y + _dy * ( (x - ptOne.x) / _dy);
	  	_pathCoords = x+" "+y;
	  	_tempArray.push(_pathCoords);
	  }

	  /*
		Point for the Line Drawing Alogorithm	
	  */

	  function render(){
	  	canvas.append('path').attr({"d":"M"+_tempArray.join(" ") +"Z", "stroke":"red", "stroke-width":5});
	  }

	  render();

	  /*
	  	DDA - Digital Digital Analyzer
	   */
	  
	   // Todo - Need to be done

	  /*
	  	Bresenham Algorithm
	   */
	  
	  var bresenhamCanvas = d3.select('#line-bresenhem-algo')
	  							.attr({
	  								"width":800,
	  								"height":800
	  							}); 

	  // Regular way of doing algorithm
	  function bline(x0, y0, x1, y1) {

	  	/*
		  // bresenhamCanvas.append('rect').attr({'x':10,'y':10, 'width':20, 'height':20,'stroke':'red', 'stroke-width':5, 'fill':'red' });
		  var dx = x1-x0, dy = y1-y0 , tdx = 2*dx , tdy = 2*dy, pk = tdy-tdx, po = tdy - dx;
		  console.log(x0, y0, x1, y1);
		  console.log('dx:',dx,'dy:',dy, 'm:',dy/dx , 'tdx:', tdx, 'tdy:',tdy, 'pk:', pk, 'po:',po);
		  setPixel(x0,y0);
	
		  Count it and do things accordingly with decision parameter
	
		*/
	    
	    // Rosetta Code Algorithm - Need to do a video on this with the help of unacademy tutorials
	    var dx = Math.abs(x1-x0), sx = x0 < x1 ? 1 : -1;
	    var dy = Math.abs(y1-y0), sy = y0 < y1 ? 1 : -1;
	    var err = (dx>dy ? dx : -dy)/2;

	    while(true){
	    	setPixel(x0,y0);
	    	if( x0 === x1 && y0 === y1 ) break;
	    	var e2 = err;
	    	if( e2 < dy ){ err +=dx; y0 += sy; }
	        if( e2 > -dx){ err -=dy; x0 += sx; }
	    }	

	  }

	  function setPixel(x,y){
	  	   bresenhamCanvas.append('rect').attr({'x':x*10,'y':y*10, 'width':10, 'height':10,'stroke':'red', 'stroke-width':5, 'fill':'red' });
	  }

	  // 10, 10 - 20, 20

	  bline(1,1,10,5);
});