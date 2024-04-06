import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Image from "next/image";
import battery from "./assets/battery.svg";
import arrow from "./assets/arrow.svg";
import arrowReverse from "./assets/arrowreverse.svg";
import Station from "@/types/station";
import { SetStateAction } from "react";
import { Dispatch } from "react";

import { ReactNode } from "react";
import SelectPlug from "./SelectPlug";
import Buy from "./Buy";

interface BuyEnergyProps {
  averagePrice: number;
  value: number;
  // children: ReactNode;
  setValue: Dispatch<SetStateAction<number>>;
  onSubmit: () => void;
}

export const BuyEnergy = ({ averagePrice }: BuyEnergyProps) => {
  const [value, setValue] = useState(50);
  const [showSelectPlug, setShowSelectPlug] = useState(false);
  const [showBackStep, setShowBackStep] = useState(false);

  if (showSelectPlug) {
    return (
      <SelectPlug
      // averagePrice={price}
      // value={value}
      // setValue={setValue}
      // onSubmit={() => setOpenPopUp(true)}
      />
    );
  }

  if (showBackStep) {
    return <Buy />;
  }

  const handleBackStep = () => {
    setShowBackStep(true);
  };

  const handleNextStep = () => {
    // colocar if aqui para verificar se a carga preterida é maior que a carga atual
    setShowSelectPlug(true);
  };

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  const totalWidth = 170; // Largura total da bateria
  const futureBattery = (totalWidth * value) / 100; // Largura do retângulo verde

  const currentBattery = (totalWidth * 50) / 100;

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
        <div className="relative flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="392"
            height="126"
            fill="none"
            viewBox="0 0 196 63"
            className="z-0" // Certifique-se de que o SVG esteja por baixo na pilha de sobreposição
          >
            <rect
              fill="#25CB55"
              x="6"
              y="6"
              width={futureBattery}
              height="51"
            ></rect>
            <rect
              fill="#D9D9D9"
              x="6"
              y="6"
              width={currentBattery}
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
            min={0}
            max={100}
            value={value}
            onChange={(newValue: number | number[]) =>
              handleChange(newValue as number)
            }
            step={1}
            railStyle={{
              height: 10,
            }}
            handleStyle={{
              borderColor: "green",
              height: 28,
              width: 28,
              marginLeft: -14,
              marginTop: -9,
              backgroundColor: "green",
            }}
            trackStyle={{
              backgroundColor: "green",
              height: 10,
            }}
          />
          <h1 className="mt-12 font-bold text-3xl">Target Charge Level</h1>
          <p className="font-extralight text-5xl px-2 mt-4">{value}%</p>
          <p className="  text-lg  mt-2 px-2 font-medium ">
            Total to be paid: V${(value * averagePrice).toFixed(2)}
          </p>
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
