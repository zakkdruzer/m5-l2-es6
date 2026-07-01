console.log("%cEtapa 6 · Flujo de autenticación", "font-weight: bold; color: green; font-size: 15px;");

// 1) Definir las 3 funciones que retornan promesas
// 1 - Verificar usuario
function verificarUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 0) {
        reject(new Error('ID inválido: el usuario no existe'));
      } else {
        resolve({
          id,
          nombre: 'Usuario ' + id,
          email: `usuario${id}@example.com`
        });
      }
    }, 500);
  });
}

// 2 - Obtener permisos
function obtenerPermisos(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!usuario) {
        reject(new Error('Usuario nulo: no se pueden cargar permisos'));
      } else {
        resolve({
          ...usuario,
          permisos: ['leer', 'escribir']
        });
      }
    }, 500);
  });
}

// 3 - Cargar dashboard
function cargarDashboard(datos) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Dashboard listo para ${datos.nombre}`);
    }, 500);
  });
}

// 2) Encadenar el flujo exitoso

verificarUsuario(5)
  .then((usuario) => obtenerPermisos(usuario))
  .then((datosConPermisos) => cargarDashboard(datosConPermisos))
  .then((mensajeDashboard) => {
    console.log('Flujo exitoso:');
    console.log(mensajeDashboard);
  })
  .catch((error) => {
    console.log('Error en el flujo:', error.message);
  });

// 3) Probar el flujo con fallo (id negativo)
verificarUsuario(-1)
  .then((usuario) => obtenerPermisos(usuario))
  .then((datosConPermisos) => cargarDashboard(datosConPermisos))
  .then((mensajeDashboard) => {
    console.log('Esto no debería ejecutarse con ID inválido:', mensajeDashboard);
  })
  .catch((error) => {
    console.log('Flujo con error (ID negativo):');
    console.log(error.message);
  });

console.log("")