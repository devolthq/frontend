import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { KeyRound, Cable, Fuel } from "lucide-react";

export default function CardsSection() {
  return (
    <div className="text-center max-w-screen-xl mx-auto mb-20">
      <h2 className="text-3xl lg:text-4xl text-neutral-200 font-semibold drop-shadow-xl shadow-white md:pt-4 px-2">
        Creating solutions for the energy market
      </h2>
      <div className="flex gap-4 md:gap-14 flex-wrap mt-8 justify-center mx-10 md:mx-0 ">

        <div className="w-[95%] md:w-[30%] mb-8">
          <div className="flex-wrap md:p-4 gap-2 items-center justify-start">

            <div className="w-20 h-20 rounded-full bg-[#131413] border-2 border-[#161d15] flex justify-center items-center">
              <Fuel
                strokeWidth={1.5}
                size={40}
              />
            </div>

            <p className="text-3xl text-start mt-4">
              Stations
            </p>

            <p className="text-start text-neutral-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor{" "}
            </p>
          </div>
        </div>
        <div className="w-[95%] md:w-[30%] mb-8">
          <div className="flex-wrap md:p-4 gap-2 items-center justify-start">

            <div className="w-20 h-20 rounded-full bg-[#131413] border-2 border-[#161d15] flex justify-center items-center">
              <KeyRound
                strokeWidth={1.5}
                size={40}
              />
            </div>

            <p className="text-3xl text-start mt-4">
              Secure
            </p>

            <p className="text-start text-neutral-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor
            </p>
          </div>
        </div>
        <div className="w-[95%] md:w-[30%] mb-8">
          <div className="flex-wrap md:p-4 gap-2 items-center justify-start">

            <div className="w-20 h-20 rounded-full bg-[#131413] border-2 border-[#161d15] flex justify-center items-center">
              <Cable
                strokeWidth={1.5}
                size={40}
              />
            </div>

            <p className="text-3xl text-start mt-4">
              Charge
            </p>

            <p className="text-start text-neutral-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor{" "}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
