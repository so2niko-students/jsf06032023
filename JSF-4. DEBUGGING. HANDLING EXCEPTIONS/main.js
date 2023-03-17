console.log('hdsfadsfds');

try{
    const call1 = (cb, text, time = 3000) => {
        // debugger;
        setTimeout(() => {
            if(typeof cb === 'function'){
                cb(text);
            }else{
                // throw new Error('IT IS NOT A FUNCTION!!!');
                throw { name: 'error 223344', message: 'IT IS NOT A FUNCTION!!!' };
            }
        }, time);
    }
    
    //запити до серверу
    call1(console.log, 'Hello, I am from past', 5000);

    call1();
    //помилки виклику недійсних функцій чи програм

}catch(err){
    console.error('My error', err);
}

// const t = prompt('text code here');

// eval(t);

const obj = {
    name : 'Nick'
};

class Num2{
    constructor(){
        this.a = ~~(Math.random() * 100);
        this.b = ~~(Math.random() * 100);
        this.c = Math.abs(this.a - this.b);
    }
}

const arr10 = [];
for(let i = 0; i < 10; i += 1){
    // const a = ~~(Math.random() * 100);
    // const b = ~~(Math.random() * 100);
    // const c = Math.abs(a - b);
    
    // arr10.push({a, b, c});
    arr10.push(new Num2());
}

console.log(arr10);

//Функція-конструктор
function Num1(){
    let g = 100;
    
    const isG1 = Boolean(g);//явне перетворення даних
    const isG2 = !!g;// неявне перетворення даних

    const gStr1 = '' + g; //неявне перетворення в рядок
    const gStr2 = String(g); //явне перетворення в рядок

    // if(Boolean(g)){
    if(g){
        console.log('це true');
    }

    this.a = ~~(Math.random() * 100);
    this.b = ~~(Math.random() * 100);
    this.c = Math.abs(this.a - this.b);
}

