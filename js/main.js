function contenido(){
  var texto = document.getElementById("textoPantalla").value;
    document.getElementById("textito").innerHTML = texto;
}

function textoGrande(){
  document.getElementById('textito').style.fontSize="50px";
}

function textoMediano(){
  document.getElementById('textito').style.fontSize="30px";
}

function textoChico(){
  document.getElementById('textito').style.fontSize="15px";
}

function textoColor(){
  document.getElementById('textito').style.color="blue";
}

function fondoColor(){
  document.getElementById('textito').style.background="red";
}

function alinearIzq(){
  document.getElementById('textito').style.textAlign="left";
}

function alinearCentrar(){
  document.getElementById('textito').style.textAlign="center";
}

function alinearDer(){
  document.getElementById('textito').style.textAlign="right";
}

function enviar() {
  UI = document.getElementById('textito').innerHTML;
  document.getElementById("articulos").innerHTML = UI;
}
