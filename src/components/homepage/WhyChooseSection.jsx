import React from 'react'
import Heading2 from '../Heading2'
import WhyChooseBanner from "@/assets/images/common/why-choose-us-thumbnail.webp";
import { FaCheck } from "react-icons/fa6";

const chooseData = [
    {
        id: 1,
        title: "Affordable & Scalable Solutions",
        description: "Designed for growing businesses.",
    },
    {
        id: 2,
        title: "Custom Development",
        description: "No templates, fully tailored to your needs.",
    },
    {
        id: 3,
        title: "Fast Turnaround",
        description: "High-quality results, delivered efficiently.",
    },
    {
        id: 4,
        title: "Post-Launch Support",
        description: "1 to 6 months of maintenance included.",
    },
    {
        id: 5,
        title: "Proven Expertise",
        description: "A team experienced in web development, marketing, and app design.",
    },
]

const WhyChooseSection = () => {
  return (
    <div className='py-12 md:py-16 lg:py-24'>
        <div className="container">
            <Heading2 title="Why Choose Us" icon={"querstionIcon"} />
            <img 
                src={WhyChooseBanner} 
                alt="Why Choose Us"
                className='w-full h-auto object-contain mt-14 md:mt-20 lg:mt-24' 
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-y-12 lg:gap-y-20 mt-12 md:mt-16 lg:mt-20 items-center justify-center place-self-center">
                {
                    chooseData.map((item, index) => (
                        <div key={index} className={`${index === chooseData.length - 1 ? "lg:col-span-2 lg:place-self-center max-w-[538px]" : ""}`}>
                            <div className='flex items-start'>
                                <div className="md:w-12 lg:w-16 w-9 md:pt-3 pt-1">
                                <FaCheck className='text-2xl md:text-3xl lg:text-4xl text-primary' />
                                </div>
                                <div className="flex-1"> 
                                    <h3 className='text-black text-xl md:text-3xl lg:text-4xl font-normal mb-1 md:mb-3'>{item.title}</h3>
                                    <p className='text-black text-sm md:text-base lg:text-xl xl:text-2xl tracking-wide !leading-[1.12]'>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default WhyChooseSection