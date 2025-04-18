import React from 'react'
import Banner from "@/assets/images/common/contact-promo-image.webp";
import { CallIcon, EmailIcon, LocationPin } from './Icons';
import { GlobeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPromoBox = ({type=""}) => {

    if (type == 'home') {
        return (
            <>
            <div className='relative max-w-[964px] bg-primary_dark mx-auto rounded-lg overflow-hidden flex'> 
                    <div className=" w-full h-full p-5 py-10"> 
                        <div className="max-w-[555px] mx-auto relative z-10">
                            <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-white font-normal mb-3 md:mb-4 text-center'>Trusted by 350+ Businesses</p>
                            <p className='text-white text-base md:text-base font-normal mb-4 md:mb-5 text-center '>Join the 350+ businesses who’ve trusted our team to bring their digital ideas to life—strategically built, beautifully designed, and ready to grow.</p>
                            <div className="flex gap-3 justify-center">
                                <Link to={'/portfolios'} className='btn-primary'>View Projects</Link>
                                <Link to={'/get-quote'} className='btn-primary !bg-white !text-dark'>Get a Quote</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='relative max-w-[964px] min-h-[200px] mx-auto rounded-lg overflow-hidden flex'>
            <img src={Banner} alt="Contact banner" className='w-full h-full min-h-[200px] object-cover rounded-lg' />
            <div className="absolute top-0 left-0 w-full h-full p-5">
                <div className="absolute top-0 left-0 w-full h-full bg-dark/50 md:hidden"></div>
                <div className="max-w-[525px] ml-auto relative z-10">
                    <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-white md:text-dark font-normal mb-4 md:mb-5 md:mt-10 text-center sm:text-right'>Ready to Take Your Business to the Next Level?</p>
                    <ul className='space-y-4 max-w-[280px] ml-auto mr-auto sm:mr-12 md:mr-12'> 
                        <li className='flex items-start gap-2'>
                            <div className="w-8 flex justify-center pt-1 md_white_svg">
                                <EmailIcon fill="#000" />
                            </div>
                            <div className="flex-1 text-white md:text-dark">
                                Email:
                                <a href='mailto:contact@obiztec.com' className='pl-1'>contact@obiztec.com</a>
                            </div>
                        </li>
                        <li className='flex items-start gap-2'>
                            <div className="w-8 flex justify-center pt-1 md_white_svg">
                                <CallIcon fill="#000" />
                            </div>
                            <div className="flex-1 text-white md:text-dark">
                                Phone:
                                <a href='tel:+1 (325) 275-5589' className='pl-1'>+1 (325) 275-5589</a>
                            </div>
                        </li>
                        <li className='flex items-start gap-2'>
                            <div className="w-8 flex justify-center pt-1 md_white_svg globe">
                                <GlobeIcon />
                            </div>
                            <div className="flex-1 text-white md:text-dark">
                                Live Chat: Available
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContactPromoBox