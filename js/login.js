//ELIMINA TODOS LOS DATOS DEL USUARIO Y CIERRA SESSION 
function eliminarDatos() {
  localStorage.removeItem("datosPlato");
  localStorage.removeItem("restauranteEleguido");
  localStorage.removeItem("personaLogeada");
  localStorage.removeItem("datosPlato3");
  localStorage.removeItem("Reserva1");
  localStorage.removeItem("Reserva2");
  localStorage.removeItem("Reserva3");
  localStorage.removeItem("Reserva4");
}
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*FUNCION QUE ME COMPRUBA SI HAY DATOS PARA INICIAR SESION*/
function datosLogin(nombre, password) {

  let usuario_logeado = JSON.parse(localStorage.getItem("personaLogeada"));

  if (usuario_logeado != null) {

    let personaRegistrada = JSON.parse(localStorage.getItem("personaLogeada"));
    nombreRegistrado = personaRegistrada.nombre;
    passwordRegistrado = personaRegistrada.password;

    if (nombre != "" && password != "") {

      if (nombre === nombreRegistrado && password === passwordRegistrado) {
        alert('Hola ' + nombre + " bienvenido");
        window.open('../html/reservarLugares.html');
      } else {
        alert('No eres mi usuario');
      }

    } else {
      alert("Llena los campos !");
    }

  } else {
    alert("No te has registrado !");
  }

}

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*VERIFIACION PARA HACER LA ANIMACION DE LOS LABELS EN EL REGISTRO*/
var inputs = document.getElementsByClassName("formulario__input");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", function () {
    if (this.value.length >= 1) {
      this.nextElementSibling.classList.add("fijar");
    } else {
      this.nextElementSibling.classList.remove("fijar");
    }
  });
}

