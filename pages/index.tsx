import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import Hero from "../components/home-page/hero";

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
    </Fragment>
  );
};

export default HomePage;
