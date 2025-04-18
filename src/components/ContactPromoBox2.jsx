import React from 'react'
import Heading2 from './Heading2'
import CircleImage from "@/assets/images/icons/contact-circle-bg.svg";
import { Link } from 'react-router-dom';

const ContactPromoBox2 = () => {
  return (
    <div className='py-10 md:py-12 lg:py-16'>
        <div className="container">
            <div className="relative text-center px-5 py-8 md:p-8 lg:p-12 bg-[#091906] rounded-lg text-white">
                <img src={CircleImage} alt="Bg Image" className='absolute top-0 left-0 w-full h-full object-contain z-0' />
                <div className="relative z-10"> 
                    <Heading2 title="Let’s Build Your Success Together" className="text-center text-white" />
                    <p className='text-base sm:text-lg md:text-2xl lg:text-3xl !leading-[1.45] text-center mt-6 lg:mt-7 max-w-[1100px] mx-auto mb-5 md:mb-8'>
                        Whether you’re launching a new business or scaling your existing one, Obiztec has the expertise to bring your vision to life.
                    </p>
                    <p className='text-base sm:text-lg md:text-2xl lg:text-3xl !leading-[1.75] tracking-wide'>
                        <Link to="#" className='text-white hover:text-primary hover:underline'>Have questions?</Link> <br /> 
                        <Link to="#" className='text-white hover:text-primary hover:underline'>Need a custom solution?</Link> <br /> 
                        <Link to="/contact-us" className='text-white hover:text-primary hover:underline'>Contact Us today!</Link> 
                    </p>
                </div>
            </div>
        </div>
        {/* container */}
    </div>
  )
}

export default ContactPromoBox2