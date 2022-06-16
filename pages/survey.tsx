import Head from "next/head";

import { motion } from "framer-motion";

function SurveyPage() {
  return (
    <>
      <Head>
        <title>Survey | Ticket to heaven</title>
        <meta name="description" content="ticket description" />
      </Head>
      <h1 className="text-3xl font-bold underline">Survey</h1>
      <motion.div>Survey List</motion.div>
    </>
  );
}

export default SurveyPage;
