import Image from "next/image";
import React from "react";
import BYD from "@/public/BYD.svg";
import GWM from "@/public/GWM.svg";
import Haval from "@/public/haval.svg";


export default function BrandsSection() {
  return (
    <div className="text-center max-w-screen-xl mx-auto my-28">
      <h2 className="text-2xl  mb-6 text-neutral-600 ">
      Your favorite companies trust us    
       </h2>
      <div className="flex gap-14 justify-center px-20">
        <Image height={90} src={BYD} alt="car company logo"/>
        <Image height={120} src={Haval} alt="car company logo"/>
        <Image height={130} src={GWM} alt="car company logo"/>
      </div>
    </div>
  );
}
