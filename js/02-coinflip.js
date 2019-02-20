////1.	Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number.
var coinFlip = Math.round(Math.random());

////2.	Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
var choice = null;
alert("Let's play a game!");
do{
    choice = prompt("Heads or tails? (Please type one in.)");
    if(typeof(choice) != "object" && choice != ""){
        choice = choice.toLowerCase();
        if(choice === "heads" || choice === "tails")
            alert("Thanks! You chose: " + choice + "\n");
        else
            alert("Please type something valid in. (Heads or Tails)");
    }else if(choice == "")
        alert("Please enter something...");
    else if (typeof(choice) == "object")
        alert("Canceling is not an option! (Technically...)");
    
}while(typeof(choice) == "object" || !(choice === "heads" || choice === "tails"));

////3.	Use a conditional to check the result of the coin flip. 
////If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails. 

//var coinResult;
//
//alert("Computer: Heads is 1, Tails is 0.\nCoinFlip: " + coinFlip + 
//      "\nYou chose: " + choice );
//if (coinFlip == 1)
//    coinResult = "heads";
//else
//    coinResult = "tails";


//////4.	If the result is heads and the user selects heads 

//if (coinResult == "heads" && choice == "heads")
//    alert("The flip was heads and you chose heads...you win!");
//    
//////5.	If the result is heads and the user selects tails 
//if (coinResult == "heads" && choice == "tails")
//    alert("The flip was heads but you chose tails...you lose");
//
//////6.	If the result is tails and the user selects heads
//if (coinResult == "tails" && choice == "heads")
//    alert("The flip was tails but you chose heads...you lose!");
//
//////7.	If the result is tails and the user selects tails
//if (coinResult == "tails" && choice == "tails")
//    alert("The flip was tails and you chose tails...you win!");
//


////8.	Use two Math methods to get a solid whole number on the coin flip. Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result.

//var coinResult;
//
//alert("Computer: Heads is 1, Tails is 0.\nCoinFlip: " + coinFlip + 
//      "\nYou chose: " + choice );
//
//if(choice == "heads")
//    choice = true; //Heads = 1
//else
//    choice = false; //Tails = 0
    
////Choice [USER]
////Heads = 1 //True
////Tails = 0 //False

////CoinFlip [RESULT]
////Heads = 1 //True
////Tails = 0 //False


//if (coinFlip && choice)
//    alert("The flip was heads and you chose heads...you win!");    
//else if (coinFlip && !choice)
//    alert("The flip was heads but you chose tails...you lose");
//else if (!coinFlip && choice)
//    alert("The flip was tails but you chose heads...you lose!");
//else if (!coinFlip && !choice)
//    alert("The flip was tails and you chose tails...you win!");
//else
//    alert("Error.");
