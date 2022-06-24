import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/home-page/footer";
import Hero from "../components/home-page/hero";

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>6Numbers</title>
        <meta
          name="description"
          content="우주와 나를 연결하는 여섯개의 번호. 로또. 행운번호."
        />
      </Head>
      <Hero />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
//className="h-[75vh] overflow-auto"
