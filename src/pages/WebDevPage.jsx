import React from 'react'
import HeroImage from "@/assets/images/common/web-dev-hero-banner.webp";
import PageHeader from '@/components/PageHeader';
import Heading2 from '@/components/Heading2';
import PackageItemCard from '@/components/PackageItemCard';
import CustomQuoteBox from '@/components/CustomQuoteBox';

const packageData = [
    {
        title: 'Lite Custom',
        price: '$1,500',
        description: 'Perfect for small businesses and entrepreneurs needing a professional, simple website to establish their online presence.',
        features: [ 
            { name: 'Up to 5 Unique Pages (Home, About, Services, Contact, Policy)' },
            { name: 'Custom, Mobile-Responsive Design' },
            { name: 'Basic SEO Setup (Meta tags, search engine submission)' },
            { name: 'Contact Form & Lead Capture' },
            { name: 'Social Media Integration' },
            { name: 'Basic Speed & Performance Optimization' },
            { name: 'Google Analytics Setup (Track website traffic & performance)' },
            { name: '1 Month Post-Launch Support (Bug fixes & minor updates)' },
        ],
        note: 'Extra pages can be added for an additional fee: $100 per 5 pages'
    },
    {
        title: 'Essential',
        price: '$2,200',
        description: 'Perfect for startups & small businesses needing a strong online presence.',
        features: [ 
            { name: 'Custom website design (1-10 pages)' },
            { name: 'Responsive design for mobile & desktop' },
            { name: 'Basic SEO setup' },
            { name: 'Contact form & social media integration' }, 
            { name: 'Unlimited revisions' },
            { name: '1-month post-launch support' },
        ],
        additional_features: [ 
            { name: 'Google My Business setup' },
            { name: 'Basic blogging system' },
            { name: 'Speed optimization' },
            { name: 'Enhanced contact forms (with email notifications)' },
            { name: 'Social proof (testimonials/client logos)' },
            { name: 'One basic email signup form (Mailchimp or similar)' },
            { name: 'Mobile optimization' },
        ], 
    },
    {
        title: 'Premium',
        price: '$3,400',
        description: 'For growing businesses looking for more advanced features & SEO optimization.',
        features: [ 
            { name: 'Custom website design (11-20 pages)' },
            { name: 'Advanced SEO setup' },
            { name: 'Social media integration' },
            { name: 'Analytics & tracking setup (Google Analytics, etc.)' },
            { name: 'Unlimited revisions' },
            { name: '1-month post-launch support' },
            { name: 'Basic security features (SSL, firewall)' },
        ],
        additional_features: [ 
            { name: 'SEO content optimization (keyword recommendations)' },
            { name: 'Live chat integration (e.g., Tidio, Intercom)' },
            { name: 'Email signup form + newsletter integration' },
            { name: 'Basic analytics training (30-minute walkthrough)' },
            { name: 'Blog strategy & content ideas' },
            { name: 'Custom domain email setup (e.g., info@yourbusiness.com)' },
            { name: 'Mobile optimization ' },
        ], 
    },
    {
        title: 'Elite',
        price: '$4,400',
        description: 'Best for businesses needing eCommerce & full-scale branding solutions.',
        features: [ 
            { name: 'Custom website design (20-30 pages)', },
            { name: 'Full SEO optimization (on-page & off-page)', },
            { name: 'eCommerce functionality (product catalog, shopping cart, payment gateway)', },
            { name: 'Branding & UI/UX design (custom logos, colors, typography)', },
            { name: 'Full integration with third-party tools (CRM, email marketing, etc.)', },
            { name: 'Unlimited revisions', },
            { name: '1-month post-launch support', },
            { name: 'Advanced security features (site monitoring, backups)', },
        ],
        additional_features: [ 
            { name: 'SEO content optimization (keyword recommendations)', },
            { name: 'Live chat integration (e.g., Tidio, Intercom)', },
            { name: 'Email signup form + newsletter integration', },
            { name: 'Basic analytics training (30-minute walkthrough)', },
            { name: 'Blog strategy & content ideas', },
            { name: 'Custom domain email setup (e.g., info@yourbusiness.com)', },
            { name: 'Mobile optimization', }, 
        ], 
    },
]
const WebDevPage = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Website Development"}
                titleClassName="text-center"
            />

            <section className="py-10 sm:py-12 md:py-14 lg:py-20 bg-gradient-to-b from-[#091906] to-[#12320C]">
                <div className="container">
                    <div className="space-y-10 md:space-y-16">
                        <div>
                            <Heading2
                                title="Why Web Development is Important?"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                A well-developed website is essential for establishing credibility, enhancing user experience, and driving business growth. It serves as a powerful marketing tool, helping you generate leads, increase conversions, and build a strong online presence.
                            </p>
                        </div>
                        <div>
                            <Heading2
                                title="Why Choose Us for Web Development?"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                At Obiztec we create custom, high-performance websites designed to match your brand’s goals. Our sites are fast, secure, and SEO-optimized, ensuring maximum visibility and engagement. With mobile responsiveness, seamless integrations, and ongoing support, we build websites that not only look great but also deliver real business results.
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
                        package="Website Development"
                    />
                </div>
                {/* container */}
            </section>


        </>
    )
}

export default WebDevPage