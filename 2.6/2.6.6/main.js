
"use strict";

const cestaPears = {
    minValue : 20,
    maxVale : 30,
    currentValue : 25,
    startingValue : 21,
    addPear : function() {
        return this.currentValue + 1;
    },
    deletePear : function() {
        return this.currentValue - 1;
    },
    resetValue : function () {
        return this.startingValue;
    },
}
console.log(cestaPears.resetValue());