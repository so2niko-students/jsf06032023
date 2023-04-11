async function testAwait() {
    const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Ready"), 3000)
    });
    const result = await promise; // will wait until the promise is fulfilled
    console.log(result); // "Ready!"
}
console.log('before test');
testAwait();
console.log('after test');
