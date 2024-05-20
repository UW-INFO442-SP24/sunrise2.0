import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { NavLink } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import './quiz.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const quizData = [
  {
    question: "What position do you play?",
    options: ["Outside", "Libero", "Setter", "Right side/Middle hitter"],
    type: "single",
    points: [[1,0,0,0], [0,1,0,0], [0,0,1,0], [0,0,0,1]]
  },
  {
    question: "Do you play in the front row or back row?",
    options: ["Front row", "Back row"],
    type: "single",
    points: [[1,1,0,0], [0,0,1,1]]
  },
  {
    question: "How often do you play volleyball?",
    options: ["Once a month", "Once a week", "2-3 times a week", "4-5 times a week"],
    type: "single",
    points: [[0,0,0,1], [0,0,1,0], [0,1,0,0], [1,0,0,0]]
  },
  {
    question: "What area(s) are the most tender after practice?",
    options: ["Shoulder", "Back", "Knees", "Ankles"],
    type: "multiple",
    points: [[1,0,0,0], [0,1,0,0], [0,0,1,0], [0,0,0,1]]
  },
  {
    question: "If you are hurt, how long have you been injured?",
    options: ["I am not hurt", "Less than a week", "Less than two weeks", "About a month", "Multiple months"],
    type: "single",
    points: [[0,0,0,0], [0,0,0,1], [0,0,1,0], [0,1,0,0], [1,0,0,0]]
  },
  {
    question: "How would you describe the pain if you answered anything other than 'I am not hurt'?",
    options: ["No pain, but weaker than used to", "Constant pain even while resting", "Unmanageable, need painkillers"],
    type: "single",
    points: [[1,0,0,0], [0,1,0,0], [0,0,1,0]]
  }
];

const bodyPartsInfo = {
  "Shoulder": "/shoulder",
  "Back": "/back",
  "Knees": "/knee",
  "Ankles": "/ankle"
};

const QuizComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(new Array(quizData.length).fill(null));
  const [bodyPartsScore, setBodyPartsScore] = useState([0, 0, 0, 0]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionIndex) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = optionIndex;
    setUserAnswers(newUserAnswers);

    const questionPoints = quizData[currentQuestion].points[optionIndex];
    const newBodyPartsScore = bodyPartsScore.map((score, index) => score + questionPoints[index]);
    setBodyPartsScore(newBodyPartsScore);

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleMultipleAnswer = () => {
    const checkedOptions = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(input => parseInt(input.value));
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = checkedOptions;
    setUserAnswers(newUserAnswers);

    const newBodyPartsScore = bodyPartsScore.map((score, index) =>
      score + checkedOptions.reduce((acc, optionIndex) => acc + quizData[currentQuestion].points[optionIndex][index], 0)
    );
    setBodyPartsScore(newBodyPartsScore);

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setUserAnswers(new Array(quizData.length).fill(null));
    setBodyPartsScore([0, 0, 0, 0]);
    setShowResult(false);
    setCurrentQuestion(0);
  };

  const maxScoreIndex = bodyPartsScore.indexOf(Math.max(...bodyPartsScore));
  const mostAffectedBodyPart = ["Shoulder", "Back", "Knees", "Ankles"][maxScoreIndex];
  const infoLink = bodyPartsInfo[mostAffectedBodyPart];

  const chartData = {
    labels: ["Shoulder", "Back", "Knees", "Ankles"],
    datasets: [
      {
        label: "Likelihood of Injury",
        data: bodyPartsScore,
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <h2 className="quiz-question">{`Question ${currentQuestion + 1} / ${quizData.length}`}</h2>
          <h3 className="quiz-question">{quizData[currentQuestion].question}</h3>
          {quizData[currentQuestion].type === "single" ? (
            <ul className="quiz-options">
              {quizData[currentQuestion].options.map((option, index) => (
                <li key={index} onClick={() => handleAnswer(index)}>
                  <button>{option}</button>
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <ul className="quiz-options">
                {quizData[currentQuestion].options.map((option, index) => (
                  <li key={index}>
                    <input
                      type="checkbox"
                      id={`option-${index}`}
                      name={`option-${index}`}
                      value={index}
                    />
                    <label htmlFor={`option-${index}`}>{option}</label>
                  </li>
                ))}
              </ul>
              <div className="quiz-nav-buttons">
              </div>
            </div>
          )}
          <div className="quiz-nav-buttons">
            {currentQuestion > 0 && <button onClick={() => setCurrentQuestion(currentQuestion - 1)}>Previous</button>}
            {currentQuestion < quizData.length - 1 && quizData[currentQuestion].type === "single" && (
              <button onClick={() => handleAnswer(currentQuestion)}>Next</button>
            )}
            {currentQuestion < quizData.length - 1 && quizData[currentQuestion].type === "multiple" && (
              <button onClick={() => handleAnswer(currentQuestion)}>Next</button>
            )}
          </div>
        </div>
      ) : (
        <div>
          <h2>Results</h2>
          <div className="chart-container">
            <Pie data={chartData} />
          </div>
          <div className="summary">
            <p>The part of the body that needs the most attention is: <strong>{mostAffectedBodyPart}</strong></p>
            <p>For more information on how to take care of your {mostAffectedBodyPart}, visit <NavLink to={infoLink} className= "btn">this page</NavLink>.</p>
          </div>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
