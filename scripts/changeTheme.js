function changeTheme(option){
	switch(option){
		case "light":
			// Setup:
			var BgColor 	= "#F6F6F6";
			var BarsColor	= "#F6F6F6"; 
			var TxtColor 	= "#000000";		
			break;
	
		case "dark":
			var BgColor 	= "#898B8D";
			var BarsColor	= "#58595B"; 
			var TxtColor 	= "#FFFFFF";
			break;
			
		default:
			var BgColor 	= "#F6F6F6";
			var BarsColor	= "#F6F6F6"; 
			var TxtColor	 	= "#000000";
			
			return false;
			break;
	};
	
	// Get body and change bg-color
	document.body.style.backgroundColor = BarsColor;
	
	// Get container and change bg-color
	var ctContainer = document.getElementById('container');
	ctContainer.style.backgroundColor = BgColor;

	// Get footer and change bg-color and text color
	var ctFooter = document.getElementById('footerPanel');
	ctFooter.style.backgroundColor = BarsColor;
	ctFooter.style.color = TxtColor;
	
	//ctFooter.childNodes[1].childNodes[3].childNodes[1].style.color = TxtColor;
	var val2 = document.getElementById('copyright'); //ctFooter.childNodes[1].ctFooter.childNodes[1]nodeValue;
  	//alert(val2);
	
	// Get contentText and change color

	return true;
};