import {
  faAngleDown,
  faAngleUp,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import ScrollBox from "../../components/scroll-box";
import { numberPicker } from "../../util/number-picker";

const questions = [
  {
    id: 1,
    question: "잠을 충분히 주무셨나요?",
    answers: ["😀", "🤔"],
  },
  {
    id: 2,
    question: "건강한 음식을 드셨나요?",
    answers: ["😀", "🤔"],
  },
  {
    id: 3,
    question: "오늘 하늘을 보셨나요?",
    answers: ["😀", "🤔"],
  },
  {
    id: 4,
    question: "친구와 안부전화를 하셨나요?",
    answers: ["😀", "🤔"],
  },
  {
    id: 5,
    question: "지켜주고 싶은 사람을 떠올려 보셨나요?",
    answers: ["😀", "🤔"],
  },
];

function SurveyPage() {
  const [questionInfo, setQuestionInfo] = useState<{
    questionId: number;
    direction: "forward" | "backward";
  }>({ questionId: 0, direction: "forward" });
  const router = useRouter();

  const [answers, setAnswers] = useState<(number | undefined)[]>(
    Array.from({ length: questions.length }, (v, k) => undefined)
  );

  useEffect(() => {
    if (
      questionInfo.questionId === questions.length - 1 &&
      !answers.includes(undefined)
    ) {
      const input = answers.map((answer) => answer === 0);
      const lottoNumber = numberPicker(input).sort((a, b) => a - b);

      router.push({
        pathname: "/survey/result",
        query: {
          numbers: JSON.stringify(lottoNumber),
        },
      });
    }
  }, [questionInfo.questionId, answers, router]);

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

  const handleClickAnswer = (
    e: React.MouseEvent,
    questionId: number,
    answerNo: number
  ) => {
    e.preventDefault();
    setAnswers((prev) => {
      const newArray = [...prev];
      newArray[questionId] = answerNo;
      return newArray;
    });

    handleScrollDown(e);
  };

  return (
    <>
      <Head>
        <title>Survey | 6Numbers</title>
        <meta name="description" content="사용자 설문기반 로또 번호 생성" />
      </Head>
      <div className="flex flex-col items-center justify-center h-[100vh] overflow-hidden p-5">
        <ScrollBox
          id={questionInfo.questionId}
          direction={questionInfo.direction}
        >
          <div className="mb-5">
            <span className="text-blue-700 text-base font-semibold">
              {questionInfo.questionId + 1}
            </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              size="sm"
              className="text-blue-700 mx-2"
            />
            <span className="text-xl font-semibold text-gray-800">
              {questions[questionInfo.questionId].question}
            </span>
          </div>
          <div className="flex items-center justify-center w-full">
            {questions[questionInfo.questionId].answers.map((answer, index) => (
              <div
                key={answer}
                className={`text-4xl mx-5 lg:mx-10 cursor-pointer font-semibold transition-all p-2 hover:bg-green-100 rounded-2xl ${
                  answers[questionInfo.questionId] !== undefined &&
                  answers[questionInfo.questionId] === index &&
                  "bg-green-200 rounded-2xl"
                }`}
                onClick={(e: React.MouseEvent) =>
                  handleClickAnswer(e, questionInfo.questionId, index)
                }
              >
                {answer}
              </div>
            ))}
          </div>

          {/* {questionInfo.questionId === questions.length - 1 &&
            !answers.includes(undefined) && (
              <button
                className="mt-5 cursor-pointer bg-blue-700 text-gray-100 p-2 text-lg font-semibold rounded-md"
                onClick={getLottoNumber}
              >
                Get Lucky Numbers
              </button>
            )} */}
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
