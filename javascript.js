/******************************************************************************

WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!



All the assignment instructions are commented out so that you can write your 

code in between them. Remember to read the instructions CAREFULLY, write short 

comments for your code, and feel free to ask for help if you're stuck.



GOOD LUCK!

******************************************************************************/

/******************************************************************************

ASSIGNMENT 1



Your first task will be to link this javascript file to the index.html file

using one of the methods I showed in the first lecture.



<-- Locate the index.html file in the file browser and link it to this file, 

javascript.js

******************************************************************************/

//

console.log("Hello, JS Oppgave 1");

/*

ASSIGNMENT 2




Last lecture I showed you how to make variables that can hold values of the 

various data types. Make some variables of the following datatypes: 

String, number, boolean, array

You can choose what the actual content is.

Try to use both the let and const keywords

******************************************************************************/

//your code here

let myString = "Here's your string, JS Oppgave 1.";
console.log(myString);

let myNumber = 77;
console.log("And here's you number: " + myNumber);

let myBool = false;
console.log("Off course our bool is: " + myBool);

const myArray = [1, 3, 5, 7, 9];
console.log(
  "And we have a wide array of odd numbers for you, for instance: " + myArray
);

/****************************************************************************** 

ASSIGNMENT 3



Try out a few of the operators we looked at (+, -, /, *)

as well as a few of the shorthand operators (++, --, +=, -=)

******************************************************************************/

//your code here

y = 5;

console.log("Here's an example of addition " + (y + y));
console.log("And here's subtraction " + (y - y));
console.log("Let's do some easy division " + y / y);
console.log("Last but not least, some multiplication " + y * y);

x = ++y;
console.log("Meet your pre increment x: " + x);

y = 5;
x = y++;
console.log("Meet your post increment x: " + x);

y = 5;
x = --y;
console.log("Meet your pre decrement x: " + x);

y = 5;
x = y--;
console.log("Meet your post decrement x: " + x);

let w = 5;
let z = w % 2;
console.log("Let's just for fun throw in a remainder of the day: " + z);

/****************************************************************************** 

ASSIGNMENT 4



Write an IF/ELSE conditional statement that checks that userName isn't 

empty(""), that the user age is 18+, and that userIsBlocked is false. 



(HINT: Use the && (logical AND) to check all 3 in one IF statement)



If all of these conditions are true, change the userIsLoggedIn variable to true 

and the goToPage variable to "/home" then console.log a welcome message. 



If any of the conditions for logging in are not met, console.log an error 

message.



Try changing the values of the variables to make sure your IF/ELSE conditional

can handle all cases correctly 

******************************************************************************/

let userName = prompt("Please state your name");
let userAge = prompt("Welcome, " + userName + "! Please enter your age:");
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

//your code here

/* NB!! I Blocked this if statement because I decided to find a way to prompt it
and implemented it's logic together with the next Mr or Mrs assignment.

if (userName === "" && userAge >= 18 && userIsBlocked === false) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log("Conditions tell us you are welcome");
} else {
  console.log(
    "Sorry, we can't let you in, you must have a name, be over 18 and be loggeed in for admission."
  );
}

/******************************************************************************

ASSIGNMENT 5



Make a variable called userTitle and set the content equal to "Mr." if userMale 

is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 

this:



const variable = statement ? "this if true" : "this if not true"



Try changing userMale to both true and false and console.log your new variable,

to see that your conditional is working.

******************************************************************************/

//your code here

const userMale = prompt("Are you a man? (yes/no)").toLowerCase() === "yes";

const userTitle = userMale ? "Mr. " : "Mrs. ";

if (userMale && userName !== "" && userAge >= 18 && !userIsBlocked) {
  console.log(
    "Welcome, " +
      userTitle +
      userName +
      ", your credentials all checked out, and we are lucky to have you on board!"
  );
} else {
  console.log(
    "Sorry " +
      userTitle +
      userName +
      ", this area is restricted to namegiven, adult, men only..."
  );
}
