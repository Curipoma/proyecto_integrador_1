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
/*VERIFICA SI NO HAY, O HAY DATOS EN EL INDEX PARA PARA HACER LA ANIMACION DE LOS LABELS*/
var inputs = document.getElementsByClassName("input_formulario");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", function () {
    if (this.value.length >= 1) {
      this.nextElementSibling.classList.add("fijar");
    } else {
      this.nextElementSibling.classList.remove("fijar");
    }
  });
}


/*FUNCION QUE ME GUARDALOS DATOS DEL USUARIO EN EL LOCAL STORAGE*/
function datosLocalStorage() {

  let nombre = document.getElementById("nombre").value;
  let password = document.getElementById("passwordRegistro").value;
  let coreo = document.getElementById("coreo").value;
  let apellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value;
  let diaNacimiento = document.getElementById("diaNacimiento").value;
  let mesNacimiento = document.getElementById("mesNacimiento").value;
  let yearNacimiento = document.getElementById("yearNacimiento").value;

  if (nombre != "" && password != "" && coreo != "" && apellido != "" && edad != "" && diaNacimiento != "" && mesNacimiento != "" && yearNacimiento != "") {

    function Usuarios(nombre, password, correo, apellido, edad, diaNacimiento, mesNacimiento, yearNacimiento) {
      this.nombre = nombre;
      this.password = password;
      this.coreo = correo;
      this.apellido = apellido;
      this.edad = edad;
      this.diaNacimiento = diaNacimiento;
      this.mesNacimiento = mesNacimiento;
      this.yearNacimiento = yearNacimiento;
    }
    var usuarioRegistrado = new Usuarios(nombre, password, coreo, apellido, edad, diaNacimiento, mesNacimiento, yearNacimiento);
    localStorage.setItem("personaLogeada", JSON.stringify(usuarioRegistrado));

    let usuariosTodos = [usuarioRegistrado, "hola"];
  }
}

