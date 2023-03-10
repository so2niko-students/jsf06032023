// Вираз, операція
// Оператор
// Операнд
// [ операція присвоєння ]
// [ оператор присвоєння = ]
// [ операнд x ]
// [ операнд 10 ]
const tableWeight = 10;
const tableWeightText = tableWeight + 'кг';

let counter = 10;
// const вишиванка = 'чиста';
// latin_$ --> 234423423423
// console.log(`Counter: ${ counter++ }`);
console.log(`Counter: 

${ ++counter }`);
console.log(`Counter: ${ counter }`);
// console.log(вишиванка);

//Comparison
// ==
// ===
console.log(false == '');
console.log(false === '');

console.log('A > a', 'A' > 'a');
console.log('a > A', 'a' > 'A');

console.log([10023, 556, 59, 4, 82, .3, -4].sort());

// && || ! 
console.log(true || false);
console.log(false || true);
console.log(true || true);
console.log(false || false);
//! & | ~ ^ << >> >>>

const PI = 3.14;
console.log(~~PI);
const E = 2.7;
console.log(~~E);
const temperature = -3.3;
console.log(Math.floor(temperature));
console.log(~~temperature);

if(true){
    // do
}else{
    // do
}

const examPoints = ~~(Math.random() * 100);
let text = `Greetings, your points is ${ examPoints }`;

// if(examPoints >= 90){
//     text += ' Wow. You are marvelous';
// }

// if(examPoints >= 90) text += ' Wow. You are marvelous';
// if(examPoints >= 90){ text += ' Wow. You are marvelous'; }
examPoints >= 90 ? text += ' Wow. You are marvelous' : null;
examPoints >= 90 ? text += ' Wow. You are marvelous' : '';

text += examPoints >= 90 ? ' Wow. You are marvelous' : '';

console.log(text);
console.log(Boolean(text));
console.log(!!text);

function message(text){
    if(!text){
        console.log('You forgot add text message');
    }else{
        console.log(text);
    }
}

message();
message('Hell');
message('');

//! ternary


// TODO: continue

//! Arrays
const arr = [
    1, -4, 'he', true, null, undefined, [1, 22], {
    name : 'hello'
}, [[[]], []]];

arr.push(33);

arr[100] = 100;

arr.length = 3;
// console.clear();
// arr.forEach(console.log);

console.log(arr);

// splice

const students = [
    {
        name : 'Andrii',
        surname : 'Nasadiuk',
    },
    {
        name : 'Pavlo',
    },
    {
        name : 'Oleksandr',
    },
    {
        name : 'Yehor',
    },
];

students[0].notification = true;
students[1].surname = 'Saliuk';

// const us = students.splice(1, 2);//Вирізає
const us = students.splice(1, 2, { name: 'Valeriia' });//Вставка

console.log('students', students);
console.log(us);

// const shortNames = [];
// const studentsLen = students.length;

// for(let i = 0 ; i < studentsLen; i += 1){
//     if(students[i].name.length <= 6){
//         shortNames.push(students[i]);
//     }
// }

const shortNames = students.filter(el => el.name.length <= 6);

console.log('shortNames', shortNames);
