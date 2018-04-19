function abrir(){
	var x = document.getElementById("iframe");
	x.setAttribute('src','index2.html');
}

function validaUsuario(){

	var usuario = document.getElementById("usu").value;
	var contraseña = document.getElementById("cont").value;

	if (usuario == "admin" && contraseña == "root") {
		alert("Correcto");
		window.open("registro.html")
	}else{
		alert("Usuario o Contraseñas incorrectas");
	}

}

var i = 0;
var suma = 0;
var igv = 0;
var total = 0;
function agregarProducto(){
	i++;
	var producto = document.getElementById("nomProducto").value;
	var precio = document.getElementById("precio").value;
	var cantidad = document.getElementById("cantidad").value;

	if (producto === "" || precio === "" || cantidad === "") {
		alert("Complete los espacios en blanco");
	}else{

		//if (producto == data.rowIndex[i]) {}
		var subtotal = (parseFloat(precio)*parseFloat(cantidad));
		suma = (suma + subtotal);
		igv = parseFloat(suma*0.18);
		total = parseInt(suma+igv);
		var tb = document.getElementById("data");
		var filaP = "<tr><td>" + i + "</td><td>" + producto + "</td><td>" + precio + "</td><td>" + cantidad + "</td><td>" + subtotal + "</td><td><a href='#' onclick='eliminar(this)'>Eliminar</tr>";
  		  
    	var filn = document.createElement("tr");
    	filn.innerHTML = filaP;
    	tb.appendChild(filn);
    	limpiarCajaTexto();
    	document.getElementById("subs").value = suma;
    	document.getElementById("igv").value= igv;
    	document.getElementById("totaldt").value = total;
	}
}
function limpiarCajaTexto() {

    document.getElementById("nomProducto").value = "";
	document.getElementById("precio").value = "";
	document.getElementById("cantidad").value = "";

}

function eliminar(p) {
    var opcion = confirm("Seguro que desea elimnar de producto");
    if (opcion === true) {
        var i = p.parentNode.parentNode.rowIndex;
        document.getElementById("data").deleteRow(i);

    } else {
        alert("Fallo al tratar de eliminar :( ");
    }
}