const questions = [{
 category: "David and Goliath" ,
  question: "Which little boy killed Goliath ?" ,
  choices: ["Solomon" , "David" , "Jesus "] ,
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
