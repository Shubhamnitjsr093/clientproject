import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  
const data1 = [
    {
        title: '¿Cómo funciona La Farola?',
        desc: 'lorem ipsum dolor sit amet, consectetur adip occingu, sed do eiusmod tempor incididunt ut lab et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adip'
    },
    {
        title: '¿Cómo encuentro la oferta más barata del mercado con La Farola?',
        desc: 'lorem ipsum dolor sit amet, consectetur adip occingu, sed do eiusmod tempor incididunt ut lab et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adip'
    },
    {
        title: '¿Puedo optimizar todos los suministros de una sola vez?',
        desc: 'lorem ipsum dolor sit amet, consectetur adip occingu, sed do eiusmod tempor incididunt ut lab et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adip'
    },
    {
        title: '¿Es gratis el servicio de La Farola?',
        desc: 'lorem ipsum dolor sit amet, consectetur adip occingu, sed do eiusmod tempor incididunt ut lab et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adip'
    },
    {
        title: '¿Qué ocurre después de aceptar una oferta?',
        desc: 'lorem ipsum dolor sit amet, consectetur adip occingu, sed do eiusmod tempor incididunt ut lab et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adip'
    },
]

const FAQ = () => {
  return (
    <div className='py-5 mb-20'>
        <div className="container">
            <h2 className='text-black text-lg md:text-xl lg:text-2xl font-extrabold mb-3'>Contratar luz, gas, internet y móvil con La Farola</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
                <div>
                    <Accordion type="single" collapsible>
                        {
                            data1.map((item, index) => (
                                <AccordionItem key={index} value={`item-${index + 1}`}>
                                    <AccordionTrigger className="text-left">{item.title}</AccordionTrigger>
                                    <AccordionContent>{item.desc}</AccordionContent>
                                </AccordionItem>
                            ))
                        } 
                    </Accordion> 
                </div>
                <div>
                    <Accordion type="single" collapsible>
                        {
                            data1.map((item, index) => (
                                <AccordionItem key={index} value={`item-${index + 1}`}>
                                    <AccordionTrigger className="text-left">{item.title}</AccordionTrigger>
                                    <AccordionContent>{item.desc}</AccordionContent>
                                </AccordionItem>
                            ))
                        } 
                    </Accordion> 
                </div>
            </div>
            {/* grid */}

            
        </div>
    </div>
  )
}

export default FAQ