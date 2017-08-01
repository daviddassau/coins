// Prompt user for input
let enteredAmount = prompt("Enter a number:");
//Coin counting factory
function amtOfCoins(input){
    //debugger;
    input = parseFloat(input) * 100;
    input = Math.floor(input.toFixed(2));   
    let coinPurse = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
  };
    let quarter = 25;
    let dime = 10;
    let nickel = 5;
    let penny = 1;
    let documentString = "";
    while (input >= quarter) {
        input -= quarter;        
        coinPurse.quarters++; 
    }; 
    while (input >= dime) {
        input -= dime;
        coinPurse.dimes++;
    };
    while (input >= nickel) {
        input -= nickel;
        coinPurse.nickels++;
    };
    while (input >= penny) {
        input -= penny;
        coinPurse.pennies++;
    };  
  return documentString = "That amount comes out to " + coinPurse.quarters + " quarter(s), " + coinPurse.dimes + " dime(s), " + coinPurse.nickels + " nickel(s), and " + coinPurse.pennies + " penny(s).";
};
document.write(amtOfCoins(enteredAmount));