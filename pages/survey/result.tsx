import Head from "next/head";
import { useRouter } from "next/router";
import { motion, Variants } from "framer-motion";

const lineVariants: Variants = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: 0,
  },
};

const numberVariants: Variants = {
  hidden: {
    opacity: 0,
    rotate: 30,
  },
  visible: {
    opacity: 1,
    rotate: 0,
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
        <title>Result | 6Numbers</title>
        <meta name="description" content="번호 생성 결과" />
      </Head>
      <div className="bg-gray-900 w-full h-[100vh] flex flex-col items-center justify-center">
        <div className="text-white font-thin text-3xl text-center mb-5 flex items-center justify-center gap-7">
          {parsedNumbers.map((number, index) => (
            <motion.div
              key={`number_${number}`}
              initial="hidden"
              animate="visible"
              variants={numberVariants}
              transition={{ duration: 0.5, delay: 4.5 + index * 0.5 }}
            >
              {number}
            </motion.div>
          ))}
        </div>
        <motion.hr
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 5, ease: "linear" }}
          className="w-full"
        ></motion.hr>
      </div>
    </>
  );
}

export default SurveyResultPage;
