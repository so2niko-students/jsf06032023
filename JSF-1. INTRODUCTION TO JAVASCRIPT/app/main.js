console.time('Naruto');
console.log('dog');

document.querySelector('.js-1').style.color = 'red';


//! Variables
house = 3; // TODO: Дорозказати про hoisting на функціях
var house;

let appartment;
appartment = 22;

let tableSize = 'xxl';
let whiteTableSize = tableSize; //копіювання по значенню
tableSize = 'm';

const bottleOfWaterVolume = '2l';

const salary = 6500n;

console.log('house', house);
console.log('appartment', appartment);
console.log('whiteTableSize', whiteTableSize);

//? Primitives: Number, String, Big Int, null, undefined, boolean, Symbol

//? Non-primitive: Object

let marker1 = {
    color: 'black',
    capacity : 100,
    name : 'Centropen',
    isNew : true,
    size : '0.5'
};

let marker2 = marker1; //Копіювання по посиланню
marker1.capacity = 88;
marker2.isNew = false;

changeSize(marker1);
console.log(marker2);
console.log(marker2 == marker1);

function changeSize(obj){
    obj.size = '0.1';
}

console.log(marker1.name);
console.info(marker1.name);
console.error(marker1.name);
console.warn(marker1.name);
console.count(marker1.name);
console.count(marker1.name);
console.count(marker1.name);
console.count(marker1.name);
console.count(marker1.name);
console.count(marker1.name);
console.table(marker1);
console.log(new Date());
console.dir(new Date());

console.timeEnd('Naruto');

console.log(`%cJS Fundamentals`, `color:red;padding:15px;background-color:white;`);
console.clear();

/*
alert - щось показати
comfirm - щось підтвердити(або ні)
prompt - щось ввести
*/