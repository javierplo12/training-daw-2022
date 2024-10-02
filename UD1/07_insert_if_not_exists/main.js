const assert = require('assert').strict;

function insertIfNotExists(array, item, position) {
    console.log(array.includes (item))
 
    if (array.includes(item) == false) {
      
        if (position === true) {
            array.unshift(item);
        } else {
        
            array.push(item);
        }
    }
    return array;
}


let array = ['pera', 'manzana'];

let result = insertIfNotExists(array, 'manzana', false);
assert.deepStrictEqual(result, ['pera', 'manzana']);

result = insertIfNotExists(array, 'melón', false);
assert.deepStrictEqual(result, ['pera', 'manzana', 'melón']);

result = insertIfNotExists(array, 'melocotón', true);
assert.deepStrictEqual(result, ['melocotón', 'pera', 'manzana', 'melón']);

