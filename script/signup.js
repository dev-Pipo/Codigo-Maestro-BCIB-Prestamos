//VALIDACION INICIO DE SESION
/Obtener los elementos del formulario./
var formulario = document.getElementById("formulario");
var usuario = document.getElementById("username");
var contrasena = document.getElementById("password");

// Añadir un evento de envío al formulario
formulario.addEventListener("submit", function(evento) {
  // Prevenir el comportamiento por defecto del formulario
  evento.preventDefault();
  // Validar los campos de usuario y contraseña
  if (usuario.value === "") {
    // Mostrar un mensaje de alerta si el campo usuario está vacío
    alert("Por favor, ingrese su nombre de usuario.");
    // Enfocar el campo usuario
    usuario.focus();
    // Retornar falso para cancelar el envío del formulario
    return false;
  }
  if (contrasena.value === "") {
    // Mostrar un mensaje de alerta si el campo contraseña está vacío
    alert("Por favor, ingrese su contraseña.");
    // Enfocar el campo contraseña
    contrasena.focus();
    // Retornar falso para cancelar el envío del formulario
    return false;
  }
  // Comprobar si el usuario es maxi y la contraseña es maxi1234
  if (usuario.value !== "maxi" || contrasena.value !== "maxi1234") {
    // Mostrar un mensaje de alerta si el usuario o la contraseña no son correctos
    alert("Usuario o contraseña incorrectos.");
    // Retornar falso para cancelar el envío del formulario
    return false;
  }
  // Si todo está bien, enviar el formulario
  window.location.href = "./profile.html"

});