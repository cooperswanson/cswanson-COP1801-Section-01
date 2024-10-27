// Cooper Swanson
// Created 10-25-2024
// Last update: 10-27-24
// External JS File for Mod4/index.html


//Function Definitions

//Checks if serviceQual is valid string input. Valid1-3 must be fully capitalized. This is to unsure that user input capitalization doesn't matter
function stringInputVal(input, valid1, valid2, valid3) {
    let validStrAnswers = [valid1, valid2, valid3] ;
    return (validStrAnswers.indexOf(input) > -1) ; //If it is a valid answer, it will return TRUE, else it will return FALSE
} ;

//Checks if input is between min and max (inclusive)
function minMaxCheck(input, min, max){
    let retVal = input <= max && input >= min ;
    return retVal ; // Returns true if input is between min and max values (inclusive)
}

//Calculates tip value. Percentage should be a decimal
function tipVal(cost, percentage) {
    return cost*percentage ;
}

//Main function. Called by //Mod4/index.html
function serviceModel() {
    let tipPercent = 0.15 //default tip will be 15%
    let serviceCost = prompt("Please enter the cost of the service from $5.00-$500.00: ") ;
    serviceCost = Number(serviceCost) ;
    if (minMaxCheck(serviceCost, 5, 500) == true){ // Checks if input is between 5 and 500
        let serviceQual = prompt("How was the service? [Great] [Okay] [Poor] (Case Sensitive): ") ;
        if (stringInputVal(serviceQual, "Great", "Okay", "Poor") == true){ //Checks if input is acceptable response
            if (serviceQual == "Great"){tipPercent = 0.2}
            else if (serviceQual == "Okay"){tipPercent = 0.15}
            else if (serviceQual == "Poor"){tipPercent = 0.1} ;
            let tipCost = tipVal(serviceCost, tipPercent) ;
            let tipText = tipPercent*100 ; //Gives non-decimal percentage to include in responseText
            let totalCost = serviceCost+tipCost ;
            let responseText = "Thank you for using this service today! Your cost today will be $"+serviceCost+". Because you had '"+serviceQual+"' service, your recommended tip is "+tipText+"%. This would bring your total to: $"+totalCost+" Please have a great day!" ;
            document.getElementById("fillable1").textContent = responseText ; //Adjusts index.html <h4> object to display message.
        }
        else {
            document.getElementById("fillable1").textContent = "Invalid Response" ;
        } ;
    }
    else{
        document.getElementById("fillable1").textContent = "Invalid Response" ;
    };
} ;