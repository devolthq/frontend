import Image from "next/image";
import React from "react";
import BYD from "@/public/BYD.svg";
import GWM from "@/public/GWM.svg";
import Haval from "@/public/haval.svg";


export default function BrandsSection() {
  return (
    <div className="text-center max-w-screen-xl mx-auto my-10 lg:my-20">
      <h2 className="text-xl md:text-2xl  mb-6 text-neutral-200 ">
      Your favorite companies trust us    
       </h2>
      <div className="flex flex-wrap gap-6 md:gap-14 justify-center px-20">
        <Image height={90} src={BYD} alt="car company logo"/>
        <Image height={120} src={Haval} alt="car company logo"/>
        <Image height={130} src={GWM} alt="car company logo"/>
      </div>
    </div>
  );
}
