import React from 'react'
import HeroImage from "@/assets/images/common/web-dev-hero-banner.webp";
import PageHeader from '@/components/PageHeader';
import Heading2 from '@/components/Heading2';
import PackageItemCard from '@/components/PackageItemCard';
import CustomQuoteBox from '@/components/CustomQuoteBox';

const packageData = [
    {
        title: 'Lite E-Commerce Web Development Package',
        price: '$1,800',
        description: 'Perfect for startups and small businesses looking for a simple, professional online store to start selling quickly.',
        features: [
                { name: 'Up to 5 Unique Pages (Home, Shop, About, Contact, Policy)'},
            { name: 'Up to 20 Products Added (More can be added at an extra cost)'},
            { name: 'Mobile-Responsive Design'},
            { name: 'Basic E-Commerce Functionality (Shopping cart, checkout, order management)'},
            { name: 'Payment Gateway Setup (Stripe, PayPal, etc.)'},
            { name: 'Basic SEO Optimization (Meta tags, image alt text, search engine submission)'},
            { name: 'Social Media Integration'},
            { name: 'Contact Form & Basic Lead Capture'},
            { name: '1 Month Post-Launch Support (Bug fixes & minor updates)'},
        ],
        note: 'Extra products beyond 20 can be added for an additional fee: $50 per 20 products'
    },
    {
        title: 'Essential E-Commerce Package',
        price: '$2,500',
        description: 'Designed for startups or small businesses looking to build a strong and impactful online presence.',
        features: [
            { name: 'Up to 15 Unique Pages Website' },
            { name: 'Up to 50 Products' },
            { name: 'Mobile Responsiveness' },
            { name: 'Content Management System (CMS)/Admin Panel' },
            { name: 'Conceptual & Dynamic Design' },
            { name: 'Striking Hover Effects' },
            { name: 'Online Reservation/Appointment Tool' },
            { name: 'Online Payment Gateway Integration' },
            { name: 'Custom Contact Forms' },
            { name: 'Lead Capturing Forms & CTA' },
            { name: 'Newsletter Subscription CTA' },
            { name: 'Newsfeed Integration' },
            { name: 'Social Media Integration' },
            { name: 'Search Engine Submission' },
            { name: 'Multiple Stock Images (Industry-Specific)' },
            { name: 'Custom Unique Banner Designs' },
            { name: '1 Month  Post-Launch Support (Bug fixes & minor updates)' },
        ],
        note: 'Extra products beyond 50 can be added for an additional fee: $50 per 20 products.',
    },
    {
        title: 'Premium E-commerce Web Development Package',
        price: '$3,800',
        description: 'Ideal for businesses ready to expand, providing advanced features and tailored solutions to enhance their online presence and boost performance. ',
        features: [
            { name: 'Up to 20-Page Custom Website Design' },
            { name: 'Up to 100 Products' },
            { name: 'Unique Interactive, Dynamic & High-End Design' },
            { name: 'Custom WP (OR) Custom PHP Development' },
            { name: 'Admin Panel' },
            { name: 'Special Striking Hover Effects' },
            { name: 'Responsive Layout' },
            { name: 'Multi-Lingual (Optional)' },
            { name: 'Online Reservation/Appointment Tool (Optional)' },
            { name: 'Online Payment Gateway Integration (Optional)' },
            { name: 'Book A Call CTA Form (Optional)' },
            { name: 'Custom Dynamic CTA Forms' },
            { name: 'Lead Capture CTA Forms' },
            { name: 'Signup Area (For Newsletters, Offers, etc.)' },
            { name: 'Search Bar' },
            { name: 'User Login' },
            { name: 'Multiple Custom Banner Designs' },
            { name: 'Multiple Stock Images (Industry-Specific)' },
            { name: 'Unlimited Revisions' },
            { name: '2 Months Post-Launch Support (Bug fixes & minor updates)' },
        ],
        note: 'Extra products beyond 100 can be added for an additional fee: $50 per 20 products.',
    },
    {
        title: 'Elite E-commerce Web Development Package',
        price: '$4,700',
        description: 'Best for established businesses needing advanced customization, large product catalogs, and high performance.',
        features: [
            { name: 'Unlimited Pages Website' },
            { name: 'Up to 500 Products' },
            { name: 'Professional Script Writing' },
            { name: 'UI / UX Interactive & Dynamic HD Design' },
            { name: 'SEO Meta Tags' },
            { name: 'Fully Responsive' },
            { name: 'Custom WP (or) Custom PHP Development' },
            { name: 'Custom Made Banner Designs' },
            { name: 'Multiple Stock Images' },
            { name: 'Unlimited Revisions' },
            { name: 'Special Hover Effects' },
            { name: 'Online Appointment/Scheduling/Online Ordering Integration (Optional)' },
            { name: 'Online Payment Integration (Optional)' },
            { name: 'Multi-Lingual (Optional)' },
            { name: 'Custom Dynamic Forms (Optional)' },
            { name: 'Signup Area (For Newsletters, Offers, etc.)' },
            { name: 'Search Bar' },
            { name: 'Google-Friendly Sitemap' },
            { name: 'Image Alt Text Optimization' },
            { name: 'SEO Internal Linking' },
            { name: 'Search Engine Submission' },
            { name: '1 Month Post-Launch Support (Bug fixes & minor updates)' },
        ],
        note: <>
            <p>Additional Services (Optional Upgrades):</p>
            <ul className='list-disc pl-4'>
                <li>Bulk Product Import Assistance: $50 per 20  products</li>
                <li>Automated Inventory Sync (API Setup): $250 – $500 (One-Time Fee)</li>

            </ul>
        </>,
    },
]

const Sitemaintance = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Site Maintenance"}
                titleClassName="text-center"
            />

            <section className="py-10 sm:py-12 md:py-14 lg:py-20 bg-gradient-to-b from-[#091906] to-[#12320C] hidden">
                <div className="container">
                    <div className="space-y-10 md:space-y-16">
                        <div>
                            <Heading2
                                title="Why E-Commerce Web Development is Important"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                A well-developed e-commerce website is essential for seamless online shopping, brand credibility, and business growth. It provides a user-friendly experience, secure transactions, and scalability, helping businesses attract customers, increase conversions, and maximize revenue. 
                            </p>
                        </div>
                        <div>
                            <Heading2
                                title="Why Choose Us for E-Commerce Development?"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                We build custom, high-performing e-commerce websites designed for speed, security, and conversions. Our solutions include mobile responsiveness, SEO optimization, seamless payment integration, and easy inventory management, ensuring a smooth and scalable online shopping experience.
                            </p>
                        </div>
                    </div>

                </div>
                {/* container */}
            </section>


            <section className="py-10 sm:py-12 md:py-14 lg:py-24 hidden">
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
                        package="E-Commerce Solutions"
                    />
                </div>
                {/* container */}
            </section>


        </>
    )
}

export default Sitemaintance