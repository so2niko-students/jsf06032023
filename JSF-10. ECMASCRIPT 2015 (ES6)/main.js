function summ(){
    // console.log(arguments);
    // let s = 0;
    // for(let i = 0; i < arguments.length; i += 1){
    //     s += arguments[i];
    // }

    // return s;
    return [...arguments].reduce((acc, el) => acc + el);
}

const sumMulti = function(type, ...numbers){
    const funcs = {
        '+' : (acc, el) => acc + el,
        '*' : (acc, el) => acc * el,
    };

    return numbers.reduce(funcs[type] || (el => 0));
};

const sumMulti2 = ({ op, operands }) => {
    // const { op, operands } = settings;
    let a = 3;
    let b = 'g';
    // let temp = a;
    // a = b;
    // b = temp;

    [a, b] = [b, a];
}

const summ2 = (...tikitaki) => tikitaki.reduce((acc, el) => acc + el);
const arrNums = [1,2,3,445,564,345234,234152341,6765,-444];
summ2(...arrNums);

// console.log(summ2(1,2,3,445,564,345234,234152341,6765,-444));
console.log(summ(1,2,3,445,564,345234,234152341,6765,-444));
// console.log(sumMulti('+', 1, 3, 4));
// console.log(sumMulti('*', 1, 3, 4));
// console.log(sumMulti(1, 3, 4));
// console.log(sumMulti2({op : '+', operands : [1, 44, 3, 64]}));

const arr1 = [1, 44, 3, 64];
const arrInJSON = '[1, 44, 3, 64]';
const arrInJSON2 = '{"numbers":[1, 44, 3, 64]}';
const arrFromJSON = JSON.parse(arrInJSON);
console.log(typeof arrInJSON);
console.log(typeof arrFromJSON);

console.log([...document.querySelectorAll('meta')]);

const values = [
    {
      "variable": "email1",
      "email": "u0od@gmail.com"
    },
    {
      "variable": "email2",
      "email": "u0odd@gmail.com"
    },
    {
      "variable": "email1",
      "email": "haha@gmail.com"
    }
// ].reduce((acc, {email, variable}) => {
//     acc[variable] = email;
//     return acc;
// }, {});
].reduce((acc, {email, variable}) => ({[variable]: email, ...acc}), {});

console.log(values);

const arrWithDupl = [1, 4, 'fenix', true, 'eleven', 3, 4, true, true, false];
const arrWithDupl2 = [1, 4, 'fenix', { name: 'armani'}, true, 'eleven', 3, 4, { name: 'armani'}, true, true, false];

const set1 = new Set(arrWithDupl);
const set2 = new Set(arrWithDupl2);

console.log(set1);
console.log(set2);

const user = { name: 'armani'};
