import Head from "next/head";
import { useRouter } from "next/router";
import { motion, Variants } from "framer-motion";

const lineVariants: Variants = {
  enter: {
    x: -1000,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
};

const numberVariants: Variants = {
  enter: {
    y: 1000,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
};

function SurveyResultPage() {
  const router = useRouter();
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
        <div className="text-white font-semibold text-3xl text-center">
          {parsedNumbers &&
            parsedNumbers.map((number, index) => (
              <motion.span
                key={number}
                className="mx-5"
                initial="enter"
                animate="center"
                variants={numberVariants}
                transition={{ duration: 5 / (6 - index), delay: 1.5 }}
              >
                {number}
              </motion.span>
            ))}
          <motion.hr
            variants={lineVariants}
            initial="enter"
            animate="center"
            transition={{ duration: 5 }}
            className="w-[100vw] border-2 mt-3"
          ></motion.hr>
        </div>
      </div>
    </>
  );
}

export default SurveyResultPage;
