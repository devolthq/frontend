import Image from "next/image";
import React from "react";
import BYD from "@/public/BYD.svg";
import GWM from "@/public/GWM.svg";
import Haval from "@/public/haval.svg";


export default function BrandsSection() {
  return (
    <div className="text-center max-w-screen-xl mx-auto mb-10 lg:mb-20">
      <h2 className="text-xl md:text-2xl mb-6 text-neutral-500 ">
      Companies that trust DeVolt  
       </h2>
      <div className="flex flex-wrap gap-6 md:gap-14 justify-center px-10">
        <Image width={130} src={BYD} alt="car company logo"/>
        <Image width={150} src={Haval} alt="car company logo"/>
        <Image width={120} src={GWM} alt="car company logo"/>
      </div>
    </div>
  );
}
