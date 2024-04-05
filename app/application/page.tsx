"use client";

import React, { useState } from "react";
import HeaderApp from "../../components/HeaderApplication/HeaderApp";
import SidebarApp from "../../components/SidebarApp/SidebarApp";
import { LocationProvider } from "@/contexts/LocationContext";
import Buy from "@/components/Buy/Buy";
import Dashboard from "@/components/Dashboard/Dashboard";

const ApplicationHome = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const getPageComponent = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "paginaTres":
        return <Buy />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <LocationProvider>
      <div className="flex h-screen bg-[#070707]">
        <SidebarApp setActivePage={setActivePage} />
        <div className="flex-1 flex flex-col">
          <HeaderApp />
          <main className="flex-1 p-4 mt-14 ml-24">{getPageComponent()}</main>
        </div>
      </div>
    </LocationProvider>
  );
};

export default ApplicationHome;
