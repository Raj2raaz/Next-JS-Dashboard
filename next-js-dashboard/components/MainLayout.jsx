"use client";
import React, { useContext } from "react";
import MainHeader from "./MainHeader";

import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import Link from "next/link";
import { MenuContext } from "@/context/MenuContext";

const MainLayout = ({ children }) => {

const {open} = useContext(MenuContext)

  return (
    <div className="bg-gray-200 w-screen min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start">
        {/* <aside className="bg-white rounded-lg w-60 p-4"> */}
        <aside className={`bg-white rounded-lg overflow-hidden transition-all duration-200 ${open ? "w-60 p-4" : "w-0"} lg:w-60 lg:p-4`}>
          <ul>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-x1 p-2">
              <AiOutlineHome className="mr-2"/>
              <Link href="/">Home</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-x1 p-2">
              <GrProjects className="mr-2"/>
              <Link href="/">Content</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-x1 p-2">
              <GrProjects className="mr-2"/>
              <Link href="/">Team</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-x1 p-2">
              <GrProjects className="mr-2"/>
              <Link href="/">User</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-x1 p-2">
              <GrProjects className="mr-2"/>
              <Link href="/">App/web</Link>
            </li>










          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
