// Show login popup:
function showpopup(action){
	var popup = document.getElementById("pagecover");
	if(action == "show")
		popup.style.visibility = "visible";
	else
		popup.style.visibility = "hidden";
		
	return true;
};
