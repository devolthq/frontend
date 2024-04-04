import React, { useMemo } from "react";
import { Card } from "../ui/card";
import { KeyRound } from "lucide-react";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";

export default function MapSectionHome() {
  8;

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map/Map"), {
        loading: () => <p>map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div className="px-10 mb-20">
      <Card className="flex-wrap lg:flex-nowrap max-w-screen-2xl md:w-[160vh] px-4 pb-4 flex mx-auto bg-[#080908] border-2 border-[#161d15] gap-6">
        <div className="w-[600px] mx-auto p-4 content-around flex flex-wrap flex-row min-w-16 md:bg-[#0e0f0e] md:border-2 md:border-[#161d15] md:mt-4 md:rounded-md">
          <h2 className="font-bold mx-auto text-center text-3xl md:5xl">Find a station near you</h2>
          <p className="py-6 hidden text-center md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor{" "}
          </p>
          <Button className="mx-auto mt-4 md:mt-0">
            Navigate to nearest station
          </Button>
        </div>
        <div className="w-full rounded-2xl mt-3 m-auto">
          <Map
            center={[-23.572448, -46.706937]}
            stations={[
              {
                address: "Rua dos Pinheiros, 220",
                batteryLevel: 50,
                id: 1,
                latitude: -23.572448,
                longitude: -46.06937,
                maxCapacity: 100,
                meanPrice: 2.5,
                availablePlugs: "asdgadf",
                maxVoltage: 220,
              },
            ]}
            height="350px"
            roundedBottomCorners
            roundedTopCorners
            userLocation={[-23.572448, -46.706937]}
          />
        </div>
    </Card>
      </div>
  );
}
