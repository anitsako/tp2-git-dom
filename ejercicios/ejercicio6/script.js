function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const altura = parseInt(document.getElementById("altura").value);
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje");

  let errores = [];

  if (nombre === "" || nombre.length > 50) {
    errores.push("Nombre inválido.");
  }

  if (apellido === "" || apellido.length > 50) {
    errores.push("Apellido inválido.");
  }

  if (isNaN(edad) || edad < 0) {
    errores.push("Edad inválida.");
  } 
  else if (edad < 18) {
    errores.push("Debe ser mayor de edad.");
  }

  if (isNaN(altura) || altura < 0 || altura > 230) {
    errores.push("Altura inválida.");
  }

  if (email === "" || !email.includes("@")) {
    errores.push("Correo electrónico inválido.");
  }

  if (errores.length > 0) {
    mensaje.textContent = errores.join(" ");
    mensaje.className = "error";
  } 
  else {
    mensaje.textContent = "Formulario válido. Todos los datos son correctos.";
    mensaje.className = "ok";
  }
}
