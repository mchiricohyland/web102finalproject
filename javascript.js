function main(){
    ShowQuestion("questionone");
}
function Answer(answerLetter, currentQuestion, nextQuestion){
    if(answerLetter === "D")
    {
        runningAnswer.Dog += 1;
    }
    else if(answerLetter === "C")
    {
        runningAnswer.Cat += 1;
    }
    else if(answerLetter === "B")
    {
        runningAnswer.Bird += 1;
    }
    else if(answerLetter === "F")
    {
        runningAnswer.Fish += 1;
    }
    else {
        console.log("Something Went Wrong! (Line 22)");
    } 
    
    HideQuestion(currentQuestion);
    ShowQuestion(nextQuestion);

    if(nextQuestion === "FINAL")
    {
        DisplayAnswer();
    }
}

function HideQuestion(question){
    document.getElementById(question).style.display = "none";
}

function ShowQuestion(question){
    document.getElementById(question).style.display = "block";
}

function DisplayAnswer() {
    if(runningAnswer.Dog >= 2)
    {
        document.getElementById("hiddenanswerdog").style.display = "block";
    }
    else if(runningAnswer.Cat >= 2)
    {
        document.getElementById("hiddenanswercat").style.display = "block";
    }
    else if(runningAnswer.Bird >= 2)
    {
        document.getElementById("hiddenanswerbird").style.display = "block";
    }
    else if(runningAnswer.Fish >= 2)
    {
        document.getElementById("hiddenanswerfish").style.display = "block";
    }
    else{
        console.log("Something went wrong (Line 67)");
    }
}

var runningAnswer = {
    Dog: 0,
    Cat: 0,
    Bird: 0,
    Fish: 0
}

function Reset(){
    HideQuestion("FINAL");
    ShowQuestion("questionone");

    document.getElementById("hiddenanswerdog").style.display = "none";
    document.getElementById("hiddenanswercat").style.display = "none";
    document.getElementById("hiddenanswerbird").style.display = "none";
    document.getElementById("hiddenanswerfish").style.display = "none";

    runningAnswer.Dog = 0;
    runningAnswer.Cat = 0;
    runningAnswer.Bird = 0;
    runningAnswer.Fish = 0;
}