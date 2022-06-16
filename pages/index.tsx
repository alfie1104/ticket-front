import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Footer from "../components/home-page/footer";
import Hero from "../components/home-page/hero";
import SurveyPage from "./survey";

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Ticket to heaven</title>
        <meta
          name="description"
          content="천국으로 가는 티켓. 사용자 입력 및 확률을 이용한 로또 번호 생성기"
        />
      </Head>
      <Hero />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
