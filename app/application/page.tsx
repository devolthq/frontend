"use client";

import "../globals.css";
import React from "react";
import HeaderApp from "../../components/HeaderApplication/HeaderApp";
import SidebarApp from "../../components/SidebarApp/SidebarApp";

const ApplicationHome = () => {
  return (
    <div className="flex h-screen  bg-[#070707] ">
      <SidebarApp />
      <div className="flex-1 flex flex-col">
        <HeaderApp />
        <main className="flex-1 p-4 mt-14">
          <div className="h-full  ml-24 rounded-md " >
            
          </div>
        </main>
      </div>
    </div>
  );
};

export default ApplicationHome;
