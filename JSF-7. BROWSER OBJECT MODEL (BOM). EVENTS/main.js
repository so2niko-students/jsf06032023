const DND = {
    el : null,
    isStart : false,
    shift : 25
};

const l = (...el) => console.log(...el);

const eventLog = ev => {
    l(Date.now(), ev.type);
    l(ev);
}
const elements = [...document.querySelectorAll('.el')];

const square = ev => {
    ev.target.style.borderRadius = '0';
    eventLog(ev);
}

const red = ev => {
    ev.target.classList.add('red');
    eventLog(ev);
}

const letterA = ev => {
    ev.target.innerText = 'A';
    eventLog(ev);
}

const memory = (ev) => {
    console.log('DND start');
    DND.el = ev.target;
    DND.isStart = true;
    DND.el.classList.add('absolute');
}

const drop = (ev) => {
    DND.el.classList.remove('absolute');
    DND.el = null;
    DND.isStart = false;
    console.log(ev);
    isInBasketRight(ev);
}

elements.forEach(el => {
    el.addEventListener('click', square);
    el.addEventListener('mousedown', memory);
    el.addEventListener('mouseup', drop);
});

document.body.addEventListener('mousemove', (ev) => {
    if(DND.isStart){
        DND.el.style.left = `${ ev.x - DND.shift }px`;
        DND.el.style.top = `${ ev.y - DND.shift }px`;
    }else{
        // elements.forEach(el => el.classList.remove('hover'));
        if(ev.target.dataset.element){
            console.log(ev.target.innerText);
        }
    }
});


const basketRight = document.querySelector('.right');
basketRight.onclick = () => console.log('click onclick property');
// Через HTML attribute та onEvent властивість можна задати тільки по 1 слухачу на кожен івент

basketRight.addEventListener('click', () => console.log('addEventListener1'));
basketRight.addEventListener('click', () => console.log('addEventListener2'));
basketRight.addEventListener('click', () => console.log('addEventListener3'));
basketRight.addEventListener('click', () => console.log('addEventListener4'));

document.querySelector('form').addEventListener('submit', (ev) => {
    ev.preventDefault();
    console.log(ev);
});

const isInBasketRight = ev => {
    const bl = basketRight;
    console.dir(basketRight);
}