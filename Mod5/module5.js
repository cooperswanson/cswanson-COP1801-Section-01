// Cooper Swanson
// Created 11-1-24
// Last update: 11-1-24
// External JS File for Mod5/index.html


//Function Definitions

// Main function called by //Mod5/index.html
function main() {
    let myDog = {name : "Danny", tvProgram : "JoJo's Bizarre Adventure", breed : "Great Dane", mySound : "I am trying to escape the furnace that the villian Dio threw me into"} ; // Instantiating object literal
    document.getElementById("fillable1").textContent = "Hi! My name is "+myDog.name+". I am a "+myDog.breed+" from the TV Show "+myDog.tvProgram+". If I was barking it would sound like "+myDog.mySound+"." ; //Displays message in <h4> html object
    let myDogConst = new Object() ; // Instatiating object with constructor
    myDogConst.name = "Danny" ;
    myDogConst.tvProgram = "JoJo's Bizarre Adventure" ;
    myDogConst.breed = "Great Dane" ;
    myDogConst.mySound = "I am trying to escape the furnace that the villian Dio threw me into" ;
    myDogConst.canTalk = false ;
    myDogConst.myGreeting = function(){alert("Hi! My name is "+myDogConst.name+". I am a "+myDogConst.breed+" from the TV Show "+myDogConst.tvProgram+". If I was barking it would sound like "+myDogConst.mySound+".")} ;
    myDogConst.myGreeting() ; //Calling myGreeting method stored in the myDogConst object
}