/* Multiplication */
var question = 1;
while (question<=5){
    question++;
var a = Math.floor(Math.random()*(10-3))+3;
var b = Math.floor(Math.random()*10-3)+3;
var product = a*b;
var equation = a + "*" + b + "=?";
answer = prompt(equation);
if (answer == product) alert ("Correct!");
else alert ("Incorrect!");
}
