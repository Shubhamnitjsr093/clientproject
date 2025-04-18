import PageHeader from '@/components/PageHeader'
import React from 'react'
import HeroImage from "@/assets/images/common/out-approach-hero-bg.webp";
import OurApporchImage from "@/assets/images/common/our-approach-different.webp";
import Heading2 from '@/components/Heading2';
import { FaCheck } from "react-icons/fa6";
import ContactPromoBox from '@/components/ContactPromoBox';
import GridInfoList from '@/components/GridInfoList';

const approachData = [
    { 
        title: 'We Listen First',
        description: 'Understanding your business before offering solutions.',
    },
    { 
        title: 'Custom, Not Cookie-Cutter',
        description: 'Every project is tailored to your needs.',
    },
    { 
        title: 'User-Focused Design',
        description: 'Seamless experiences that engage and convert customers.',
    },
    { 
        title: 'Scalable & Future-Ready',
        description: 'Our solutions grow with your business.',
    },
    { 
        title: 'Transparent & Honest',
        description: 'No hidden costs, no confusing terms - just real solutions that work.',
    },
    { 
        title: 'Ongoing Support',
        description: '1 to 6 months of post-launch support included.',
    },
]

const OurApproach = () => {
  return (
    <>
        {/* header section */}
        <PageHeader
            image={HeroImage}
            title={"Our Approach"} 
            subTitle={"We believe technology should simplify business growth, not complicate it."}
            titleClassName="text-center"
        />


        <section className="py-10 md:py-16 lg:pt-20 lg:pb-24">
            <div className="container">
                <p className="text-center text-xl md:text-2xl lg:text-[33px] !leading-tight font-normal mb-8 md:mb-12 lg:mb-16 tracking-wide">
                    As an entrepreneur or small business owner, you need solutions that work for you, not against you. That’s why we take a personalized, hands-on approach to delivering affordable, custom websites, apps, and digital solutions.
                </p>

                <Heading2 title="What Makes Our Approach Differents" icon={"querstionIcon"} />
                 
                <div className="text-center">
                    <img src={OurApporchImage} alt="What Makes Our Approach Differents" className='object-contain rounded-lg mt-5 md:mt-6 lg:mt-8 mx-auto'
                        width={691} height={473} loading='lazy'
                    />
                </div>

                <div className=" mb-10 md:mb-16 lg:mb-20"> 
                    <GridInfoList data={approachData} /> 
                </div>

                <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.12] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full'>
                    We don’t believe in one-size-fits-all solutions. Your business is unique, and so is our approach. <br /><br />
                    We take the time to listen, collaborate, and create digital solutions tailored to your goals and designed for long-term success.
                </p>

                <div className="lg:mt-20 md:mt-12 mt-10">
                    <ContactPromoBox />
                </div>
            </div>
            {/* container */}
        </section>
        
    </>
  )
}

export default OurApproach