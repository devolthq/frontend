"use client";

import type { NextPage } from "next";
import "./globals.css";
import { LocationProvider } from "@/contexts/LocationContext";
import Topbar from "@/components/Topbar/Topbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import CardsSection from "@/components/CardsSection/CardsSection";
import { Car } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";
const Home: NextPage = () => {

  return (
    <LocationProvider>
      <Topbar/>
      <HeroSection/>

      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4, duration: 1}}
      >
      <Car className="mx-auto my-32"strokeWidth={1} color="#555" size={60}/>
      <CardsSection/>

      </motion.div>
      <Footer/>
    </LocationProvider>

  );
};

export default Home;
