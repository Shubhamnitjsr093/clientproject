import PageHeader from '@/components/PageHeader'
import React from 'react'
import HeroImage from "@/assets/images/common/about-page-banner.webp";
import AboutImg01 from "@/assets/images/common/about-us-01.webp";
import AboutImg02 from "@/assets/images/common/about-us-02.webp";
import Heading3 from '@/components/Heading3';
import { ComputerEditIcon, CostIcon, LineChartIcon, SuppportIcon } from './../components/Icons';


const apartData = [
    {
        icon: <ComputerEditIcon />,
        description: 'We understand your goals and craft solutions tailored to your vision.',
    },
    {
        icon: <CostIcon />,
        description: 'No hidden fees, no surprises—just honest, results-driven work.',
    },
    {
        icon: <LineChartIcon />,
        description: 'Our solutions grow with your business, ensuring long-term success.',
    },
    {
        icon: <SuppportIcon />,
        description: 'We go beyond launch, offering continuous support, updates, and optimizations.',
    },
]

const AboutPage = () => {
  return (
    <>
        {/* header section */}
        <PageHeader
            image={HeroImage}
            title={"About Us"} 
            subTitle={"we’re more than just a development agency we’re your dedicated tech partner"}
            titleClassName="text-center"
        />

        <section className="py-10 md:py-16 lg:pt-20 lg:pb-24">
            <div className="container">
                <p className="text-center text-xl md:text-2xl lg:text-[33px] !leading-tight font-normal mb-8 md:mb-12 lg:mb-16 max-w-[1036px] mx-auto tracking-wide">
                    Our mission is to empower businesses with expertly crafted websites, mobile apps, and digital marketing solutions that drive growth and success.
                </p>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-10 items-center">
                    <div>
                        <Heading3 title="What We Do" className="mb-6 md:mb-10" /> 
                        <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.12] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full'>
                            We specialize in custom web and app development, eCommerce solutions, SEO, branding, and ongoing management—all designed to enhance your online presence and business performance.  <br /> <br />
                            Using industry-leading platforms like WordPress, WooCommerce, Shopify, and custom-built solutions, we create functional, scalable, and future-ready digital experiences tailored to your needs.
                        </p>
                    </div>

                    <div>
                        <img src={AboutImg01} alt="About Us" className='w-full h-auto object-contain rounded-lg' width={604} height={592} loading='lazy' />
                    </div>
                </div>
            </div>
            {/* container */}
        </section>

        <section className="py-10 md:py-16 lg:pt-20 lg:pb-24 bg-primary_dark">
            <div className="container">  
                <Heading3 title="What Sets Us Apart" className="mb-6 md:mb-10 text-center text-white" icon="TitleRightCoverIcon" /> 

                <div className="max-w-[968px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-10 gap-x-20 items-center">
                        {
                            apartData.map((item, index) => (
                                <div key={index} className="">
                                    <div className=" bg-primary-foreground p-5 md:px-8 lg:px-12 md:py-10 rounded-lg flex items-start transition-all duration-300 hover:bg-white hover:-translate-y-2 min-h-[6rem]"> 
                                        <div className="w-16 lg:w-14">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <p className='text-dark text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.12]'>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
            {/* container */}
        </section>

        <section className="py-10 md:py-16 lg:pt-20 lg:pb-24">
            <div className="container">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-10 items-center">
                    <div> 
                        <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.12] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full'>
                            At Obiztec, we don’t just build websites and apps—we build businesses. <br /><br />
                            Whether you need a simple website, a custom app, or a full digital marketing strategy, we’re here to bring your vision to life. 
                        </p>
                    </div>

                    <div>
                        <img src={AboutImg02} alt="About Us" className='w-full h-auto object-contain rounded-lg' width={604} height={604} loading='lazy' />
                    </div>
                </div>
            </div>
            {/* container */}
        </section>


    </>
  )
}

export default AboutPage