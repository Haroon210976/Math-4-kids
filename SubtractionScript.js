let sectionNumOne = document.getElementById("sec-num-1")
let sectionNumTwo = document.getElementById("sec-num-2")
let sectionAnswer = document.getElementById("sec-ans")

let optionOne = document.getElementById("opt-btn-1")
let optionTwo = document.getElementById("opt-btn-2")
let optionThree = document.getElementById("opt-btn-3")
let optionFour = document.getElementById("opt-btn-4")

let answerNotKnown = sectionAnswer;

let optionArray = [optionOne, optionTwo , optionThree , optionFour];

let numOne = Math.floor((Math.random() * 10) + 1);
let numTwo = Math.floor((Math.random() * 10) + 1);
while(numOne < numTwo)
{
    numOne = Math.floor((Math.random() * 10) + 1);
}

let correctAnswer = numOne - numTwo;
correctAnswer = Number.parseInt(correctAnswer);

let generateRandomOption1;
let generateRandomOption2;
let generateRandomOption3;
let generateRandomOption4;


sectionNumOne.innerText = numOne;
sectionNumTwo.innerText = numTwo;
sectionAnswer.innerHTML = correctAnswer

optionArray[0].innerText = correctAnswer;
optionArray[1].innerText = correctAnswer + Math.floor((Math.random() * 5) + 1);
optionArray[2].innerText = correctAnswer + Math.floor((Math.random() * 5) + 1);
optionArray[3].innerText = correctAnswer + Math.floor((Math.random() * 5) + 1);





while (optionArray[0].innerText == optionArray[1].innerText || optionArray[0].innerText == optionArray[2].innerText ||
    optionArray[0].innerText == optionArray[3].innerText || optionArray[1].innerText == optionArray[2].innerText ||
    optionArray[1].innerText == optionArray[3].innerText || optionArray[2].innerText == optionArray[3].innerText) {
        
        optionArray[1].innerText = correctAnswer + Math.floor((Math.random() * 5) + 1);
        optionArray[2].innerText = correctAnswer + Math.floor((Math.random() * 5) + 1);
        optionArray[3].innerText = correctAnswer + Math.floor((Math.random() * 5) + 1); 
    }
    
    let arr = [sectionAnswer.innerText, optionTwo.innerText, optionArray[2].innerText, optionArray[3].innerText];
    
    //***********************************************************************
    
    
    generateRandomOption1 = Math.floor((Math.random() * 4));
    optionArray[0].innerText = arr[generateRandomOption1];
    
    generateRandomOption2 = Math.floor((Math.random() * 4));
    while (generateRandomOption2 == generateRandomOption1) {
        generateRandomOption2 = Math.floor((Math.random() * 4));
    }
    optionArray[1].innerText = arr[generateRandomOption2];
    
    
    generateRandomOption3 = Math.floor((Math.random() * 4));
    while (generateRandomOption3 == generateRandomOption1 || generateRandomOption3 == generateRandomOption2) {
        generateRandomOption3 = Math.floor((Math.random() * 4));
    }
    optionArray[2].innerText = arr[generateRandomOption3];
    
    generateRandomOption4 = Math.floor((Math.random() * 4));
    while (generateRandomOption4 == generateRandomOption1 || generateRandomOption4 == generateRandomOption2 ||
        generateRandomOption4 == generateRandomOption3) {
            generateRandomOption4 = Math.floor((Math.random() * 4));
        }
        optionArray[3].innerText = arr[generateRandomOption4];
        
        //#############################################################
        answerNotKnown.innerText = "?";

        function colorCorrect() {
    if (arr[generateRandomOption1] == correctAnswer) {
        optionArray[0].setAttribute("style","border-color: green; color:green");
        optionArray[1].setAttribute("style", "opacity: 50%")
        optionArray[2].setAttribute("style", "opacity: 50%")
        optionArray[3].setAttribute("style", "opacity: 50%")
    }
    else if (arr[generateRandomOption2] == correctAnswer) {
        optionArray[0].setAttribute("style", "opacity: 50%")
        optionArray[1].setAttribute("style","border-color: green; color:green");
        optionArray[2].setAttribute("style", "opacity: 50%")
        optionArray[3].setAttribute("style", "opacity: 50%")
    }
    else if (arr[generateRandomOption3] == correctAnswer) {
        optionArray[0].setAttribute("style", "opacity: 50%")
        optionArray[1].setAttribute("style", "opacity: 50%")
        optionArray[2].setAttribute("style","border-color: green; color:green");
        optionArray[3].setAttribute("style", "opacity: 50%")
    }
    else if (arr[generateRandomOption4] == correctAnswer) {
        optionArray[0].setAttribute("style", "opacity: 50%")
        optionArray[1].setAttribute("style", "opacity: 50%")
        optionArray[2].setAttribute("style", "opacity: 50%")
        optionArray[3].setAttribute("style","border-color: green; color:green");
    }
    answerNotKnown.innerText = correctAnswer;
    optionArray[0].disabled = true;
    optionArray[1].disabled = true;
    optionArray[2].disabled = true;
    optionArray[3].disabled = true;
}

function colorWrongOne()
{
    if(arr[generateRandomOption1] != correctAnswer)
    {
        optionArray[0].setAttribute("style" , "color : red; border-color: red")
    }
}

function colorWrongTwo()
{
    if(arr[generateRandomOption2] != correctAnswer)
    {
        optionArray[1].setAttribute("style" , "color : red; border-color: red")
    }
}

function colorWrongThree()
{
    if(arr[generateRandomOption3] != correctAnswer)
    {
        optionArray[2].setAttribute("style" , "color : red; border-color: red")
    }
}

function colorWrongFour()
{
    if(arr[generateRandomOption4] != correctAnswer)
    {
        optionArray[3].setAttribute("style" , "color : red; border-color: red")
    }
}