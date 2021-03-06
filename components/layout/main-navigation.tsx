import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
//import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
//import Image from "next/image";

const linkList = [
  { title: "Home", path: "/" },
  { title: "Survey", path: "/survey" },
  //{ title: "Birth", path: "/birth" },
];

const logoPath = "/images/logo.png";

// const Item = styled.li<{ current?: boolean }>`
//   color : ${(props) =>
//     props.current ? props.theme.blue.dark : props.theme.white.light}
//   transition : color 0.3s ease-in-out;
//   &:hover {
//     color: ${(props) => props.theme.blue.light};
//   }
//   &::after {
//     display: block;
//     border-bottom: solid 3px ${(props) => props.theme.blue.dark};
//     content: "";
//     transform: ${(props) => (props.current ? "scaleX(1)" : "scaleX(0)")};
//     transition: transform 0.3s ease-in-out;
//   }
//   &:hover:after {
//     border-bottom: solid 3px ${(props) => props.theme.blue.light};
//     transform: scaleX(1);
//   }
// `;

const NavItem = ({
  title,
  path,
  current,
  classProps,
}: {
  title: string;
  path: string;
  current: boolean;
  classProps?: string;
}) => {
  return (
    <li
      className={`mx-4 ${
        classProps ? `${classProps}` : ""
      } hover:text-yellow-500`}
    >
      <Link
        href={path}
        className={`mx-2 text-base font-medium ${
          classProps ? `${classProps}` : ""
        } ${current ? "text-[#1890ff]" : ""}`}
      >
        {title}
      </Link>
    </li>
  );
};

const MainNavigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { pathname } = useRouter();

  return (
    <nav className="w-full flex flex-row md:justify-center justify-between items-center p-4 fixed z-10 bg-gray-900 bg-opacity-10">
      <div className="md:ml-14 ml-8 mr-auto justify-center items-center"></div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {linkList.map((item) => (
          <NavItem
            {...item}
            key={item.title}
            current={pathname === item.path}
          />
        ))}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            className="text-white md:hidden cursor-pointer z-20"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 max-w-[70vw] min-w[30vw] h-screen shadow-2xl md:hidden
          flex flex-col justify-start items-end rounded-md text-white bg-gray-900 bg-opacity-80 animate-slide-in
          py-20"
          >
            {linkList.map((item) => (
              <NavItem
                {...item}
                key={item.title}
                classProps={"my-3 text-lg"}
                current={pathname === item.path}
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default MainNavigation;
