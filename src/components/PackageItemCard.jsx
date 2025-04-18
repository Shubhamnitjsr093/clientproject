import React from 'react'
import WebDevCodeIcon from "@/assets/images/icons/web-development.svg";
import { FaCheck } from 'react-icons/fa6';

const PackageItemCard = ({ item }) => {
  return (
    <>
        <div className="w-full relative bg-primary-foreground px-5 md:px-8 py-8 md:py-10 lg:py-12 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2 hover:rounded-sm">
            {
                item.budget && (
                    <p className='text-sm md:text-base font-normal text-dark text-center px-5 py-2 rounded-full bg-white absolute top-1 left-1/2 -translate-x-1/2 z-10 shadow-sm'>{item.budget}</p>
                )
            }
            <img src={WebDevCodeIcon} alt={item.title} className='mx-auto w-full max-w-20 md:max-w-32 lg:max-w-44 h-auto' />
            <h3 className="mt-6 md:mt-7 text-xl md:text-2xl lg:text-3xl font-normal text-[#091906] text-center">{item.title}</h3>
            <p className="mt-4 md:mt-7 text-center text-2xl md:text-3xl lg:text-4xl font-bold text-[#091906] tracking-wider">{item.price}</p>

            <p className='mt-6 md:mt-7 lg:mt-10 text-sm md:text-base font-normal text-dark'>{item.description}</p>
            <div className="mt-6 md:mt-7 lg:mt-10">
                <h4 className='text-xl md:text-2xl lg:text-3xl text-dark font-normal mb-4 md:mb-5'>Included Features:</h4>
                <ul className="flex flex-col space-y-1.5 md:space-y-2.5">
                    {item.features.map((feature, index) => (
                        <li key={index} className='text-sm md:text-base font-normal text-dark flex items-start gap-3 md:gap-4'>
                            <FaCheck className='text-xl text-primary' />
                            <div className="flex-1">{feature.name}</div>
                        </li>
                    ))}
                </ul>
                {
                    item.additional_features && (
                        <>
                            <h4 className='text-xl md:text-2xl lg:text-3xl text-dark font-normal mb-4 md:mb-5 mt-6 md:mt-7 lg:mt-10'>Additional Features:</h4>
                            <ul className="flex flex-col space-y-1.5 md:space-y-2.5">
                                {item.additional_features.map((feature, index) => (
                                    <li key={index} className='text-sm md:text-base font-normal text-dark flex items-start gap-3 md:gap-4'>
                                        <FaCheck className='text-xl text-primary' />
                                        <div className="flex-1">{feature.name}</div>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )
                }
                
                {
                    item.note && (
                        <p className='mt-4 md:mt-4 lg:mt-5 text-sm md:text-base font-normal text-dark'>{item.note}</p>
                    )
                }
                {
                    item.additionalFeatures && (
                        <p className='mt-4 md:mt-4 lg:mt-5 text-sm md:text-base font-normal text-dark'>{item.additionalFeatures}</p>
                    )
                }
                {
                    item.whychoose && (
                        <>
                        {item.whychoose}
                        </>
                    )
                }
            </div>
        </div>
    </>
  )
}

export default PackageItemCard