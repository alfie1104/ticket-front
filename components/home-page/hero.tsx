import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import bgImage from "../../public/images/bg_original.jpeg";

function Hero() {
  // return (
  //   <section className="text-center bg-gradient-to-b from-gray-900 to-gray-700 p-8 h-[80vh] flex flex-col flex-1">
  //     <div className="text-8xl text-gray-700 p-10 bg-gradient-to-br from-yellow-500 to-yellow-200 w-[500px] m-auto rounded-md">
  //       Ticekt
  //     </div>
  //     <h2 className="text-6xl m-4 text-yellow-400">Ticekt to Heaven</h2>
  //     <p className="text-2xl text-gray-200 w-[90%] max-w-2xl m-auto">
  //       행복을 향한 티켓. 사용자 입력/확률 기반 로또 번호 생성기.
  //       <br />
  //       지금 천국으로 가는 티켓을 구해보세요
  //     </p>
  //   </section>
  // );
  const router = useRouter();
  const handleClickMain = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/survey");
  };
  return (
    <section className="flex flex-col flex-1 h-[100vh] items-center justify-center relative">
      <Image
        src="/images/bg_original.jpeg"
        alt="An image showing space and person"
        layout="fill" //부모요소의 position이 relative일 때, 이미지가 부모 요소만큼 늘어나게 됨
        objectFit="cover" //배경 이미지가 비율을 유지하면서 늘어날 수 있게 설정
        objectPosition={"center"} //이미지 위치를 중앙으로 설정
      />
      <p
        className="relative text-6xl text-gray-200 bg-gray-900 bg-opacity-50 px-10 py-5 hover:text-yellow-500 cursor-pointer transition-all"
        onClick={handleClickMain}
      >
        지구의 위치와 나의 컨디션으로 만들어진 우주적 로또번호
      </p>
    </section>
  );
}
export default Hero;
