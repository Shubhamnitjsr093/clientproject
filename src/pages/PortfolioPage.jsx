import HeroImage from "@/assets/images/common/portfolio-page-banner.webp";
import PageHeader from '@/components/PageHeader';
import Heading2 from '@/components/Heading2';
import React from 'react'
import PortfolioImage from "@/assets/images/common/portfolio-image.webp";
import PortfolioItemCard from "@/components/PortfolioItemCard";

const dataList = [
    {
        title: 'Project title goes here',
        features: 'web redesign, custom design, API integration, web redesign, custom design',
        platform: 'Wordpress',
        image: PortfolioImage,
    },
    {
        title: 'Project title goes here',
        features: 'web redesign, custom design, API integration, web redesign, custom design',
        platform: 'Wordpress',
        image: PortfolioImage,
    },
    {
        title: 'Project title goes here',
        features: 'web redesign, custom design, API integration, web redesign, custom design',
        platform: 'Wordpress',
        image: PortfolioImage,
    },
    {
        title: 'Project title goes here',
        features: 'web redesign, custom design, API integration, web redesign, custom design',
        platform: 'Wordpress',
        image: PortfolioImage,
    },
    {
        title: 'Project title goes here',
        features: 'web redesign, custom design, API integration, web redesign, custom design',
        platform: 'Wordpress',
        image: PortfolioImage,
    },
    {
        title: 'Project title goes here',
        features: 'web redesign, custom design, API integration, web redesign, custom design',
        platform: 'Wordpress',
        image: PortfolioImage,
    },
]

const PortfolioPage = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Portfolio"}
                titleClassName="text-center"
            />

            <section className="py-10 sm:py-12 md:py-14 lg:py-24">
                <div className="container">
                    <Heading2
                        title="Explore the Digital Solutions Crafted by "
                        className="mb-4 md:mb-6 lg:mb-8 lg:text-6xl"
                    />

                    <p className="text-center text-xl md:text-2xl lg:text-[33px] !leading-tight font-normal mb-8 md:mb-12 lg:mb-16 tracking-wide max-w-[1062px] mx-auto">
                        Browse through our gallery of custom websites built by our talented developers. Each project demonstrates our commitment to user-friendly design, high performance, and innovative functionality. From sleek websites to responsive apps, our work reflects the quality and expertise we bring to every project. Take a look at how we’ve helped businesses like yours thrive online.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 md:gap-x-8 lg:gap-x-9 md:gap-y-12 lg:gap-y-16">
                        {
                            dataList.map((item, index) => (
                                <div key={index}>
                                    <PortfolioItemCard item={item} />
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

export default PortfolioPage