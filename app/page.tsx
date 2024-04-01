"use client";

import type { NextPage } from "next";
import "./globals.css";
import { LocationProvider } from "@/contexts/LocationContext";
import Topbar from "@/components/Topbar/Topbar";
import HeroSection from "@/components/HeroSection/HeroSection";

const Home: NextPage = () => {

  return (
    <LocationProvider>
      <Topbar/>
      <HeroSection/>
    </LocationProvider>
  );
};

export default Home;
