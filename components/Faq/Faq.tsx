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
                        <AccordionTrigger className="text-2xl">Is it accessible?</AccordionTrigger>
                        <AccordionContent className="text-neutral-400">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-2xl">Is it styled?</AccordionTrigger>
                        <AccordionContent className="text-neutral-400">
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-2xl">Is it animated?</AccordionTrigger>
                        <AccordionContent className="text-neutral-400">
                            Yes. It&apos;s animated by default, but you can disable it if you
                            prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}
  