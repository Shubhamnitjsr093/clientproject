import React from 'react'
import HeroImage from "@/assets/images/common/web-dev-hero-banner.webp";
import PageHeader from '@/components/PageHeader';
import Heading2 from '@/components/Heading2';
import PackageItemCard from '@/components/PackageItemCard';
import CustomQuoteBox from '@/components/CustomQuoteBox';

const packageData = [
    {
        title: 'Essential Care App Maintenance Package',
        price: <>$450/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(2-month commitment)</span></>,
        description: 'Supported Tech Stacks: Flutter, .NET, Node.js, React ect., reach out to use to enquire about specific tech stacks.',
        features: [
            { name: 'App Updates: Monthly updates for minor bug fixes and small performance improvements.' },
            { name: 'Security Patches: Regular security checks and timely application of security patches.' },
            { name: 'Platform Updates: Ensures app compatibility with new OS versions (iOS and Android).' },
            { name: 'User Feedback Monitoring: Review and track user feedback for improvements.' },
            { name: '1 Hour of Minor Changes: Includes small features, UI tweaks, or adjustments per month.' },
            { name: 'Support: Email support with a 72-hour response time.' }, 
        ], 
    },
    {
        title: 'Pro Care App Maintenance Package',
        price: <>$750/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(3-month commitment)</span></>,
        description: <>Supported Tech Stacks: Flutter, .NET, Node.js, React ect., reach out to use to enquire about specific tech stacks.</>,
        features: [
            { name: 'All Features in Basic Package' },
            { name: 'App Performance Optimization: Regular performance enhancements to speed up the app and reduce crashes.' },
            { name: 'Bug Fixes & Issue Resolution: Priority bug fixes and technical troubleshooting.' },
            { name: 'Monthly Feature Review: Analysis of app features and user experience for improvements.' },
            { name: 'Platform & OS Updates: Updates for compatibility with the latest OS versions and devices (iOS/Android).' },
            { name: '3 Hours of Minor & Moderate Changes: Includes new features, design adjustments, or bug fixes.' },
            { name: 'Support: Priority email and chat support with a 48-hour response time.' }, 
        ], 
    },
    {
        title: 'Elite Care App Maintenance Package',
        price: <>$1000/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(4-month commitment)</span></>,
        description: <>Supported Tech Stacks: Flutter, .NET, Node.js, React ect., reach out to use to enquire about specific tech stacks.</>,
        features: [
            { name: 'All Features in Standard Package' },
            { name: 'Comprehensive Security Audits: Regular security checks to identify potential vulnerabilities.' },
            { name: 'App Store Optimization (ASO): Monthly updates to optimize app listing on app stores (App Store & Google Play).' },
            { name: 'User Experience & Design Enhancements: Regular evaluation and updates based on user feedback and trends.' },
            { name: '5 Hours of Major Changes or New Features: New functionality, integrations, or significant design updates.' },
            { name: 'Quarterly Analytics Reports: App performance, user engagement, and downloads analysis.' },
            { name: 'Support: email support with a 12-hour response time.' },
        ], 
    },
    {
        title: 'Custom Maintenance Package',
        price: <>Starting at $1200/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(6-month commitment)</span></>,
        description: 'Supported Tech Stacks: Flutter, .NET, Node.js, React ect., reach out to use to enquire about specific tech stacks.',
        features: [
            { name: 'Tailored to Your Needs: This package is fully customizable, perfect for apps with specific maintenance requirements.' },
            { name: 'Unlimited Support & Updates: Includes unlimited app updates, bug fixes, and performance enhancements.' },
            { name: 'Dedicated Project Manager: A dedicated account manager for seamless communication and management of your app’s maintenance.' },
            { name: 'Regular User Feedback Review: Detailed analysis of user reviews and suggestions for feature updates.' },
            { name: 'App Performance Monitoring: Continuous app monitoring to ensure stability and minimize downtime.' },
            { name: 'Advanced Analytics & Reporting: Detailed monthly reports on app performance, growth, and user engagement.' },
            { name: 'Support:  priority support with  6-hours response time.' },
        ], 
    },
    
]

const Appmaintenance = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Mobile App Maintenance"}
                titleClassName="text-center"
            />

            <section className="py-10 sm:py-12 md:py-14 lg:py-20 bg-gradient-to-b from-[#091906] to-[#12320C]">
                <div className="container">
                    <div className="space-y-10 md:space-y-16">
                        <div>
                            <Heading2
                                title="Why is Mobile App Maintenance Important?"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                Mobile app maintenance ensures your app remains secure, functional, and up-to-date with the latest devices and software, providing users with a smooth experience.
                            </p>
                        </div>
                        <div>
                            <Heading2
                                title="Why Choose Us for Mobile App Maintenance?"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                Expert maintenance keeps your app secure, fast, and reliable, with regular updates and performance enhancements to ensure it stays ahead in a competitive market.
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
                        package="Mobile App Maintenance"
                    />
                </div>
                {/* container */}
            </section>


        </>
    )
}

export default Appmaintenance