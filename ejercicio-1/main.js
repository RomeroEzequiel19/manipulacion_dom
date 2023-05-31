//Realizo la funcion document.getElementById que devuelve una referencia al elemento por su ID
let boton = document.getElementById("boton");
let parrafo = document.getElementById("parrafo");

//Creo el contador que me permitirá el cambio de color
let contador = 0;

//La funcion añade la clase orange al parrafo si el contador es igual a 0, y si es igual a uno le remueve el color
function cambioColor() {
  if (contador == 0) {
    parrafo.classList.add("orange");
    contador = 1;
  } else {
    parrafo.classList.remove("orange");
    contador = 0;
  }
}

//Al hacer click en el boton, se ejecuta la función cambioColor
boton.addEventListener("click", cambioColor, true);
