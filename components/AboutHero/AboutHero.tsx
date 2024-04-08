import station3d from "@/public/station3d.svg";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <div className="flex justify-center">
            <div className="px-12 md:px-12 mt-4 md:mt-12 max-w-screen-2xl w-[100%]">
                <p className="text-5xl font-semibold md:px-10 mb-2">What is Devolt? Can I trust it?</p>
                <div className="flex items-center jusxatify-center">
                    <div className="md:w-[70%] md:h-[80%] md:flex p-4 gap-8">
                        <div className="md:w-[50%] ">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5, duration: 0.5 }}
                            >
                                <Card className="mb-6 bg-[#080908] border-2 border-[#161d15] md:p-6 p-4">
                                    <p className="text-3xl py-2">Lorem ipsum</p>
                                    <p className="indent-4 text-neutral-400">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,
                                    </p>
                                </Card>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2, duration: 0.5 }}
                            >
                                <Card className="mb-6 md:mb-0 bg-[#080908] border-2 border-[#161d15] md:p-6 p-4">
                                    <p className="text-3xl py-2">Lorem ipsum</p>
                                    <p className="indent-4 text-neutral-400">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,
                                    </p>
                                </Card>
                            </motion.div>
                        </div>
                        <div className="md:w-[50%]">
                        <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2.5, duration: 0.5 }}
                                className="md:h-full"
                            >
                            <Card className="md:h-full mb-6 bg-[#080908] border-2 border-[#161d15] md:p-6 p-4">
                                <p className="text-3xl py-2">Lorem ipsum</p>
                                <p className="indent-4 mb-2 text-neutral-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,
                                </p>
                                <p className="indent-4 mb-2 text-neutral-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,
                                </p>
                                <p className="indent-4 mb-2 text-neutral-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,
                                </p>

                            </Card>
                        </motion.div>
                        </div>

                    </div>
                    <Image src={station3d} alt="station" height={700} className="hidden md:block md:-mt-12 max-h-screen-2xl " />
                </div>
            </div>

        </div>
    );
}
