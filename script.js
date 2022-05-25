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

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));

