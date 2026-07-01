console.log("%cEtapa 4 · Registro de asistencia", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// 1) Set de presentes (sin duplicados)
const presentes = new Set();

presentes.add('Ana');
presentes.add('Luis');
presentes.add('María');
presentes.add('Ana');    // repetido
presentes.add('Pedro');
presentes.add('Luis');   // repetido
presentes.add('Sofía');
presentes.add('Carlos');
presentes.add('Elena');
presentes.add('María');  // repetido

console.log(`Alumnos únicos presentes: ${presentes.size}`);
console.log("")

// Muestra a los presentes
console.log('Lista de presentes:');
presentes.forEach(nombre => console.log(`- ${nombre}`));
console.log("")

// 2) Map de tardanzas
const tardanzas = new Map();

function marcarTarde(nombre) {
  const tardesActuales = tardanzas.get(nombre) || 0;  // si no existe, 0
  tardanzas.set(nombre, tardesActuales + 1);
}

function getTardes(nombre) {
  return tardanzas.get(nombre) || 0;
}

function alumnosMasTardes() {
  let nombreMax = null;
  let maxTardes = -1;

  for (const [nombre, cantidad] of tardanzas.entries()) {
    if (cantidad > maxTardes) {
      maxTardes = cantidad;
      nombreMax = nombre;
    }
  }

  return nombreMax;
}

// Pruebas
marcarTarde('Ana');
marcarTarde('Luis');
marcarTarde('Ana');
marcarTarde('María');
marcarTarde('Luis');
marcarTarde('Luis');

console.log('Tardanzas de Ana:', getTardes('Ana'));
console.log('Tardanzas de Luis:', getTardes('Luis'));
console.log('Tardanzas de María:', getTardes('María'));
console.log('Tardanzas de Pedro (no registrado):', getTardes('Pedro'));

console.log('Alumno con más tardanzas:', alumnosMasTardes());

console.log("")