// let userName = prompt("Enter your Name");
// document.getElementById("userName").innerText = (`Hello! ("${userName}") Start the Playing Quiz`);
// console.log(userName);
const questions = [
    {
        "que" : "What does HTML stand for?",
        "a" :"Home Tool Markup Language",
        "b" :"Hyper Text Markup Language",
        "c" :"Hypelinks and Text Markup Language",
        "d" :"Hyper Typing Making Language",
        "correct" : "b",
    },
    {
        "que" : "Choose the correct HTML element for the largest heading :",
        "a" :"<head>",
        "b" :"<h6>",
        "c" :"<h1>",
        "d" :"<heading>",
        "correct" : "c",
    },
    {
        "que" : "What is the correct HTML element for inserting a line break ?",
        "a" :"<br>",
        "b" :"<lb>",
        "c" :"<hr>",
        "d" :"<break>",
        "correct" : "a",
    },
    {
        "que" : "Choose the correct HTML element to define emphasized text",
        "a" :"<i>",
        "b" :"<b>",
        "c" :"<em>",
        "d" :"<italic>",
        "correct" : "c",
    },
    {
        "que" : "Which character is used to indicate an end tag ?",
        "a" :"<",
        "b" :"*",
        "c" :"/",
        "d" :">",
        "correct" : "c",
    },
    {
        "que" : "Choose the correct HTML element for the Smallest heading :",
        "a" :"<head>",
        "b" :"<h6>",
        "c" :"<h1>",
        "d" :"<heading>",
        "correct" : "b",
    },
    {
        "que" : "What is the correct HTML Entity for inserting a white Space ?",
        "a" :"&lt;",
        "b" :"&copy;",
        "c" :"&nbsp;",
        "d" :"&arrow;",
        "correct" : "c",
    },
    {
        "que" : "Choose the correct HTML element for the Praagraph :",
        "a" :"<li>",
        "b" :"<s>",
        "c" :"<section>",
        "d" :"<p>",
        "correct" : "d",
    },
    {
        "que" : "Which of these elements are all <table> elements ?",
        "a" :"<table> <head> <tfoot>",
        "b" :"<table> <tr> <td>",
        "c" :"<thead> <tbody> <tr>",
        "d" :"<table> <tr> <tt>",
        "correct" : "b",
    },
    {
        "que" : "How can you make a numbered list ?",
        "a" :"<list>",
        "b" :"<ol>",
        "c" :"<ul>",
        "d" :"<dl>",
        "correct" : "b",
    },
    {
        "que" : "How can you make a bulleted list ?",
        "a" :"<list>",
        "b" :"<ol>",
        "c" :"<ul>",
        "d" :"<dl>",
        "correct" : "c",
    },
    {
        "que" : "What is the correct HTML for making a drop-down list ?",
        "a" :"<select>",
        "b" :"<list>",
        "c" :"<dropdown>",
        "d" :"<dl>",
        "correct" : "a",
    },
    {
        "que" : "What is the correct HTML element for making a text area ?",
        "a" :"<area>",
        "b" :"<text>",
        "c" :"<textarea>",
        "d" :"<selectarea>",
        "correct" : "c",
    },
    {
        "que" : "Which HTML element defines the title of a document ?",
        "a" :"<meta>",
        "b" :"<h4>",
        "c" :"<title>",
        "d" :"<figcaption>",
        "correct" : "c",
    },
    {
        "que" : "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed ?",
        "a" :"title",
        "b" :"alt",
        "c" :"style",
        "d" :"href",
        "correct" : "a",
    },
];

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const headQue = document.getElementById("headQue");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    };
    resetQuiz();
    const data = questions[index];
    headQue.innerText = (`${index+1}) ${data.que}`);
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
} 
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    };
    index++;
    loadQuestion();
    return;
};
const getAnswer = () => {
    let ansWer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                ansWer = input.value;
                console.log(`${index+1} : ${input.value}`)
            }
        }
    )
    return ansWer;
}
const resetQuiz = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `<h2>("${userName}")</h2> <h3>Thanks for Playing Quiz!</h3>
    <h2>RESULT</h2>
    <h4>${right} / ${total} are Correct</h4>`
}
loadQuestion()