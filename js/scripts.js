// Definimos variable Global
var variableGlobal = 10;

// Creamos una función
miFuncion = function(par, pare){
	
	var variableLocal = 20;
	var suma = variableGlobal + variableLocal + par;
	var resultado = pare + suma;

    document.write(resultado + "<br />");

    console.log("variableGlobal" + " + " + "variableLocal");
};

miFuncion(10, "La suma de las variables es igual a: ");
miFuncion(100, "Las variables suman: ");
miFuncion(150, "La suma es igual a: ");