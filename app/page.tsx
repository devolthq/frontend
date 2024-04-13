"use client";

import type { NextPage } from "next";
import "./globals.css";
import { LocationProvider } from "@/contexts/LocationContext";
import Topbar from "@/components/Topbar/Topbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import CardsSection from "@/components/CardsSection/CardsSection";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import BrandsSection from "@/components/BrandsSection/BrandsSection";
import MapSectionHome from "@/components/MapSectionHome/MapSectionHome";
import SupportSection from "@/components/SupportSection/SupportSection"; 
import HowItWorks from "@/components/HowItWorks/HowItWorks";

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
      <BrandsSection/>
      <CardsSection/>
      <HowItWorks/>
      </motion.div>
      <MapSectionHome/>    
      <SupportSection />
      <Footer/>
    </LocationProvider>

  );
};

export default Home;
