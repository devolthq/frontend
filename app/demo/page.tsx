"use client";
import "@/app/globals.css";

import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import printConsoleASCIIArt from "@/utils/ASCIIart";
import Topbar from "@/components/Topbar/Topbar";

const Home: NextPage = () => {
	let printedASCII = false;
	const videoRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		!printedASCII && printConsoleASCIIArt();
		printedASCII = true;

		if (videoRef.current) {
			videoRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	return (
		<>
			<Topbar />
			<div
				ref={videoRef}
				className="flex flex-col justify-center items-center min-h-screen h-screen w-screen bg-black md:p-4 lg:p-8"
			>
				<iframe
					style={{
						boxShadow: "0 0 25px #42ff4f30",
					}}
					className="w-full h-full md:rounded-lg shadow-2xl md:shadow-none"
					src="https://www.youtube.com/embed/bZmSJBUckqA?controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3"
					title="DeVolt Presentation"
					autoFocus={true}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</>
	);
};

export default Home;
