var readline = require("readline-sync");

var userName = readline.question("What is your good name ? ");

console.log("Welcome to Know Your Friend Quiz " + userName);

var score = 0;

function playQuiz(question,answer){
  var userAnswer = readline.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Yes you guessed it right");
    score += 1;
  } else {
    console.log("You answered wrong!");
  }

  console.log("Your Score : " + score);
  console.log("----------------------");
}



var questionArr = [{
  question : "Where does your friend live",
  answer : "New Delhi"
},
{
  question : "What's his favourite dish",
  answer : "Chhole Bhature"
}
];

for(var i = 0;i<questionArr.length;i++){
  playQuiz(questionArr[i].question,questionArr[i].answer);
}

if(score > 1){
  console.log("You know your friend very well.");
} else {
  console.log("Go back and spend some time with your friend!")
}