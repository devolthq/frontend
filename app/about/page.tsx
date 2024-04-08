"use client";

import type { NextPage } from "next";
import Topbar from "@/components/Topbar/Topbar";
import "../globals.css";
import AboutHero from "@/components/AboutHero/AboutHero";
import StepsToBuyAndSell from "@/components/StepsToBuy/StepsToBuy";
import { AccordionDemo } from "@/components/Faq/Faq";

const About: NextPage = () => {

    return (
        <>
            <Topbar />
            <AboutHero />
            <StepsToBuyAndSell />
            <AccordionDemo
            />

            
        </>

    );
};

export default About;
