'use strict';

const adalaber = {};
adalaber.name = 'Susana';
adalaber.age = 34;
adalaber.job = 'periodista';
adalaber.speak = phrase => ` I am ${phrase}`;

// Muestra en la consola 31
console.log('Mi nombre es ' + adalaber.name + ', tengo ' + adalaber.age + ' años y soy ' + adalaber.job + '.' + adalaber.speak('running.'));

document.querySelector('h1').innerHTML = ('Mi nombre es ' + adalaber.name + ', tengo ' + adalaber.age + ' años y soy ' + adalaber.job);
