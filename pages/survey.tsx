import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import React, { useState } from "react";
import ScrollBox from "../components/scroll-box";

const questions = [
  {
    id: 1,
    question: "당신은 누구와 함께 걷고 있습니까?",
    answers: ["가족", "친구"],
  },
  {
    id: 2,
    question:
      "그 사람과 함께 숲속을 계속 걸어가다 보면 한 동물을 만나게 됩니다. 그 동물은 무엇인가요?",
    answers: ["호랑이", "토끼"],
  },
  {
    id: 3,
    question:
      "숲속으로 더 깊이 걸어가다 보면 공터가 나옵니다. 그 중심에는 한 채의 집이 있습니다. 그 집에는 울타리가 있나요?",
    answers: ["네", "아니오"],
  },
  {
    id: 4,
    question:
      "집에 다가 가면 문이 조금 열려 있는 것이 보입니다. 살짝 문을 열고 들어가면 거기에는 테이블이 있습니다. 테이블에는 무엇이 있습니까?",
    answers: ["총", "음식"],
  },
  {
    id: 5,
    question:
      "집안을 둘러본 당신은 뒷문으로 나가 보았습니다. 그곳에는 잔디가 펼쳐져 있고, 중심에는 정원이 있고, 물이 있습니다. 물에 얼굴을 비추어 봅니다. 얼굴은 무엇으로 보이나요?",
    answers: ["내 얼굴", "낯선 얼굴 혹은 생명체"],
  },
];

function SurveyPage() {
  const [questionInfo, setQuestionInfo] = useState<{
    questionId: number;
    direction: "forward" | "backward";
  }>({ questionId: 0, direction: "forward" });

  const [answers, setAnswers] = useState<(number | undefined)[]>(
    Array.from({ length: questions.length }, (v, k) => undefined)
  );

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

    if (questionId === questions.length - 1 && !answers.includes(undefined)) {
      getLottoNumber();
    } else {
      handleScrollDown(e);
    }
  };

  const getLottoNumber = () => {
    alert(answers.map((answer) => answer === 0).join(" / "));
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
          <h1>
            Q{questionInfo.questionId + 1} :
            {questions[questionInfo.questionId].question}
          </h1>
          <div className="flex flex-col items-center justify-center">
            {questions[questionInfo.questionId].answers.map((answer, index) => (
              <button
                key={answer}
                onClick={(e: React.MouseEvent) =>
                  handleClickAnswer(e, questionInfo.questionId, index)
                }
              >
                {answer}
              </button>
            ))}
          </div>
        </ScrollBox>
        {questionInfo.questionId === questions.length - 1 &&
          !answers.includes(undefined) && (
            <button className="mt-5" onClick={getLottoNumber}>
              Get Lucky Numbers
            </button>
          )}
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
