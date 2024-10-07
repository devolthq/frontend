"use client";
import "@/app/globals.css";

import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import printConsoleASCIIArt from "@/utils/ASCIIart";
import Topbar from "@/components/Topbar/Topbar";

const Presentation: NextPage = () => {
    const printedASCII = useRef(false);
    const pdfRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!printedASCII.current) {
            printConsoleASCIIArt();
            printedASCII.current = true;
        }

        if (pdfRef.current) {
            pdfRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <>
            <Topbar />
            <div
                ref={pdfRef}
                className="flex flex-col justify-center items-center min-h-screen h-screen w-screen bg-black md:p-4 lg:p-8"
            >
                <iframe
                    src="/DeVolt-Pitch.pdf"
                    className="w-full h-full rounded-lg"
                    style={{ boxShadow: "0 0 25px #42ff4f80" }}
                    title="DeVolt Presentation"
                ></iframe>
            </div>
        </>
    );
};

export default Presentation;