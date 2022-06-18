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
  const [questionInfo, setQuestionInfo] = useState<{
    questionId: number;
    direction: "forward" | "backward";
  }>({ questionId: 0, direction: "forward" });

  const handleScrollUp = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuestionInfo((prev) => {
      let nextId = prev.questionId - 1;
      if (nextId < 0) {
        nextId = prev.questionId;
      }

      return { questionId: nextId, direction: "backward" };
    });
  };

  const handleScrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuestionInfo((prev) => {
      let nextId = prev.questionId + 1;
      if (nextId > questions.length - 1) {
        nextId = prev.questionId;
      }

      return { questionId: nextId, direction: "forward" };
    });
  };
  return (
    <>
      <Head>
        <title>Survey | Ticket to heaven</title>
        <meta name="description" content="ticket description" />
      </Head>
      <div className="flex flex-col items-center justify-center h-[100vh] overflow-hidden">
        <ScrollBox
          id={questionInfo.questionId}
          direction={questionInfo.direction}
        >
          <h1>Q :{questions[questionInfo.questionId].question}</h1>
          <div className="flex flex-col items-center justify-center">
            {questions[questionInfo.questionId].answers.map((answer) => (
              <button key={answer}>{answer}</button>
            ))}
          </div>
        </ScrollBox>
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
