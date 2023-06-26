import React, { useState } from "react";

const Quiz = () => {
  // questions and answers for the quiz
  const questions = [
    {
      question: "Q.01 What is the capital of India?",
      answers: ["A. Delhi", "B. London", "C. New York", "D. Tokyo"],
      correctAnswer: "A. Delhi",
    },
    {
      question: "Q.02 What is the largest planet in our solar system?",
      answers: ["A. Earth", "B. Mars", "C. Jupiter", "D. Neptune"],
      correctAnswer: "C. Jupiter",
    },
    {
      question: "Q.03 Who invented the lightbulb?",
      answers: [
        "A. Thomas Edison",
        "B. Benjamin Franklin",
        "C. Nikola Tesla",
        "D. Isaac Newton",
      ],
      correctAnswer: "A. Thomas Edison",
    },
    {
      question: "Q.03 what is the capital of bihar ?",
      answers: ["A. patna", "B. ara", "C. Gopalganj", "D. siwan"],
      correctAnswer: "A. patna",
    },
    {
      question: "Q.03 what is the capital of U.P ?",
      answers: ["A. Lakhanaw", "B. gorakhpur", "C. agara", "D. noida"],
      correctAnswer: "A. Lakhanaw",
    },
  ];

  // state for the current question and score
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // function to handle the user's answer
  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      // if the answer is correct, increase the score
      setScore(score + 100);
    }
    // move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <>
      <div className="card text-center text-light bg-dark hight-lg ">
        <h1>Quiz Game</h1>
        <div className="m-3">
          {/* display the current question and answer options */}
          <h2>{questions[currentQuestion].question}</h2>
          <div>
            {questions[currentQuestion].answers.map((answer) => (
              <button
                type="button"
                className="btn btn-primary m-3 "
                onClick={() => handleAnswer(answer)}
              >
                {answer}
              </button>
            ))}
          </div>
          {/* display the score */}
        </div>
      </div>

      <div className="card">
        <div className="card-body text-center bg-dark ">
          <h1 className="text-light">score : {score}</h1>
          <h2 className="text-warning">General Quiz Rules: </h2>

          <p className="text-warning">
            1. Respect and fairness: Treat all participants with respect and
            maintain a fair environment throughout the quiz. 2. No cheating:
            Participants must refrain from using any unfair means, such as
            accessing external resources or receiving assistance from others. 3.
            Time management: Answer questions within the given time limit to
            ensure equal opportunities for all participants. 4. One answer per
            question: Each participant is allowed to provide only one answer per
            question. Once an answer is submitted, it cannot be changed. 5.
            Quizmaster's decision: The final decision of the quizmaster
            regarding correct answers, scoring, and any disputes is binding and
            should be accepted by all participants. 6. No disruptions:
            Participants should avoid causing disruptions or distractions during
            the quiz, ensuring a smooth and focused environment. 7. Respect
            turns: Wait for your turn to answer, and avoid interrupting or
            talking over others. 8. Enjoy and have fun: Remember, quizzes are
            meant to be enjoyable. Embrace the spirit of learning and friendly
            competition while participating. 9. Follow guidelines: Adhere to any
            specific guidelines or rules provided by the quiz organizer or host.
            10. Good sportsmanship: Display good sportsmanship, congratulate
            winners, and accept defeat graciously.
          </p>
          <a href="/" className="btn btn-primary">
            More
          </a>
        </div>
      </div>
    </>
  );
};

export default Quiz;
