var startTest = document.getElementById("startquiz")
var timer = document.getElementById("timer");
var questionDisplay = document.getElementById("questions");
var answerDisplay = document.getElementById("answers");
var currentQuestion = 0;
var testing = document.getElementById("test");
var scoreDisplay = document.getElementById("score");
var score = 0
var questions = [
        {
                Q: "How many pets do I own?",

                A: [
                   "2",
                   "5",
                   "6",
                   "1",
                ],
                correct: "2",
        },
        
        {
                Q: "How cold is it outside right now?",
                A: [
                   "2",
                   "5",
                   "6",
                   "1",
                ],
                correct: "6",
        },
        {
                Q: "How many kid(s) do I have?",
                A: [
                   "2",
                   "5",
                   "6",
                   "1",
                ],
                correct: "1",
        },

];



startTest.addEventListener("click", function() {
        console.log("You have clicked the button.");
        countdown();
        displayQuestions();

});

function countdown () {
     var timeLeft = 5;
     
     var timeInterval = setInterval(function() {
        
        if (timeLeft > 0) {
        timer.textContent = timeLeft + ' seconds remaining.'
        timeLeft--; }
        
        else if (timeLeft === 1) {
        timer.textContent = timeLeft + ' second remaining.'
        timeLeft--;  }

        else if (timeLeft === 0) {
        timer.textContent = timeLeft + ' seconds remaining.'  
        timer.textContent = "Time's Up!"
        clearInterval(timeInterval)  }

        },250);
}

function displayQuestions () {
     
        questionDisplay.innerHTML = ""
        answerDisplay.innerHTML = ""
        
        // var gameEnd = questions.length - 1
        // if (currentQuestion > end) {
        //         endgame();
        //         return;
        // }

        for (i = 0; i <= questions.length; i++) {
                var newQuestion = questions[currentQuestion].Q; 
                var newAnswers = questions[currentQuestion].A; 
                questionDisplay.innerHTML = newQuestion              
        }

        newAnswers.forEach(function (button) {
                var answer = document.createElement('button');
                answer.innerHTML = button
                answer.classList.add('answerbuttons')
                answerDisplay.appendChild(answer)
                answer.addEventListener('click', (checkCorrect));

        })
}

function checkCorrect(e) {
        // e.target is what we clicked on the page
        var event = e.target;
        // if the text of the clicked element matches the text of the defined correct answer within the questionArr at the current question then advance the qustion and set the answerstatus to true which is used for scoring and deduction.
        if (event.innerHTML === questions[currentQuestion].correct) {
            currentQuestion++
            displayQuestions();
            answerStatus = true;
            updateScore()

        function updateScore() {
                if (answerStatus === true) {
                        score = score + 1
                        scoreDisplay = "Score: " + score
                }
        }
        }
        
}


