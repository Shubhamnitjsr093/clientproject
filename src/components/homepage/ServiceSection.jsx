import React from 'react'
import Heading2 from '../Heading2'
import CodeIcon from "@/assets/images/icons/code.svg";
import StoreIcon from "@/assets/images/icons/store.svg";
import AppIcon from "@/assets/images/icons/mobileapp.svg";
import SeoIcon from "@/assets/images/icons/seo.svg";
import BrandIcon from "@/assets/images/icons/branding.svg";
import ServiceBanner from "@/assets/images/common/services-thumbnail.webp";

const serviceData = [
  {
    id: 1,
    title: "Website Development",
    desc: "Custom, responsive websites for a strong online presence.",
    icon: <img src={CodeIcon} alt="icon" className='w-7 md:w-8 h-7 md:h-8 object-contain' />, 
  },
  {
    id: 2,
    title: "E-Commerce Solutions",
    desc: "Secure and user-friendly online stores with integrated payments.",
    icon: <img src={StoreIcon} alt="icon" className='w-7 md:w-8 h-7 md:h-8 object-contain' />, 
  },
  {
    id: 3,
    title: "Mobile App Development",
    desc: "High-quality iOS & Android apps for better engagement.",
    icon: <img src={AppIcon} alt="icon" className='w-7 md:w-7 h-11 md:h-12 object-contain' />, 
  },
  {
    id: 4,
    title: "SEO & Digital Marketing",
    desc: "Boost visibility, attract traffic, and increase conversions.", 
    icon: <img src={SeoIcon} alt="icon" className='w-7 md:w-8 h-7 md:h-8 object-contain' />, 
  },
  {
    id: 5,
    title: "Branding & Design",
    desc: "Professional logos, brand identity, and UI/UX design.", 
    icon: <img src={BrandIcon} alt="icon" className='w-8 md:w-10 h-8 md:h-10 object-contain' />, 
  },
]

const ServiceSection = () => {
  return (
    <div className='py-12 md:py-16 lg:py-24 bg-primary_dark text-white'>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Heading2 
              title="Our Services"
              className="text-white text-left"
              icon="topRightIcon"
            />
            <ul className="flex flex-col gap-4 md:gap-10 lg:gap-12 xl:gap-16 mt-10">
              {
                serviceData.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-12">
                      {item.icon}
                    </div>
                    <div className="flex-1"> 
                      <h3 className='text-white text-lg md:text-xl lg:text-2xl font-normal mb-2'>{item.title}</h3> 
                      <p className='text-white text-sm lg:text-base !leading-[1.12]'>{item.desc}</p>
                    </div>
                  </li>
                ))
              }
            </ul> 
          </div>

          <div>
            <div className="relative group"> 
              <img 
                src={ServiceBanner} 
                alt="services thumbnail" width={600} height={400} loading='lazy'
                className='w-full object-contain rounded-lg shadow-[0px_9px_16px_-10px_#DEFED8] relative z-10' 
              />
              <div className="absolute w-[90%] lg:h-[calc(100%+80px)] h-full lg:-top-10 -bottom-10 -right-8 left-auto transform border-2 rounded-lg border-primary z-0 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:-top-0 group-hover:right-0 hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
      {/* container */}
    </div>
  )
}

export default ServiceSection