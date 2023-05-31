//Realizo la funcion document.getElementById que devuelve una referencia al elemento por su ID y le asigno a una variable
let boton = document.getElementById("btn");

//Para que el resultado aparezco en 0 por defecto
document.getElementById('resultado').innerHTML = 0;

// Al hacer click en el boton, se ejecutan las siguientes instrucciones
boton.addEventListener("click", () => {
    //Realizo la funcion document.getElementById que devuelve una referencia al elemento por su ID y le asigno a una variable
    let operacion = document.getElementById('operacion').value;
    let valor1 = parseInt(document.getElementById('numero1').value);
    let valor2 = parseInt(document.getElementById('numero2').value);
    // Dependiendo de la opción elegida por el usuario, se va a realizar una u otra operación y el resultado se muestra en el elemento que posee como ID "elemento"
    if (operacion == 1){
        document.getElementById('resultado').innerHTML = valor1 + valor2;
    }else if(operacion == 2){
        document.getElementById('resultado').innerHTML = valor1 - valor2;
    }else if(operacion == 3){
        document.getElementById('resultado').innerHTML = valor1 * valor2;
    }else if(operacion == 4){
        document.getElementById('resultado').innerHTML = valor1 / valor2;
    }
})

