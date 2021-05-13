'use strict';

const iva = 0.21;

function tax(a) {
return ((a * 0.21) + a);
}

const amount = tax(300);
const total = tax;

console.log(`Precio sin IVA: ${amount}, IVA: ${iva}, Precio Total: ${total}`);
