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
    description = "People with this representative emoji tend to be rather introverted and often keep to themselves. They prefer to spend more time exploring the world in their mind rather than the outside world. People with this emoji are usually artistic. They enjoy individual activities where they can express themselves without judgement or pressure from others. Black cat emojis stick to their own schedule. They're often awake during the late hours of the night because they enjoy the peace that comes when the world starts to quiet down. If you manage to earn a black cat emoji's trust, you'll learn that they are loyal and affectionate friends, who are very relaxing to be around."
  }
  if (runningTotalPoints >= 8) {
    outputText = "You are a fox emoji!"
    devImg.src = "fox.png"
    description = "People with this representative emoji tend to be confident and self-assured. They may seem quiet at first, but they're probably preoccupied with their own thoughts, or dealing with a task at hand. Fox emojis enjoy getting ready and going outside, but they usually won't think too far past that. They get distracted rather easily, and often find themselves falling down a rabbit hol of any given subject. Even so, they are very self-sufficient people, capable of looking after themselves. Fox emojis pair well with other people. Although they are capable of many things, they're not afraid to admit they need help and ask others for favors. Fox emojis have the kind of self-confidence that positively influence others in a way that makes people want to be their friend."
  }
  if (runningTotalPoints >= 15) {
    outputText = "You are a bunny emoji!"
    devImg.src = "bunny.png"
    description = "People with this representative emoji tend to be sociable and respectful. They enjoy being around people, and have a talent for gathering large groups of people to hang out. Because of this, they've learned how to act and adapt to being around all different kinds of personalities. Bunny emojis usually value stability. They often plan out their days in their head, and prefer to know important information ahead of time. People with this emoji are essential to every group, and likely make great leaders. They know when to listen and when to talk. They're the kind of friend that people tend to rely on and trust the most, which is exactly what bunny emojis prefer."
  }
  if (runningTotalPoints >= 23) {
    outputText = "You are a chick emoji!";
    devImg.src = "chick.png"
    description = "People with this representative emoji tend to be energetic and lighthearted. They're often described as 'sunshine' or 'the life of the party.' They enjoy loud environments and activities where they can move around and talk to people. Because chick emojis are so cheerful, they can come across as innocent an naive. They're the kind of friend that people want to look after and take care of. Despite this, people with this emoji are usually very self-aware. Although their emotions are most definitely genuine, they've probably worked hard to present this happy persona in hopes to positively affect the people around them. Chick emojis tend to wear their emotions on their sleeve, which is why they avoid anything that they know will make them sad or angry. Though they may seem superficial, chick emojis have many layers to their personality."
  }

  resultsElementOne.innerText = outputText;
  resultsElementTwo.innerText = description;
  img.appendChild(devImg)

  quizOutputElement.style.marginBottom = "0px"
  resultsContainer.style.backgroundColor = "white"
  resultsContainer.style.border = "3px solid black"
  executeButton.style.visibility = "hidden"



}

AOS.init();

