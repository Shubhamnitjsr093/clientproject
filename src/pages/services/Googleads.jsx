import React from 'react'
import HeroImage from "@/assets/images/common/web-dev-hero-banner.webp";
import PageHeader from '@/components/PageHeader';
import Heading2 from '@/components/Heading2';
import PackageItemCard from '@/components/PackageItemCard';
import CustomQuoteBox from '@/components/CustomQuoteBox';

const packageData = [
    {
        title: 'One-Time Google Ads Setup',
        price: '$200–$400',
        description: 'A one-time setup service for businesses looking to launch Google Ads campaigns with professional optimization and will manage for themselves.',
        features: [
            { name: 'Google Ads Account Setup & Configuration' },
            { name: 'Keyword Research & Competitive Analysis' },
            { name: 'Ad Copywriting & Landing Page Suggestions' },
            { name: 'Campaign Structure Setup (Search, Display, or Remarketing)' },
            { name: 'Tracking Setup (Google Analytics, Conversion Tracking, Call Tracking, etc.)' },
            { name: 'Audience Targeting & Budget Recommendations' },
        ],
        note: <>
            <p>Pricing:</p>
            <ul className="list-disc pl-4">
                <li>Basic Setup (1 Campaign, Up to 2 Ads): $200</li>
                <li>Advanced Setup (Multiple Campaigns, Up to 4 Ads): $400</li>
            </ul>
        </>
    },
    {
        title: 'Essential Google Ads Package',
        price: <>$500/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(2-month commitment)</span></>,
        description: 'Ideal for businesses starting with Google Ads and looking to drive initial traffic. Includes ongoing ad management, optimizations, and strategy adjustments.',
        features: [
            { name: '1 Campaign Setup (Search or Display)' },
            { name: 'Keyword Research and Targeting' },
            { name: 'Ad Copy Creation (Up to 3 Ads)' },
            { name: '2 Ad Group Setups' },
            { name: 'Weekly Performance Monitoring' },
            { name: 'Monthly Reporting' }, 
        ], 
        note: <>
            <p>Recommended Ad Budget: $500 - $2,000/month</p>
            <p>(Ad budget paid directly to Google, not included in the package price.)</p> 
        </>
    },
    {
        budget: 'Ad Budget Not Included',
        title: 'Premium Google Ads Package',
        price: <>$750/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(3-month commitment)</span></>,
        description: 'For businesses looking to expand their reach and drive more targeted traffic.',
        features: [
            { name: '2 Campaign Setups (Search and Display)' },
            { name: 'Extensive Keyword Research & Targeting' },
            { name: 'Ad Copy Creation (Up to 5 Ads)' },
            { name: '3 Ad Group Setups' },
            { name: 'Conversion Tracking Setup' },
            { name: 'Bi-weekly Performance Monitoring' },
            { name: 'Bi-weekly Reporting' }, 
        ], 
        note: <>
            <p>Recommended Ad Budget: $2,000 - $5,000/month</p>
            <p>(Ad budget paid directly to Google, not included in the package price.)</p> 
        </>
    },
    {
        budget: 'Ad Budget Not Included',
        title: 'Elite Google Ads Package',
        price: <>$1,250/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(4-month commitment)</span></>,
        description: 'Designed for businesses aiming to scale with advanced targeting and optimization.',
        features: [
            { name: '3 Campaign Setups (Search, Display, and Remarketing)' },
            { name: 'In-depth Keyword Research & Targeting' },
            { name: 'Ad Copy Creation (Up to 7 Ads)' },
            { name: '5 Ad Group Setups' },
            { name: 'Conversion & Call Tracking Setup' },
            { name: 'Daily Performance Monitoring & Optimization' },
            { name: 'Weekly Reporting' }, 
        ],
        note: <>
            <p>Recommended Ad Budget: $5,000 - $10,000/month</p>
            <p>(Ad budget paid directly to Google, not included in the package price.)</p> 
        </> 
    },
    {
        budget: 'Ad Budget Not Included',
        title: 'AdVantage Google Ads Package',
        price: <>Starting at $2,500/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(6-month commitment)</span></>,
        description: 'AdVantage Google Ads Package is ideal for businesses looking to maximize their paid search marketing with a competitive edge.',
        features: [
            { name: '5+ Campaign Setups (Search, Display, Remarketing, etc.)' },
            { name: 'Comprehensive Keyword & Audience Research' },
            { name: 'Ad Copy Creation (Unlimited Ads)' },
            { name: 'Unlimited Ad Group Setups' },
            { name: 'Advanced Conversion Tracking' },
            { name: '24/7 Performance Monitoring & Optimization' },
            { name: 'Custom Reporting' },
        ], 
        note: <>
            <p>Recommended Ad Budget: $10,000+/month (Scalable based on goals and competition.) </p>
            <p>
                Note: larger budgets may require custom pricing beyond $2,500/month
                (Ad budget paid directly to Google, not included in the package price.) 
            </p> 
        </> 
    },
]

const Googleads = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Google Ads Management"}
                titleClassName="text-center"
            />

            <section className="py-10 sm:py-12 md:py-14 lg:py-20 bg-gradient-to-b from-[#091906] to-[#12320C]">
                <div className="container">
                    <div className="space-y-10 md:space-y-16">
                        <div>
                            <Heading2
                                title="Why Google Ads is Important"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                Google Ads helps target customers actively searching for your services, driving traffic and increasing conversions. It offers measurable results, making it essential for business growth.
                            </p>
                        </div>
                        <div>
                            <Heading2
                                title="Why Choose Us for Google Ads"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                We create customized campaigns to maximize ROI, optimizing ads to reach the right audience and deliver tangible results for your business.
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

                     
                    <CustomQuoteBox
                        package="Google Ads Management"
                    />
                </div>
                {/* container */}
            </section>


        </>
    )
}

export default Googleads