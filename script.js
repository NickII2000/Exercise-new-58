'use strict';

// const line = Symbol('line');

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    },
    // [line]: 777,
};

for (const key in user) {
    console.log(user[key]);
}

// for (const key of user) {
//     console.log(key);
// }

const arr = ['b', 'a', 'c'];

console.dir(arr);

for (const key in arr) {
    console.log(arr[key]);
}

for (const key of arr) {
    console.log(key);
}

const str = 'string';

for (const key in str) {
    console.log(str[key]);
}