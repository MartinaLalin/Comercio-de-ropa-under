document.addEventListener('DOMContentLoaded', () => {
    const loginUserForm = document.getElementById('loginUserForm');
    if (loginUserForm) {
      loginUserForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const defUsuarios = [
          { nombre: "Tiziano", mail: "admin@veloura.com", contraseña: "1234" }
        ];
  
        // datos que escribe el usuario en HTML
        const txtUsuario = document.getElementById('usuario').value.trim();
        const txtEmail = document.getElementById('email').value.trim();
        const txtPassword = document.getElementById('password').value;
  

        
        // Se revisa la tabla de usuarios
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || defUsuarios;
  
        // Verifica si hay un usuario con lo que ingreso el usuario
        const usuarioValido = usuarios.find(u => 
          u.nombre.toLowerCase() === txtUsuario.toLowerCase() &&
          u.mail.toLowerCase() === txtEmail.toLowerCase() &&
          u.contraseña === txtPassword
        );
  
        // Si es correcto se redirige a su respectiva pantalla
        if (usuarioValido) {
          alert(`¡Bienvenido de nuevo, ${usuarioValido.nombre}!`);
          
          // Se guarda el usuario logueado
          localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioValido));
  
        } else {
          alert('Datos incorrectos. Revisá el usuario, rol, mail y contraseña.');
        }
      });
    }
});