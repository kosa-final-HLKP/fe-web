"use client";

import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import DropdownCom from "@/components/Dropdown";
import { UserInfoType } from "@/types";

const headerList = [
  {
    path: "/",
    name: "홈",
  },
  {
    path: "/service",
    name: "서비스",
  },
  {
    path: "/timeline",
    name: "타임라인",
  },
  {
    path: "/calendar",
    name: "베베 캘린더",
  },
  {
    path: "/album",
    name: "베베 앨범",
  },
];
type Props = {
  user: UserInfoType | null;
};
export default function Navbar({ user }: Props) {
  return (
    <header className="z-10 sticky top-0 bg-[#fff8ee]">
      <nav className="border-gray-200 px-4 lg:px-6 py-3 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <Image src={Logo} width={150} alt="BeBeFace Logo" />
          </a>
          <div className="flex items-center lg:order-2">
            {user?.name ? (
              <>
                <span className="mr-3">{user.name}</span>
                <DropdownCom role={user.role} />
              </>
            ) : (
              <>
                <a
                  href="/auth/signin"
                  className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  로그인
                </a>
                <a
                  href="/auth/register"
                  className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  회원가입
                </a>
              </>
            )}
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {headerList.map(({ path, name }) => (
                <li key={path}>
                  <a
                    href={path}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
