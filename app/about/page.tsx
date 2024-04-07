"use client";

import type { NextPage } from "next";
import Topbar from "@/components/Topbar/Topbar";
import "../globals.css";
import station3d from "@/public/station-3d.svg";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const About: NextPage = () => {

  return (
    <>
     <Topbar/>
        <div className="px-12 md:px-40 mt-4 md:mt-12">
            <p className="text-5xl font-semibold">What is Devolt? Can I trust it?</p>
            <div className="flex gap-16 items-center max-h-screen-2xl">
                <div className="md:w-[70%] md:h-[80%] flex p-4 gap-8">
                    <div className="">
                        <Card className="md:w-[50vh] md:h-[30vh] mb-6">
                            
                        </Card>
                        <Card className="md:w-[50vh] md:h-[30vh]">
                            
                        </Card>      
                    </div>
                    <div className="">
                        <Card className="md:w-[50vh] md:h-full mb-6">           
                        </Card>
                    </div>
                    
                </div>
                <Image src={station3d} alt="station" height={950} className="hidden md:block md:-mt-12"/>
            </div>
            
        </div>
    </>

  );
};

export default About;
