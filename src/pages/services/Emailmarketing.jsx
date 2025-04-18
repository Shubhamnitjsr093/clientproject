import React from 'react'
import HeroImage from "@/assets/images/common/web-dev-hero-banner.webp";
import PageHeader from '@/components/PageHeader';
import Heading2 from '@/components/Heading2';
import PackageItemCard from '@/components/PackageItemCard';
import CustomQuoteBox from '@/components/CustomQuoteBox';

const packageData = [
    {
        title: 'Lite Email Marketing Plan',
        price: <>$350–$400/Month <span className='text-lg md:text-xl block tracking-normal font-normal'>(cancel anytime)</span></>,
        description: 'For small businesses looking to engage customers without a large email marketing commitment.',
        features: [
            { name: '2 Email Campaigns Per Month (Promotions, Announcements, or Newsletters)' },
            { name: 'Custom Email Template Design' },
            { name: 'Basic List Segmentation & Targeting' },
            { name: 'A/B Testing for Subject Lines' },
            { name: 'Basic Performance Report (Open Rates, Click-Through Rates)' },
            { name: 'Email Marketing Platform Setup (Mailchimp, Klaviyo, or Constant Contact)' },
        ], 
        note: <>
            <p>Pricing:</p>
            <ul className='list-disc pl-4'>
                <li>Standard Plan (Basic Design & Reporting): $350/month</li>
                <li>Premium Plan (Better Targeting & Automation Setup): $400/month </li>
            </ul> 
        </> 
    },
    {
        title: 'Essential Email Marketing Package with Account Setup',
        price: <>$600/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(2-month commitment)</span></>,
        description: 'For businesses starting with email marketing and needing foundational campaigns.',
        features: [
            { name: '4 Email Campaigns per Month (Promotions, Newsletters, Announcements)' },
            { name: 'Basic Email Design Template' },
            { name: 'Email Marketing Platform Setup (e.g., Mailchimp, Klaviyo, Constant Contact)' },
            { name: '1 List Segmentation' },
            { name: 'A/B Testing for Subject Lines' },
            { name: 'Monthly Performance Report (Open Rates, Click-through Rates)' },
            { name: 'Fundamental Account and Automation Setup  (Welcome Email, Abandoned Cart)' },
            { name: 'Graphics Work' },
            { name: '1 Complimentary Auto Emails ' },
            { name: 'Additional Auto Emails Flow - $50 each' }, 
        ],  
    },
    { 
        title: 'Premium Email Marketing Package with Account Setup',
        price: <>$1000/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(3-month commitment)</span></>,
        description: 'For businesses looking for more engaging and revenue-driven email campaigns.',
        features: [
            { name: '6 Email Campaigns per Month (Sales Funnels, Promotions, Nurturing Emails)' },
            { name: 'Custom Email Templates' },
            { name: 'Email Marketing Platform Setup & Integration (CRM, eCommerce, etc.)' },
            { name: '3 List Segments' },
            { name: 'A/B Testing for Subject Lines, Content, & CTAs' },
            { name: 'Detailed Analytics & Monthly Report' },
            { name: 'Advanced Automation Setup (Welcome Series, Follow-ups, Abandoned Cart, etc.)' },
            { name: 'Account Management & Optimization' },
            { name: 'Graphics & GIFs for Emails	' },
            { name: '2 Complimentary Auto Emails ' },
            { name: 'Additional Auto Emails Flow - $50 each' },
        ],  
    },
    { 
        title: 'Premium Email Marketing Package',
        price: <> $1,800/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(4-month commitment)</span></>,
        description: 'For businesses ready to scale and generate higher ROI through advanced automation.',
        features: [
            { name: '9 Email Campaigns per Month' },
            { name: 'Fully Custom Email Design Templates (Branded)' },
            { name: 'Email Marketing Platform Setup & Full Integration (CRM, eCommerce, Analytics, etc.)' },
            { name: '5 List Segments & Advanced Targeting' },
            { name: 'A/B Testing for Subject Lines, Content & CTAs' },
            { name: 'Advanced Analytics & Weekly Performance Reports' },
            { name: 'Comprehensive Email Automation (Drip Campaigns, Behavioral Triggers, Retargeting Emails)' },
            { name: 'Account Optimization & Ongoing Support' },
            { name: 'Graphics Work ' },
            { name: '3 Complimentary Auto Emails ' },
            { name: 'Additional Auto Emails Flow - $50 each' }, 
        ], 
    }, 
]

const Emailmarketing = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Email Marketing"}
                titleClassName="text-center"
            />

            <section className="py-10 sm:py-12 md:py-14 lg:py-20 bg-gradient-to-b from-[#091906] to-[#12320C]">
                <div className="container">
                    <div className="space-y-10 md:space-y-16">
                        <div>
                            <Heading2
                                title="Why Email Marketing is Important"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                Email marketing is one of the most effective ways to directly connect with your audience, drive conversions, and retain customers through personalized communication.
                            </p>
                        </div>
                        <div>
                            <Heading2
                                title="Why Choose Us for Email Marketing"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                We create targeted email campaigns that deliver high engagement and measurable results, ensuring your messages reach the right people at the right time.
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

                    <p className="text-center mt-10 md:mt-12 text-base lg:text-lg">Contact us today to get started with the right email marketing package and account setup for your business!</p>
                     
                    <CustomQuoteBox
                        package="Email Marketing"
                    />
                </div>
                {/* container */}
            </section>


        </>
    )
}

export default Emailmarketing