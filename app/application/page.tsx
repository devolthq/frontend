"use client";

import "../globals.css";
import React, { useMemo } from "react";
import HeaderApp from "../../components/HeaderApplication/HeaderApp";
import SidebarApp from "../../components/SidebarApp/SidebarApp";
import { LocationProvider } from "@/contexts/LocationContext";
import MapSectionHome from "@/components/MapSectionHome/MapSectionHome";
import dynamic from "next/dynamic";

const ApplicationHome = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map/Map"), {
        loading: () => <p>map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <LocationProvider>
      <div className="flex h-screen  bg-[#070707] ">
        <SidebarApp />
        <div className="flex-1 flex flex-col">
          <HeaderApp />
          <main className="flex-1 p-4 mt-14">
            <div className="h-full  ml-24 rounded-md ">
              <div className="grid grid-cols-3 grid-rows-1 gap-9 bg-zinc-900  rounded-xl m-8">
                <div className="col-span-2 m-6">
                  {" "}
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
                    height="430px"
                    roundedBottomCorners
                    roundedTopCorners
                    userLocation={[-23.572448, -46.706937]}
                  />
                </div>
                <div className="col-start-3 my-6 mr-6 bg-zinc-800 rounded-[25px]">
                  2
                </div>
              </div>
              <div className="grid grid-cols-2 grid-rows-1 gap-4 bg-zinc-900  rounded-xl m-8">
                <div className="m-6 bg-zinc-800 rounded-[25px]">1</div>
                <div className="my-6 mr-6 bg-zinc-800 rounded-[25px]">2</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </LocationProvider>
  );
};

export default ApplicationHome;
