import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { KeyRound, Cable, Fuel } from "lucide-react";

export default function CardsSection() {
  return (
    <div className="text-center max-w-screen-xl mx-auto mb-20">
      <h2 className="text-3xl lg:text-5xl text-neutral-200 font-bold">
        Creating solutions for the energy market
      </h2>
      <div className="flex gap-4 md:gap-10 flex-wrap mt-10 mx-4 justify-center">
        <Card className="max-w-sm">
          <div className="flex md:flex-wrap md:p-4 gap-2 justify-center">
            <Fuel
              strokeWidth={1.5}
              size={80}
              className="md:p-0 p-4 md:mx-auto"
            />
            <p className="text-3xl mr-4 md:mr-0 self-center font-bold md:w-full">
              Stations
            </p>
          </div>
          <CardContent className="text-neutral-400 text-sm md:text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor{" "}
          </CardContent>
        </Card>{" "}
        <Card className="max-w-sm">
          <div className="flex md:flex-wrap md:p-4 gap-2 justify-center">
            <KeyRound
              strokeWidth={1.5}
              size={80}
              className="md:p-0 p-4 md:mx-auto"
            />
            <p className="text-3xl self-center  mr-4 md:mr-0 content-center font-bold md:w-full">
              Secure
            </p>
          </div>
          <CardContent className="text-neutral-400 text-sm md:text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor{" "}
          </CardContent>
        </Card>
        <Card className="max-w-sm">
          <div className="flex md:flex-wrap md:p-4 gap-2 justify-center">
            <Cable
              strokeWidth={1.5}
              size={80}
              className="md:p-0 p-4 md:mx-auto"
            />
            <p className="text-3xl self-center  mr-4 md:mr-0 content-center font-bold md:w-full">
              Charge
            </p>
          </div>
          <CardContent className="text-neutral-400 text-sm md:text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor{" "}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
