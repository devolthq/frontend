import Image from "next/image";
import React from "react";
import greenArch from "@/public/green_arch.svg";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react"

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
        <div className="text-center pt-40">
          <motion.h1
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 1 }}
            className="font-medium text-7xl text-neutral-400"
          >
            Taking eletric <br />
            vehicles{" "}
            <motion.span
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.4 }}
              className="font-bold text-white"
            >
              further.
            </motion.span>
          </motion.h1>
          <motion.p
          className="text-xl text-neutral-300 mt-4 p-10 max-w-screen-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            DeVolt is a decentralized platform and protocol designed to facilitate the entry of new players into the electric fueling market. With monetary incentives, logistical facilitations, more accessible stations, and an open, fully transparent market.
          </motion.p>
          <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 3 }}
          className="flex justify-center gap-10">
            <Button>
              Get Started
            </Button>
            <Button variant={"secondary"}>
              Read the whitepaper
              <ChevronRight className="ml-2 h-4 w-4"/>
              </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
