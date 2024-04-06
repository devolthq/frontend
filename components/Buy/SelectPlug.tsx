import React from "react";
import Image from "next/image";
import arrow from "./assets/arrow.svg";
import arrowReverse from "./assets/arrowreverse.svg";

const SelectPlug = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-zinc-900 h-[800px] w-[50%] rounded-3xl p-8 relative">
        <h1 className="ml-4 font-bold text-[30px] text-zinc-200 my-6 mt-0">
          #3 Select your preferred charging spot
        </h1>
        <h2 className="m-6">
          The nearest charging station to your current location is automatically
          selected, but you can choose any DeVolt station you prefer.
        </h2>
        <div className=" bg-zinc-950 rounded-lg h-24 w-full">
          <div className="grid grid-cols-3 grid-rows-1 gap-4 h-full">
            <div className="flex justify-center items-center">
              <h1 className="text-center  text-xl font-semibold ">Spot 1</h1>
            </div>
            <div className="flex justify-center items-center">Compatible with your car!</div> 
            <div className="flex  justify-end items-center mr-8">
                <h1>Avaliable</h1>
                <input type="radio" name="spot" className="ml-2" />

            </div> 
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="flex justify-between m-4">
            <button>
              <Image src={arrowReverse} alt="" />
            </button>
            <button
              // onClick={handleNextStep}
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

export default SelectPlug;
