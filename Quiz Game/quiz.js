// ***** SIMPLE QUIZ PROJECt *****

// quiz array that will store quiestions, their options, and answer in object block of code;
let quiz = [
    {
        question: "What is the capital of France",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Osmium", "Oxygenium"],
        answer: "Oxygen"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        answer: "Harper Lee"
    },
    {
        question: "What is the largest planet in our Solar System?",
        options: ["Mars", "Earth", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Which language is the most spoken in the world?",
        options: ["Spanish", "English", "Mandarin", "Hindi"],
        answer: "Mandarin"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1912", "1905", "1898", "1923"],
        answer: "1912"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond"
    },
    {
        question: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    }
]

// trackCorrectQuestions will track the correnct questions an the index of the quiz questions will be included that are correct.
let trackCorrectQuestions = [];

// pointsCount will count the points of the user for each correnct answer and 2 will be added for the same.
let pointsCount = 0;

// letsPlay function that contain the logic to show the questions, options, check answers.
function letsPlay(quizQuestionsArray) {
    // alert message to tell what to do when the questions come.
    window.alert("Now you will get the questions and there options, you have to type your on the box and click ok.");

    // for loop to show the questions, there options and ask the user to type ther answers in the box.
    for (let i = 0; i < quizQuestionsArray.length; i++) {

        // store the question for the current index, will help in showing the question.
        let question = quizQuestionsArray[i]["question"];

        // ṣtore options for the current question, will helo in showing the options.
        // options are changed to lower case as it will be effecitve to match the answer.
        let options = quizQuestionsArray[i]["options"].map(value => value.toLowerCase());

        // store the correnct answer
        let correnctAnswer = quizQuestionsArray[i]["answer"].toLowerCase();

        // show users the question, its options and ask to type the answer
        let answer = window.prompt(`Q ${i + 1}) ${question}\n - ${options.join("\n - ")}`);
        answer = answer.toLowerCase().trim();

        // check if the answer is included in the options
        if (options.includes(answer)) {
            if (answer === correnctAnswer) {
                trackCorrectQuestions.push(i);
                pointsCount += 2;
            }
        }
    }
}

// result function will take pointsCount as argument and give the result in the html document.
function result(points){
    if(points!==0){
        let scoreInPercent  = (points/20)*100;
        document.getElementById("result").innerHTML = `Congratulations ! Your score is "${points} out of 20"<br>Your socre in percentage is "${scoreInPercent}%."`;
    }
}

// startQuiz function ask the user to start or not start the quiz.
function startQuiz(){
    let readyOrNot = window.prompt("Type 'y' to start and 'n' to quit now");
    if(readyOrNot==='y'){
        letsPlay(quiz);
    }
    else{
        window.alert("Exit before playing!");
    }
}

// welcome function will welcome the user, give instructions using the alert method.
function welcomeMessage(){
    window.alert("Welcome to my Simple Quiz Application! Test your knowledge and have fun with our exciting questions.");
    window.alert("Answer each question by typing your response. You’ll earn 2 points for each correct answer, while incorrect or out-of-context responses will receive 0 points.")
}

// endMessage function will show thank you message on the html page.
function endingMessage(){
    document.getElementById("endMessage").innerHTML = "Thank you for participating! We appreciate your time and effort.";
}


// Calling of functions to run the application.
welcomeMessage();
startQuiz();
result(pointsCount);
endingMessage();