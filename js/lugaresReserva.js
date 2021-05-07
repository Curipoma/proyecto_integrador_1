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

window.onload = function fechaCadaRestaurante() {

  /*MUESTRA LA RESERVA 1 EN EL RESTAURANTE*/
  let reserva_1 = JSON.parse(localStorage.getItem("Reserva1"));
  if (reserva_1 != null) {
    let fecha_1Local = reserva_1[0].fechaElegido;
    let mes_1Local = reserva_1[0].mesElegido;
    let year_1Local = reserva_1[0].yearElegido;
    let hora_1Elegido = reserva_1[0].horaElegido;

    let restaurante_Elegido1 = reserva_1[1];

    if (restaurante_Elegido1 === "L'Arcadia Pasta Gourmet") {  //ocupado6        AlertaOcupado1
      document.getElementById("AlertaOcupado1").value = "Reservado para: ";
      document.getElementById("ocupado1").value = fecha_1Local + " de " + mes_1Local + " de " + year_1Local + " a las " + hora_1Elegido;
    } else {
      if (restaurante_Elegido1 === "Café San Blas") {
        document.getElementById("AlertaOcupado2").value = "Reservado para: ";
        document.getElementById("ocupado2").value = fecha_1Local + " de " + mes_1Local + " de " + year_1Local + " a las " + hora_1Elegido;
      } else {
        if (restaurante_Elegido1 === "Corvinas !Don Jimmy!") {
          document.getElementById("AlertaOcupado3").value = "Reservado para: ";
          document.getElementById("ocupado3").value = fecha_1Local + " de " + mes_1Local + " de " + year_1Local + " a las " + hora_1Elegido;
        } else {
          if (restaurante_Elegido1 === "Restaurante Casa Gangotena") {
            document.getElementById("AlertaOcupado4").value = "Reservado para: ";
            document.getElementById("ocupado4").value = fecha_1Local + " de " + mes_1Local + " de " + year_1Local + " a las " + hora_1Elegido;
          } else {
            if (restaurante_Elegido1 === "Bocatto Da Fiorentino") {
              document.getElementById("AlertaOcupado5").value = "Reservado para: ";
              document.getElementById("ocupado5").value = fecha_1Local + " de " + mes_1Local + " de " + year_1Local + " a las " + hora_1Elegido;
            } else {
              if (restaurante_Elegido1 === "SOMOS Restaurante Ecuador") {
                document.getElementById("AlertaOcupado6").value = "Reservado para: ";
                document.getElementById("ocupado6").value = fecha_1Local + " de " + mes_1Local + " de " + year_1Local + " a las " + hora_1Elegido;
              }
            }
          }
        }
      }
    }
  }



  /*MUESTRA LA RESERVA 2 EN EL RESTAURANTE*/
  let reserva_2 = JSON.parse(localStorage.getItem("Reserva2"));
  if (reserva_2 != null) {
    let fecha_2Local = reserva_2[0].fechaElegido;
    let mes_2Local = reserva_2[0].mesElegido;
    let year_2Local = reserva_2[0].yearElegido;
    let hora_2Elegido = reserva_2[0].horaElegido;

    let restaurante_Elegido2 = reserva_2[1];

    if (restaurante_Elegido2 === "L'Arcadia Pasta Gourmet") {  //ocupado6        AlertaOcupado2
      document.getElementById("AlertaOcupado1").value = "Reservado para: ";
      document.getElementById("ocupado1").value = fecha_2Local + " de " + mes_2Local + " de " + year_2Local + " a las " + hora_2Elegido;
    } else {
      if (restaurante_Elegido2 === "Café San Blas") {
        document.getElementById("AlertaOcupado2").value = "Reservado para: ";
        document.getElementById("ocupado2").value = fecha_2Local + " de " + mes_2Local + " de " + year_2Local + " a las " + hora_2Elegido;
      } else {
        if (restaurante_Elegido2 === "Corvinas !Don Jimmy!") {
          document.getElementById("AlertaOcupado3").value = "Reservado para: ";
          document.getElementById("ocupado3").value = fecha_2Local + " de " + mes_2Local + " de " + year_2Local + " a las " + hora_2Elegido;
        } else {
          if (restaurante_Elegido2 === "Restaurante Casa Gangotena") {
            document.getElementById("AlertaOcupado4").value = "Reservado para: ";
            document.getElementById("ocupado4").value = fecha_2Local + " de " + mes_2Local + " de " + year_2Local + " a las " + hora_2Elegido;
          } else {
            if (restaurante_Elegido2 === "Bocatto Da Fiorentino") {
              document.getElementById("AlertaOcupado5").value = "Reservado para: ";
              document.getElementById("ocupado5").value = fecha_2Local + " de " + mes_2Local + " de " + year_2Local + " a las " + hora_2Elegido;
            } else {
              if (restaurante_Elegido2 === "SOMOS Restaurante Ecuador") {
                document.getElementById("AlertaOcupado6").value = "Reservado para: ";
                document.getElementById("ocupado6").value = fecha_2Local + " de " + mes_2Local + " de " + year_2Local + " a las " + hora_2Elegido;
              }
            }
          }
        }
      }
    }
  }

  /*MUESTRA LA RESERVA 3 EN EL RESTAURANTE*/
  let reserva_3 = JSON.parse(localStorage.getItem("Reserva3"));
  if (reserva_3 != null) {
    let fecha_3Local = reserva_3[0].fechaElegido;
    let mes_3Local = reserva_3[0].mesElegido;
    let year_3Local = reserva_3[0].yearElegido;
    let hora_3Elegido = reserva_3[0].horaElegido;

    let restaurante_Elegido3 = reserva_3[1];

    if (restaurante_Elegido3 === "L'Arcadia Pasta Gourmet") {  //ocupado6        AlertaOcupado3
      document.getElementById("AlertaOcupado1").value = "Reservado para: ";
      document.getElementById("ocupado1").value = fecha_3Local + " de " + mes_3Local + " de " + year_3Local + " a las " + hora_3Elegido;
    } else {
      if (restaurante_Elegido3 === "Café San Blas") {
        document.getElementById("AlertaOcupado2").value = "Reservado para: ";
        document.getElementById("ocupado2").value = fecha_3Local + " de " + mes_3Local + " de " + year_3Local + " a las " + hora_3Elegido;
      } else {
        if (restaurante_Elegido3 === "Corvinas !Don Jimmy!") {
          document.getElementById("AlertaOcupado3").value = "Reservado para: ";
          document.getElementById("ocupado3").value = fecha_3Local + " de " + mes_3Local + " de " + year_3Local + " a las " + hora_3Elegido;
        } else {
          if (restaurante_Elegido3 === "Restaurante Casa Gangotena") {
            document.getElementById("AlertaOcupado4").value = "Reservado para: ";
            document.getElementById("ocupado4").value = fecha_3Local + " de " + mes_3Local + " de " + year_3Local + " a las " + hora_3Elegido;
          } else {
            if (restaurante_Elegido3 === "Bocatto Da Fiorentino") {
              document.getElementById("AlertaOcupado5").value = "Reservado para: ";
              document.getElementById("ocupado5").value = fecha_3Local + " de " + mes_3Local + " de " + year_3Local + " a las " + hora_3Elegido;
            } else {
              if (restaurante_Elegido3 === "SOMOS Restaurante Ecuador") {
                document.getElementById("AlertaOcupado6").value = "Reservado para: ";
                document.getElementById("ocupado6").value = fecha_3Local + " de " + mes_3Local + " de " + year_3Local + " a las " + hora_3Elegido;
              }
            }
          }
        }
      }
    }
  }



  /*MUESTRA LA RESERVA 4 EN EL RESTAURANTE*/
  let reserva_4 = JSON.parse(localStorage.getItem("Reserva4"));
  if (reserva_4 != null) {
    let fecha_4Local = reserva_4[0].fechaElegido;
    let mes_4Local = reserva_4[0].mesElegido;
    let year_4Local = reserva_4[0].yearElegido;
    let hora_4Elegido = reserva_4[0].horaElegido;

    let restaurante_Elegido4 = reserva_4[1];

    if (restaurante_Elegido4 === "L'Arcadia Pasta Gourmet") {  //ocupado6        AlertaOcupado4
      document.getElementById("AlertaOcupado1").value = "Reservado para: ";
      document.getElementById("ocupado1").value = fecha_4Local + " de " + mes_4Local + " de " + year_4Local + " a las " + hora_4Elegido;
    } else {
      if (restaurante_Elegido4 === "Café San Blas") {
        document.getElementById("AlertaOcupado2").value = "Reservado para: ";
        document.getElementById("ocupado2").value = fecha_4Local + " de " + mes_4Local + " de " + year_4Local + " a las " + hora_4Elegido;
      } else {
        if (restaurante_Elegido4 === "Corvinas !Don Jimmy!") {
          document.getElementById("AlertaOcupado3").value = "Reservado para: ";
          document.getElementById("ocupado3").value = fecha_4Local + " de " + mes_4Local + " de " + year_4Local + " a las " + hora_4Elegido;
        } else {
          if (restaurante_Elegido4 === "Restaurante Casa Gangotena") {
            document.getElementById("AlertaOcupado4").value = "Reservado para: ";
            document.getElementById("ocupado4").value = fecha_4Local + " de " + mes_4Local + " de " + year_4Local + " a las " + hora_4Elegido;
          } else {
            if (restaurante_Elegido4 === "Bocatto Da Fiorentino") {
              document.getElementById("AlertaOcupado5").value = "Reservado para: ";
              document.getElementById("ocupado5").value = fecha_4Local + " de " + mes_4Local + " de " + year_4Local + " a las " + hora_4Elegido;
            } else {
              if (restaurante_Elegido4 === "SOMOS Restaurante Ecuador") {
                document.getElementById("AlertaOcupado6").value = "Reservado para: ";
                document.getElementById("ocupado6").value = fecha_4Local + " de " + mes_4Local + " de " + year_4Local + " a las " + hora_4Elegido;
              }
            }
          }
        }
      }
    }
  }

  let inputs = document.getElementsByClassName("input_muestra_reservado");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", function () {
      if (this.value.length >= 1) {
        this.nextElementSibling.classList.add("reservado");
      } else {
        this.nextElementSibling.classList.remove("reservado");
      }
    });
  }

}//TERMINA LA FUNCION DE WINDOW ONLOAD






/*GUARDAR EL RESTAURANTE QUE ESCOGE*/
function nombreRestaurante(restauranteElegido) {

  localStorage.setItem("restauranteEleguido", restauranteElegido);

}