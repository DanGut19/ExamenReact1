import { useState } from "react";
import { alert } from "../functions";

 const Suma = () => {
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [n3, setN3] = useState("");
    const [resultado, setResultado] = useState("");

    const sumar = () => {
        if (n1.trim() === "") {
            alert("Ingrese nota del primer parcial","warning","txtN1");
        } else if (n2.trim() === "") {
            alert("Ingrese nota del segundo parcial","warning","txtN2");
        } else if (n3.trim() === "") {
            alert("Ingrese nota del tercer parcial","warning","txtN3");
        } else {
            let valor1 = parseInt(n1);
            let valor2 = parseInt(n2);
            let valor3 = parseInt(n3);
            setResultado(valor1 + valor2 + valor3);
        }
    }
 }