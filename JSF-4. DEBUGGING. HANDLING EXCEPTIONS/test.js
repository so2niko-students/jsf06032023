function calc() {
    const { a, b, op } = calcInput();

    const answer = calcOp(a, b, op);

    alert(answer);
}

function calcInput() {
    const a = +prompt('введіть число a:');
    const b = +prompt('Введіть число b:');
    const op = +prompt('Введіть арифметичну дію:');

    return { a, b, op };
}

function calcOp(a, b, op) {
    if (op === 1) return a - b;
    if (op === 2) return a * b;
    if (op === 3) return a / b;
    return a + b;
}

calc();