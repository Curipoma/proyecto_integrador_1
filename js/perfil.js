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
//MOSTRAR DATOS EN EL PERFIL
window.onload = function perfil() {

  let R_1 = localStorage.getItem("Reserva1");
  let R_2 = localStorage.getItem("Reserva2");
  let R_3 = localStorage.getItem("Reserva3");
  let R_4 = localStorage.getItem("Reserva4");

  let R_T = [R_1, R_2, R_3, R_4];
/*COMPRUEBA SI EXISTE CUPO PARA HACER MAS RECERVAS SI NO SUGIERE HACER MAS RECERVAS*/
  if (R_T == ",,,") {
    document.getElementById("mostrarNuevaReserva").style.display = "none";
  } else {
    let valorReferencia = 0;
    if (R_1 == null) {
      valorReferencia = valorReferencia + 1;
    }
    if (R_2 == null) {
      valorReferencia = valorReferencia + 1;
    }
    if (R_3 == null) {
      valorReferencia = valorReferencia + 1;
    }
    if (R_4 == null) {
      valorReferencia = valorReferencia + 1;
    }
    if (valorReferencia != 0) {
      document.getElementById("mostrarNuevaReserva").style.display = "block";
    } else {
      document.getElementById("mostrarNuevaReserva").style.display = "none";
    }
  }


  /*muestra el primer restaurante elegido*/
  let personaRegistrada = JSON.parse(localStorage.getItem("personaLogeada"));

  let nombre = personaRegistrada.nombre;
  let password = personaRegistrada.password;
  let correo = personaRegistrada.coreo;
  let apellido = personaRegistrada.apellido;
  let edad = personaRegistrada.edad;
  let diaNacimiento = personaRegistrada.diaNacimiento;
  let mesNacimiento = personaRegistrada.mesNacimiento;
  let yearNacimiento = personaRegistrada.yearNacimiento;

  document.getElementById("nombre").value = nombre;
  document.getElementById("password").value = password;
  document.getElementById("correo").value = correo;
  document.getElementById("apellido").value = apellido;
  document.getElementById("edad").value = edad;
  document.getElementById("fechaNacimiento").value = diaNacimiento + " / " + mesNacimiento + " / " + yearNacimiento;
  /*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
  /*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
  /*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

  //IMRPIME LOS DATOS DE LA RESERVA QUE SE HACE
  let reserva__1 = localStorage.getItem("Reserva1");
  let reserva__2 = localStorage.getItem("Reserva2");
  let reserva__3 = localStorage.getItem("Reserva3");
  let reserva__4 = localStorage.getItem("Reserva4");

  let reservas = [reserva__1, reserva__2, reserva__3, reserva__4];
  if (reservas == ",,,") {
    document.getElementById("sugerenciaReservar").style.display = "block";
  } else {   /*SEGUN EXISTA HACEMOS QUE SEMUESTRE RESERVAS O SUGERENCIA PARA RESERVAR*/
    document.getElementById("sugerenciaReservar").style.display = "none";
  }
  /*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
  /*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
  /*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

  //IMPRECION DE LA PRIMERA RESERVA
  let reserva1 = JSON.parse(localStorage.getItem("Reserva1"));
  if (reserva1 != null) {
    let lugar1 = reserva1[1];
    let plato_1 = JSON.parse(localStorage.getItem("datosPlato"));
    let plato1 = plato_1[0];

    let precio1 = plato_1[1];
    console.log(lugar1);
    //diaElegido, fechaElegido, mesElegido, yearElegido, horaElegido, adultosElegido, boyElegido
    if (lugar1 != null) {
      document.getElementById("restauranteEleguido1").value = lugar1;
    }
    if (plato1 != null) {
      document.getElementById("platoElegido1").value = plato1;
    }
    if (precio1 != null) {
      document.getElementById("mensajePrecio_1").value = precio1;
    }


    let fechaElegido1 = reserva1[0].fechaElegido;
    let mesElegido1 = reserva1[0].mesElegido;
    let yearElegido1 = reserva1[0].yearElegido;
    let horaElegido1 = reserva1[0].horaElegido;
    let adultosElegido1 = reserva1[0].adultosElegido;
    let boyElegido1 = reserva1[0].boyElegido;

    document.getElementById("fechaElegido1").value = fechaElegido1;
    document.getElementById("mesElegido1").value = mesElegido1;
    document.getElementById("yearElegido1").value = yearElegido1;
    document.getElementById("horaElegido1").value = horaElegido1;
    document.getElementById("adultosElegido1").value = adultosElegido1;
    document.getElementById("boyElegido1").value = boyElegido1;
  } else {
    document.getElementById("Reserva_Muestra1").style.display = "none";
  }

  //IMPRECION DE LA REGUNDA RESERVA
  let reserva2 = JSON.parse(localStorage.getItem("Reserva2"));
  if (reserva2 != null) {
    let lugar2 = reserva2[1];

    let plato_2 = JSON.parse(localStorage.getItem("datosPlato"));
    let plato2 = plato_2[0];
    let precio2 = plato_2[1];
    //diaElegido, fechaElegido, mesElegido, yearElegido, horaElegido, adultosElegido, boyElegido
    if (lugar2 != null) {
      document.getElementById("restauranteEleguido2").value = lugar2;
    }

    if (plato2 != null) {
      document.getElementById("platoElegido2").value = plato2;
    }
    if (precio2 != null) {

      document.getElementById("mensajePrecio_2").value = precio2;
    }


    let fechaElegido2 = reserva2[0].fechaElegido;
    let mesElegido2 = reserva2[0].mesElegido;
    let yearElegido2 = reserva2[0].yearElegido;
    let horaElegido2 = reserva2[0].horaElegido;
    let adultosElegido2 = reserva2[0].adultosElegido;
    let boyElegido2 = reserva2[0].boyElegido;

    document.getElementById("fechaElegido2").value = fechaElegido2;
    document.getElementById("mesElegido2").value = mesElegido2;
    document.getElementById("yearElegido2").value = yearElegido2;
    document.getElementById("horaElegido2").value = horaElegido2;
    document.getElementById("adultosElegido2").value = adultosElegido2;
    document.getElementById("boyElegido2").value = boyElegido2;
  } else {
    document.getElementById("Reserva_Muestra2").style.display = "none";
  }


  //IMPRECION DE LA TERCERA RESERVA
  let reserva3 = JSON.parse(localStorage.getItem("Reserva3"));
  if (reserva3 != null) {
    let lugar3 = reserva3[1];

    let plato_3 = JSON.parse(localStorage.getItem("datosPlato"));
    let plato3 = plato_3[0];
    let precio3 = plato_3[1];

    //diaElegido, fechaElegido, mesElegido, yearElegido, horaElegido, adultosElegido, boyElegido
    if (lugar3 != null) {
      document.getElementById("restauranteEleguido3").value = lugar3;
    }
    if (plato_3 != null) {
      document.getElementById("platoElegido3").value = plato3;
    }
    if (precio3 != null) {
      document.getElementById("mensajePrecio_3").value = precio3;
    }

    let fechaElegido3 = reserva3[0].fechaElegido;
    let mesElegido3 = reserva3[0].mesElegido;
    let yearElegido3 = reserva3[0].yearElegido;
    let horaElegido3 = reserva3[0].horaElegido;
    let adultosElegido3 = reserva3[0].adultosElegido;
    let boyElegido3 = reserva3[0].boyElegido;

    document.getElementById("fechaElegido3").value = fechaElegido3;
    document.getElementById("mesElegido3").value = mesElegido3;
    document.getElementById("yearElegido3").value = yearElegido3;
    document.getElementById("horaElegido3").value = horaElegido3;
    document.getElementById("adultosElegido3").value = adultosElegido3;
    document.getElementById("boyElegido3").value = boyElegido3;
  } else {
    document.getElementById("Reserva_Muestra3").style.display = "none";
  }


  //IMPRECION DE LA CUARTA RESERVA
  let reserva4 = JSON.parse(localStorage.getItem("Reserva4"));
  if (reserva4 != null) {
    let lugar4 = reserva4[1];

    let plato_4 = JSON.parse(localStorage.getItem("datosPlato"));
    let plato4 = plato_4[0];
    let precio4 = plato_4[1];

    //diaElegido, fechaElegido, mesElegido, yearElegido, horaElegido, adultosElegido, boyElegido
    if (lugar4 != null) {
      document.getElementById("restauranteEleguido4").value = lugar4;
    }
    if (plato4 != null) {
      document.getElementById("platoElegido4").value = plato4;
    }
    if (precio4 != null) {
      document.getElementById("mensajePrecio_4").value = precio4;
    }

    let fechaElegido4 = reserva4[0].fechaElegido;
    let mesElegido4 = reserva4[0].mesElegido;
    let yearElegido4 = reserva4[0].yearElegido;
    let horaElegido4 = reserva4[0].horaElegido;
    let adultosElegido4 = reserva4[0].adultosElegido;
    let boyElegido4 = reserva4[0].boyElegido;

    document.getElementById("fechaElegido4").value = fechaElegido4;
    document.getElementById("mesElegido4").value = mesElegido4;
    document.getElementById("yearElegido4").value = yearElegido4;
    document.getElementById("horaElegido4").value = horaElegido4;
    document.getElementById("adultosElegido4").value = adultosElegido4;
    document.getElementById("boyElegido4").value = boyElegido4;
  } else {
    document.getElementById("Reserva_Muestra4").style.display = "none";
  }


}
//anular reservas
function anularReserva1() {
  localStorage.removeItem("Reserva1");
}
function anularReserva2() {
  localStorage.removeItem("Reserva2");
}
function anularReserva3() {
  localStorage.removeItem("Reserva3");
}
function anularReserva4() {
  localStorage.removeItem("Reserva4");
}

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
