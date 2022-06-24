//import Link from "next/link";

function Footer() {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 bg-gray-900 bg-opacity-0 fixed bottom-0 z-10">
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">6Numbers</p>
        <p className="text-white text-sm text-center">info@6nmbers.com</p>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-sm text-center">@6Numbers 2022</p>
        <p className="text-white text-sm text-center">All rights reserved</p>
      </div>
    </div>
  );
}
export default Footer;
