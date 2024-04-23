console.log("script.js loaded...");

let quizOutputElement = document.getElementById("quizContainer");
let resultsElementOne = document.getElementById("result");
let resultsElementTwo = document.getElementById("resultDescription");
let button = document.getElementById("executeButton");

button.addEventListener("click", 
  function(){
    totalQuizResults();
    // executeButton.style.visibility = 'hidden';
  }
);


let quizDB = [
{
  "question" : "How do you spend your free time?",
  "answers" : ["Recharging alone in my room", "Hanging out at home with a few friends", "Going out to eat with a large group", "Partying!"]
},
{
  "question" : "Which of these is your favorite color?",
  "answers" : ["Purple", "Blue", "Green", "Yellow"]
},
{
  "question" : "Which of these is your favorite genre?",
  "answers" : ["Mystery", "Fantasy", "Romance", "Comedy"]
},
{
  "question" : "Which of these is your favorite time of day?",
  "answers" : ["Midnight", "Sunset", "Afternoon", "Morning"]
},
{
  "question" : "What is your favorite element?",
  "answers" : ["Water", "Earth", "Air", "Fire"]
},
{
  "question" : "Which of these environments do you prefer?",
  "answers" : ["Forest", "City", "Mountain", "Beach"]
},
{
  "question" : "Which of these countries would you most like to visit?",
  "answers" : ["Japan", "Canada", "London", "Iceland"]
},
{
  "question" : "Which of these is your favorite dessert?",
  "answers" : ["Cookies", "Cake", "Crepe", "Ice Cream"]
},
{
  "question" : "What is your favorite season?",
  "answers" : ["Winter", "Fall", "Spring", "Summer"]
},
{
  "question" : "Which of these superpowers would you most like to have?",
  "answers" : ["Invisibility", "Telekenisis", "Teleportation", "Mind Reading"]
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

  
  if (runningTotalPoints < 7) {
    outputText = "You are a moon!"
    description = "test test test test"
  }
  if (runningTotalPoints >= 7) {
    outputText = "You are a star!"
    description = "lalalallaala"
  }
  if (runningTotalPoints >= 15) {
    outputText = "You are a cloud!"
    description = "JUMP dadadi dum dum"
  }
  if (runningTotalPoints >= 22) {
    outputText = "You are a sun!";
    description = "hello my name is"
  }

  resultsElementOne.innerText = outputText;
  resultsElementTwo.innerText = description;

}



// generateQuizResults();