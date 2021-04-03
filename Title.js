import React from "react";

function Title() {
    return (
        <div  style={{display:'flex', justifyContent:'space-between'}}>
                <h2>Javascript Quiz</h2>
                <div>
                    
                    <h3>Timer: 00:{tm}</h3>
                    <h3>Points: {pnt}</h3>
                </div>
        </div>
    )
}

var tm=59
var pnt=0

setInterval(function() {
tm=tm-1
},1000
)

export default Title