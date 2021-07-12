function validacion(){
let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let mensaje = document.getElementById("mensaje");

if (nombre.value===""){
    nombre.focus();
    nombre.style.border = "2px solid red";
	nombre.style.boxShadow = "1px 1px 5px red";
	document.getElementById("nombreValidar").innerHTML="Nombre requerido";
    return false;
}
if(mensaje.value==""){
    mensaje.focus();
    mensaje.style.border = "2px solid red";
    mensaje.style.boxShadow = "1px 1px 5px red";
    document.getElementById("msjValidar").innerHTML = "Comentario requerido";
    return false;
}

if(correo.value==""){
    correo.focus();
    correo.style.border = "2px solid red";
    correo.boxShadow="1px 1px 5px red";
    document.getElementById("correoValidar").innerHTML= "Correo requerido";
    return false;
}
nombre.style.border = "2px solid lightblue";
nombre.style.boxShadow = "none";
correo.style.border = " 2px solid lightblue";
correo.style.boxShadow= "none";
mensaje.style.border = " 2px solid lightblue";
mensaje.style.boxShadow= "none";
const ul = document.getElementById("nodoPadre");
const li = document.createElement("li");
li.innerHTML = nombre.value+" "+mensaje.value;
ul.appendChild(li);
return true;
}
function enviar(e){
    e.preventDefault();
    if(!validacion())return;
}
/*function validar(f){
    var ok=true;
    var msj= "Debe escribir algo en los campos\n";
    if(f.elements["nombre"].value==""){
    msj +=" - Campo 1\n";
    ok = false;
    }
    if(f.elements["correo"].value==""){
        msj +=" - Campo 2\n";
        ok = false;
        }
        if(f.elements["mensaje"].value==""){
            msj +=" - Campo 3";
            ok = false;
            }
    if(ok==false){
    alert(msj);
    f.elements["nombre"]=" ";
    f.elements["correo"]=" ";
    f.elements["mensaje"]=" ";
}
    return ok;
    }*/


