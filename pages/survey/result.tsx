import Head from "next/head";
import { useRouter } from "next/router";

function SurveyResultPage() {
  const router = useRouter();
  console.log(router);
  const {
    query: { numbers },
  } = router;

  const parsedNumbers: number[] =
    typeof numbers === "string" ? JSON.parse(numbers) : [];

  return (
    <>
      <Head>
        <title>Survey Result | Ticket to heaven</title>
        <meta name="description" content="번호 생성 결과" />
      </Head>
      <div className="bg-gray-900 w-full h-[100vh] flex flex-col items-center justify-center">
        <div className="text-white font-semibold text-2xl">
          {parsedNumbers &&
            parsedNumbers.map((number) => (
              <span key={number} className="mx-5">
                {number}
              </span>
            ))}
        </div>
      </div>
    </>
  );
}

export default SurveyResultPage;
