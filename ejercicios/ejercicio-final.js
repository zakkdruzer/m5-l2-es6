console.log("%cEtapa Final · Task Manager ES6+", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// 1) Clase Tarea con contador estático y destructuring
class Tarea {
  static #contador = 0;

  constructor({ 
    titulo, 
    descripcion = '', 
    prioridad = 'media', 
    etiquetas = [], 
    completada = false 
  }) {
    // Auto–incrementar el ID estático
    Tarea.#contador += 1;
    this.id = Tarea.#contador;

    this.titulo      = titulo;
    this.descripcion = descripcion;
    this.prioridad   = prioridad;
    this.etiquetas   = etiquetas;
    this.completada  = completada;
  }
}

// 2) Clase GestorTareas con campos privados, Set y Map
class GestorTareas {
  #tareas       = [];
  #completadas  = new Set();
  #estadisticas = new Map();

  agregar({ titulo, descripcion, prioridad = 'media', etiquetas = [] }) {
  const tarea = new Tarea({ titulo, descripcion, prioridad, etiquetas });

  this.#tareas.push(tarea);

  // Actualizar estadísticas de prioridad
  const actual = this.#estadisticas.get(prioridad) || 0;
  this.#estadisticas.set(prioridad, actual + 1);

  return tarea;
  }

  completar(id) {
  const tarea = this.#tareas.find(t => t.id === id);
  if (!tarea) return false;

  tarea.completada = true;
  this.#completadas.add(id);

  return true;
  }

  filtrarPor(prioridad) {
  return this.#tareas.filter(t => t.prioridad === prioridad);
  }

  buscar(termino) {
  const q = termino.toLowerCase();
  return this.#tareas.filter(t =>
    t.titulo.toLowerCase().includes(q) ||
    t.descripcion.toLowerCase().includes(q)
    );
  }

  obtenerEtiquetas() {
  const todas = this.#tareas.flatMap(t => t.etiquetas);
  return new Set(todas);
  }

  get resumen() {
  // Convierte el Map de prioridad → count a objeto plano
  return Object.fromEntries(this.#estadisticas);
  }

  async exportar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.stringify(this.#tareas, null, 2));
      }, 500);
    });
  }

  static async importar(json) {
  const datos = JSON.parse(json);

  const gestor = new GestorTareas();

  datos.forEach(item => {
    // Reconstituir la tarea respetando la clase
    const tarea = new Tarea({
      titulo:      item.titulo,
      descripcion: item.descripcion,
      prioridad:   item.prioridad,
      etiquetas:   item.etiquetas,
      completada:  item.completada
    });

    gestor.#tareas.push(tarea);

    const actual = gestor.#estadisticas.get(tarea.prioridad) || 0;
    gestor.#estadisticas.set(tarea.prioridad, actual + 1);

      if (tarea.completada) {
        gestor.#completadas.add(tarea.id);
      }
    });
    return gestor;
  }

}

// 3) Script de prueba
// 1 - Crear el gestor
const gestor = new GestorTareas();

// 2 - Agregar 8 tareas con varias prioridades y etiquetas
gestor.agregar({
  titulo: 'Crear landing de inicio',
  descripcion: 'Página principal de la app con diseño responsive',
  prioridad: 'alta',
  etiquetas: ['frontend', 'react']
});

gestor.agregar({
  titulo: 'Implementar endpoint de login',
  descripcion: 'Ruta /login con validación de credenciales y JWT',
  prioridad: 'alta',
  etiquetas: ['backend', 'api', 'auth']
});

gestor.agregar({
  titulo: 'Refactor de componentes en React',
  descripcion: 'Separar componentes en contenedores y presentacionales',
  prioridad: 'media',
  etiquetas: ['frontend', 'refactor', 'react']
});

gestor.agregar({
  titulo: 'Configurar base de datos MongoDB',
  descripcion: 'Definir colecciones y índices para la app de tareas',
  prioridad: 'alta',
  etiquetas: ['backend', 'db', 'mongodb']
});

gestor.agregar({
  titulo: 'Escribir documentación de la API',
  descripcion: 'Actualizar README y endpoints en la documentación',
  prioridad: 'baja',
  etiquetas: ['docs', 'backend', 'api']
});

gestor.agregar({
  titulo: 'Ajustar estilos responsivos',
  descripcion: 'Mejorar grid y breakpoints para móviles y tablets',
  prioridad: 'media',
  etiquetas: ['frontend', 'css', 'responsive']
});

gestor.agregar({
  titulo: 'Implementar sistema de etiquetas en tareas',
  descripcion: 'Permitir asignar múltiples etiquetas a cada tarea',
  prioridad: 'media',
  etiquetas: ['feature', 'fullstack']
});

gestor.agregar({
  titulo: 'Arreglar bug en validación de formularios',
  descripcion: 'Corregir mensajes de error y casos límite en inputs',
  prioridad: 'alta',
  etiquetas: ['bug', 'frontend', 'forms']
});

// 3 - Completar 3 tareas por ID
gestor.completar(1);
gestor.completar(3);
gestor.completar(5);

// 4 - Filtrar por prioridad 'alta' y mostrar
console.log('Tareas de prioridad alta:');
console.log(gestor.filtrarPor('alta'));

// 5 - Buscar un término que aparezca en al menos 2 tareas
console.log('Búsqueda por "API":');
console.log(gestor.buscar('API'));

// 6 - Mostrar etiquetas únicas
console.log('Etiquetas únicas:');
console.log(gestor.obtenerEtiquetas());

// 7 - Exportar e importar
(async () => {
  const json = await gestor.exportar();
  console.log('JSON exportado:', json);

  const gestorImportado = await GestorTareas.importar(json);
  console.log('Gestor importado, resumen:', gestorImportado.resumen);
})();

// 8 - Mostrar el resumen
console.log('Resumen de prioridades:', gestor.resumen);

console.log("")