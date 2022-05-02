
// hook alla lista
const ul = document.querySelector("ul.box");
console.log(ul);

//stampa in console i numeri da 1 a 100
for (i = 1; i < 100; i++) {
    //creo element lista
    const li = document.createElement('li');
    // 3- fizz ;5-buzz
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
        li.className = "tile fizz buzz";
        li.append("FizzBuzz");
        ul.append(li);
    } else if ((i % 3 === 0) && (i % 5 !== 0)) {
        console.log("Fizz");
        li.className = "tile fizz";
        li.append("Fizz");
        ul.append(li);
    } else if ((i % 3 !== 0) && (i % 5 === 0)) {
        console.log("Buzz");
        li.className = "tile bizz";
        li.append("Buzz");
        ul.append(li);
    }
    else {
        console.log(i);
        li.className = "tile";
        li.append(i);
        ul.append(li);
    }
}