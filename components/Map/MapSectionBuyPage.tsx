import dynamic from "next/dynamic";
import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from "../../contexts/LocationContext";
import queryAllStations from "../../utils/queryAllStations";

interface mapSectionBuypageProps {
  roundedTopCorners: boolean;
  roundedBottomCorners: boolean;
  stations: any;
  setStations: any;
  width: string;
  setSelectedStation: any;
}

export const MapSectionBuypage = ({
  roundedTopCorners,
  roundedBottomCorners,
  stations,
  setStations,
  width,
  setSelectedStation,
}: mapSectionBuypageProps) => {
  const { location, updateLocation } = useLocation();

  useEffect(() => {
    queryAllStations().then((stations) => {
      setStations(stations);
    });
  }, [location]);

  const Map = useMemo(
    () =>
      dynamic(() => import("./Map"), {
        loading: () => <p>map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <>
      <Map
        buttonText="Select"
        userLocation={location}
        roundedTopCorners={roundedTopCorners}
        roundedBottomCorners={roundedBottomCorners}
        stations={stations}
        center={location}
        width={width}
        setSelectedStation={setSelectedStation}
        height="300px"
      />
    </>
  );
};
