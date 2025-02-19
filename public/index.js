const Mostrar = document.getElementById("Mostrar");
function suma() {

    let total = 18+27

    return total
    
}

export {suma};


function Resta() {
    let total = 27-18
    
    return total
    
}

export {Resta};

function Multiplicacion() {
    let total = 18*27
    
    return total
    
}

export {Multiplicacion};


function Mostrartexto() {
     Mostrar.innerHTML=

     "El resultado de la suma es: " + suma() +
     "<br>El resultado de la resta es: " + Resta() +
     "<br>El resultado de la multiplicación es: " + Multiplicacion();


    
}
Mostrartexto()

