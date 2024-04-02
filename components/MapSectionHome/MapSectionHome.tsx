import React from "react";
import Map from "../Map/Map";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { KeyRound } from "lucide-react";
import { Button } from "../ui/button";

export default function MapSectionHome() {
  return (
    <div className=" flex flex-wrap text-center max-w-screen-2xl px-4 gap-4 mx-auto mb-20">
      <Card className="max-w-sm min-w-sm">
        <CardHeader>
          <CardTitle className="text-3xl">Find a station near you</CardTitle>
        </CardHeader>
        <CardContent className="text-neutral-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor{" "}
        </CardContent>
        <CardFooter>
          <Button>Navigate</Button>
        </CardFooter>
      </Card>{" "}
      <div className="min-w-md max-w-screen-lg w-full">
        <Map
          center={[-23.572448, -46.706937]}
          stations={[
            {
                address: "Rua dos Pinheiros, 220",
                batteryLevel: 50,
                id: 1,
                latitude: -23.572448,
                longitude: -46.806937,
                maxCapacity: 100,
                meanPrice: 2.5,
                availablePlugs: "asdgadf",
                maxVoltage: 220,
            }
          ]}
          roundedBottomCorners
          roundedTopCorners
          userLocation={[-23.572448, -46.706937]}
        />
      </div>
    </div>
  );
}
