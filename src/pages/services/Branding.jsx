import React from 'react'
import HeroImage from "@/assets/images/common/web-dev-hero-banner.webp";
import PageHeader from '@/components/PageHeader';
import Heading2 from '@/components/Heading2';
import PackageItemCard from '@/components/PackageItemCard';
import CustomQuoteBox from '@/components/CustomQuoteBox';

const packageData = [
    {
        title: 'Essential Branding Package',
        price: '$900',
        description: 'Perfect for startups and small businesses looking to establish their brand.',
        features: [
            { name: 'Custom Logo Design' },
            { name: '2 Different Concepts ' },
            { name: 'Brand Color Palette' },
            { name: 'Typography Selection' },
            { name: 'Basic Brand Guidelines Document' }, 
        ],  
    },
    {
        title: 'Premium Branding Package',
        price: '$1,800',
        description: 'Ideal for growing businesses looking to create a consistent brand identity.',
        features: [
            { name: 'Custom Logo Design' },
            { name: '3 Different Concepts' },
            { name: 'Brand Color Palette & Typography' },
            { name: 'Business Card & Stationery Design' },
            { name: 'Social Media Profile Design (up to 5 platforms)' },
            { name: 'Brand Guidelines Document' },
            { name: '3 Revision Round' },
            { name: 'Home page design preview ' },
          
        ],  
    },
    { 
        title: 'Elite Branding Package',
        price: '$3,000',
        description: 'For businesses that need a comprehensive and polished brand identity across all platforms.',
        features: [
            { name: 'Custom Logo Design & Variations' },
            { name: '4 Different Concepts' },
            { name: 'Complete Brand Color Palette & Typography' },
            { name: 'Business Card, Stationery & Envelope Design' },
            { name: 'Social Media Branding Kit (up to 5 platforms)' },
            { name: 'Website Branding (home page mock-up)' },
            { name: 'Brand Guidelines Document' },
            { name: '5 Revision Rounds' },
            { name: 'Branding Consultation' },
            { name: '2-3 branded subpages or UI components.' },
            { name: 'Email signature design' },
          
        ],  
    },
    { 
        title: 'Ultimate Branding Package',
        price: 'Custom Pricing',
        description: 'For businesses that require a full-service, custom branding solution.',
        features: [
            { name: 'Custom Logo Design & Full Brand Identity' },
            { name: '5 Different Concepts' },
            { name: 'Complete Brand Strategy Development' },
            { name: 'Business & Digital Stationery Design' },
            { name: 'Full Social Media Branding (all platforms)' },
            { name: 'Website & App Branding' },
            { name: 'Brand Guidelines Document' },
            { name: 'Multiple Revision Rounds' },
            { name: 'Dedicated Branding' },
            { name: 'Brand storytelling & messaging' },
            { name: 'Custom illustrations & animations' },
            { name: 'Brand strategy workshops' },
            { name: 'Product packaging design' },
            { name: 'Marketing collateral (ads, presentations, banners, etc.)' },
          
        ], 
    }, 
]

const Branding = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Branding Services "}
                titleClassName="text-center"
            />

            <section className="py-10 sm:py-12 md:py-14 lg:py-20 bg-gradient-to-b from-[#091906] to-[#12320C]">
                <div className="container">
                    <div className="space-y-10 md:space-y-16">
                        <div>
                            <Heading2
                                title="Why is Branding Important?"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                Branding helps you stand out, build trust, and connect with your audience. It creates consistency, fosters loyalty, and boosts recognition, driving long-term success.
                            </p>
                        </div>
                        <div>
                            <Heading2
                                title="Why Choose Us?"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                We craft unique, memorable brands that resonate with your audience and set you apart. Our team ensures your brand is consistent, compelling, and impactful across all platforms.
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
                        package="Branding Services "
                    />
                </div>
                {/* container */}
            </section>


        </>
    )
}

export default Branding