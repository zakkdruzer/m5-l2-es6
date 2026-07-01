# m5-l2-es6 · Task Manager ES6+

Repositorio de ejercicios y proyecto final de la lección **ES6+** del bootcamp de desarrollo web.  
Incluye mini–ejercicios independientes y un **Task Manager** final que integra todas las características vistas.

---

## Contenido del repositorio

- `index.html` en la raíz  
- Carpeta `ejercicios/` con un archivo `.js` por mini–ejercicio:
  - `ej1-imc.js` · Refactorizar código antiguo (IMC) a ES6+:
    - `let` / `const`
    - arrow functions
    - template literals
    - uso de `for...of`
  - `ej2-pedido-cafeteria.js` · Pedidos de una cafetería:
    - destructuring en parámetros
    - valores por defecto
    - template literals para resumen de pedidos
  - `ej3-playlists.js` · App de música:
    - arrays inmutables
    - spread para combinar listas
    - rest parameters con `crearPlaylist(nombre, ...canciones)`
  - `ej4-asistencia.js` · Registro de asistencia:
    - `Set` para presentes únicos
    - `Map` para contar tardanzas
    - funciones `marcarTarde`, `getTardes`, `alumnosMasTardes`
  - `ej5-utils.js` · Módulo de utilidades:
    - objeto `utils` con método shorthand
    - `capitalize`, `truncar`, `formatearPrecio`, `agruparPor`
    - uso de `reduce`, spread y `toLocaleString`
  - `ej6-auth-flow.js` · Flujo de autenticación:
    - promesas con `setTimeout`
    - encadenamiento con `.then().then().catch()`
    - simulación de login (usuario → permisos → dashboard)
- `proyecto-final/task-manager.js` · **Task Manager ES6+**:
  - Clase `Tarea`:
    - ID auto–incremental con campo estático privado `static #contador`
    - constructor con destructuring y valores por defecto
    - propiedades: `titulo`, `descripcion`, `prioridad`, `etiquetas`, `completada`
  - Clase `GestorTareas`:
    - campos privados:
      - `#tareas` · lista de tareas
      - `#completadas` · `Set` de IDs completados
      - `#estadisticas` · `Map` de prioridad → cantidad
    - métodos de escritura:
      - `agregar({ titulo, descripcion, prioridad = 'media', etiquetas = [] })`
      - `completar(id)`
    - métodos de consulta:
      - `filtrarPor(prioridad)`
      - `buscar(termino)` en título y descripción (case–insensitive)
      - `obtenerEtiquetas()` con `flatMap` + `Set`
      - getter `resumen` con `Object.fromEntries(this.#estadisticas)`
    - métodos async:
      - `async exportar()` · simula guardado con `setTimeout`, devuelve JSON de las tareas
      - `static async importar(json)` · parsea JSON y recrea una nueva instancia de `GestorTareas`

---

## Cómo ejecutar los ejercicios

1. Clona el repositorio:

   ```bash
   git clone https://github.com/usuario/m5-l2-es6.git
   cd m5-l2-es6
   ```

2. Ejecuta cada ejercicio en Node:

   ```bash
   node ejercicios/ej1-imc.js
   node ejercicios/ej2-pedido-cafeteria.js
   node ejercicios/ej3-playlists.js
   node ejercicios/ej4-asistencia.js
   node ejercicios/ej5-utils.js
   node ejercicios/ej6-auth-flow.js
   node proyecto-final/task-manager.js
   ```

   También puedes abrir `index.html` en el navegador y vincular cada script desde la consola.

---

## Conceptos ES6+ practicados

- `let` y `const` con criterios de reasignación
- Arrow functions y contexto de `this`
- Template literals para strings dinámicos
- Par&aacute;metros por defecto y destructuring de objetos
- Operadores `spread` y `rest` en arrays y funciones
- Objetos con método shorthand y shorthand de propiedades
- `Set` y `Map` para colecciones y contadores
- Promesas, encadenamiento con `.then()` y manejo de errores con `.catch()`
- `async/await` para flujos asíncronos más legibles
- Manejo de JSON (`JSON.stringify` / `JSON.parse`) con clases ES6

---

## Script de prueba del Task Manager

El `Task Manager ES6+` incluye un script de prueba que:

1. Crea un `GestorTareas`.
2. Agrega 8 tareas con distintas prioridades y etiquetas (frontend, backend, API, bugs, etc.).
3. Marca 3 tareas como completadas por ID.
4. Filtra y muestra tareas de prioridad `'alta'`.
5. Busca un término que aparece en múltiples tareas (por ejemplo `"API"`).
6. Muestra etiquetas únicas de todas las tareas.
7. Exporta las tareas a JSON y crea una nueva instancia usando `GestorTareas.importar(json)`.
8. Imprime el resumen de prioridades (`resumen`) para verificar las estadísticas.

---

## Puedes ver el resultado en:

https://zakkdruzer.github.io/m5-l2-es6/
