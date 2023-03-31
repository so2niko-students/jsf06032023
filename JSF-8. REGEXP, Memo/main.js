// `^1{3}|^.{3}1{3}|1{3}$|.{0,2}1.{2}1.{2}1.{0,2}|1.{3}1.{3}1|.{2}1.1.1.{2}`

// RegExp.test(String) : bool -> Перевірки даних на щось (мило, пароль, картки, телефони)
// const regPIN = /^[0123456789]{4}$/;
// const regPIN = /^[0-9]{4}$/;
const regPIN = /^\d{4}$/;
const pins = ['111', '12345', '3344', 'hell', '3hh2', '044.'];
pins.forEach(p => console.log(p, regPIN.test(p)));

// String.match(RegExp) : [] || null -> для пошуку 
const slide13 = `Metacharacters &#9784; are/d characters with a special meaning:
\\d matches any digit, equivalent to [0-9]
\\D matches any character that’s not a digit, equivalent to [^0-9]
\\w matches any alphanumeric character (plus underscore), equivalent to [A-Za-z_0-9]
\\W matches any non-alphanumeric character, anything except [^A-Za-z_0-9]
\\s matches any whitespace character: spaces, tabs, newlines 
\\S matches any character that’s not a whitespace
\\0 matches null
\\n matches a newline character
.  matches any character that is not a newline char (e.g. \\n)


`;

const regMetaCh = /\\.{1}/mg;
const regMetaCheat = /^.{1,2}\s/mg;
const regCons = /\[.+\]/g;
// const regMetaCh = new RegExp('\\', 'g');
console.log(slide13.match(regMetaCh));
console.log(slide13.match(regMetaCheat));
console.log(slide13.match(regCons));
console.log(regMetaCh.exec(slide13));

console.log(slide13);

// String.replace(RegExp, ...) : string -> 
const priceList = `
- liner - 77₴
- pen - 34₴
- pencil - 38₴
- pencil - 1$
- pencil Koh i Nor - 1€
`;
//LF  \n
//CRLF  \r\n
console.log(priceList.replace(/(\d+)([\₴\€])/g, '$2$1'));
// console.log(priceList.replace(/(?<pen>pen.*\b)/g, '\k<pen>22'));

const show = () => {
    const r = Math.random();

    console.log(r);
}
//5Mb
// for(let i = 0; i < 10; i += 1){
//     show();
// }
//5Mb

//Closure
function createCounter(name, start = 0){
    let count = start;
    return {
        inc: function(){
            count += 1;
            return {name, count};
        },
        dec: function(){
            count -= 1;
            return {name, count};
        },
        info: function(){
            return {name, count};
        },
    }
}

const counter1 = createCounter('лічильник Альфа');
const counter2 = createCounter('лічильник Браво', 100);

// console.log(counter1.inc());
// console.log(counter1.inc());
// console.log(counter2.inc());
// console.log(counter2.inc());
// console.log(counter1.inc());
// console.log(counter1.info());
// console.log(counter2.info());
