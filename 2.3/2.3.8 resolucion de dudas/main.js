"use strict";

const year = 3;

const module = year % 4;

const remainingYear = 4 - module;

const nextYear = year + 4 - module;

console.log(nextYear);

