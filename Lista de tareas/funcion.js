// Arreglo para almacenar las tareas
var tareas = [];

function agregarTarea() {
  var tareaInput = document.getElementById("tarea");
  var tareaTexto = tareaInput.value.trim();
  
  if (tareaTexto === "") {
    alert("Por favor, ingresa una tarea.");
  } else {
    // Agrega la tarea al arreglo
    tareas.push(tareaTexto);
    
    // Actualiza la lista de tareas en la página
    actualizarListaTareas();
    
    // Borra el contenido del input
    tareaInput.value = "";
  }
}

function actualizarListaTareas() {
  var listaTareas = document.getElementById("listaTareas");
  listaTareas.innerHTML = "";
  
  for (var i = 0; i < tareas.length; i++) {
    var tarea = tareas[i];
    var listItem = document.createElement("li");
    listItem.innerHTML = `
      <input type="checkbox" id="tarea${i}">
      <label for="tarea${i}">${tarea}</label>
    `;
    listaTareas.appendChild(listItem);
  }
}

function borrarTareasSeleccionadas() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
  for (var i = checkboxes.length - 1; i >= 0; i--) {
    if (checkboxes[i].checked) {
      tareas.splice(i, 1);
    }
  }
  
  actualizarListaTareas();
}
