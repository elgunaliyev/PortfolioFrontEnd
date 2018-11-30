function addNumbers(){
    var intFirstNum = parseFloat(document.getElementById("txtFirstNum").value);
    var intSecondNum = parseFloat(document.getElementById("txtSecondNum").value);
   /*  var intFirstNum = parseFloat(firstNum);
    var intSecondNum = parseFloat(secondNum);

        if (firstNum + secondNum == "") {
            alert("Fill the all number Inputs");
            return;
            } 
        else */ if(isNaN(intFirstNum) && isNaN(intSecondNum) ) {
            alert("Add a valid number to all Inputs");
            return;
        }
        else if(isNaN(intFirstNum)) {
            alert("Add a valid number to 1st number Input")
            return;
        } 
        else if(isNaN(intSecondNum)) {
            alert("Add a valid number to 2nd number Input")
            return;
            } 
         document.getElementById("result").value = intFirstNum + intSecondNum;
}
function getEmailandDomainParts(){

    var emailAdress = document.getElementById("txtEmailAddress").value;

    var emailPart= emailAdress.substring(0,emailAdress.indexOf("@"))
    var domainPart= emailAdress.substr(emailAdress.lastIndexOf("@")+1);

    document.getElementById("txtEmailPart").value = emailPart;
    document.getElementById("txtDomainPart").value = domainPart;
}


// var userInput= Number(prompt("Please type your number",""));
//  var myNumber=   userInput == 1 ? "Your number is " + userInput + ". Refresh the page" :
//                 userInput == 2 ?  "Your number is " + userInput + ". Refresh the page" :
//                 userInput == 3 ? "Your number is " + userInput + ". Refresh the page" :
//                 "Wrong number. Refresh the page" ;

// alert(myNumber);


