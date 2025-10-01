/**
 * Lecture 5 activity
 * Author: Shruti Jakhar
 * Course: CSCI 3172
 * 
 * Description:
 * This script provides both Magic 8-Ball responses and Fortune Cookie sayings.
 * When the user asks a question, the program randomly selects an answer from
 * one of the two lists and displays it on the page, as well as logs it to the console.
 */

// Magic 8-Ball answers (from official site)
const magic8BallAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don’t count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
  ];
  
  // Fortune cookie sayings (sample from site)
  const fortuneCookieSayings = [
    "You will find great fortune in unexpected places.",
    "Now is the time to try something new.",
    "Good things are coming your way.",
    "Your hard work will soon pay off.",
    "Adventure awaits you this weekend.",
    "You will conquer obstacles to achieve success.",
    "Happiness begins with facing life with a smile.",
    "A new opportunity will soon present itself.",
    "You will soon gain something you have always desired.",
    "A lifetime of happiness lies ahead of you."
  ];
  
  // Function to fetch the question and return a random answer
  function getAnswer() {
    const question = document.getElementById("userQuestion").value.trim();
    const answerElement = document.getElementById("answer");
  
    if (question === "") {
      answerElement.textContent = "Please enter a question!";
      console.log("No question entered.");
      return;
    }
  
    // Randomly decide which array to use
    const useMagic8Ball = Math.random() < 0.5;
    const chosenArray = useMagic8Ball ? magic8BallAnswers : fortuneCookieSayings;
  
    // Pick a random answer
    const randomIndex = Math.floor(Math.random() * chosenArray.length);
    const response = chosenArray[randomIndex];
  
    // Display result to user
    answerElement.textContent = `You asked: "${question}" \nAnswer: ${response}`;
  
    // Log to console
    console.log(`Question: ${question}`);
    console.log(`Answer: ${response}`);
  
    return response; // use return as requested
  }
  