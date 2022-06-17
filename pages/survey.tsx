import Head from "next/head";
import ScrollBox from "../components/scroll-box";

const questions = [
  {
    question: "question1",
    answers: ["answer1", "answer2", "answer3"],
  },
  {
    question: "question2",
    answers: ["answer1", "answer2", "answer3"],
  },
  {
    question: "question3",
    answers: ["answer1", "answer2", "answer3", "answer4"],
  },
];

function SurveyPage() {
  return (
    <>
      <Head>
        <title>Survey | Ticket to heaven</title>
        <meta name="description" content="ticket description" />
      </Head>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold underline">Survey</h1>
        <ScrollBox>List</ScrollBox>
      </div>
    </>
  );
}

export default SurveyPage;
