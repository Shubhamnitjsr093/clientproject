import React from 'react'
import HeroImage from "@/assets/images/common/web-dev-hero-banner.webp";
import PageHeader from '@/components/PageHeader';
import Heading2 from '@/components/Heading2';
import PackageItemCard from '@/components/PackageItemCard';
import CustomQuoteBox from '@/components/CustomQuoteBox';

const packageData = [
    {
        title: 'Launch SEO Package',
        price: '$250/Month',
        description: 'A great option for micro-businesses looking to improve their search rankings without a big investment.',
        features: [
            { name: 'Keyword Research & Strategy (Up to 5 Keywords)' },
            { name: 'Basic On-Page Optimization (Meta Titles, Descriptions, Alt Text, Header Tags)' },
            { name: 'Google Search Console & Analytics Setup' },
            { name: '1 SEO-Optimized Blog Post Per Month' },
            { name: 'Basic Link Building (Directory Submissions & Citations)' },
            { name: 'Monthly SEO Report & Recommendations' },
        ],
        note: 'Upgrade Anytime to Higher-Tier SEO Plans for more keywords & deeper optimization.'
    },
    {
        title: 'Essential SEO Package',
        price: <>$400/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(2-month commitment)</span></>,
        description: 'Ideal for small businesses looking to improve their online visibility.',
        features: [
            { name: 'Keyword Research & Strategy (10 Keywords)' },
            { name: 'On-page Optimization (Up to 5 Pages)' },
            { name: 'Basic Link Building' },
            { name: 'Monthly Performance Report' },
            { name: '1 Blog Post per Month' },
        ], 
    },
    {
        title: 'Premium SEO Package',
        price: <>$650/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(3-month commitment)</span></>,
        description: 'For growing businesses aiming to expand their digital presence.',
        features: [
            { name: 'Advanced Keyword Research & Strategy (20 Keywords)' },
            { name: 'On-page Optimization (Up to 15 Pages)' },
            { name: 'On-site Content Optimization' },
            { name: 'Quality Link Building' },
            { name: 'Bi-weekly Performance Monitoring' },
            { name: '2 Blog Posts per Month' },
            { name: 'Local SEO (Google My Business)' },
        ], 
    },
    {
        title: 'Elite SEO Package',
        price: <>$1100/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(4-month commitment)</span></>,
        description: 'For businesses looking for comprehensive SEO to dominate search rankings.',
        features: [
            { name: 'Advanced Keyword Research & Strategy (30+ Keywords)' },
            { name: 'On-page Optimization (Up to 30 Pages)' },
            { name: 'Technical SEO Audit & Fixes' },
            { name: 'High-Quality Link Building' },
            { name: 'Weekly Performance Monitoring' },
            { name: '4 Blog Posts per Month' },
            { name: 'Local SEO & Google My Business Optimization' },
            { name: 'Monthly Competitive Analysis' }, 
        ], 
    },
    {
        title: 'Digital Domination SEO Package',
        price: <>$2,500/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(6-month commitment)</span></>,
        description: 'For  businesses with complex needs and a wide-reaching SEO strategy.',
        features: [
            { name: 'Extensive Keyword Research & Strategy (Custom Keywords)' },
            { name: 'On-page Optimization (Unlimited Pages)' },
            { name: 'Advanced Technical SEO & Site Audit' },
            { name: 'Premium Link Building & Outreach' },
            { name: 'Daily Performance Tracking & Reporting' },
            { name: 'Unlimited Blog Posts' },
            { name: 'Local & National SEO' },
            { name: 'Dedicated SEO Manager' },
        ], 
    },
]

const Seo = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"SEO Services"}
                titleClassName="text-center"
            />

            <section className="py-10 sm:py-12 md:py-14 lg:py-20 bg-gradient-to-b from-[#091906] to-[#12320C]">
                <div className="container">
                    <div className="space-y-10 md:space-y-16">
                        <div>
                            <Heading2
                                title="Why SEO is Important"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                SEO boosts your website’s visibility, drives organic traffic, and improves search engine rankings, leading to more qualified leads and business growth.
                            </p>
                        </div>
                        <div>
                            <Heading2
                                title="Why Choose Us for SEO"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                We tailor SEO strategies to improve rankings and drive results, focusing on content optimization, technical SEO, and link building to attract your target audience.
                            </p>
                        </div>
                    </div>

                </div>
                {/* container */}
            </section>


            <section className="py-10 sm:py-12 md:py-14 lg:py-24">
                <div className="container">
                    <Heading2
                        title="Packages"
                        className="mb-5 md:mb-8 lg:mb-10"
                    />

                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-12 lg:gap-x-[72px] md:gap-y-10 lg:gap-y-[60px] mt-6 md:mt-10`}>
                        {
                            packageData.map((item, index) => (
                                <div key={index} className="flex">
                                    <PackageItemCard item={item} />
                                </div>
                            ))
                        }
                    </div>

                    <p className="mt-12 text-center">Choose the SEO package that aligns with your goals, and let us help you enhance your online presence!</p>

                    <CustomQuoteBox
                        package="E-Commerce Solutions"
                    />
                </div>
                {/* container */}
            </section>


        </>
    )
}

export default Seo