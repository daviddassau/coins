var enteredAmount = prompt("Enter a dollar amount of your choosing");

// converting user input from a string to a number
enteredAmount = parseFloat(enteredAmount);

let numberOfQuarters = 0;
let numberOfDimes = 0;
let numberOfNickels = 0;
let numberOfPennies = 0;
let quarter = 25;
let dime = 10;
let nickel = 5;
let penny = 1;

//converting the entered amount from a potential decimal into a whole number
let wholeInput = enteredAmount * 100;

function coinGrab(input, coin){
    while (input >= coin) {
        input -= coin;
        if (coin = quarter) {
        numberOfQuarters++;
      } 
        else if (coin = dime) {
        numberOfDimes++;
      } 
        else if (coin = nickel) {
          numberOfNickels++;
        }
        else if (coin = penny) {
          numberOfPennies++;
        }
    
    }   
    return input;
}


function countCoins(input) {
    var remainderFromQuarters = coinGrab(input, quarter);
    var remainderFromDimes = coinGrab(remainderFromQuarters, dime);
    var remainderFromNickels = coinGrab(remainderFromDimes, nickel);
    var remainderFromPennies = coinGrab(remainderFromNickels, penny);
    console.log("Quarters: " + numberOfQuarters);
    console.log("Dimes: " + numberOfDimes);
    console.log("Nickels: " + numberOfNickels);
    console.log("Pennies: " + numberOfPennies);
}
countCoins(wholeInput);