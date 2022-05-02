const ul = document.querySelector("ul.box");
console.log(ul);




//stampa in console i numeri da 1 a 100
for (i = 1; i <= 100; i++){
    // 3- fizz ;5-buzz
    if((i%3 ===0) && (i%5 ===0)){
        console.log("FizzBuzz");
    }else if((i%3 ===0) && (i%5 !==0)){
        console.log("Fizz");
    }else if((i%3 !==0) && (i%5 ===0)){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}