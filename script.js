console.log("script.js loaded...");

let quizOutputElement = document.getElementById("quizContainer");
let resultsElementOne = document.getElementById("result");
let resultsElementTwo = document.getElementById("resultDescription");
let resultsContainer = document.getElementById("resultsContainer");
let button = document.getElementById("executeButton");

button.addEventListener("click", 
  function(){
    totalQuizResults();
  }
);


let quizDB = [
{
  "question" : "What would you do if you got the wrong order at a restaurant?",
  "answers" : ["Save the food for later and get something else", "Tell the waiter", "Eat the wrong order", "Ask your friend to tell the waiter"]
},
{
  "question" : "What would you do if there was a zombie apocolypse?",
  "answers" : ["Fight back against the zombies", "Accidentally trap yourself with the zombies", "Attempt to befriend the zombies", "Sacrifice yourself to save other people"]
},
{
  "question" : "If you ran into someone you knew unexpectedly, how would you react?",
  "answers" : ["Pretend like you didn't see them", "Make eye contact and look away", "Wave hi then move on", "Start a conversation"]
},
{
  "question" : "If you were at a party, what would you usually be doing?",
  "answers" : ["Waiting until it's appropriate to leave", "Eating all the snacks", "Becoming friends with strangers", "Talking to a few people in a corner"]
},
{
  "question" : "If you could be any animated character, who would you be?",
  "answers" : ["Gudetama", "Squidward", "Kirby", "Aang"]
},
{
  "question" : "If you met your favorite celebrity what would you do?",
  "answers" : ["Run away", "Tell your friends", "Ask for a picture", "Strike up a conversation"]
},
{
  "question" : "What would you do after eating dinner with your friends?",
  "answers" : ["Leave and wind down for the day", "Leave when someone else leaves", "Grab dessert", "Stay and hang out for a bit"]
},
{
  "question" : "How do you react when sitting next to a talkative stranger for a long plane ride?",
  "answers" : ["Sleep and forget that they're there", "Debate about whether or not you should talk to them", "Initiate the conversation and ask them about their plans", "Respond to them until the conversation ends"]
},
{
  "question" : "What would you do if a new movie came out only in theaters?",
  "answers" : ["Pirate it", "Suggest to a friend that you guys should watch it together", "Watch it in theaters", "Wait until it comes out somewhere you can watch it for free"]
},
{
  "question" : "What would you do if you were the least tired one at a sleepover?",
  "answers" : ["Stay on your phone until you become tired enough", "Pretend to be asleep", "Keep talking until everyone falls asleep", "Suggest that it's time to go to bed"]
},
];

for (var i = 0; i < quizDB.length; i++) {
  generateQuestion(quizDB[i]);
}


function generateQuestion(incomingJSON){

  let newQuestionElement = document.createElement("DIV");
  newQuestionElement.classList.add("questionContainer");

  let newQuestionText = document.createElement("H3");
  newQuestionText.innerText = incomingJSON["question"];
  newQuestionElement.appendChild(newQuestionText);
  console.log("Generating question:" + incomingJSON["question"]);

  let newAnswerContainer = document.createElement("DIV");
  newAnswerContainer.classList.add("answerContainer");
  /* PROF NOTE: Here we pass both the incoming JSON *and* the div we want to append the answers to–
          our generateAnswers function will add the questions to this container div and then we can append it */
  generateAnswers(incomingJSON, newAnswerContainer);
  newQuestionElement.appendChild(newAnswerContainer);

  quizOutputElement.appendChild(newQuestionElement);

}

function generateAnswers(incomingJSON, incomingElementToAppendTo) {

  for (let z = 0; z < incomingJSON["answers"].length; z++) {

    let idString = "q" + i + "a" + z; /* We need this to match the "label" with its corresponding "answer" */

    let newAnswerRadioButton = document.createElement("INPUT");
    newAnswerRadioButton.type = "radio";
    newAnswerRadioButton.classList.add("answerRadio");
    newAnswerRadioButton.id = idString;
    newAnswerRadioButton.value = z; /* Set out numerical value to be totalled up */
    newAnswerRadioButton.name = "q" + i + "group"; /* We need this to "group" the radio toggle buttons together so you can only select one per question */
    incomingElementToAppendTo.appendChild(newAnswerRadioButton);


    let newQuestionLabel = document.createElement("LABEL");
    newQuestionLabel.htmlFor = idString; /* We need this to "assign" this label to this radio button */
    newQuestionLabel.innerText = incomingJSON["answers"][z];
    incomingElementToAppendTo.appendChild(newQuestionLabel);
  }
}



function totalQuizResults() {
  console.log("Totalling...");

  let totalInputElements = document.getElementsByClassName("answerRadio");
  let runningTotalPoints = 0;
  for (let r = 0; r < totalInputElements.length; r++) {
    if (totalInputElements[r].checked) {
      console.log("#" + r + " Selected value: " + totalInputElements[r].value);
      runningTotalPoints += parseInt(totalInputElements[r].value); /* Adding to our total value */
      console.log("Totalling: " + runningTotalPoints);
    }
  }

  console.log("Final total: " + runningTotalPoints);

  // resultsElement.innerText = "Your results: " + runningTotalPoints;

  /* Here you can use an if statement to output different content, ie: */

  let outputText = "";
  let description = "";
  let img = document.getElementById("img");
  let devImg = new Image();

  
  if (runningTotalPoints < 8) {
    outputText = "You are an upside down emoji!"
    devImg.src = "ud.png"
    description = "test test test test"
  }
  if (runningTotalPoints >= 8) {
    outputText = "You are a sobbing emoji!"
    devImg.src = "sob.png"
    description = "lalalallaala"
  }
  if (runningTotalPoints >= 15) {
    outputText = "You are a heart-eyes emoji!"
    devImg.src = "hearteye.png"
    description = "JUMP dadadi dum dum"
  }
  if (runningTotalPoints >= 23) {
    outputText = "You are an angel emoji!";
    devImg.src = "angel.png"
    description = "hello my name is"
  }

  resultsElementOne.innerText = outputText;
  resultsElementTwo.innerText = description;
  img.appendChild(devImg)

  resultsContainer.style.backgroundColor = "white"
  resultsContainer.style.border = "3px solid black"
  executeButton.style.visibility = "hidden"





}

