//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
}

function add(x, y)//function definition
{
    var sum = x + y;
    alert("Sum is " + sum);
}

function substract(a, b)
{
    var diff = a - b;
    alert("Difference is " + diff);
}

function increment(y)
{ 
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+y); 

}

/* JS statements
Conditional statements:
If statement
Switch statement
*/

function compare()
{
    //var charlie = 120;
    //var john = 120;
   
    var charlie = prompt("Enter charlie's height");
    var john = prompt("Enter john's height");

    //conditional if statement
    
    if (charlie > john)
    {
        alert("Charlie is taller");
    }
    else if( charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else
    {
        alert("John is taller");
    }

}

function IsTropical(fruit)//fruit is a variable and is an input parameter
{
    var isTropical = false; //boolean variable: True or False

    switch(fruit)
    {
        case "banana":
            isTropical = true;
            break;

        case "papaya":
            isTropical = true;
            break;

        case "tomato":
            isTropical = false;
            break;

        case "mango":
            isTropical = true;
            break;

        case "watermelon":
            isTropical = true;
            break;

        default:
            isTropical = false;            
    }

    alert("Is "+ fruit+ " tropical?"+ isTropical );

}

/*
Loops:
For loop
While loop
Do while loop

Break
*/

function Repeat( message )
{
    var counter = 0;
    console.log("While loop:");
    while (counter < 5)
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    }

    counter = 0;
    console.log("Do - While loop:");
    do 
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    } while (counter < 5);

    console.log("For loop:");
    /************************************************* */
    for(var counter=0; counter < 5; counter++)
    {
        console.log(message);
    }
}

function CountMultiplesFn()
{
    var x = prompt("Enter the first number");
    CountMultiples(x);
    var y = prompt("Enter the second number");
    CountMultiples(y);
    var z = prompt("Enter the third number");
    CountMultiples(z);
}
function CountMultiples(num)
{
    var totalMultiples = 0;

    for(var i=1;i<=100;i++)
    {
        if (i % num == 0)//This means it is a multiple
            totalMultiples++;
    }
    console.log("Total multiples of "+ num + " = "+totalMultiples);
}
function DisplayTriangleWithNRows()
{
    var num = prompt("Enter the number of rows for your triangle");
    DisplayTriangle(num);
}
function DisplayTriangle(num)
{
    var strRow="";
    var totalStars=0;
    for (var i=1;i<=num;i++){        
        strRow = ""      ;//Reset strRow
        for (var j=1; j<=i;j++){
            strRow = strRow + "*";
            totalStars++;
        }        
        //Now we have a row. Lets display the row
        console.log(strRow);     
    }
    return totalStars;
}

function CountStarsInTriangle()
{
    var num = prompt("Enter the number of rows for your triangle");
    var total = DisplayTriangle(num);
    console.log("Total starts in a triangle with "+ num + " rows = "+ total);
}

function sumOdd(min, max){
    var sum = 0;

    for (var i = min; i <= max; i++){
        if (i%2 == 1){
            sum += 1;
        }
    }

    console.log("The sum of odd numbers inbetween " + min + " and " + max + " is " + sum);
}
//(Below 70 is F; 70-79 is C; 80-89 is B and 90 and above is A)
function letterGrade(){
    var grade = prompt("Enter a grade 0-100.");
    var response = "You recieved an ";

    switch (grade) {
        case grade < 70:
            console.log(response + "F")
            break;
        case grade < 80:
            console.log(response + "C")
            break;
        case grade < 90:
            console.log(response + "B")
            break;
        default:
            console.log(response + "A")
            break;
    }
}

function multiTotal(min = 1, max = 200){
    var num = prompt("What number would you like to test the multiples of?");
    var multi = [];

    for (var i = min; i <= max; i++){
        if (num / i != 0 && num / i == Math.floor(num / i)){
            multi.push(i);
        }
    }

    console.log("There are " + multi.length + " multiples of " + num + " inbetween " + min + " and " + max);
    console.log("The multiples include " + multi);
}

function displayABTriangle(rows){
    for (var i = 0; i <= rows; i++){
        var out = "";
        for (var j = 0; j < i; j++){
            if (j % 2 == 0){
                out = out + "A";
            }
            else {
                out = out + "B";
            }
        }

        console.log(out);
    }
}

function displayTotal(){
    var rows = prompt("How many rows in the triangle do you want?");

    displayABTriangle(rows);

    var aCount = 0;
    var bCount = 0;

    for (var i = 0; i <= rows; i++){
        for (var j = 0; j < i; j++){
            if (j % 2 == 0){
                aCount += 1;
            }
            else {
                bCount += 1;
            }
        }
    }

    console.log("In the above Triangle, there are " + aCount + " A's and " + bCount + " B's.");
}