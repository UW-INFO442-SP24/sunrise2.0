
import React, { useState } from 'react';
const quizData = [
  {
    question: "What position do you play?",
    options: ["Outside", "Libero", "Setter", "Right side/Middle hitter"],
    points: [0,0,0,0,0]
  },
  {
    question: "Do you play in the front row or backrow?",
    options: ["Front row", "Back row"],
    points: [0,0,0,0,0]
  },
  {
    question: "How often do you play volleyball?",
    options: ["Once a month", "Once a week", "2-3 times a week", "4-5 times a week"],
    points: [0,0,0,0,0]
  },
  {
    question: "What area(s) are the most tender after practice?",
    options: ["Shoulder", "Back", "Knees", "Ankles"],
    points: [0,0,0,0,0]
  },
  {
    question: "If you are hurt, how long have you been injured?",
    options: ["I am not hurt", "Less than a week", "Less than two weeks", "About a month","multiple month"],
    points: [0,0,0,0,0]
  },
  {
    question: "How would you describe the pain if you answered anything other than 1-2?",
    options: ["No pain, but weaker than used to", "Constant pain even while resting", "Unmanageable, need painkillers"],
    points: [0,0,0,0,0]
  }
];
const Quiz_component = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(new Array(quizData.length).fill(null));
  const [score, setScore] = useState([0,0,0,0,0]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;
    setUserAnswers(newUserAnswers);

    // Automatically move to the next question or show results
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finaliseQuiz(newUserAnswers);
    }
  };

  const finaliseQuiz = (answers) => {
    const newScore = answers.reduce((acc, answer, index) => {
      return acc + (answer === quizData[index].answer ? 1 : 0);
    }, 0);
    setScore(newScore);
    setShowResult(true);
  };

  const restartQuiz = () => {
    setUserAnswers(new Array(quizData.length).fill(null));
    setScore(0);
    setShowResult(false);
    setCurrentQuestion(0);
  };

  return (
    <div>
      {!showResult ? (
        <div>
          <h2>{quizData[currentQuestion].question}</h2>
          <ul>
            {quizData[currentQuestion].options.map(option => (
              <li key={option} onClick={() => handleAnswer(option)}><button>{option}</button></li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2>Your score: {score}/{quizData.length}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz_component;
