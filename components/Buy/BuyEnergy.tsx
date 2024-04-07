import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Image from "next/image";
import battery from "./assets/battery.svg";
import arrow from "./assets/arrow.svg";
import arrowReverse from "./assets/arrowreverse.svg";
import Station from "@/types/station";
import { SetStateAction, Dispatch } from "react";
import SelectPlug from "./SelectPlug";
import Buy from "./Buy";

interface BuyEnergyProps {
  averagePrice: number;
  selectedStation: Station | null;
  setSelectedStation: Dispatch<SetStateAction<Station | null>>;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  onSubmit: () => void;
}
const currentBattery = 23;

export const BuyEnergy = ({
  averagePrice,
  selectedStation,
  setSelectedStation,
  value: initialValue,
  setValue: setInitialValue,
  onSubmit,
}: BuyEnergyProps) => {
  const [selectedValue, setSelectedValue] = useState(
    Math.max(initialValue, currentBattery)
  );
  const [showSelectPlug, setShowSelectPlug] = useState(false);
  const [showBackStep, setShowBackStep] = useState(false);

  if (showBackStep) {
    return <Buy />;
  }

  const handleBackStep = () => {
    setShowBackStep(true);
  };

  const handleNextStep = () => {
    setShowSelectPlug(true);
  };

  const handleChange = (newValue: any) => {
    setSelectedValue(newValue);
  };

  const toBeCharged = (currentBattery: number, selectedValue: number) =>
    selectedValue - currentBattery;
  const chargePercentage = toBeCharged(currentBattery, selectedValue);
  const chargeCost = chargePercentage * averagePrice;

  const totalWidth = 170; // Total width of the battery
  const futureBatteryInWidth = (totalWidth * selectedValue) / 100; // Width of the green rectangle
  const currentBatteryInWidth = (totalWidth * currentBattery) / 100; // Width of the grey rectangle (current battery level)

  if (showSelectPlug) {
    return (
      <SelectPlug
        averagePrice={averagePrice}
        selectedStation={selectedStation}
        toBeCharged={toBeCharged(currentBattery, selectedValue)}
        chargeCost={chargeCost}
      />
    );
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-zinc-900 h-[83%] w-[50%] rounded-3xl p-8 relative">
        <p className="ml-4 font-bold text-[30px] text-zinc-200 my-6 mt-0">
          #2 Select your preferred charging amount.
        </p>
        <h2 className="m-6">
          The white section of the bar indicates your current battery level.
          Adjust the selector to fill the green part, representing your target
          charge level.
        </h2>
        <div className=" mt-16">
          <div className="relative flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="392"
              height="126"
              fill="none"
              viewBox="0 0 196 63"
              className="z-0"
            >
              <rect
                fill="#25CB55"
                x="6"
                y="6"
                width={futureBatteryInWidth}
                height="51"
              ></rect>
              <rect
                fill="#D9D9D9"
                x="6"
                y="6"
                width={currentBatteryInWidth}
                height="51"
              ></rect>
            </svg>
            <div className="absolute inset-0 flex justify-center items-center">
              <Image
                src={battery}
                alt="Battery icon"
                className="z-10"
                width="392"
                height="126"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-8">
            <Slider
              min={currentBattery}
              max={100}
              value={selectedValue}
              onChange={handleChange}
              step={1}
              railStyle={{ height: 10 }}
              handleStyle={{
                borderColor: "green",
                height: 28,
                width: 28,
                marginLeft: -14,
                marginTop: -9,
                backgroundColor: "green",
              }}
              trackStyle={{ backgroundColor: "green", height: 10 }}
            />
            <h1 className="mt-12 font-bold text-3xl">Target Charge Level</h1>
            <p className="font-extralight text-5xl px-2 mt-4">
              {selectedValue}%
            </p>
            <p className="text-lg mt-2 px-2 font-medium">
              {/* Total to be paid: V${(selectedValue * averagePrice).toFixed(2)} */}
              Total to be paid: V${chargeCost}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="flex justify-between m-4">
            <button onClick={handleBackStep}>
              <Image src={arrowReverse} alt="" />
            </button>
            <button
              onClick={handleNextStep}
              className="bg-[#3AFF4E] h-10 w-32 flex items-center justify-center rounded-md"
            >
              <h1 className="text-black mr-2">Next Step</h1>
              <Image src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
