import buySteps from "@/public/stepsToBuy.svg";
import stepsToBuySm from "@/public/stepsToBuySm.svg";
import Image from "next/image";
import stepsToSell from "@/public/stepsToSell.svg";


export default function StepsToBuyAndSell() {
    return (
            <div className="bg-gradient-to-b from-black via-[#0d120d] to-black pt-8">
                <div className="flex justify-center my-12">
                    <p className="text-4xl font-bold px-8 text-center">See how easy it is to charge your car with Devolt</p>
                </div>
                <div className="md:flex justify-center w-full hidden">
                    <Image src={buySteps} alt="buySteps" width={1200} />
                </div>
                <div className="flex justify-center md:hidden mx-4">
                    <Image src={stepsToBuySm} alt="buySteps" width={1200} className="w-[80%]" />
                </div>
                <div className="flex justify-center mt-20">
                    <div className="px-12 md:px-12 mt-4 md:mt-12 max-w-screen-2xl w-full md:flex">
                        <p className="text-4xl font-semibold md:px-10 mb-2 md:w-[40%]">How can I sell my energy to Devolt stations?</p>
                        <p className="md:w-[60%] text-neutral-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        </p>
                    </div>
                </div>
                <div className="md:flex justify-center w-full hidden mt-6">
                    <Image src={stepsToSell} alt="buySteps" width={1300} />
                </div>
            </div>
    );
}
