// Cooper Swanson
// 10-20-2024
// External JS File for Mod3/index.html


// Function iterates through endVal and displays whether the current iteration count is odd or even
function oddEven() {
    let endVal = 10 ;
    let currVal = 0 ;
    let checkVal = 0 ;
    let text = "" ;
    while (currVal <= endVal) {
        checkVal = currVal % 2 ;
        if (checkVal !== 0) {
            text += "Count "+currVal+" is odd! " ; 
        }
        else {
            text += "Count "+currVal+" is even! " ;
        } ;
        currVal = currVal+1 ;
    }
    document.getElementById("fillable1").textContent = text ;
}

//Function takes user int input <5 and >20 as myNum and then displays iterative loop from 1 until countVal == myNum
function inputLoop() {
    let countVal = 1 ;
    let countText = "Counter: " ;
    let myNum = prompt("Please input a number between 5 and 20: ");
    while (myNum < 5 || myNum > 20 ){
        myNum = prompt("Please input a number that is actually between 5 and 20: ");
    }
    do{
        countText += countVal+" " ;
        countVal = countVal + 1 ;
    } while(countVal<myNum);
    document.getElementById("fillable2").textContent = countText ;
}

//Function to display contents of Array
function arrayDisplay() {
    let classList = ["Accounting","Algebra","Programming","Art","Data Analytics"] ;
    let displayText = "Class List: " ;
    classList.forEach((element) => displayText += element+", ") ;
    document.getElementById("fillable3").textContent = displayText ;
}