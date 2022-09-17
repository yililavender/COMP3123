//100675355_COMP3123-exec02
// Exercise 1:
function gretter(myArray, counter){
    let greetText = 'Hello ';
    for(let index in myArray){
        console.log(greetText + myArray[index]);
    }
}

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);


// Exercise 2:
const capitalize = ([firstLetter, ...restLetters]) => 
    firstLetter.toUpperCase() + restLetters.join('');

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));



// Exercise 3:

const colors = ['red', 'green', 'blue'];
const capitalizadColors = colors.map((firstLetter,...restLetter) =>
    firstLetter.toUpperCase() + restLetter.join(","));

console.log(capitalizadColors);


// ['Red', 'Green', 'Blue']

// Exercise 4:

let values = [1,60,34, 30, 20, 5];
let filterLessThan20 = values.filter(x => {
    if(x<20){
        return x;
    }
})
console.log(filterLessThan20);

// output[1,5]






// Exercise 5:
let array = [1, 2, 3, 4];
let calculateSum = array.reduce((total, next) => total + next);
let calculateProduct = array.reduce((product, next) => product * next);
console.log(calculateSum);
console.log(calculateProduct);

// output: 10
//  24




// Exercise 6
class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    details(){
        `Model: ${model} Engine ${year}`;
    }
}

// Subclass - extends Car super class
class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }

    details(){
        super.details();
    }

    info(){
        `${model} has a ${balance} of $30000.00 `;
    }


}
const car2 = new Car('Pontiac Firebird', 1976); 
console.log(car2.details());

const sedan= new Sedan('Volvo so·, 2018, 30000');
console.log(sedan.info());

// Output
//Model: Pontiac Firebird Engine 1976
// Volvo SD has a balance of $30000.00
