import React from "react";
import MainHeader from "./MainHeader";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-200 w-screen min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start">
        <aside className="bg-white rounded-lg w-60 p-4">Left</aside>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
