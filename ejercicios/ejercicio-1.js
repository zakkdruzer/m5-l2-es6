console.log("%cEtapa 1 · Refactoriza este código antiguo", "font-weight: bold; color: green; font-size: 15px;");
console.log("")
/* ── CÓDIGO ORIGINAL ES5 — no modificar este bloque, trabaja en tu archivo ── */
// var ALTURA_MAX = 2.5;  // metros
// var PESO_MIN   = 20;   // kg

// Constantes de dominio: no cambian durante la ejecución
const ALTURA_MAX = 2.5;  // metros
const PESO_MIN   = 20;   // kg

// Original
/* function calcularIMC(peso, altura) {
  var imc = peso / (altura * altura);
  return imc.toFixed(1);
}

function clasificarIMC(imc) {
  var resultado;
  if (imc < 18.5) {
    resultado = 'Bajo peso';
  } else if (imc < 25) {
    resultado = 'Normal';
  } else if (imc < 30) {
    resultado = 'Sobrepeso';
  } else {
    resultado = 'Obesidad';
  }
  return resultado;
} */

// Calcula el IMC a partir de peso y altura.
// No usa this, así que se puede escribir como arrow function.
const calcularIMC = (peso, altura) => {
  const imc = peso / (altura * altura);
  return imc.toFixed(1);
};

// Clasifica el IMC en texto.
// Tampoco usa this, así que también va como arrow.
const clasificarIMC = (imc) => {
  let resultado;
  if (imc < 18.5) {
    resultado = 'Bajo peso';
  } else if (imc < 25) {
    resultado = 'Normal';
  } else if (imc < 30) {
    resultado = 'Sobrepeso';
  } else {
    resultado = 'Obesidad';
  }
  return resultado;
};

// Original
/* var personas = [
  { nombre: 'Ana',   peso: 60, altura: 1.65 },
  { nombre: 'Luis',  peso: 90, altura: 1.75 },
  { nombre: 'María', peso: 45, altura: 1.60 }
];
*/

// Lista de personas: el array no se reasigna
const personas = [
  { nombre: 'Ana',   peso: 60, altura: 1.65 },
  { nombre: 'Luis',  peso: 90, altura: 1.75 },
  { nombre: 'María', peso: 45, altura: 1.60 }
];

// Versión más moderna usando for...of
for (const p of personas) {
  const imc   = calcularIMC(p.peso, p.altura);
  const clase = clasificarIMC(parseFloat(imc));
  console.log(`${p.nombre}: IMC = ${imc} (${clase})`);
}

console.log("")