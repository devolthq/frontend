import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../components/ui/accordion"
  
  export function AccordionDemo() {
    return (
        <div className="flex justify-center flex-col items-center my-24">
            <p className="text-5xl font-semibold md:px-10 mb-2">FAQ</p>
            <div className="px-12 md:px-12 mt-4 md:mt-12 max-w-screen-2xl w-full">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-2xl">How do I start selling energy with DeVolt?</AccordionTrigger>
                        <AccordionContent className="text-neutral-400">
                            To start selling energy, register your interest on our platform. After meeting our specifications, install our software at your station to connect with buyers and efficiently sell energy.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-2xl">What are the benefits of using DeVolt for EV charging?</AccordionTrigger>
                        <AccordionContent className="text-neutral-400">
                            DeVolt provides accessible, cost-effective, and eco-friendly charging options. Our decentralized network ensures easy access to charging stations powered by renewable energy.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-2xl">Is the DeVolt platform secure?</AccordionTrigger>
                        <AccordionContent className="text-neutral-400">
                            Yes, DeVolt prioritizes security with advanced encryption and blockchain technology to secure transactions and ensure transparency, providing a safe and reliable service.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-2xl">What advantages does DeVolt offer over traditional energy solutions?</AccordionTrigger>
                        <AccordionContent className="text-neutral-400">
                            DeVolt leverages Web3 technologies to create a transparent, efficient, and user-governed energy marketplace. This reduces overhead costs, eliminates intermediaries, and provides real-time data integrity and pricing transparency.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-2xl">Can anyone install a DeVolt charging station?</AccordionTrigger>
                        <AccordionContent className="text-neutral-400">
                            Yes, anyone who meets DeVolt's technical and safety standards can install a charging station. Our platform facilitates the process, making it straightforward to join as a provider.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="text-2xl">How does DeVolt handle energy pricing?</AccordionTrigger>
                        <AccordionContent className="text-neutral-400">
                            Energy pricing on DeVolt is determined by market dynamics. Sellers set their prices based on supply and demand, ensuring competitive and fair pricing for all users.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger className="text-2xl">What types of energy can be sold on DeVolt?</AccordionTrigger>
                        <AccordionContent className="text-neutral-400">
                            DeVolt supports the sale of various types of renewable energy, including solar, wind, and hydro, depending on the capabilities and resources of the energy producer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                        <AccordionTrigger className="text-2xl">What is required to maintain a DeVolt charging station?</AccordionTrigger>
                        <AccordionContent className="text-neutral-400">
                            Maintenance requirements are minimal, focusing primarily on safety checks and software updates to ensure optimal performance and compliance with DeVolt standards.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}
