"use client";

import type { NextPage } from "next";
import Topbar from "@/components/Topbar/Topbar";
import "../globals.css";
import station3d from "@/public/station3d.svg";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const About: NextPage = () => {

  return (
    <>
     <Topbar/>
        <div className="flex justify-center">
        <div className="px-12 md:px-24 mt-4 md:mt-12 max-w-screen-2xl w-[100%]">
            <p className="text-5xl font-semibold md:px-10 mb-2">What is Devolt? Can I trust it?</p>
            <div className="flex items-center justify-center">
                <div className="md:w-[70%] md:h-[80%] flex p-4 gap-8">
                    <div className="md:w-[50%]">
                        <Card className="md:h-[30vh] mb-6">
                            
                        </Card>
                        <Card className="md:h-[30vh]">
                            
                        </Card>      
                    </div>
                    <div className="md:w-[50%]">
                        <Card className="md:h-full mb-6">           
                        </Card>
                    </div>
                    
                </div>
                <Image src={station3d} alt="station" height={700} className="hidden md:block md:-mt-12 max-h-screen-2xl "/>
            </div>
            </div>
            
        </div>
    </>

  );
};

export default About;
