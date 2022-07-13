$(document).ready(function () 
{
	//Codigo javascript o jquery
	    $('#myTab a').click(function (e) {
		  e.preventDefault();
		  $(this).tab('show');
		})
		
		 $('[data-toggle="tooltip"]').tooltip(); 
	
});

//Validación del ingreso de unicamente números
function soloNumeros(evt)
{
	evt = (evt) ? evt : event;
	var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
	var respuesta = true;
	if (charCode > 31 && (charCode < 48 || charCode > 57))
	{
		respuesta = false;
	}
	return respuesta;
}

//Validación del ingreso de unicamente letras
function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = [8, 37, 39, 46];

    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if(letras.indexOf(tecla) == -1 && !tecla_especial)
        return false;
}

//Validación del ingreso de mail correcto
function emailCheck(id) {
	txt=$('#'+id).val();
	if (txt.indexOf("@")<3){
		alert("La cuenta de correo parece incorrecta. Por favor, "
		+" comprueba el prefijo y el signo '@'.");
		//$('#email').val("");
		return false;
	}
	if ((txt.indexOf(".com")<5)&&(txt.indexOf(".org")<5)
	&&(txt.indexOf(".gov")<5)&&(txt.indexOf(".net")<5)
	&&(txt.indexOf(".mil")<5)&&(txt.indexOf(".edu")<5)
	&&(txt.indexOf(".la")<5)&&(txt.indexOf(".es")<5)&&(txt.indexOf(".ec")<5)){
		alert("Lo siento. Pero esa cuenta de correo parece incorrecta");
		//$('#email').val("");
	return false;
	}
}

//Validación del número fijo
function numFijo(id) {
	var valNum =$('#'+id).val();
	var numDig=valNum.length;
	if(numDig<7){
		alert('N\xfamero debe ten minimo 7 digitos');
	}
}

//Validación del número celular
function numCelular(id) {
	var valNum =$('#'+id).val();
	var numDig=valNum.length;
	if(numDig<10){
		alert('N\xfamero debe tener minimo 10 digitos');
	}
}

//Validación digitos correctos de la ci
function iscedula(){
    var cedula = document.getElementById('txtCedula').value; //CAPTURA LA CEDULA EN LA VARIABLE
    digitos = cedula.split(""); //DIVIDO LA CEDULA EN DIGITOS
    totdigitos = digitos.length; //NUMERO DE DIGITOS QUE HA INGRESADO
    if (totdigitos == 10){ //QUE SEAN 10 NUMEROS
        total = 0;
        digito = (digitos[9]*1);
        for( i=0; i < (totdigitos-1); i++ ){
        mult = 0;
        if ( ( i%2 ) != 0 ) {
            total = total + ( digitos[i] * 1 );
        }else{
            mult = digitos[i] * 2;
            if ( mult > 9 )
            total = total + ( mult - 9 );
            else
            total = total + mult;
            }
    }
        decena = total / 10;
        decena = Math.floor( decena );
        decena = ( decena + 1 ) * 10;
        final = ( decena - total );
    if ((final == 10 || digito == 0) || (final == digito)){
    }else{
        alert("C\xe9dula no valida...");
        }
    }
    else
    {
    alert("C\xe9dula incompleta");
    }
} 

 function isruc(){
  var number = document.getElementById('ruc').value;
  var dto = number.length;
  var valor;
  var acu=0;
  if(number==""){
   alert('No has ingresado ning\xfan dato, porfavor ingresar los datos correspondientes.');
   }
  else{
   for (var i=0; i<dto; i++){
   valor = number.substring(i,i+1);
   if(valor==0||valor==1||valor==2||valor==3||valor==4||valor==5||valor==6||valor==7||valor==8||valor==9){
    acu = acu+1;
   }
   }
   if(acu==dto){
    while(number.substring(10,13)!=001){
     alert('Los tres \xfaltimos dígitos no tienen el c\xf3digo del RUC 001.');
     return;
    }
    while(number.substring(0,2)>24){    
     alert('Los dos primeros d\xedgitos no pueden ser mayores a 24.');
     return;
    }
    alert('El RUC está escrito correctamente');
    alert('Se procederá a analizar el respectivo RUC.');
    var porcion1 = number.substring(2,3);
    if(porcion1<6){
     alert('El tercer d\xedgito es menor a 6, por lo \ntanto el usuario es una persona natural.\n');
    }
    else{
     if(porcion1==6){
      alert('El tercer d\xedgito es igual a 6, por lo \ntanto el usuario es una entidad p\xfablica.\n');
     }
     else{
      if(porcion1==9){
       alert('El tercer d\xedgito es igual a 9, por lo \ntanto el usuario es una sociedad privada.\n');
      }
     }
    }
   }
   else{
   alert("ERROR: Por favor no ingrese texto");
   }
  }
 }