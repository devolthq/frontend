import React from "react";
import logo from "@/public/logo_horizontal.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import { Wallet } from "@/contexts/WalletContext";

export default function Topbar() {

  const handleClick = () => {
    console.log('Botão clicado');
  };

  return (
    <motion.div
    
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}

    className="flex p-10 justify-between text-xl max-w-screen-xl mx-auto">
      <Image src={logo} alt="logo" height={50} />
      <div className="gap-5 hidden md:flex font-medium m-auto">
        <a>Home</a>
        <a className="text-zinc-600 transition hover:text-white hover:cursor-pointer">Whitepaper</a>
        <a className="text-zinc-600 transition hover:text-white hover:cursor-pointer">Support</a>
      </div>
      <div className="my-auto">
      <Button className="hover:scale-105 transition" onClick={handleClick}>
        Get started
      </Button>
      </div>
    </motion.div>
  );
}
