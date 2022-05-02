//stampa in console i numeri da 1 a 100
for (i = 1; i <= 100; i++){
    // 3- fizz ;5-buzz
    if((i%3 ===0) && (i%5 ===0)){
        console.log("fizz buzz");
    }else if((i%3 ===0) && (i%5 !==0)){
        console.log("fizz");
    }else if((i%3 !==0) && (i%5 ===0)){
        console.log("buzz");
    }
    else{
        console.log(i);
    }
}