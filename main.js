// Prompt user for input
let enteredAmount = prompt("Enter a number:");
//Coin counting factory
function amtOfCoins(input){
    // debugger;
    input = parseFloat(input) * 100;
    input = Math.floor(input.toFixed(2)); 
    
    let numberOfQuarters = 0;
    let numberOfDimes = 0;
    let numberOfNickels = 0;
    let numberOfPennies = 0;
    let quarter = 25;
    let dime = 10;
    let nickel = 5;
    let penny = 1;
    let documentString = "";
    while (input >= quarter) {
        input -= quarter;        
        numberOfQuarters++; 
    }; 
    while (input >= dime) {
        input -= dime;
        numberOfDimes++;
    };
    while (input >= nickel) {
        input -= nickel;
        numberOfNickels++;
    };
    while (input >= penny) {
        input -= penny;
        numberOfPennies++;
    };
    let coinPurse = {
        quarters: numberOfQuarters,
        dimes: numberOfDimes,
        nickles: numberOfNickels,
        pennies: numberOfPennies
  };
  return documentString = "That amount comes out to " + numberOfQuarters + " quarter(s), " + numberOfDimes + " dime(s), " + numberOfNickels + " nickel(s), and " + numberOfPennies + " penny(s).";
};
document.write(amtOfCoins(enteredAmount));