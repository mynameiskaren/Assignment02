//Write an application that counts down to 0 based on the number that a user passes into a prompt. 
//If the number is 10, it should count down from 10 to 0. If the number is 100, it should count down from 100 to 0 and so on.  

var countDown = null;
alert("Lets play the countdown game!");
do{
    countDown = prompt("Please enter a whole number. \n(Your number will be rounded if it in decimal format.)");
    
    if(countDown == 0){
        break;
    }
    //Check if CountDown had any input inside
    //If pressed canceled (Object)  --> If ! type of object
    else if (typeof(c0ountDown) != "object"){
        
        //If pressed ok with no input (String) --> If string had characters
        if(countDown != ""){
            //If parsed characters are numbers
            if (!Number.isNaN(Number.parseFloat(countDown))){
                countDown = Math.round(Number(countDown));
            }else
                alert("Your input isnt a number.");
        }
        else
            alert("Enter something before hitting \"OK.\""); 
    }else
        alert("Please do not hit cancel.\nPlease enter a whole number. \n(Your number will be rounded if it in decimal format.)");
}while(typeof(countDown) == "object" || countDown == "" || Number.isNaN(Number.parseFloat(countDown)));

//Debugging
//alert("Your number is: " + countDown);

for(;countDown >= 0; countDown-- ){
    document.write(countDown + "<br>");
}

document.write("BLASTOFF!");