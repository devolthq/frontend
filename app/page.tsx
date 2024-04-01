"use client";

import type { NextPage } from "next";
import "./globals.css";
import { LocationProvider } from "@/contexts/LocationContext";
import Topbar from "@/components/Topbar/Topbar";

const Home: NextPage = () => {

  return (
    <LocationProvider>
      <Topbar/>
      <div>
        hello
      </div>
    </LocationProvider>
  );
};

export default Home;
