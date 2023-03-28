const DOM = {
    left : document.querySelector('.left'),
    right : document.querySelector('.right'),
    isDnD : false, 
    DND : null,
    shift : 25,
};

const isOnRight = ({ x, y }) => {
    const xFrom = DOM.right.offsetLeft;
    const xTo = DOM.right.offsetWidth + DOM.right.offsetLeft;
    const yFrom = DOM.right.offsetTop;
    const yTo = DOM.right.offsetTop + DOM.right.offsetHeight;

    return x >= xFrom && x <= xTo && y >= yFrom && y <= yTo;
}

const generateNumbers = () => {
    let numbersString = '';
    for(let i = 0; i < 10; i += 1){
        numbersString += `<div class="el" data-number="${ i }">${ i }</div>`;
    }
    DOM.left.innerHTML = numbersString;
}

const addListeners = () => {
    [...document.querySelectorAll('.el')].forEach(el => {
        el.addEventListener('mousedown', dragStart);
        el.addEventListener('mouseup', dragEnd);
    });
    document.body.addEventListener('mousemove', dragMove);
}

const dragStart = ev => {
    //перемикаємо галочку, що ми рухаємось
    DOM.isDnD = true;
    //запам`ятовуємо елемент, який рухаємо
    DOM.DND = ev.target;
    //даємо елементу, який рухаємо - властивість absolute
    DOM.DND.classList.add('drag');
}

const dragEnd = ev => {
    DOM.DND.classList.remove('drag');
    const isOn = isOnRight(ev);
    if(isOn){
        DOM.right.innerText += DOM.DND.dataset.number;
    }

    DOM.DND.style.left = undefined;
    DOM.DND.style.top = undefined;

    DOM.DND = null;
    DOM.isDnD = false;
}

const dragMove = ev => {
    if(DOM.isDnD){
        DOM.DND.style.left = `${ ev.x - DOM.shift }px`;
        DOM.DND.style.top = `${ ev.y - DOM.shift }px`;
    }
}

const init = () => {
    generateNumbers();

    addListeners();
}

init();