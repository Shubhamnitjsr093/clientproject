import React from 'react'
import HeroImage from "@/assets/images/common/web-dev-hero-banner.webp";
import PageHeader from '@/components/PageHeader';
import Heading2 from '@/components/Heading2';
import PackageItemCard from '@/components/PackageItemCard';
import CustomQuoteBox from '@/components/CustomQuoteBox';

const packageData = [
    {
        title: 'Essential Newsletter Package',
        price: <>$450/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(2-month commitment)</span></>,
        description: 'Perfect for businesses just starting with email marketing.',
        features: [
            { name: '4 Newsletters per Month' },
            { name: 'Custom Template Design' },
            { name: 'Basic Content Creation (up to 400 words per email)' },
            { name: 'Subscriber List Management' },
            { name: 'Performance Tracking & Monthly Report' },
        ],  
    },
    {
        title: 'Premium Newsletter Package',
        price: <>$750/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(3-month commitment)</span></>,
        description: 'For businesses looking for more engaging and targeted newsletters.',
        features: [
            { name: '8 Newsletters per Month' },
            { name: 'Custom Template Design & Content Creation (up to 600 words per email)' },
            { name: 'Advanced Subscriber List Segmentation' },
            { name: 'A/B Testing for Subject Lines' },
            { name: 'Monthly Analytics & Performance Report' },
        ],  
    },
    { 
        title: 'Elite Newsletter Package',
        price: <>$1,250/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(2-month commitment)</span></>,
        description: 'For businesses that want high-quality, results-driven newsletters.',
        features: [
            { name: '12 Newsletters per Month' },
            { name: 'Custom Template Design & Content Creation (up to 800 words per email)' },
            { name: 'Advanced Subscriber Segmentation' },
            { name: 'A/B Testing for Subject Lines & Content' },
            { name: 'Detailed Monthly Analytics & Reporting' },
            { name: 'Automation Setup (Welcome, Follow-up emails)' },
        ],  
    },
    { 
        title: 'Ultimate Newsletter Package',
        price: <>Starting at $1,750/month 6</>,
        description: 'For large organizations with complex needs and high-volume newsletters.',
        features: [
            { name: 'Unlimited Newsletters per Month' },
            { name: 'Custom Template Design & Content Creation (up to 1,200 words per email)' },
            { name: 'Advanced Segmentation & Targeting' },
            { name: 'A/B Testing & Optimization' },
            { name: 'Detailed Analytics, Reporting & Custom Dashboards' },
            { name: 'Full Automation & Integration with CRM/Marketing Tools' },
        ], 
    }, 
]

const Newsletters = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Newsletter Services"}
                titleClassName="text-center"
            />

            <section className="py-10 sm:py-12 md:py-14 lg:py-20 bg-gradient-to-b from-[#091906] to-[#12320C]">
                <div className="container">
                    <div className="space-y-10 md:space-y-16">
                        <div>
                            <Heading2
                                title="Newsletter Service"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                We create engaging newsletters that keep your audience informed and connected with your brand.
                            </p>
                        </div>
                        <div>
                            <Heading2
                                title="Why Choose Us?"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                Our expert team ensures your newsletters are compelling, optimized, and drive results.
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

                    <p className="text-center mt-10 md:mt-12 text-base lg:text-lg">Get in touch today to find the right newsletter package for your business needs!</p>
                     
                    <CustomQuoteBox
                        package="Newsletter Services"
                    />
                </div>
                {/* container */}
            </section>


        </>
    )
}

export default Newsletters