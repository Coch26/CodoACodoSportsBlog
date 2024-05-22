const nom = document.querySelector("#nombre1");
const apell = document.querySelector("#apellido");
const mail = document.querySelector("#correo");
const cons = document.querySelector("#comentarios");

function validaFormulario(){
    if (nom.value.length < 3){
        alert("Por favor, ingresa un nombre valido")
        return false
    }
    if (apell.value.length < 2){
        alert("Por favor, ingresa un apellido valido")
        return false
    }
    if (nom.value.length < 3){
        alert("Por favor, ingresa un correo valido")
        return false
    }
    if (cons.value.length < 3){
        alert("Por favor, ingresa una consulta valida")
        return false
    }
}

/* Alternar entre mostrar y ocultar los enlaces del menú de navegación cuando se hace clic en el menú de hamburguesa/ */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }