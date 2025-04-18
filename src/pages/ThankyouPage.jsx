import PageHeader from '@/components/PageHeader'
import React from 'react'
import HeroImage from "@/assets/images/common/thank-you-page-banner.webp"; 
import Heading2 from './../components/Heading2';
import { IoEyeOutline } from "react-icons/io5";
import { BsChatDots } from "react-icons/bs";
import SupportIcon from "@/assets/images/icons/support2.svg";
import SentIcon from "@/assets/images/icons/sent.svg";
import { Link } from 'react-router-dom';

const ThankyouPage = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Thank You!"}
                subTitle="Your Quote Request Has Been Received."
                titleClassName="text-center mb-4 md:mb-5"
                pageType="thankyou"
            />

            <section className="py-10 md:py-16 lg:pt-20 lg:pb-24">
                <div className="container">
                    <div className="space-y-10 md:space-y-14">
                        <div> 
                            <Heading2
                                title="What happens next:"
                                className="mb-4 md:mb-10 text-left" 
                            /> 
                            <ul className="space-y-2 md:space-y-4 lg:space-y-5">
                                <li className="flex gap-2">
                                    <div className="w-6 lg:w-8">
                                        <IoEyeOutline className='text-primary text-2xl lg:text-3xl' />
                                    </div>
                                    <div className="flex-1">
                                        <p className='text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.3] text-[#091906] tracking-wide'>Our team will review your submission carefully.</p>
                                    </div>
                                </li>
                                <li className="flex gap-2">
                                    <div className="w-6 lg:w-8">
                                        <BsChatDots className='text-primary text-2xl lg:text-3xl' />
                                    </div>
                                    <div className="flex-1">
                                        <p className='text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.3] text-[#091906] tracking-wide'>You can expect a response within 1-2 business days.</p>
                                    </div>
                                </li>
                                <li className="flex gap-2">
                                    <div className="w-6 lg:w-8">
                                        <img src={SupportIcon} alt='support iocn' className='w-5 md:w-6 lg:w-7 h-auto' />
                                    </div>
                                    <div className="flex-1">
                                        <p className='text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.3] text-[#091906] tracking-wide'>If needed, we’ll reach out for a quick consultation to finalize your quote.</p>
                                    </div>
                                </li>
                            </ul> 
                        </div>
                        <div> 
                            <Heading2
                                title="In the meantime"
                                className="mb-4 md:mb-10 text-left" 
                            /> 
                            <ul className="space-y-2 md:space-y-4 lg:space-y-5">
                                <li className="flex gap-2">
                                    <div className="w-6 lg:w-8">
                                    <img src={SentIcon} alt='support iocn' className='w-5 md:w-6 lg:w-7 h-auto' />
                                    </div>
                                    <div className="flex-1">
                                        <p className='text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.3] text-[#091906] tracking-wide'>Feel free to check out our <Link to={"/portfolios"} className='text-primary font-bold hover:text-dark hover:underline'>Portfolio</Link> or <Link to={"/blog"} className='text-primary font-bold hover:text-dark hover:underline'>Blog</Link> for inspiration.</p>
                                    </div>
                                </li>
                                <li className="flex gap-2">
                                    <div className="w-6 lg:w-8">
                                        <BsChatDots className='text-primary text-2xl lg:text-3xl' />
                                    </div>
                                    <div className="flex-1">
                                        <p className='text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.3] text-[#091906] tracking-wide'>
                                            <span className="block mb-2">Got urgent questions?</span>
                                            <span className='block'>Reach us at contact@obiztec.com</span>
                                            <span>or via Live Chat (Response time may vary due to work hours).</span>
                                        </p>
                                    </div>
                                </li> 
                            </ul> 
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ThankyouPage