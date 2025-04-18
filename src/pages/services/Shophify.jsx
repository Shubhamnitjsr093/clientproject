import React from 'react'
import HeroImage from "@/assets/images/common/web-dev-hero-banner.webp";
import PageHeader from '@/components/PageHeader';
import Heading2 from '@/components/Heading2';
import PackageItemCard from '@/components/PackageItemCard';
import CustomQuoteBox from '@/components/CustomQuoteBox';

const packageData = [
    {
        title: 'Lite Shopify E-commerce Package',
        price: '$1,200',
        description: 'Perfect for very small stores (1-5 products) looking to launch quickly with a professional Shopify setup.',
        features: [
            { name: 'Shopify Store Setup & Configuration' },
            { name: 'Up to 5 Products Added (More can be added for an additional fee)' },
            { name: 'Theme Installation & Basic Customization' },
            { name: 'Mobile Responsiveness' },
            { name: 'Payment Gateway Setup (Stripe, PayPal, etc.)' },
            { name: 'Essential Apps Installed (SEO, security, analytics)' },
            { name: 'Shipping & Tax Configuration' },
            { name: '1 Month Post-Launch Support (Bug fixes & minor updates)' },

        ],
        note: 'Extra products beyond 5 can be added: $50 per 20 products'
    },
    {
        title: 'Essential Shopify E-commerce Package',
        price: '$1,800',
        description: <>Best for startups & small businesses launching online <b/> Perfect for businesses that need a simple yet professional Shopify store to start selling quickly.</>,
        features: [
            { name: 'Shopify store setup & configuration' },
            { name: 'Up to 10 products added' },
            { name: 'Theme installation & basic customization' },
            { name: 'Mobile responsiveness' },
            { name: 'Payment gateway setup' },
            { name: 'Essential apps (SEO, analytics, security)' },
            { name: 'Shipping & tax configuration' },
            { name: 'Social media integration' },
            { name: '1-month post-launch support (bug fixes & minor updates)' },
        ],
        note: 'Extra products beyond 10: $50 per 20 products',
    },
    {
        title: 'Premium Shopify E-commerce Package',
        price: '$2,800',
        description: <>Best for growing small businesses stores <br/>A Shopify store with more customization and enhanced features to improve user experience and sales.</>,
        features: [
            { name: 'Everything in Lite, plus:' },
            { name: 'Up to 50 products added' },
            { name: 'Advanced theme customization (CSS & branding)' },
            { name: 'Custom navigation & category structuring' },
            { name: 'Upsell & cross-sell integrations' },
            { name: 'Conversion-focused checkout optimization' },
            { name: 'Blog setup & SEO-friendly structure' },
            { name: '1-months post-launch support (bug fixes & minor updates)' },
        ],
        note: 'Extra products beyond 50: $50 per 20 products',
    },
    {
        title: ' Elite  Shopify E-commerce Package',
        price: '$4,400',
        description: <>Best for businesses scaling up with advanced features <br/> 
        A fully customized Shopify store with enhanced user experience, SEO, and automation.
        </>,
        features: [
            { name: 'Everything in Essential, plus:' },
            { name: 'Up to 100 products added' },
            { name: 'Fully customized Shopify theme design' },
            { name: 'Custom Shopify sections & page templates' },
            { name: 'Advanced filtering & product search' },
            { name: 'Multi-language & multi-currency setup' },
            { name: 'Subscription model integration (if applicable)' },
            { name: 'API & third-party app integrations' },
            { name: 'Performance optimization for speed & SEO' },
            { name: '2-months post-launch support (bug fixes & minor updates)' },
        ],
        note: 'Extra products beyond 100: $50 per 20 products',
    },
]

const Shophify = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Shopify Development"}
                titleClassName="text-center"
            />

            <section className="py-10 sm:py-12 md:py-14 lg:py-20 bg-gradient-to-b from-[#091906] to-[#12320C]">
                <div className="container">
                    <div className="space-y-10 md:space-y-16">
                        <div>
                            <Heading2
                                title="Why Shopify Development is Important!"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                While Shopify offers user-friendly tools, a professionally developed store ensures seamless functionality, optimized performance, and higher conversions. Expert development enhances user experience, security, and scalability, creating a store built for long-term success.
                            </p>
                        </div>
                        <div>
                            <Heading2
                                title="Why Choose Us?"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                As expert Shopify developers, we build custom, high-performing stores tailored to your brand. With advanced design, seamless integrations, and optimization for speed and sales, we create scalable and conversion-driven e-commerce solutions.
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
                        package="Shopify Development"
                    />
                </div>
                {/* container */}
            </section>


        </>
    )
}

export default Shophify