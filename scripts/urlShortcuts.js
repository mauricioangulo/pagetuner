function getURLshortcut(){
	// Get URL anchor name:
	var path 		= window.location.href;
	var seccionName = path.substr(path.indexOf("#"));
	
	// Go to the selected page:
	switch(seccionName){
		case "":
			moveInnerBox(1);
			break;
	
		case "portada":
			moveInnerBox(1);
			break;
			
		case "#portada":
			moveInnerBox(1);
			break;
		
		case "#presentacion":
			moveInnerBox(2);
			break;
		
		case "#Windows8Enterprise":
			moveInnerBox(3);
			break;
			
		case "#Windows8Enterprise-2":
			moveInnerBox(4);
			break;
			
		case "#EnBuenasManos":
			moveInnerBox(5);
			break;

		case "#OficinaMovil":
			moveInnerBox(6);
			break;
			
		case "#WindowsSystemCenter":
			moveInnerBox(7);
			break;
		
		case "#Organicemonos":
			moveInnerBox(8);
			break;
			
		case "#QueEsOffice365":
			moveInnerBox(9);
			break;
			
		case "#QueEsOffice365-2":
			moveInnerBox(10);
			break;

		case "#Yammer":
			moveInnerBox(11);
			break;
			
		case "#Yammer-2":
			moveInnerBox(12);
			break;
		
		case "#VentanaAbierta":
			moveInnerBox(13);
			break;
			
		case "#Eficiencia":
			moveInnerBox(14);
			break;
			
		case "#SinMuros":
			moveInnerBox(15);
			break;

		case "#Window8EnMovimiento":
			moveInnerBox(16);
			break;
			
		case "#Window8EnMovimiento-2":
			moveInnerBox(17);
			break;
		
		case "#AplicacionesEnNube":
			moveInnerBox(18);
			break;
			
		case "#AplicacionesEnNube-2":
			moveInnerBox(19);
			break;
			
		case "#aCienciaCierta":
			moveInnerBox(20);
			break;

		case "#evolucionDeOffice":
			moveInnerBox(21);
			break;

		case "#evolucionDeOffice-2":
			moveInnerBox(22);
			break;
		
		case "#DescubraLaWeb":
			moveInnerBox(23);
			break;
			
		case "#Mosaico":
			moveInnerBox(24);
			break;
			
		case "#Sharepoint":
			moveInnerBox(25);
			break;

		case "#Windows8enCualquierPC":
			moveInnerBox(26);
			break;

		case "#Windows8enCualquierPC-2":
			moveInnerBox(26);
			break;

		case "#CasosDeExito-IPN":
			moveInnerBox(26);
			break;
			
		default:
			break;
	}

	return true;
};

function updateURL(page){
	switch(page){
		case 1:
			window.history.pushState(null, "Opci�n 1", "#portada");
			break;
		case 2:
			window.history.pushState(null, "Opci�n 2", "#presentacion");
			break;
		case 3:
			window.history.pushState(null, "Opci�n 3", "#Windows8Enterprise");
			break;
		case 4:
			window.history.pushState(null, "Opci�n 4", "#Windows8Enterprise-2");
			break;
		case 5:
			window.history.pushState(null, "Opci�n 5", "#EnBuenasManos");
			break;
		case 6:
			window.history.pushState(null, "Opci�n 6", "#OficinaMovil");
			break;
		case 7:
			window.history.pushState(null, "Opci�n 7", "#WindowsSystemCenter");
			break;
		case 8:
			window.history.pushState(null, "Opci�n 8", "#Organicemonos");
			break;
		case 9:
			window.history.pushState(null, "Opci�n 9", "#QueEsOffice365");
			break;
		case 10:
			window.history.pushState(null, "Opci�n 10", "#QueEsOffice365-2");
			break;
		case 11:
			window.history.pushState(null, "Opci�n 11", "#Yammer");
			break;
		case 12:
			window.history.pushState(null, "Opci�n 12", "#Yammer-2");
			break;
		case 13:
			window.history.pushState(null, "Opci�n 13", "#VentanaAbierta");
			break;
		case 14:
			window.history.pushState(null, "Opci�n 14", "#Eficiencia");
			break;
		case 15:
			window.history.pushState(null, "Opci�n 15", "#SinMuros");
			break;
		case 16:
			window.history.pushState(null, "Opci�n 16", "#Window8EnMovimiento");
			break;
		case 17:
			window.history.pushState(null, "Opci�n 17", "#Window8EnMovimiento-2");
			break;
		case 18:
			window.history.pushState(null, "Opci�n 18", "#AplicacionesEnNube");
			break;
		case 19:
			window.history.pushState(null, "Opci�n 19", "#AplicacionesEnNube-2");
			break;
		case 20:
			window.history.pushState(null, "Opci�n 20", "#aCienciaCierta");
			break;
		case 21:
			window.history.pushState(null, "Opci�n 21", "#evolucionDeOffice");
			break;
		case 22:
			window.history.pushState(null, "Opci�n 22", "#evolucionDeOffice-2");
			break;
		case 23:
			window.history.pushState(null, "Opci�n 23", "#DescubraLaWeb");
			break;
		case 24:
			window.history.pushState(null, "Opci�n 24", "#Mosaico");
			break;
		case 25:
			window.history.pushState(null, "Opci�n 25", "#Sharepoint");
			break;
		case 26:
			window.history.pushState(null, "Opci�n 26", "#Windows8enCualquierPC");
			break;
		case 27:
			window.history.pushState(null, "Opci�n 27", "#Windows8enCualquierPC-2");
			break;
		case 28:
			window.history.pushState(null, "Opci�n 28", "#CasosDeExito-IPN");
			break;

		default:
			break;
	}
	
	return true;
};
