
// hook alla lista
const ul = document.querySelector("ul.box");

//stampa in console i numeri da 1 a 100
for (i = 1; i < 100; i++) {
    //creo element lista
    const li = document.createElement('li');
    // 3- fizz ;5-buzz
    if ((i % 3 === 0) && (i % 5 === 0)) { //multiplo di 3 e 5
        console.log("FizzBuzz");
        li.className = "tile fizz buzz";
        li.append("FizzBuzz");
    } else if ((i % 3 === 0) && (i % 5 !== 0)) {  //multiplo  solo di 3 
        console.log("Fizz");
        li.className = "tile fizz";
        li.append("Fizz");
    } else if ((i % 3 !== 0) && (i % 5 === 0)) {  //multiplo solo di 5
        console.log("Buzz");
        li.className = "tile buzz";
        li.append("Buzz");
    }
    else { //ne multiplo di 3 ne di 5
        console.log(i);
        li.className = "tile";
        li.append(i);
    }
    ul.append(li);
}