function contrasenaValida(password) {
  if (password === "2Fj(jjbFsuj") {
      return true;
  } else if (password === "eoZiugBf&g9") {
      return true;
  } else {
      return false;
  }
}

// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")); // true
console.log(contrasenaValida("eoZiugBf&g9")); // true
console.log(contrasenaValida("hola"));        // false
console.log(contrasenaValida(""));            // false
