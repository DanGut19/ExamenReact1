import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export function alerta(mensaje, icono, id = ""){
    onFocus(id);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
        title: mensaje,
        icon: icono
    });
}

function onFocus(id){
    if (id !== "") {
        document.getElementById(id).focus();
    }
}

export function Error(mensaje, icono, id = ""){
    onFocus(id);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
        title: mensaje,
        icon: icono
    });
}

/*
function alerta(){

    if (Resultado <= 59){
        error("Reprobado")
    } else if (Resultado <= 79){
        error("Bueno")
    } else if (Resultado <= 89){
        error("Muy Bueno")
    } else if (Resultado <= 100){
        error("Sobresaliente")
    } else {
        document.getElementById('Resultado').value = Resultado
    }
}
*/