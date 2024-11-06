// Cooper Swanson
// Created 11-5-24
// Last update: 11-5-24
// External JS File for Mod6/index.html


//Function Definitions

// Main function called by //Mod6/index.html
function main() {
    let myDogConst = new Object() ; // Instatiating object with constructor
    myDogConst.name = "Danny" ;
    myDogConst.tvProgram = "JoJo's Bizarre Adventure" ;
    myDogConst.breed = "Great Dane" ;
    myDogConst.mySound = "I am trying to escape the furnace that the villian Dio threw me into" ;
    myDogConst.canTalk = false ;
    myDogConst.myGreeting = function(){
        if (this.canTalk == true) {
            return "Hi! My name is "+myDogConst.name+". I am a "+myDogConst.breed+" from the TV Show "+myDogConst.tvProgram+". If I was barking it would sound like "+myDogConst.mySound+". I can talk!" ;
        }
        else if (this.canTalk == false) {
            return "Hi! My name is "+myDogConst.name+". I am a "+myDogConst.breed+" from the TV Show "+myDogConst.tvProgram+". If I was barking it would sound like "+myDogConst.mySound+". I cannot talk." ;
        } ;
    } ;
    alert(myDogConst.myGreeting()) ;

    // New code for Module 6

    let myDogBluey = new Object() ;
    myDogBluey.name = "Bluey" ;
    myDogBluey.tvProgram = "Bluey" ;
    myDogBluey.breed = "Australian Cattle Dog" ;
    myDogBluey.mySound = "a funny joke" ;
    myDogBluey.canTalk = true ;
    myDogBluey.myGreeting = function(){
        if (this.canTalk == true) {
            return "Hi! My name is "+myDogBluey.name+". I am a "+myDogBluey.breed+" from the TV Show "+myDogBluey.tvProgram+". If I was barking it would sound like "+myDogBluey.mySound+". I can talk!" ;
        }
        else if (this.canTalk == false) {
            return "Hi! My name is "+myDogBluey.name+". I am a "+myDogBluey.breed+" from the TV Show "+myDogBluey.tvProgram+". If I was barking it would sound like "+myDogBluey.mySound+". I cannot talk." ;
        } ;
    } ;
    let myDogBond = new Object();
    myDogBond.name = "Bond" ;
    myDogBond.tvProgram = "Spy x Family" ;
    myDogBond.breed = "Pyrenean Mountain Dog" ;
    myDogBond.mySound = "I'm seeing the future" ;
    myDogBond.canTalk = false ;
    myDogBond.myGreeting = function(){
        if (this.canTalk == true) {
            return "Hi! My name is "+myDogBond.name+". I am a "+myDogBond.breed+" from the TV Show "+myDogBond.tvProgram+". If I was barking it would sound like "+myDogBond.mySound+". I can talk!" ;
        }
        else if (this.canTalk == false) {
            return "Hi! My name is "+myDogBond.name+". I am a "+myDogBond.breed+" from the TV Show "+myDogBond.tvProgram+". If I was barking it would sound like "+myDogBond.mySound+". I cannot talk." ;
        } ;
    } ;
    for (const property in myDogBluey) {
        if (property == "myGreeting") {continue} ; // This stops the myGreeting method from being included in the 
        alert(property+" : "+myDogBluey[property]) ;
      } ;
    for (const property in myDogBond) {
        if (property == "myGreeting") {continue} ;
        alert(property+" : "+myDogBond[property]) ;
    } ;
    let dogChoice = prompt("Pick a dog: [Bluey] [Bond] ") ;
    if (dogChoice == "Bluey") {
        document.getElementById('dogImg').src = "bluey.png" ;
        document.getElementById('fillable1').textContent = myDogBluey.myGreeting() ;
    }
    else if (dogChoice == "Bond") {
        document.getElementById('dogImg').src = "bond.jpg" ;
        document.getElementById('fillable1').textContent = myDogBond.myGreeting() ;
    }
    else {
        alert("Error. Erroneous response.")
    } ;
} ;