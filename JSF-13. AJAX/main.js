const url = 'https://randomuser.me/api/';

function getUsers(count = 1){
    return `${ url }/?results=${ count }`;
}

function ajax(url, cb){
    const aja = new XMLHttpRequest();
    aja.onload = () => cb(aja.responseText);
    aja.open('GET', url, true);
    aja.send();
}

// ajax(url, d => console.log(d));

// fetch(url).then(r => r.json()).then(console.log);
axios.get(getUsers(33)).then(console.log);