import React from 'react'
import { FaCheck } from 'react-icons/fa6'

const GridInfoList = ({data}) => {
    return (
        <>
            <div className="max-w-[968px] mx-auto mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 gap-x-10">
                    {
                        data.map((item, index) => (
                            <div key={index} className="flex">
                                <div className=" bg-primary_dark p-5 md:px-8 lg:px-12 md:py-10 rounded-lg flex items-start transition-all duration-300 hover:-translate-y-2 min-h-[6rem] w-full">
                                    <div className="w-12 lg:w-14">
                                        <FaCheck className='text-primary text-2xl lg:text-3xl' />
                                    </div>
                                    <div className="flex-1">
                                        <p className='text-primary-foreground text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.12] mb-3 md:mb-4'>{item.title}</p>
                                        <p className='text-primary-foreground text-sm md:text-base'>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default GridInfoList