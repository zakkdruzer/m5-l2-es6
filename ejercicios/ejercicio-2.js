console.log("%cEtapa 2 · Pedidos de una cafetería", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// 1) Firma de la función con destructuring y defaults
function calcularPedido({ bebida, tamaño = 'mediano', extras = [], azucar = true }) {
  const extrasTexto = extras.length > 0 
    ? extras.join(', ')   // une el array en una cadena
    : 'sin extras';       // mensaje si no hay extras

  const azucarTexto = azucar ? 'sí' : 'no';
  // 2) Armar el string con template literals  
  return `${bebida} ${tamaño} | extras: [${extrasTexto}] | azúcar: ${azucarTexto}`;
}

// 3) Crear los 4 pedidos
const pedido1 = { bebida: 'Espresso' };
const pedido2 = { bebida: 'Latte', tamaño: 'grande' };
const pedido3 = { bebida: 'Té verde', extras: ['limón', 'miel'], azucar: false };
const pedido4 = { bebida: 'Cappuccino', tamaño: 'grande', extras: ['leche extra', 'vainilla'], azucar: true };

// 4) Mostrar pedidos
console.log(`Orden #1 → ${calcularPedido(pedido1)}`);
console.log(`Orden #2 → ${calcularPedido(pedido2)}`);
console.log(`Orden #3 → ${calcularPedido(pedido3)}`);
console.log(`Orden #4 → ${calcularPedido(pedido4)}`);

console.log("")