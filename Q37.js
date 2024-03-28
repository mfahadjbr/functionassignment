"use strict";
function make_shirt(size, message = 'i love typescript') {
    console.log(`we will sell you a shirt of sizs: ${size},with message on it: ${message}`);
}
make_shirt('larger');
make_shirt('medium');
make_shirt('small', 'i love javascript');
