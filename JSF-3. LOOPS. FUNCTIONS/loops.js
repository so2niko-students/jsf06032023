// Цикл з передумовою
// let count = 0;
// while(count < 10){
//     // console.log('count:', count);
//     count++;
// }

// console.log('result count: ', count);

// for(;count--;){
//     console.log('count:: ', count);
// }

// for(let i = 1; i <= 10; i += 1){
//     if(!(i % 3)){
//         continue;
//     }
//     console.log('i: ', i);
// }

// let name = 'Mykola';
// if(true){
//     name = 'Nick';
//     console.log(name);
// }

// console.log(name);

// console.log('result i: ', i);

// Цикл з післяумовою
// let timer = 10;
// do{
//     console.log('timer: ', timer);
//     timer--;
// }while(timer > 0);

//break - Зупиняє роботу циклу
//continue - Переходить до наступної ітерації


const randoms = new Array(10);
const user = {
    login : 'nagibator',
    email : 'nagibator22@i.ua',
    password : '111222333',
    '--@#' : 'hello',
};

for(let i = 0; i < 10; i += 1){
    let r = randoms[i];
    r++;
    r -= 100;
    // randoms[i] = Math.floor(Math.random() * 100);
}

// console.log(randoms);
//for of
for(let r of randoms){
    r += 100;
    console.log(r);
}

//for in
// for(const k in user){
//     console.log(k, user[k]);
// }

// console.log(user['--@#']);



// console.log(randoms);