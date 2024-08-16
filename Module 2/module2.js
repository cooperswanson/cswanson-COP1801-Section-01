// Cooper Swanson
// 08-16-2024
// External JS File for Module 2/index.html

function assign() {
  let Fname = prompt("Please Enter Your First Name: ", "John Doe"); //Takes User Input, assigns default value of John Doe
  document.getElementById("fillable1").textContent = "Hello "+Fname+"! Welcome to my Module 2 Assignment.";
  let piValue = 3.1415926 ;
  let myFavNum = parseInt(prompt("Please Enter Your Favorite Number: ", "42")); //Takes User Input, assigns default value of 42, parses string return into integer
  let myArea = piValue*(myFavNum^2);
  document.getElementById("fillable2").textContent = "Great job "+Fname+"! Your favorite number is "+myFavNum+"? If that was the radius of a circle it would have an area of "+myArea+"!" ;
}
