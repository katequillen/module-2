'use strict';

const adalaber = {};
adalaber.name = 'Susana';
adalaber.age = 34;
adalaber.job = 'periodista';

// Muestra en la consola 31
console.log('Mi nombre es ' + adalaber.name + ', tengo ' + adalaber.age + ' años y soy ' + adalaber.job);

document.querySelector('h1').innerHTML = ('Mi nombre es ' + adalaber.name + ', tengo ' + adalaber.age + ' años y soy ' + adalaber.job);

const adalaber2 = {};
adalaber2.name = 'Rocío';
adalaber2.age = 25;
adalaber2.job = 'actriz';

document.querySelector('h2').innerHTML = ('Mi nombre es ' + adalaber2.name + ', tengo ' + adalaber2.age + ' años y soy ' + adalaber2.job);