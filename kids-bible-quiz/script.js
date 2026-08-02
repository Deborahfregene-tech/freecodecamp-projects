const questions = [{
 category: "The defeat ofGoliath" ,
  question: "Which person killed Goliath ?" ,
  choices: ["Solomon" , "David" , "Jesus"] ,
  answer: "David" 
},

{
  category: "Noah and the Ark" ,
  question: "How many Days and Nights was Noah on the Ark for ?",
  choices: ["20 days and 20 nights" , "30 days and 50 nights", "40 days and 40 nights"] ,
  answer: "40 days and 40 nights" 
},

{
  category: "The coat of many colours" ,
  question: "Who was given a coat of many colors by his father Jacob ?",
  choices: ["Joseph" , "Jacob", "Judas"] ,
  answer: "Joseph" ,
},

 {
  category: "Jesus and his Birth" ,
  question: "In which town was Jesus born ?",
  choices: ["New York" , "Bethlehem", "Jerusalem"] ,
  answer: "Bethlehem"  
},

{
    category: "Moses",
    question: "Through which body of water did Moses lead the Israelites?",
    choices: ["The Red Sea", "The Dead Sea", "The Jordan River"],
    answer: "The Red Sea"
  }
];

function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

// 3. Returns a random choice from the question's choices array
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

// 4. Compares computer choice against question answer
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}
// 3. Connect to HTML DOM Elements
const categoryBadge = document.getElementById("category-badge");
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const feedbackMessage = document.getElementById("feedback-message");
const scoreDisplay = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");

// 4. Game State Variables
let currentQuestion = null;
let currentScore = 0;

// 5. Function to Load and Render a New Question
function displayNewQuestion() {
  // Clear out old feedback
  feedbackMessage.textContent = "";

  // Get a random question object
  currentQuestion = getRandomQuestion(questions);

  // Update HTML text
  categoryBadge.textContent = currentQuestion.category;
  questionText.textContent = currentQuestion.question;

  // Clear existing buttons from the choices container
  choicesContainer.innerHTML = "";

  // Create a new button for each choice
  currentQuestion.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.classList.add("choice-btn");
    button.textContent = choice;

    // Add click event listener to each button
    button.addEventListener("click", () => handleChoiceClick(choice));

    // Append button into HTML container
    choicesContainer.appendChild(button);
  });
}

// 6. Function to Handle Choice Click
function handleChoiceClick(selectedChoice) {
  // Get result text using your function
  const resultText = getResults(currentQuestion, selectedChoice);
  feedbackMessage.textContent = resultText;

  // Update score if correct
  if (selectedChoice === currentQuestion.answer) {
    currentScore += 10;
    scoreDisplay.textContent = currentScore;
  }

  // Disable all choice buttons after an answer is chosen
  const allChoiceButtons = choicesContainer.querySelectorAll(".choice-btn");
  allChoiceButtons.forEach((btn) => {
    btn.disabled = true;
  });
}

// 7. Event Listener for "Next Question" Button
nextBtn.addEventListener("click", displayNewQuestion);

// 8. Start the Quiz when page loads
displayNewQuestion();
