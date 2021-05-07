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
//fecha nombre hora
window.onload = function mostrarReserva() {

    let existeReserva_1 = localStorage.getItem("Reserva1");
    let existeReserva_2 = localStorage.getItem("Reserva2");
    let existeReserva_3 = localStorage.getItem("Reserva3");
    let existeReserva_4 = localStorage.getItem("Reserva4");

    if (existeReserva_4 != null) {
        let Reserva_Local_4 = JSON.parse(localStorage.getItem("Reserva4"));

        let plato_4 = Reserva_Local_4[2];

        let dia_4 = Reserva_Local_4[0].diaElegido;
        let fecha_4 = Reserva_Local_4[0].fechaElegido;
        let mes_4 = Reserva_Local_4[0].mesElegido;
        let year_4 = Reserva_Local_4[0].yearElegido;
        let hora_4 = Reserva_Local_4[0].horaElegido;
        let adultos_4 = Reserva_Local_4[0].adultosElegido;
        let boy_4 = Reserva_Local_4[0].boyElegido;

        document.getElementById("plato").value = plato_4;

        document.getElementById("mensaje").value = "Reserva para el " + dia_4 + " " + fecha_4 + " de " + mes_4 + " de " + year_4 + " a las " + hora_4 + ". Con " + adultos_4 + " adultos y " + boy_4 + " niños ?";
    } else{
        if (existeReserva_3 != null) {
        let Reserva_Local_3 = JSON.parse(localStorage.getItem("Reserva3"));

        let plato_3 = Reserva_Local_3[2];

        let dia_3 = Reserva_Local_3[0].diaElegido;
        let fecha_3 = Reserva_Local_3[0].fechaElegido;
        let mes_3 = Reserva_Local_3[0].mesElegido;
        let year_3 = Reserva_Local_3[0].yearElegido;
        let hora_3 = Reserva_Local_3[0].horaElegido;
        let adultos_3 = Reserva_Local_3[0].adultosElegido;
        let boy_3 = Reserva_Local_3[0].boyElegido;

        document.getElementById("plato").value = plato_3;

        document.getElementById("mensaje").value = "Reserva para el " + dia_3 + " " + fecha_3 + " de " + mes_3 + " de " + year_3 + " a las " + hora_3 + ". Con " + adultos_3 + " adultos y " + boy_3 + " niños ?";
    } else {
        if (existeReserva_2 != null) {
            let Reserva_Local_2 = JSON.parse(localStorage.getItem("Reserva2"));
    
            let plato_2 = Reserva_Local_2[2];
    
            let dia_2 = Reserva_Local_2[0].diaElegido;
            let fecha_2 = Reserva_Local_2[0].fechaElegido;
            let mes_2 = Reserva_Local_2[0].mesElegido;
            let year_2 = Reserva_Local_2[0].yearElegido;
            let hora_2 = Reserva_Local_2[0].horaElegido;
            let adultos_2 = Reserva_Local_2[0].adultosElegido;
            let boy_2 = Reserva_Local_2[0].boyElegido;
    
            document.getElementById("plato").value = plato_2;
    
            document.getElementById("mensaje").value = "Reserva para el " + dia_2 + " " + fecha_2 + " de " + mes_2 + " de " + year_2 + " a las " + hora_2 + ". Con " + adultos_2 + " adultos y " + boy_2 + " niños ?";
        } else {
            if (existeReserva_1 != null) {
                let Reserva_Local_1 = JSON.parse(localStorage.getItem("Reserva1"));
        
                let plato_1 = Reserva_Local_1[2];
        
                let dia_1 = Reserva_Local_1[0].diaElegido;
                let fecha_1 = Reserva_Local_1[0].fechaElegido;
                let mes_1 = Reserva_Local_1[0].mesElegido;
                let year_1 = Reserva_Local_1[0].yearElegido;
                let hora_1 = Reserva_Local_1[0].horaElegido;
                let adultos_1 = Reserva_Local_1[0].adultosElegido;
                let boy_1 = Reserva_Local_1[0].boyElegido;
        
                document.getElementById("plato").value = plato_1;
        
                document.getElementById("mensaje").value = "Reserva para el " + dia_1 + " " + fecha_1 + " de " + mes_1 + " de " + year_1 + " a las " + hora_1 + ". Con " + adultos_1 + " adultos y " + boy_1 + " niños ?";
            }
        }
    }
    }
    
    
    



























    let restauranteElegido = localStorage.getItem("restauranteEleguido");
    document.getElementById("mostrarRestaurante").value = restauranteElegido;

    //let personaLogeada = JSON.parse(localStorage.getItem("personaLogeada"));

}

function eliminarLocal() {
    localStorage.removeItem("Reservas");
}