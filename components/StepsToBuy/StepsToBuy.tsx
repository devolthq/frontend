import buySteps from "@/public/stepsToBuy.svg";
import stepsToBuySm from "@/public/stepsToBuySm.svg";
import Image from "next/image";
import stepsToSell from "@/public/stepsToSell.svg";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

export default function StepsToBuyAndSell() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    return (
        <div className="bg-gradient-to-b from-black via-[#0d120d] to-black pt-8">
            <div className="flex justify-center my-12">
                <p className="text-4xl font-bold px-8 text-center">
                    See how easy it is to charge your car with DeVolt
                </p>
            </div>
            <div className="md:flex justify-center w-full hidden">
                <Image src={buySteps} alt="buySteps" width={1200} />
            </div>
            <div className="flex justify-center md:hidden mx-4">
                <Image
                    src={stepsToBuySm}
                    alt="buySteps"
                    width={1200}
                    className="w-[80%]"
                />
            </div>
            <div className="flex justify-center mt-20">
                <div className="px-12 md:px-12 mt-4 md:mt-12 max-w-screen-2xl w-full md:flex">
                    <p className="text-4xl font-semibold md:px-10 mb-2 md:w-[40%]">
                        Become an Energy Seller with DeVolt
                    </p>
                    <p className="md:w-[60%] text-neutral-400">
                        Join DeVolt&apos;s network and start selling energy with minimal
                        bureaucracy. Our straightforward process ensures you can quickly and
                        efficiently begin contributing to the energy marketplace. By
                        becoming a part of DeVolt, you take an active role in shaping a
                        sustainable future while generating income from your surplus energy.
                    </p>
                    <Button onClick={() => scrollToSection("support")}>
                        Join as a Seller
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
            {/* <div className="md:flex justify-center w-full hidden mt-6">
                <Image src={stepsToSell} alt="buySteps" width={1300} />
            </div> */}
        </div>
    );
}
