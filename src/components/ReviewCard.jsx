import React from 'react'
import QuoteIcon from "@/assets/images/icons/testimonial-quote-icon.svg"

const ReviewCard = ({item}) => {
    return (
        <>
            <div className="group relative p-5 md:p-8 mt-5 ">
                <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden bg-gradient-to-r from-[#091906] to-[#12320C] from-0% to-50% z-0 transition-all duration-500 group-hover:from-0% group-hover:to-100%"></div>
                <div className="relative z-10">
                    <img src={QuoteIcon} alt="icon" className={` object-contain ml-auto md:-mt-14 -mt-10 group-hover:rotate-180 transition-all duration-500 w-full max-w-24 md:max-w-32 lg:max-w-40  `} /> 
                    <div className="">
                        <p className='text-white text-xl md:text-xl lg:text-2xl font-normal mb-4 md:mb-6 lg:mb-8'>{item.author}</p>
                        <p className='text-white text-base lg:text-lg !leading-[1.45]'>{item.description}</p>
                        <p className='text-white text-base lg:text-lg !leading-[1.45] mt-4 mb-5'>{item.designation}</p> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewCard