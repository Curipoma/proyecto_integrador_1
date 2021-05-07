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
/*//////////////////////////////////////////////////////////////////////////////////////////////////////////*/
function fecha(fechaElegido) {
  document.getElementById("fechaElegido").value = fechaElegido;
}
function mes(mesElegido) {
  //alert(mesElegido);
  document.getElementById("mesEleguido").value = mesElegido;
  return mesElegido;
}
function year(yearElegido) {
  //alert(yearElegido);
  document.getElementById("yearEleguido").value = yearElegido;
  return yearElegido;
}
function hora(horaElegido) {
  document.getElementById("horaElegido").value = horaElegido;
  return horaElegido;
}
function adultos(adultosElegido) {
  document.getElementById("adultosElegido").value = adultosElegido;
  return adultosElegido;
}
function boy(boyElegido) {
  document.getElementById("boyElegido").value = boyElegido;
  //localStorage.setItem("boyElegidoLocal1", boyElegido);
  return boyElegido;
}





/*REECOGER DATOS PARA RESERVAR Y CON ELLOS TRABAJAR*/
//diaEleguido.value,fechaEleguido.value,mesEleguido.value,yearEleguido.value,horaElegido.value,adultosElegido.value,boyElegido.value

function confirmarElecciones(fechaElegido, mesElegido, yearElegido, horaElegido, adultosElegido, boyElegido) {

  /*CONSTRUCTOR*/
  function DatosReserva(fechaElegido, mesElegido, yearElegido, horaElegido, adultosElegido, boyElegido) {
    this.fechaElegido = fechaElegido;
    this.mesElegido = mesElegido;
    this.yearElegido = yearElegido;
    this.horaElegido = horaElegido;
    this.adultosElegido = adultosElegido;
    this.boyElegido = boyElegido;
  }

  //diaElegido, fechaElegido, mesElegido, yearElegido, horaElegido, adultosElegido, boyElegido

  /*VERIFICACIÓN SI EXISTEN LAS RESERVAS O NO PARA HACERLAS SEGUN ESO*/
  let recoveredData1 = localStorage.getItem("Reserva1");
  let recoveredData2 = localStorage.getItem("Reserva2");
  let recoveredData3 = localStorage.getItem("Reserva3");
  let recoveredData4 = localStorage.getItem("Reserva4");


  if (recoveredData1 == null) {/*VERIFICA SI EXISTE LA PRIMERA RESERVA*/

    /*VEFICA SI HAY DATOS EN LOS INPU O SI NO MANDA UN MENSAJE*/
    if (fechaElegido != "" && mesElegido != "" && yearElegido != "" && horaElegido != "" && adultosElegido != "" && boyElegido != "") {

      var reserva_1 = new DatosReserva(fechaElegido, mesElegido, yearElegido, horaElegido, adultosElegido, boyElegido);
      var reserva1 = [reserva_1];
      let restauranteEleguido_1 = localStorage.getItem("restauranteEleguido");
      reserva1[1] = restauranteEleguido_1;
      let platoEscogido_1 = localStorage.getItem("platoEscogido");

      let usuarioLocal = JSON.parse(localStorage.getItem("personaLogeada"));
      let nombreUserLocal = usuarioLocal.nombre;

      reserva1.push(platoEscogido_1);
      localStorage.setItem("Reserva1", JSON.stringify(reserva1));
      alert("Felicidades " + nombreUserLocal + " reserva exitosa !");
      window.open("../html/perfil.html");

    } else {
      alert("Complete los datos 1 !");
    }

  } else {/*VEIRIFICA SI EXISTE LA RESERVA DOS*/
    if (recoveredData2 == null) {
      let reserva_1Local = JSON.parse(localStorage.getItem("Reserva1"));
      let reserva1Local = reserva_1Local[0];

      let fecha1Local = reserva1Local.fechaElegido;
      let mes1Local = reserva1Local.mesElegido;
      let hora1Local = reserva1Local.horaElegido;
      let year1Local = reserva1Local.yearElegido;

      /*VERIFICA SI LOS DATOS DE LA RESERVA 2 SON IGUALES QUE LAS DEMAS RESERVAS YA EXISTENTES*/
      if (fecha1Local === fechaElegido && mes1Local === mesElegido && hora1Local === horaElegido && year1Local === yearElegido) {
        alert("Reserva existente !" + "\nElige otra hora de ser posible");
      } else {

        /*VERIFICA QUE LOS INPUTS ESTEN LLENOS O SI NO MUESTRAA MENSAJE*/
        if (fechaElegido != "" && mesElegido != "" && yearElegido != "" && horaElegido != "" && adultosElegido != "" && boyElegido != "") {

          var reserva_2 = new DatosReserva(fechaElegido, mesElegido, yearElegido, horaElegido, adultosElegido, boyElegido);
          var reserva2 = [reserva_2];
          let restauranteEleguido_2 = localStorage.getItem("restauranteEleguido");
          reserva2[1] = restauranteEleguido_2;
          let platoEscogido_2 = localStorage.getItem("platoEscogido");

          let usuarioLocal = JSON.parse(localStorage.getItem("personaLogeada"));
          let nombreUserLocal = usuarioLocal.nombre;

          reserva2.push(platoEscogido_2);
          localStorage.setItem("Reserva2", JSON.stringify(reserva2));
          alert("Felicidades " + nombreUserLocal + " reserva exitosa !");
          window.open("../html/perfil.html");

        } else {
          alert("Complete los datos 1 !");
        }

      }

    } else {/*VERIFICA SI EXISTE LA RESREVA TRES*/

      if (recoveredData3 == null) {

        if (fechaElegido != "" && mesElegido != "" && yearElegido != "" && horaElegido != "" && adultosElegido != "" && boyElegido != "") {

          let reserva_1Local = JSON.parse(localStorage.getItem("Reserva1"));
          let reserva_1 = reserva_1Local[0];

          let fecha_1Local = reserva_1.fechaElegido;
          let mes_1Local = reserva_1.mesElegido;
          let hora_1Local = reserva_1.horaElegido;
          let year_1Local = reserva_1.yearElegido;


          let reserva_2Local = JSON.parse(localStorage.getItem("Reserva2"));
          let reserva_2 = reserva_2Local[0];

          let fecha_2Local = reserva_2.fechaElegido;
          let mes_2Local = reserva_2.mesElegido;
          let hora_2Local = reserva_2.horaElegido;
          let year_2Local = reserva_2.yearElegido;

          let valorReferencia_R3 = 0;

          if (fecha_1Local === fechaElegido && mes_1Local === mesElegido && hora_1Local === horaElegido && year_1Local === yearElegido) {
            valorReferencia_R3 = valorReferencia_R3 + 1;
          }
          if (fecha_2Local === fechaElegido && mes_2Local === mesElegido && hora_2Local === horaElegido && year_2Local === yearElegido) {
            valorReferencia_R3 = valorReferencia_R3 + 1;
          }

          if (valorReferencia_R3 == 0) {

            let reserva_3 = new DatosReserva(fechaElegido, mesElegido, yearElegido, horaElegido, adultosElegido, boyElegido);
            let reserva3 = [reserva_3];
            let restauranteEleguido_3 = localStorage.getItem("restauranteEleguido");
            reserva3[1] = restauranteEleguido_3;
            let platoEscogido_3 = localStorage.getItem("platoEscogido");

            let usuarioLocal = JSON.parse(localStorage.getItem("personaLogeada"));
            let nombreUserLocal = usuarioLocal.nombre;

            reserva3.push(platoEscogido_3);
            localStorage.setItem("Reserva3", JSON.stringify(reserva3));
            alert("Felicidades " + nombreUserLocal + " reserva exitosa !");
            window.open("../html/perfil.html");

          } else {
            alert("Reserva existente !" + "\nElige otra hora de ser posible");
          }

        } else {
          alert("Llene los campos !")

        }

      } else {/*VERIFICA SI EXISTE LA RESREVA CUATRO*/

        if (recoveredData4 == null) {

          if (fechaElegido != "" && mesElegido != "" && yearElegido != "" && horaElegido != "" && adultosElegido != "" && boyElegido != "") {

            let reserva_1Local = JSON.parse(localStorage.getItem("Reserva1"));
            let reserva_1 = reserva_1Local[0];

            let fecha_1Local = reserva_1.fechaElegido;
            let mes_1Local = reserva_1.mesElegido;
            let hora_1Local = reserva_1.horaElegido;
            let year_1Local = reserva_1.yearElegido;


            let reserva_2Local = JSON.parse(localStorage.getItem("Reserva2"));
            let reserva_2 = reserva_2Local[0];

            let fecha_2Local = reserva_2.fechaElegido;
            let mes_2Local = reserva_2.mesElegido;
            let hora_2Local = reserva_2.horaElegido;
            let year_2Local = reserva_2.yearElegido;

            let reserva_3Local = JSON.parse(localStorage.getItem("Reserva3"));
            let reserva_3 = reserva_3Local[0];

            let fecha_3Local = reserva_3.fechaElegido;
            let mes_3Local = reserva_3.mesElegido;
            let hora_3Local = reserva_3.horaElegido;
            let year_3Local = reserva_3.yearElegido;

            let valorReferencia_R3 = 0;

            if (fecha_1Local == fechaElegido && mes_1Local == mesElegido && hora_1Local == horaElegido && year_1Local == yearElegido) {
              valorReferencia_R3 = valorReferencia_R3 + 1;
            }
            if (fecha_2Local == fechaElegido && mes_2Local == mesElegido && hora_2Local == horaElegido && year_2Local == yearElegido) {
              valorReferencia_R3 = valorReferencia_R3 + 1;
            }
            if (fecha_3Local == fechaElegido && mes_3Local == mesElegido && hora_3Local == horaElegido && year_3Local == yearElegido) {
              valorReferencia_R3 = valorReferencia_R3 + 1;
            }

            if (valorReferencia_R3 == 0) {

              let reserva_4 = new DatosReserva(fechaElegido, mesElegido, yearElegido, horaElegido, adultosElegido, boyElegido);
              let reserva4 = [reserva_4];
              let restauranteEleguido_4 = localStorage.getItem("restauranteEleguido");
              reserva4[1] = restauranteEleguido_4;
              let platoEscogido_4 = localStorage.getItem("platoEscogido");

              let usuarioLocal = JSON.parse(localStorage.getItem("personaLogeada"));
              let nombreUserLocal = usuarioLocal.nombre;

              reserva4.push(platoEscogido_4);
              localStorage.setItem("Reserva4", JSON.stringify(reserva4));
              alert("Felicidades " + nombreUserLocal + " reserva exitosa !");
              window.open("../html/perfil.html");

            } else {
              alert("Reserva existente !" + "\nElige otra hora de ser posible");
            }

          } else {
            alert("Llene los campos !");
          }



          //fechaElegido, mesElegido, yearElegido, horaElegido, adultosElegido, boyElegido

        } else {
          alert("Alcansaste el limite de las reservas !" + "\nDE SER POSIBLE ELIMINE ALGUNAS RESERVAS DE SU PERFIL !");
        }

      }
    }
  }



  //aqui termina la function
}







//plato ya escogido pero se puede cambiar
window.onload = function imprimirPlatoEscogido() {

  let restauranteEleguido = localStorage.getItem("restauranteEleguido");
  document.getElementById("restauranteEleguido").value = restauranteEleguido;

  let platoE = JSON.parse(localStorage.getItem("datosPlato"));
  let platoEscogido = platoE[0];
  document.getElementById("platoElegido").value = platoEscogido;
}



//CAMBIAR PLATO POR OTRO DE LOS DATOS DE RESERVA
function cambiarPlato(platoCambio, precioPlatoCambio) {

  let datosPlato = [platoCambio, precioPlatoCambio];

  document.getElementById("platoElegido").value = platoCambio;
  localStorage.setItem("datosPlato3", JSON.stringify(datosPlato));
}

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
function cambiarLugarReserva(restauranteCambio) {

  localStorage.setItem("restauranteEleguido", restauranteCambio);
  let restauranteCambioLocal = localStorage.getItem("restauranteEleguido");
  document.getElementById("restauranteEleguido").value = restauranteCambio;
  return restauranteCambioLocal;
}



/*ESTAMOS EDITANDO CADA RESREVA*/
/*
function editarReserva1() {

  let reserva_1 = JSON.parse(localStorage.getItem("Reserva1"));
  let reserva1 = reserva_1[0];

  alert("estas en datos");

  console.log(reserva_1);

  let adultos_1 = reserva1.adultosElegido;
  let boy_1 = reserva1.boyElegido;
  let fecha_1 = reserva1.fechaElegido;
  let hora_1 = reserva1.horaElegido;
  let mes_1 = reserva1.mesElegido;
  let year_1 = reserva1.yearElegido;

  document.getElementById("fechaEleguido").value = adultos_1;
  document.getElementById("mesEleguido").value = boy_1;
  document.getElementById("yearEleguido").value = fecha_1;
  document.getElementById("horaElegido").value = hora_1;
  document.getElementById("adultosElegido").value = mes_1;
  document.getElementById("boyElegido").value = year_1;

}

*/