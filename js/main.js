// JavaScript Document


function floor(diameter) {
	var radius = diameter/2;
	var floorArea = Math.PI * (radius * radius);
	return floorArea;
}

function walls(diameter, height) {
	var radius = diameter/2;
	var circumfrance = 2 * Math.PI + radius;
	var wallArea = circumfrance * height;
	return wallArea;
}

function materialsNeeded() {

	var d = document.getElementById("across").value;
	var h = document.getElementById("height").value;

	var carpetNeeded = Math.ceil(floor(d));
	var paintNeeded = Math.ceil(walls(d, h));

	console.log('Carpet needed is '+carpetNeeded+' sqft');
	console.log(paintNeeded);

} // end of funciton


