 const checkbox = document.getElementById('mostrar');
  const passwordInput = document.getElementById('password');
  const textoClaro = document.getElementById('texto-claro');

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      passwordInput.type = 'text';
      textoClaro.style.display = 'block';
    } else {
      passwordInput.type = 'password';
      textoClaro.style.display = 'none';
    }
  });

  const btnLogin = document.getElementById('btnLogin');
  const usuarioInput = document.getElementById('usuario');
  const errorUsuario = document.getElementById('error-usuario');
  const errorPassword = document.getElementById('error-password');

  btnLogin.addEventListener('click', function (e) {
    e.preventDefault();


    errorUsuario.textContent = '';
    errorPassword.textContent = '';

    let usuario = usuarioInput.value.trim();
    let password = passwordInput.value.trim();
    let hayError = false;

    if (!usuario) {
      errorUsuario.textContent = 'Necesitas ingresar un usuario';
      hayError = true;
    }

    if (!password) {
      errorPassword.textContent = 'Necesitas ingresar una contraseña';
      hayError = true;
    }

    if (!hayError) {
      alert('Session inciada exitosamentr');
    }
  });