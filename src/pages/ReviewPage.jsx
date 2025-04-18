import PageHeader from '@/components/PageHeader'
import React from 'react'
import HeroImage from "@/assets/images/common/review-page-banner.webp";
import Heading2 from '@/components/Heading2';
import ReviewCard from '@/components/ReviewCard';

const reviewsList = [
    {
        author: 'Jane Cooper',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        designation: 'Chief Accountant',
    },
    {
        author: 'Jane Cooper',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        designation: 'Chief Accountant',
    },
    {
        author: 'Jane Cooper',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        designation: 'Chief Accountant',
    },
    {
        author: 'Jane Cooper',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        designation: 'Chief Accountant',
    },
]

const ReviewPage = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Our clients reviews"}
                titleClassName="text-center"
            />

            <section className="py-10 sm:py-12 md:py-16 lg:py-20">
                <div className="container">
                    <Heading2 title="Lorem ipsum dolor sit amet, consectetur" className='text-center mb-4 lg:mb-6' />
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[33px] text-center tracking-wide max-w-[870px] mx-auto'>
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    </p>

                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-12 lg:gap-x-[72px] md:gap-y-10 lg:gap-y-[60px] mt-6 md:mt-10`}>
                        {
                            reviewsList.map((item, index) => (
                                <div key={index} className="">
                                    <ReviewCard item={item} /> 
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* container */}
            </section>

        </>
    )
}

export default ReviewPage