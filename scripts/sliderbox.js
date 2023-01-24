// CONFIGURATION:
var firstPage 	= 1;
var lastPage 	= 28;
var currentPage = 1;
var boxWidth 	= 1024;

function setup(){
	var leftPager = document.getElementById("arrowleft").style.visibility = "hidden";
	getURLshortcut();
};	

function moveInnerBox(page){
	// Update the text box margin:
	var box= document.getElementById("innerBox");
	currentPage = page;
	
	// Get start and end points:
	var beginFrom 	= parseInt(Number(box.style.marginLeft.slice(0,-2)));
	var endTo		= (boxWidth*(currentPage-1))*-1;
	var newPos		= beginFrom;
	var steps		= 20;
	
//	console.log("beginFrom: "+beginFrom);
//	console.log("endTo: "+endTo);

	// Detect move direction:
	beginFrom>endTo ? direction = -1 : direction = 1;
	
	// Get distance and interval:
	var distance 	= Math.abs(beginFrom - endTo); 
	var interval	= (distance/steps)*direction;
//	console.log("interval: "+interval);
	
	function frame(){
		// Update position:
		newPos = newPos + interval; 
		box.style.marginLeft = newPos.toString() + "px";
		
		// Check finish condition:
		switch(direction){
			case -1:
				if(newPos<=endTo){
					box.style.marginLeft = endTo + "px";
					clearInterval(motion);
				};
				break;
			case 1:
				if(newPos>=endTo){
					box.style.marginLeft = endTo + "px";
					clearInterval(motion);
				};
				break;
		}
	}
	
	// Draw every 5ms
	var motion = setInterval(frame, 5);
	
	// Update the pager:
	if(page==firstPage){
		var leftPager = document.getElementById("arrowleft").style.visibility = "hidden";
		var rightPager = document.getElementById("arrowright").style.visibility = "visible";
	}else if(page==lastPage) {
		var leftPager = document.getElementById("arrowleft").style.visibility = "visible";
		var rightPager = document.getElementById("arrowright").style.visibility = "hidden";
	}else {
		var leftPager = document.getElementById("arrowleft").style.visibility = "visible";
		var rightPager = document.getElementById("arrowright").style.visibility = "visible";
	};
	
	return true;
};

function previousPage(){
	if(currentPage-1>=firstPage){
		moveInnerBox(currentPage-1);
		updateURL(currentPage);
		return true;
	} else {
		return false;
	};
};

function nextPage(){
	if(currentPage+1<=lastPage){
		moveInnerBox(currentPage+1);
		updateURL(currentPage);
		return true;
	} else {
		return false;
	};
};

document.onkeydown = function(evt) {
    evt = evt || window.event;
    
    switch (evt.keyCode) {
        case 37: // left arrow key
            previousPage();
            break;
        case 39: // right arrow key
            nextPage();
            break;
        case 33: // page up key
            previousPage();
            break;
        case 34: // page down key
            nextPage();
            break;
    }
};