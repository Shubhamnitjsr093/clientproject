import React from 'react'
import Heading2 from '../Heading2'
import CodeIcon from "@/assets/images/icons/code.svg";
import StoreIcon from "@/assets/images/icons/store.svg";
import AppIcon from "@/assets/images/icons/mobileapp.svg";
import SeoIcon from "@/assets/images/icons/seo.svg";
import BrandIcon from "@/assets/images/icons/branding.svg";
import SolutionBanner from "@/assets/images/common/solution-banner.webp";
import Heading3 from '../Heading3';
import { FaCheck } from 'react-icons/fa6';

const serviceData = [ 
  {
    id: 1,
    title: "Establish a strong online presence", 
  },
  {
    id: 2,
    title: "Improve efficiency",  
  },
  {
    id: 3,
    title: "Drive growth", 
  },
  {
    id: 4,
    title: "Consistent tone & branding", 
  },
]

const Solutions = () => {
  return (
    <div className='pb-12 md:pb-16 lg:pb-24 pt-10 md:pt-16 bg-primary_dark text-white'>
      <div className="container">
        <Heading2 
            title="Cutting-edge digital solutions"
            className="text-white" 
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-center mt-8 lg:mt-16">
          <div>
            <Heading3 title="We help small and medium-sized businesses to" className="text-white" />
            <ul className="flex flex-col gap-1 sm:gap-2 md:gap-5 lg:gap-6 mt-10">
              {
                serviceData.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-12">
                        <FaCheck className='text-primary text-2xl lg:text-3xl' />
                    </div>
                    <div className="flex-1"> 
                      <h3 className='text-white text-lg md:text-xl lg:text-2xl font-normal mb-2'>{item.title}</h3> 
                      <p className='text-white text-sm lg:text-base !leading-[1.12]'>{item.desc}</p>
                    </div>
                  </li>
                ))
              }
            </ul> 
            <p className='text-primary-foreground text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] lg:mt-8 mt-4'>
                Whether you need a website, mobile app, or marketing services, we have tailored solutions to meet your needs.
            </p>
          </div>

          <div>
            <div className="relative group"> 
              <img 
                src={SolutionBanner} 
                alt="services thumbnail" width={612} height={475} loading='lazy'
                className='w-full object-contain rounded-lg' 
              /> 
            </div>
          </div>
        </div>
      </div>
      {/* container */}
    </div>
  )
}

export default Solutions