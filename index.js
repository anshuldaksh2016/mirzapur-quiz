const readLineSync = require('readline-sync');

var score = 0;

const name = readLineSync.question("Enter Your Name ! ");
console.log("Welcome " + name + "!");
const decision = readLineSync.question("Do you want to play the Mirzapur quiz (Y/N)");

// condition 
if (decision === "Y") {
    console.log("Let's play the MIRZAPUR quiz!!! please type all answers in small letters ");

}

else {
    process.exit();
}

var scores = [
    {
        name: "Tanay",
        score: 5
    },
    {
        name: "Pooja",
        score: 4
    }
]


function play(question, answer) {

    var userAnswer = readLineSync.question(question);

    if (userAnswer === answer) {
        console.log("You are right !!!");
        score += 1
    }
    else {
        console.log("You are wrong !");
    }

    console.log("current score: ", score);
    console.log("              --------------                ");

}


questions = [
    {
        question: "Who killed Inspector Maurya ?",
        answer: "pandit ji"
    },
    {
        question: "What was the name of shabnam's father",
        answer: "lala"
    },
    {
        question: "Who killed Babuji",
        answer: "beena"
    },
    {
        question: "What was the name of shabnam's father-in-law(hone wale the par nhii hue)",
        answer: "yusuf"
    },
    {
        question: "Munna's wife name (only first name )",
        answer: "madhuri"
    },
    {
        question: "Who killed lodu-lalit",
        answer: "maqbool"
    },
    {
        question: "",
        answer: "madhuri"
    },
]


for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
}

console.log("Your final score is : " + score);
score > scores[0].score || score > scores[1].score

if (score >= scores[0].score || score >= scores[1].score) {
    console.log("congratulation You have scored high score");
    console.log("Please send me the screen shots so that i Can upgrade that ! \n\n");
    console.log("%%%%%%%%%%%%%%%%% Thanks for taking the quiz %%%%%%%%%%%%%%%%%% ");
}
