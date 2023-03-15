//void, int, float, bool

const hokusai = (text, callback) => {
    if(Math.random() > .5){
        callback();
        return text;
    }
}

const greeting = () => console.log('URAAAAAA');

for(let i = 0; i < 10; i += 1){
    console.count(hokusai('hello', greeting));
}

let email = 'ff22@gmail.com';//global

const getUserInfo = (user) => {
    let email = `${ Math.floor(Math.random() * 65535).toString(16) }@gmail.com`;//local

    if(Math.random() > .5){
        const email = 232;//block
        user.email = email;
        return;
    }

    const anotherFunction = () => {
        const email = 'another@email.com';//local
    }
    user.email = email;
}

const user = {
    name : 'Admin',
};

getUserInfo(user);

console.log(user);

//Функція як аргумент, яка буде потім запускатись - callback

const pow = (base, power) => {//2 Kapibara
    console.count('pow');
    if(power == 0) return 1;
    return base * pow(base, power - 1);
}//2 Kapibara

const powLoop = (base, power) => {//2 Kapibara
    console.count('powLoop');
    let answer = 1;//1 Kapibara
    for(let i = 1; i <= power; i += 1){
        answer *= base;
    }
    return answer;
}//3 Kapibara

// console.log(pow(2, 10000));
console.log(powLoop(2, 10000));
console.log(2 ** 10);

//IIFE
const count = 1;

(function(){
    const count = 1000;
    console.log('hello' + count);
})();

const counter = () => {
    let i = 0;
    return () => {
        i++;
        return i;
    }
}

const c1 = counter();
const c2 = counter();
c1();
c1();
c1();
c1();
console.log('c1', c1());
console.log('c2', c2());

show1();

function show1(){
    console.log('show1', 1);
}

show2();
const show2 = () => {
    console.log('show2', 2);
}
