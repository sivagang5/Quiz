import React from "react";

var ques=['Inside which HTML element do we put the Javascript?',
'What is the correct JavaScript syntax to change the content of the HTML element below?',
'Where is the correct place to insert a JavaScript?',
'What is the correct syntax for referring to an external script called "abc.js"?',
'The external JavaScript file must contain the tag.',
'How do you write "Hello World" in an alert box?',
'How do you create a function in JavaScript?',
'How do you call a function named "myFunction"?',
'How to write an IF statement in JavaScript?',
'How to write an IF statement for executing some code if "i" is NOT equal to 5?']

// var ans = [
//     ['scripting','js','javascript','script'],
//     ['document.getElement( 'p').innerHTML = "Hello World!";','document.getElementByName(''p").innerHTML = "Hello World!"; ','document.getElementByld("demo'').innerHTML = "Hello World!"; ','#demo.innerHTML = "Hello World!"; '],
//     ['The <body> section ', 'Both the <head> section and the <body> section are correct ','The <head> section '],
//     ['<script name="xyz.js">', '<script src="xyz.js"> ','<script href="xyz.js">'],
//     ['True','False'],
//     ['msg("Hello World");','alert("Hello World");','msgBox("Hello World");','alertBox("Hello World");'],
//     ['function myFunctionQ','function:myFunctionQ','function = myFunctionQ'],
//     ['call myFunction()','call function myFunction()','myFunction()'],
//     ['if i = 5 then','if i = 5','if 0 == 5)','if i == 5 then'],
//     ['if i =! 5 then','if (i <> 5)','if (i != 5)','if i <> 5']
// ]

var ans = [
['option1a', 'option1b', 'option1c', 'option1d'],
['option2a', 'option2b', 'option2c', 'option2d'],
['option3a', 'option3b', 'option3c', 'option3d'],
['option4a', 'option4b', 'option4c', 'option4d'],
['option5a', 'option5b', 'option5c', 'option5d'],
['option6a', 'option6b', 'option6c', 'option6d'],
['option7a', 'option7b', 'option7c', 'option7d'],
['option8a', 'option8b', 'option8c', 'option8d'],
['option9a', 'option9b', 'option9c', 'option9d'],
['option10a', 'option10b', 'option10c', 'option10d']
]

var correctans=[1,2,3,4,1,2,3,4,3,2]

var points = [0,0,0,0,0,0,0,0,0,0]

var qno=0

function Questions() {
    return (
        <div>
            <div>
                Question {qno + 1} of 10
            </div>
            <br/>
            <div>
                {ques[qno]}
            </div>
            <br/>
            <div>
                <input type="radio" ></input>
                {/* onclick={alert('option1a')} */}
                {ans[qno][0]}
            </div>
            <div>
                <input type="radio" ></input>
                {ans[qno][1]}
            </div>
            <div>
                <input type="radio" ></input>
                {ans[qno][2]}
            </div>
            <div>
                <input type="radio" ></input>
                {ans[qno][3]}
            </div>
            <br/>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                <div>
                    <button onClick={prv} style={{width:'70px'}}>Previous</button>
                    <span> &nbsp; &nbsp;&nbsp;</span>
                    <button onClick={nxt} style={{width:'70px'}}>Next</button>
                </div>
            </div>

        </div>      
    )
}

var selectedans=[1,2,3,4,1,2,3,4,3,2]

function prv () {
    qno-=1
    if (selectedans[qno]===correctans[qno] && points[qno]===0)
    {points[qno]=100}
}

function nxt () {
    qno+=1
    if (selectedans[qno]===correctans[qno] && points[qno]===0)
    {points[qno]=100}
}

var totalpoimts=0
for (var i=0; i<10; i++)
{totalpoimts=totalpoimts+points[i]}

export default Questions