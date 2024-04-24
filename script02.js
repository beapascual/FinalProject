console.log("script.js loaded...");

let quizOutputElement = document.getElementById("quizContainer");
let resultsElementOne = document.getElementById("result");
let resultsElementTwo = document.getElementById("resultDescription");
let resultsContainer = document.getElementById("resultsContainer");
let button = document.getElementById("executeButton");

button.addEventListener("click", 
  function(){
    totalQuizResults();
    // executeButton.style.visibility = 'hidden';
  }
);


let quizDB = [
{
  "question" : "How would you most likely spend your free time?",
  "answers" : ["Recharging alone in your room", "Hanging out at home with a few friends", "Going out to eat with a large group", "Partying!"]
},
{
  "question" : "Which of these hobbies do you enjoy the most?",
  "answers" : ["Drawing", "Cooking", "Gaming", "Shopping"]
},
{
  "question" : "Which of these social media apps do you use the most?",
  "answers" : ["Pinterest", "TikTok", "Instagram", "Snapchat"]
},
{
  "question" : "How would your friends describe you?",
  "answers" : ["Artistic", "Confident", "Friendly", "Cheerful"]
},
{
  "question" : "Which activity seems the most fun?",
  "answers" : ["Watching a movie", "Going camping", "Having a picnic", "Going bowling"]
},
{
  "question" : "While in public, which of these do you find yourself doing the most?",
  "answers" : ["Listening to music", "Minding your own buisiness", "Talking to strangers", "Listening to other people's conversations"]
},
{
  "question" : "Out of these options, what would you do right before falling asleep?",
  "answers" : ["Imagine fake scenarios", "Scroll on your phone", "Think of the next day", "Watch youtube videos"]
},
{
  "question" : "How would you plan a vacation?",
  "answers" : ["Spontaneously figure it out while you're there", "Book a pre-planned tour", "Plan out an itenerary", "Ask someone else to plan it for you"]
},
{
  "question" : "When do you usually wake up on your days off?",
  "answers" : ["Past 2:00pm", "12:00pm - 2:00pm", "10:00am - 12:00pm", "Before 10:00am"]
},
{
  "question" : "What do you normally do when hanging out with friends?",
  "answers" : ["Stay indoors and talk", "Dress up to go somewhere special", "Grab a bite to eat from a comfort restaurant", "Explore somewhere you havent been before"]
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
    outputText = "You are a black cat emoji!"
    devImg.src = "cat.png"
    description = "test test test test"
  }
  if (runningTotalPoints >= 8) {
    outputText = "You are a fox emoji!"
    devImg.src = "fox.png"
    description = "lalalallaala"
  }
  if (runningTotalPoints >= 15) {
    outputText = "You are a bunny emoji!"
    devImg.src = "bunny.png"
    description = "JUMP dadadi dum dum"
  }
  if (runningTotalPoints >= 23) {
    outputText = "You are a chick emoji!";
    devImg.src = "chick.png"
    description = "hello my name is"
  }

  resultsElementOne.innerText = outputText;
  resultsElementTwo.innerText = description;
  img.appendChild(devImg)


  resultsContainer.style.backgroundColor = "white"
  resultsContainer.style.border = "3px solid black"
  executeButton.style.visibility = "hidden"



}

