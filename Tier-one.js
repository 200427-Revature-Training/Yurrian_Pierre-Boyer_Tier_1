
/* PROBLEM a */

function getTypeOf(input) {

    switch (typeof(input)) {
        case 'number':
        input = 'Number';
        break;

        case 'string':
        input = 'String';
        break;

        case 'boolean':
        input = 'Boolean';
        break;

        case 'object':
        input = 'Object';
        break;

        case 'undefined':
        input = 'Undefined';
        break;

        case 'null':
        input = 'Null';
        break;

        case 'function':
        input = 'Function';
        break;

        case 'bigint':
        input = 'BigInt';
        break;

        case 'symbol':
        input = 'Symbol';
        break;
    }

    return input;

}

//console.log(getTypeOf(456));

/* PROBLEM b */

function multiplier(...args) {
    let total = 1;
        for (let i = 0; i < arguments.length; i++) {
           total *= arguments[i];
        }
       return console.log(total);
        
}
    
//multiplier(3,3,3);

/* PROBLEM c */

function arrayAdder(arr) {
    let total = 0; 
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;

}

// let intArray = [1, 2, 3];
// arrayAdder(intArray);

/* PROBLEM d */

function comparison(value) {
    let total = 0;
    sValue = value.toString();
    
    for (let i = 0; i < sValue.length; i++) {
        total += ((+sValue.charAt(i)) ** sValue.length);
    }
    if (total !== value) {
        return false;
    } else {
        return true;
    }
} 

//console.log(comparison(1));



