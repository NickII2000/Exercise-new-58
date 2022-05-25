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

const arr = ['b', 'a', 'c'];

for (const key in arr) {
    console.log(arr[key]);
}