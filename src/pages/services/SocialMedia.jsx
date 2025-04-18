import React from 'react'
import HeroImage from "@/assets/images/common/web-dev-hero-banner.webp";
import PageHeader from '@/components/PageHeader';
import Heading2 from '@/components/Heading2';
import PackageItemCard from '@/components/PackageItemCard';
import CustomQuoteBox from '@/components/CustomQuoteBox';

const packageData = [
    {
        title: 'Essential Social Media Package',
        price: <>$400/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(2-month commitment)</span></>,
        description: 'Perfect for businesses starting their social media journey or seeking consistent presence.',
        features: [
            { name: '15 Posts per month' },
            { name: '3 Social Media Platforms (Facebook, Instagram, or Twitter)' },
            { name: 'Basic engagement (comments, likes, replies)' },
            { name: 'Monthly analytics report' },
            { name: '1 Campaign per month' },
        ], 
    },
    {
        title: 'Premium Social Media Package',
        price: <>$500/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(3-month commitment)</span></>,
        description: 'Designed for businesses aiming for greater visibility and customer interaction.',
        features: [
            { name: '30 Posts per month' },
            { name: '4 Social Media Platforms' },
            { name: 'Audience targeting and growth strategy' },
            { name: 'Regular engagement and replies' },
            { name: '2 Campaigns per month' },
            { name: 'Bi-weekly analytics reports' },
        
        ],  
    },
    { 
        title: 'Elite Social Media Package',
        price: <>$950/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(4-month commitment)</span></>,
        description: 'For businesses looking to expand their reach and drive more targeted traffic.',
        features: [
            { name: '45 Posts per month' },
            { name: '5 Social Media Platforms (LinkedIn, Pinterest, etc.)' },
            { name: 'Advanced audience segmentation and targeting' },
            { name: 'Daily engagement (comments, likes, replies, direct messages)' },
            { name: '4 Campaigns per month' },
            { name: 'Weekly analytics reports' },
            { name: 'Social media advertising management (Ads budget not included)' },
        ],  
    },
    { 
        title: 'Digital Domination Package',
        price: <>$1500/month <span className='text-lg md:text-xl block tracking-normal font-normal'>(6-month commitment)</span></>,
        description: 'Tailored for businesses requiring a full-scale strategy across multiple platforms Strong and authoritative for businesses wanting a strong online impact.',
        features: [
            { name: '6+ Social Media Platforms' },
            { name: 'Unlimited Posts per month' },
            { name: 'Comprehensive audience targeting & influencer collaborations' },
            { name: 'Engagement and Community Management' },
            { name: 'Ongoing campaigns and ad management (Ads budget included)' },
            { name: 'Daily performance tracking & reporting' },
            { name: 'Dedicated Account Manager' }, 
        ], 
    }, 
]

const SocialMedia = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Social Media Management "}
                titleClassName="text-center"
            />

            <section className="py-10 sm:py-12 md:py-14 lg:py-20 bg-gradient-to-b from-[#091906] to-[#12320C]">
                <div className="container">
                    <div className="space-y-10 md:space-y-16">
                        <div>
                            <Heading2
                                title="Why Social Media Management is Important"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                Social media management keeps your brand active, relevant, and engaging. It helps you connect with your audience, build trust, and establish brand authority while ensuring consistent content, audience interaction, and long-term growth.
                            </p>
                        </div>
                        <div>
                            <Heading2
                                title="Why Choose Us for Social Media Management?"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                We provide strategic, hands-on social media management that keeps your brand in front of the right audience. Our team creates engaging content, manages interactions, and optimizes your social presence to ensure steady growth. Let us handle your social media so you can focus on running your business.
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
                        package="Social Media Management "
                    />
                </div>
                {/* container */}
            </section>


        </>
    )
}

export default SocialMedia