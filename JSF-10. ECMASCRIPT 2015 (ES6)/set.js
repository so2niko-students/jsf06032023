class MySet{
    #inner = [];
    constructor(arr = []){
        const arrLen = arr.length;
        if(arrLen){
            for(let i = 0; i < arrLen; i += 1){
                this.#add(arr[i]);
            }
        }
    }

    #add(el){
        if(!this.#inner.includes(el)){
            this.#inner.push(el);
        }
    }
    
    get size(){
        return this.#inner.length;
    }

    add(el){
        this.#add(el);
        return this;
    }

    clear(){
        this.#inner = [];
        // this.#inner.length = 0;
        // while(this.#inner.length){
        //     this.#inner.pop();
        // }
        // console.log(this.#inner);
    }
}

const arrWithDupl2 = [1, 4, 'fenix', { name: 'armani'}, true, 'eleven', 3, 4, { name: 'armani'}, true, true, false];

const myS1 = new MySet(arrWithDupl2);

console.log(myS1);

myS1.clear();