import Head from "next/head";

function SurveyPage() {
  return (
    <>
      <Head>
        <title>Survey | Ticket to heaven</title>
        <meta
          name="description"
          content="천국으로 가는 티켓. 사용자 입력 및 확률을 이용한 로또 번호 생성기"
        />
      </Head>
      <h1 className="text-3xl font-bold underline">Survey</h1>
    </>
  );
}

export default SurveyPage;
