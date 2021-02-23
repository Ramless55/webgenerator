function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

switch (getParameterByName('alerta')){
	case "EUOLCNCCUCR":
		alert("El usuario o la contraseña no coinciden con una cuenta registrada.");
		break;
	case "RE":
		alert("Registro exitoso.");
		break;
	case "EYEELBDD":
		alert("El email ya esta en uso.");
		break;
	case "LCNC":
		alert("Las contraseñas no coinciden.");
		break;
	case "DLTLC":
		alert("Debe llenar todos los campos.");
		break;
	default:
		break;
}