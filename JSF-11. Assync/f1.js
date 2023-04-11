// console.log('before');

// alert('alert');
const islalala = setTimeout(function fetchData() {
    // console.log("Loading ...");
    const serverData = {
        user: "Employee10",
        id: 122,
        location: "Lviv"
    };
    setTimeout(function showData() {
        serverData.received = true;
        // console.log("Data loaded:", serverData);
    }, 1500);

    return true;
}, 1500);

// console.log('after');

function sum(...nums){
    if(nums.length < 2){
        throw new Error('not enough arguments');
    }
    return nums.reduce((acc, el) => acc + el);
}

function multi(...nums){
    return nums.reduce((acc, el) => acc * el);
}

// setTimeout(sum, 2000);

function math1000(cback, ...args){
    try{
        return cback(1000, ...args);
    }catch(err){
        console.error('MY ERROR', err);
    }
}

// console.log(math1000(sum, 33, 22));
// console.log(math1000(sum));
// console.log(math1000(multi, 33, 22));



function myFetch(url){
    function myAjax(res, rej){
        const xhttp = new XMLHttpRequest();
        xhttp.onload = () => res(JSON.parse(xhttp.responseText));
        xhttp.onerror = () => rej(xhttp);
        xhttp.open("GET", url, true);
        xhttp.send();
    }

    return new Promise(myAjax);
}

myFetch('https://randomuser22.me/api/').then(function(data){
    console.log('myFetch', data);
}, function(obj){ 
    console.log('ERROR', obj);
});