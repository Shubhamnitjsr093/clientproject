import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Heading2 from './Heading2'




const ServiceList = ({ page = "", serviceData }) => {
    const [compact, setCompact] = useState(false);
    useEffect(() => {
        if (page === 'pricing') {
            setCompact(true);
        }
    }, []);


    if (page === 'blog') {
        return (
            <>
                <section className="py-10 md:py-14 lg:py-20">
                    <div className="container">

                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-12 lg:gap-x-[72px] md:gap-y-10 lg:gap-y-[60px] mt-6 md:mt-10`}>
                            {
                                serviceData.map((item, index) => (
                                    <div key={index} className="">
                                        <div className="rounded-lg overflow-hidden shadow-[0px_8px_16px_0px_rgba(125,130,124,01)]">
                                            <div className="relative">
                                                <img src={item.image} alt="icon" className={`w-full object-cover aspect-[16/8] 2xl:aspect-video`} />
                                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#D9D9D9]/0 to-[#091906]"></div>
                                            </div>
                                            <div className="bg-[#091906] p-5 md:p-8 text-white">
                                                <h3 className='text-white text-xl md:text-xl lg:text-2xl font-normal mb-2 md:mb-3 lg:mb-4'>{item.title}</h3>
                                                <p className='text-white text-sm lg:text-base !leading-[1.45]'>{item.desc}</p>

                                                <Link to={"/blog-detail"} className='text-sm md:text-base font-semibold text-dark bg-primary-foreground rounded-full px-6 py-2.5 mt-4 md:mt-8 inline-block tracking-wider hover:bg-primary'>Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="mt-10 md:mt-14 lg:mt-20 text-center md:mb-6">
                            <button className="btn-primary">Load more</button>
                        </div>

                    </div>
                </section>
            </>
        )
    }


    return (
        <>
            <section className="py-10 md:py-14 lg:py-20">
                <div className="container">
                    <Heading2 title="Browse Services" className="text-center" />

                    {
                        compact ? (
                            <>
                                <div className={`grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-7 lg:grid-cols-3 mt-6 md:mt-10`}>
                                    {
                                        serviceData.map((item, index) => (
                                            <div key={index} className="flex">
                                                {/* shadow-[0px_8px_16px_0px_rgba(125,130,124,01)] */}
                                                <div className="w-full rounded-lg overflow-hidden transition-all duration-300 bg-[#091906] shadow-[0px_8px_16px_0px_rgba(125,130,124,0.45)] hover:shadow-[0px_8px_16px_0px_rgba(125,130,124,0.95)]">
                                                    <div className="relative bg-primary-foreground px-8 py-10">
                                                        <img src={item.image} alt="icon" className={`w-full object-contain md:h-[160px] sm:h-20 h-16`} />
                                                        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#D9D9D9]/0 to-[#091906]"></div> */}
                                                    </div>
                                                    <div className=" py-5 px-4 md:px-5 md:p-8 text-white">
                                                        <h3 className='text-white text-lg md:text-xl lg:text-2xl font-normal mb-2 md:mb-3 lg:mb-4'>{item.title}</h3>
                                                        <p className='text-white text-xs md:text-sm lg:text-base !leading-[1.45]'>{item.desc}</p>
                                                        <p className='text-white text-xs md:text-sm  lg:text-base !leading-[1.45] mt-2 md:mt-4'>Starts from <span className='font-semibold'>{item.price}</span></p>
                                                        <Link to={item.href} className='text-xs md:text-sm font-semibold text-white border md:border-2 border-primary rounded-full px-6 py-2.5 mt-4 md:mt-8 inline-block tracking-wider hover:bg-primary hover:text-dark'>View Package</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                                <Heading2
                                    title={<>Need a custom quote? <Link to={'/contact-us'} className='underline hover:text-primary'>Contact us!</Link></>}
                                    className="text-[#12320C] mt-10 md:mt-16 mb-12"
                                />
                            </>

                        ) : (
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-12 lg:gap-x-[72px] md:gap-y-10 lg:gap-y-[60px] mt-6 md:mt-10`}>
                                {
                                    serviceData.map((item, index) => (
                                        <div key={index} className="">
                                            <div className="rounded-lg overflow-hidden shadow-[0px_8px_16px_0px_rgba(125,130,124,01)]">
                                                <div className="relative">
                                                    <img src={item.image} alt="icon" className={`w-full h-auto object-cover`} />
                                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#D9D9D9]/0 to-[#091906]"></div>
                                                </div>
                                                <div className="bg-[#091906] p-5 md:p-8 text-white">
                                                    <h3 className='text-white text-xl md:text-2xl lg:text-3xl font-normal mb-4 md:mb-6 lg:mb-8'>{item.title}</h3>
                                                    <p className='text-white text-sm lg:text-base !leading-[1.45]'>{item.desc}</p>
                                                    <p className='text-white text-base lg:text-lg !leading-[1.45] mt-4'>View all pricing and package options on our</p>
                                                    <Link to={"/pricing"} className='text-sm md:text-base font-semibold text-white border-2 border-primary rounded-full px-6 py-2.5 mt-4 md:mt-8 inline-block hover:bg-primary hover:text-dark'>Pricing Page</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        )
                    }
                </div>
            </section>

        </>
    )
}

export default ServiceList