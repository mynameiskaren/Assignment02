var num1 = null, num2 = null;
alert("Welcome to the Largest Winning Numbers Game!\n\nObjective: Choose two valid numbers and we will pick the largest of the two!\n");


//Do-While Loop to obtain user input for Number 1
do{
    num1 = prompt("Please enter the first integer.");

    //Check if Num1 had any input inside
    //If pressed canceled (Object)  --> If ! type of object
    if (typeof(num1) != "object"){
        
        //If pressed ok with no input (String) --> If string had characters
        if(num1 != ""){
            //If parsed characters are numbers
            if (!Number.isNaN(Number.parseFloat(num1))){
                num1 = Number(num1);
            }else
                alert("Your input isnt a number.");
        }
        else
            alert("Enter something before hitting \"OK.\""); 
    }else
        alert("Please do not hit cancel, please enter a valid integer.");
}while(typeof(num1) == "object" || num1 == "" || Number.isNaN(Number.parseFloat(num1)));


//Do-While Loop to obtain user input for Number 2
do{
    num2 = prompt("Please enter the second integer.");

    //Check if Num2 had any input inside
    //If pressed canceled (Object)  --> If ! type of object
    if (typeof(num2) != "object"){
        //If pressed ok with no input (String) --> If string had characters
        if(num2 != ""){
            //If parsed characters are numbers
            if (!Number.isNaN(Number.parseFloat(num2))){
                num2 = Number(num2);
            }else
                alert("Your input isnt a number.");
        }
        else
            alert("Enter something before hitting \"OK.\""); 
    }else
        alert("Please do not hit cancel, please enter a valid integer.");
}while(typeof(num2) == "object" || num2 == "" || Number.isNaN(Number.parseFloat(num2)));


//Check to see if num1 is bigger than num2
if (num1 > num2)
    alert(num1 + " is larger than " + num2);
//Check to see if num2 is bigger than num1
else if (num1 < num2)
    alert(num2 + " is larger than " + num1);
//Otherwise, they are equal
else
    alert(num1 + " and " + num2 + " are equal!");