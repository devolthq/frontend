import Image from "next/image";
import React from "react";
import greenArch from "@/public/green_arch.svg";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Car, ChevronRight, File, PlayIcon, ScrollText, Zap } from "lucide-react"
import { Play } from "next/font/google";

export default function HeroSection() {
  return (
    <div className="relative mx-auto max-w-screen-2xl">
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ duration: 6, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        className="absolute inset-0 w-full"
      >
        <Image className="w-full" src={greenArch} alt="background-pattern" />
      </motion.div>

      <div className="relative z-1">
        <div className="text-center pt-24">

          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="bg-neutral-900 border  border-[#212c1d] shadow-lg mb-5 shadow-[#202b1c] flex font-semibold transition rounded-xl text-sm p-2 px-4 w-fit mx-auto ">
            <Zap strokeWidth={2} size={20} color="#0f0" fill="#0f0" className="mr-2"/>
            V2 is now live!
          </motion.div>

          <motion.h1
            initial={{ y: 70, opacity: 0, color: "#000"}}
            animate={{ y: 0, opacity: 1,color: "#777" }}
            transition={{ duration: 1.4 }}
            className="font-medium text-4xl lg:text-7xl text-neutral-400"
          >
            Taking eletric <br />
            vehicles{" "}
            <motion.span
              initial={{ opacity: 0}}
              animate={{ opacity: 1, }}
              transition={{ duration: 1, delay: 1.7 }}
              className="font-bold text-white shadow-white drop-shadow-lg"
            >
              further<span className="text-green-500">.</span>
            </motion.span>
          </motion.h1>
          <motion.p
          className="lg:text-xl leading-relaxed text-neutral-300 mt-4 p-10 max-w-screen-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            DeVolt is a decentralized platform and protocol designed to facilitate the entry of new players into the electric fueling market. <span className="font-semibold">
              
              With monetary incentives, logistical facilitations, more accessible stations, and an open, fully transparent market.
              </span>
          </motion.p>
          <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 3 }}
          className="flex flex-wrap justify-center mx-4 gap-10">
            <Button className="hover:scale-105  transition shadow-lg shadow-[#3a583a]">
              Find charging stations near you
              <ChevronRight className="ml-2 h-4 w-4"/>
            </Button>
            <Button variant={"secondary"}>
              Watch the video
              <PlayIcon fill="#fff" className="ml-2 h-4 w-4" />
                            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
