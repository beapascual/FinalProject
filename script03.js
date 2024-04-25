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
  "question" : "Which of these is your favorite drink?",
  "answers" : ["Iced Tea", "Fruit Smoothie", "Soda", "Lemonade"]
},
{
  "question" : "Which of these is your favorite color?",
  "answers" : ["Purple", "Blue", "Green", "Yellow"]
},
{
  "question" : "Which of these is your favorite genre?",
  "answers" : ["Fantasy", "Mystery", "Romance", "Comedy"]
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
  "answers" : ["City", "Forest", "Mountain", "Beach"]
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
  let img = document.getElementById("img");
  let devImg = new Image();
  
  if (runningTotalPoints < 8) {
    outputText = "You are a moon emoji!"
    devImg.src = "moon.png"
    description = "People with this representative emoji tend to have bright yet independent personalities. When around strangers, they can be loud and talkative, but with their inner circle, they're quiet and comfortable enough to do their own thing. Moon emojis are complex people. They have many layers to their personality, but it's likely that they haven't even discovered all of them. Moon emojis are very hardworking people. Once they've made up their minds, they'll do anything to achieve their goals, even if there's an easy way out. Moon emojis are usually expressive, though the way they express themselves isn't really certain. Moon emojis are comparable to a hidden gem that has yet to be discovered."
  }
  if (runningTotalPoints >= 8) {
    outputText = "You are a star emoji!"
    devImg.src = "star.png"
    description = "People with this representative emoji tend to have confident and trustworthy personalities. They have a very noticeable presence that often leads people to gravitate towards them. For this reason, star emojis are usually found at the center or the front of large groups. Star emojis know how to present themselves in public. They often enjoy styling themselves and going out to public places. However, despite this confident persona, star emojis strongly value their relationships with other people, to the point where they might be too polite to express what they're truly thinking. Star emojis belong at the center of their groups. They have a talent of keeping people together."
  }
  if (runningTotalPoints >= 15) {
    outputText = "You are a cloud emoji!"
    devImg.src = "cloud.png"
    description = "People with this representative emoji tend to be hopeful and imaginative. They usually have lots of thoughts in their head, which sometimes leads them to be trapped in their own world. Cloud emojis enjoy observing other people and asking hypothetical questions to see how their thoughts compare. People with this representative emoji are rather open-hearted. They become friends with people quickly, even when they plan to keep their guard up. Because of this, they can easily get hurt when they unintentionally lose touch with people. Cloud emojis have bright personalities, and its usually clear how they're feeling at any given moment. They're very comforting to be around since they have no trouble letting others into their world."
  }
  if (runningTotalPoints >= 23) {
    outputText = "You are a sun emoji!";
    devImg.src = "sun.png"
    description = "People with this representative emoji tend to be optimistic and outspoken. They're not afraid to voice their opinions, but they usually do so with a smile on their face. People with this emoji are usually active. They enjoy being outside in nice weather, and they can't sit still for too long. When sun emojis are out in public, they tend to be surrounded by people without even meaning to be. People are drawn to sun emojis' confidence and warm energy. Sun emojis are often idealists. They have the ability to see past sad situations to happy endings that most people aren't aware of. They have lots of thoughts in their head, and once you're let in to their inner circle, they won't hesitate to let you know."
  }

  resultsElementOne.innerText = outputText;
  resultsElementTwo.innerText = description;
  img.appendChild(devImg)

  quizOutputElement.style.marginBottom = "0px"
  resultsContainer.style.backgroundColor = "white"
  resultsContainer.style.border = "3px solid black"
  resultsContainer.style.boxShadow = "5px 5px 5px black"
  executeButton.style.visibility = "hidden"




}

AOS.init();

