import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";


export default function SupportSection() {

  return (
    <div className="px-10 mb-20 w-[100%]" id="support">
        <div className="flex justify-center items-center">
            <h1 className=" text-3xl lg:text-4xl text-neutral-200 font-bold pb-6">Contact us</h1>
        </div>
        <Card className="w-[100%] lg:w-[90%]  px-4 pb-4 flex mx-auto bg-[#080908] border-2 border-[#161d15]">
        <div className="lg:w-[60%] w-[100%]">
            <div className="flex-wrap md:flex-nowrap md:flex md:gap-4">
                <input type="text" placeholder="Email" className="focus:outline-none w-full p-2 mt-4 bg-[#0e0f0e] border border-[#161d15] rounded-md"/>
                <input type="text" placeholder="Phone" className="focus:outline-none w-full p-2 mt-4 bg-[#0e0f0e] border border-[#161d15] rounded-md"/>
            </div>
            <textarea placeholder="Please type here the subject you wish to discuss with us..." className=" focus:outline-none w-full h-56 md:h-44 p-2 mt-4 bg-[#0e0f0e] border border-[#161d15] rounded-md"/>
            <Button className="mt-2 px-12">Send</Button>
        </div>
        <div className="md:w-[40%] md:flex md:justify-end md:py-4 hidden w-[0%]">
            <h2 className="md:text-5xl md:text-right md:w-[90%] md:mr-6">Keep in touch, we want hear you!</h2>
        </div>
        </Card>
      </div>
  );
}
