import station3d from "@/public/station3d.svg";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <div className="flex justify-center" id="about">
      <div className="px-12 md:px-12 mt-4 md:mt-12 max-w-screen-2xl w-[100%]">
        <p className="text-5xl font-semibold md:px-10 mb-2">What is Devolt? </p>
        <div className="flex items-center jusxatify-center">
          <div className="md:w-[70%] md:h-[80%] md:flex p-4 gap-8">
            <div className="md:w-[50%] ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <Card className="mb-6 bg-[#080908] border-2 border-[#161d15] md:p-6 p-4">
                  <p className="text-3xl py-2">Efficient Power Integration</p>
                  <p className="indent-4 text-neutral-400">
                    DeVolt enhances the electric vehicle charging experience by
                    seamlessly integrating energy supply from diverse sources.
                    Our platform efficiently channels renewable energy to EV
                    charging stations, ensuring reliable and eco-friendly power
                    availability.
                  </p>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
              >
                <Card className="mb-6 md:mb-0 bg-[#080908] border-2 border-[#161d15] md:p-6 p-4">
                  <p className="text-3xl py-2">
                    Decentralized Energy Marketplace
                  </p>
                  <p className="indent-4 text-neutral-400">
                    DeVolt is a decentralized platform that connects energy
                    producers with EV drivers directly. This eliminates
                    intermediaries, enabling a more efficient and direct energy
                    market that benefits both producers and consumers.
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
                  <p className="text-3xl py-2">Sustainable Impact</p>
                  <p className="indent-4 mb-2 text-neutral-400">
                    DeVolt is deeply committed to sustainability, leveraging
                    blockchain technology to foster transparent and secure
                    transactions within the energy sector. This advanced use of
                    blockchain not only enhances the reliability of energy
                    exchanges but also ensures that every transaction is
                    traceable and tamper-proof, promoting a higher standard of
                    integrity and accountability.
                  </p>
                  <p className="indent-4 mb-2 text-neutral-400">
                    Our platform actively encourages the adoption of electric
                    vehicles and the increased use of renewable energy sources.
                    By facilitating easier access to eco-friendly power options,
                    DeVolt plays a crucial role in driving environmental
                    conservation efforts forward. This approach not only
                    supports the health of our planet but also spearheads
                    technological innovation in the energy sector, paving the
                    way for a more sustainable future.
                  </p>
                  {/* <p className="indent-4 mb-2 text-neutral-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor, Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor,
                  </p> */}
                </Card>
              </motion.div>
            </div>
          </div>
          <Image
            src={station3d}
            alt="station"
            height={700}
            className="hidden md:block md:-mt-12 max-h-screen-2xl "
          />
        </div>
      </div>
    </div>
  );
}
