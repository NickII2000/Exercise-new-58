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
Array.prototype.someMethod = function () { };

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

const salaries = {
    John: 500,
    Ivan: 1000,
    Ann: 2500,
    sayHello: function () {
        console.log('Hillo');
    },
};

salaries[Symbol.iterator] = function () {
    return {
        current: this.John,
        last: this.Ann,
        next() {
            if (this.current < this.last) {
                this.current = this.current + 500;
                return { done: false, value: this.current };
            } else {
                return { done: true };
            }
            // {done: true, value: 123}
        }
    };
};

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// console.log(iterator.next());

// for (const res of salaries) {
//     console.log(res);
// }