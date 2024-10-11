"use client";

import React from "react";
import logo from "@/public/logo_horizontal.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Topbar() {
	const router = useRouter();
	const pathname = usePathname();

	const scrollToSection = (id: string) => {
		setTimeout(() => {
			const element = document.getElementById(id);
			element?.scrollIntoView({ behavior: "smooth", block: "center" });
		}, 200);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, delay: 1 }}
			className="flex p-10 justify-between text-xl max-w-screen-xl mx-auto items-center"
		>
			<Link href="/">
				<Image src={logo} alt="logo" height={50} />
			</Link>
			<div className="gap-5 hidden md:flex font-medium m-auto justify-center">
				<Link
					href="/"
					className={`transition hover:text-white hover:cursor-pointer ${
						pathname == "/" ? "text-white" : "text-zinc-600"
					}`}
				>
					Home
				</Link>
				<Link
					href="/"
					onClick={() => scrollToSection("about")}
					className={`transition hover:text-white hover:cursor-pointer text-zinc-600`}
				>
					About
				</Link>
				<Link
					href="/"
					onClick={() => scrollToSection("support")}
					className={`transition hover:text-white hover:cursor-pointer text-zinc-600`}
				>
					Contact
				</Link>
				<Link
					href="/demo"
					className={`transition hover:text-white hover:cursor-pointer ${
						pathname == "/demo" ? "text-white" : "text-zinc-600"
					}`}
				>
					Demo
				</Link>
				<Link
					target="_blank"
					href="https://drive.google.com/drive/u/3/folders/1auyDSagGdwYz28UgOmwnuwc0sAO1F9WP"
					className={`transition hover:text-white hover:cursor-pointer ${
						pathname == "/resources"
							? "text-white"
							: "text-zinc-600"
					}`}
				>
					Resources
				</Link>
			</div>
			<div className="my-auto">
				<Button
					className="hover:scale-105 transition"
					onClick={() =>
						router.push("/demo")
					}
				>
					Check it out
				</Button>
			</div>
		</motion.div>
	);
}
