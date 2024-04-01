import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../ui/card";
import { KeyRound, Cable,Fuel } from "lucide-react";

export default function CardsSection() {
  return (
    <div className="text-center max-w-screen-xl mx-auto mb-48">
      <h2 className="text-5xl text-neutral-400 font-bold">
        Creating solutions for the energy market
      </h2>
      <div className="flex gap-10 mt-10 justify-center">
        <Card className="max-w-sm">
          <CardHeader>
            <KeyRound strokeWidth={1.5} size={80} className="mx-auto pb-2" />
            <CardTitle className="text-3xl">Secure</CardTitle>
          </CardHeader>
          <CardContent className="text-neutral-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor{" "}
          </CardContent>
        </Card>{" "}
        <Card className="max-w-sm">
          <CardHeader>
            <Fuel strokeWidth={1.5} size={80} className="mx-auto pb-2" />
            <CardTitle className="text-3xl">Stations</CardTitle>
          </CardHeader>
          <CardContent className="text-neutral-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor{" "}
          </CardContent>
        </Card>{" "}
        <Card className="max-w-sm">
          <CardHeader>
            <Cable strokeWidth={1.5} size={80} className="mx-auto pb-2" />
            <CardTitle className="text-3xl" >Charge</CardTitle>
          </CardHeader>
          <CardContent className="text-neutral-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor{" "}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
