import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import React, { useState } from "react";
import ScrollBox from "../components/scroll-box";

const questions = [
  {
    id: 1,
    question: "question1",
    answers: ["answer1", "answer2", "answer3"],
  },
  {
    id: 2,
    question: "question2",
    answers: ["answer1", "answer2", "answer3"],
  },
  {
    id: 3,
    question: "question3",
    answers: ["answer1", "answer2", "answer3", "answer4"],
  },
  {
    id: 4,
    question: "question4",
    answers: ["answer1", "answer2", "answer3", "answer4"],
  },
  {
    id: 5,
    question: "question5",
    answers: ["answer1", "answer2"],
  },
  {
    id: 6,
    question: "question6",
    answers: ["answer1", "answer2"],
  },
  {
    id: 7,
    question: "question7",
    answers: ["answer1", "answer2", "answer3", "answer4"],
  },
  {
    id: 8,
    question: "question8",
    answers: ["answer1", "answer2", "answer3", "answer4"],
  },
  {
    id: 9,
    question: "question9",
    answers: ["answer1", "answer2", "answer3", "answer4"],
  },
];

function SurveyPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleScrollUp = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentQuestion((prev) => {
      let next = prev - 1;
      if (next < 0) {
        next = prev;
      }

      return next;
    });
  };

  const handleScrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentQuestion((prev) => {
      let next = prev + 1;
      if (next > questions.length - 1) {
        next = prev;
      }

      return next;
    });
  };
  return (
    <>
      <Head>
        <title>Survey | Ticket to heaven</title>
        <meta name="description" content="ticket description" />
      </Head>
      <div className="flex flex-col items-center justify-start">
        {/* <h1 className="text-3xl font-bold underline">Survey</h1> */}
        <div className="mt-5 flex flex-col items-center justify-start">
          <ScrollBox>
            <h1>Q :{questions[currentQuestion].question}</h1>
            <div className="flex flex-col items-center justify-center">
              {questions[currentQuestion].answers.map((answer) => (
                <button key={answer}>{answer}</button>
              ))}
            </div>
          </ScrollBox>
        </div>
      </div>
      <div className="absolute bottom-12 right-12 flex items-center flex-col">
        <FontAwesomeIcon
          icon={faAngleUp}
          size="2x"
          className="text-gray-700 cursor-pointer hover:text-gray-400 transition-all"
          onClick={handleScrollUp}
        />
        <FontAwesomeIcon
          icon={faAngleDown}
          size="2x"
          className="text-gray-700 cursor-pointer hover:text-gray-400 transition-all"
          onClick={handleScrollDown}
        />
      </div>
    </>
  );
}

export default SurveyPage;
