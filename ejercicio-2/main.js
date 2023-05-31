//Creo un array de objetos para las cartas con sus respectivas propiedades y valores

const cards = [
  {
    titulo: "Visual Studio Code",
    descripcion: "Visual Studio Code es un editor de texto de código abierto, por lo que cualquiera puede acceder al código del software para verlo, modificarlo.",
    imagen: "./image/vsc.png",
  },
  {
    titulo: "Sublime Text",
    descripcion: "Sublime Text es la mejor opción para un entorno de desarrollo completo, ya que agrupa código, marcado y prosa en una sola herramienta.",
    imagen: "./image/sublime-text.png",
  },
  {
    titulo: "Notepad++",
    descripcion: "Notepad ++ tiene una velocidad de ejecución asombrosa. Es liviano y utiliza menos recursos informáticos.",
    imagen: "./image/notepad.png",
  },
  {
    titulo: "TextMate",
    descripcion: "TextMate es un editor de texto ligero con una interfaz de usuario limpia.",
    imagen: "./image/textmate.png",
  },
  {
    titulo: "Blue Fish",
    descripcion: "Bluefish es un editor de código robusto para usuarios experimentados como programadores, desarrolladores y diseñadores web.",
    imagen: "./image/bluefish.png",
  }
];

// Con la función document.getElementById() selecciono y acceder a un elemento HTML
let card = document.getElementById("card-template");

//Uso el metodo map para iterar sobre cada elemento del array original 
cards.map((datos) => {
  // Agrego las etiquetas de las cartas el documento html mediante innerHTML
  card.innerHTML += `
  <div class="col">
    <div class="card">
      <img src="${datos.imagen}" class="card-img-bottom" style="width: 40%">
      <div class="card-body">
        <h5 class="card-title">${datos.titulo}</h5>
        <p class="card-text">${datos.descripcion}</p>
      </div>
    </div>
  </div>
    `;
});


