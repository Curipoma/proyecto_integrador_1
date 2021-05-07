/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
//ESCOJER PLATO
function platoEscogido(platoEscogidoContenido, precioPlatoEscogido) {

  let datosPlato = [platoEscogidoContenido, precioPlatoEscogido];
    localStorage.setItem("datosPlato", JSON.stringify(datosPlato));
}

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
//GUARDAR LE RESTAURANTE QUE ELIGIO
function nombreRestaurante(primerRestaurante) {
    localStorage.setItem("restauranteEleguido", primerRestaurante);
  }
  window.onload = function mensajeReservado() {
    
  }
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