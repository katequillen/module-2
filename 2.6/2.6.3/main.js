'use strict';

const adalaber = {};
adalaber.name = 'Susana';
adalaber.age = 34;
adalaber.job = 'periodista';
adalaber.speak = function() {
    return 'Hola, me llamo ' + this.name;
};

console.log(adalaber.speak());

const adalaber2 = {};
adalaber2.name = 'Rocío';
adalaber2.age = 25;
adalaber2.job = 'actriz';
adalaber2.speak = function() {
    return 'Holis, me llamo ' + this.name;
};

console.log(adalaber2.speak());