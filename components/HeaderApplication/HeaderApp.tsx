// components/Header.tsx
import React from "react";
import logo from "@/public/logo_horizontal.svg";
import Image from "next/image";
import { Button } from "../ui/button";


const HeaderApp = () => {
  return (
    <header className="w-full flex justify-between items-center p-4  text-white fixed top-0 ">
      <div>
        <Image src={logo} alt="logo" height={50} />
      </div>
      <div>
        <span className="mr-2">88°F Most Cloudly</span>
        <span>10:30 AM 06-22-2023</span>
      </div>
      <div>
        <Button>4AoLS...3bTHM</Button>
      </div>
    </header>
  );
};

export default HeaderApp;
