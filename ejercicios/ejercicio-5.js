console.log("%cEtapa 5 · Módulo de utilidades", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// 1) Definir el objeto utils con métodos shorthand
const utils = {
  // 1 - capitalize
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },

  // 2 - truncar
  truncar(str, max = 50) {
    return str.length > max ? str.slice(0, max) + '...' : str;
  },

  // 3 - formatearPrecio
  formatearPrecio(num, moneda = 'CLP') {
    const monto = num.toLocaleString('es-CL'); // puntos de miles y formato local
    const simbolos = {
      CLP: '$',
      USD: 'US$',
      EUR: '€'
    };

    const simbolo = simbolos[moneda] || '$';
    return `${simbolo} ${monto} (${moneda})`;
  },

  // 4 - agruparPor
  agruparPor(array, propiedad) {
    return array.reduce((grupos, item) => {
      const clave = item[propiedad];
      const grupoActual = grupos[clave] || [];

      return {
        ...grupos,
        [clave]: [...grupoActual, item]
      };
    }, {});
  }
};

// 2) Probar cada método (casos con default y explícitos)
// capitalize
console.log("Prueba capitalize:")
console.log(utils.capitalize('hOLA MUNDO'));   // default: cualquier string raro
console.log(utils.capitalize('frontend FULLSTACK'));
console.log("")

// truncar
console.log("Prueba truncar:")
console.log(utils.truncar('texto muy largo para probar truncar', 10)); // max explícito
console.log(utils.truncar('texto corto', 50)); // no se trunca
console.log("")

// formatearPrecio
console.log("Prueba formatearPrecio:")
console.log(utils.formatearPrecio(1250000));          // default CLP
console.log(utils.formatearPrecio(1999.99, 'USD'));   // explícito USD
console.log("")

// agruparPor
console.log("Prueba agruparPor:")
const productos = [
  { nombre: 'Notebook', categoria: 'electrónica', precio: 500000 },
  { nombre: 'Polera',   categoria: 'ropa',         precio: 15000 },
  { nombre: 'Auriculares', categoria: 'electrónica', precio: 25000 },
  { nombre: 'Pantalón',    categoria: 'ropa',       precio: 30000 }
];

const productosPorCategoria = utils.agruparPor(productos, 'categoria');
console.log(productosPorCategoria);

console.log("")