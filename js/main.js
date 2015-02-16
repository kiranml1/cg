$(function(){

	try {
	  console.log(d3, "D3 is Intialiased");
	}
	catch(err)
        {
       throw "D3 is not initialised";
	}

	/*
		Container
	 */

	var container = {
	    width:400,
	    height:400
	};

	/*
	 	Canvas for the Plane & Projection
	 */

	var canvas = d3.select('body').append('svg').attr({
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

	 // Give Two Points

	 function Point(x,y){
	 	this.x = x;
	 	this.y = y;
	 }

	 var ptOne = new Point(10,10),
	 	 ptTwo = new Point(200,200);

	 var _dx = ptTwo.x - ptOne.x,
	 	 _dy = ptTwo.y - ptOne.y,
	 	 x,y;

	  for(x = ptOne.x; x <= ptTwo.x; x++){
	  	y = ptOne.y + _dy * ( (x - ptOne.x) / _dy);
	  	plot(x,y);
	  }

	  /*
		Point for the Line Drawing Alogorithm	
	  */

	  function plot(x,y){
	  	canvas.append('circle').attr({"cx":x+2,"cy":y+2,"r":2});
	  }

	  /*
	  	DDA - Digital Digital Analyzer
	   */
	  
	   // Todo - Need to be done


});
