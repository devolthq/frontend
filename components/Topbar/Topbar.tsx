import React from "react";
import logo from "@/public/logo_horizontal.svg";
import Image from "next/image";
import { Button } from "../ui/button";
export default function Topbar() {
  return (
    <div className="flex p-10 justify-between text-xl max-w-screen-xl mx-auto">
      <Image src={logo} alt="logo" height={50} />
      <div className="gap-5 hidden md:flex font-medium m-auto">
        <a>Home</a>
        <a className="text-zinc-600 transition hover:text-white hover:cursor-pointer">Whitepaper</a>
        <a className="text-zinc-600 transition hover:text-white hover:cursor-pointer">Support</a>
      </div>
      <div className="my-auto">
        <Button>Get started</Button>
      </div>
    </div>
  );
}
