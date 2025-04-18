import React from 'react'
import HeroImage from "@/assets/images/common/web-dev-hero-banner.webp";
import PageHeader from '@/components/PageHeader';
import Heading2 from '@/components/Heading2';
import PackageItemCard from '@/components/PackageItemCard';
import CustomQuoteBox from '@/components/CustomQuoteBox';

const packageData = [
    {
        title: 'Starter App Development Package',
        price: '$3,900',
        description: 'Ideal for ultra-small businesses, startups, or solo entrepreneurs who need a simple, functional mobile app without heavy development costs.',
        features: [
            { name: 'Custom App Design (3-5 Screens)' },
            { name: 'Cross-Platform Development (iOS & Android)' },
            { name: 'Basic Core Features (e.g., Contact Forms, Simple Booking System, Service Listings)' },
            { name: 'User Authentication (Email or Social Login)' },
            { name: 'Push Notifications Setup (Basic Notifications)' },
            { name: 'Backend Integration (Simple Data Storage, Firebase or Google Sheets)' },
            { name: 'Mobile-Responsive UI/UX' },
            { name: 'App Store Submission (Google Play & Apple App Store)' },
            { name: '1 Month Post-Launch Support (Bug fixes & minor updates)' }, 
        ],
        note: <>
            <p className='mt-4 font-medium text-dark text-base lg:text-lg'> Extra Features (Optional Add-ons):</p>
            <ul className="list-disc pl-4 mt-2">
                <li>Additional Screens: $200 per screen</li>
                <li>Payment Gateway Integration: $500</li>
                <li>In-App Chat/Messaging: $800+</li>
                <li>Advanced Features (E-commerce, GPS Tracking, Custom API Integrations): Custom Pricing</li>
            </ul>
        </>,
        whychoose: <>
            <h4 className='mt-5 md:mt-7 font-medium text-dark text-base lg:text-lg mb-2'>Why Choose This Package?</h4>
            <p>The Starter App Package is perfect for small businesses looking to launch a cost-effective mobile app quickly and efficiently. It includes essential features like user authentication, booking, and push notifications, ensuring a functional and user-friendly experience without unnecessary complexity. Designed with scalability in mind, this package allows businesses to start with a simple yet effective solution and upgrade later as their needs grow. With fast development and an affordable price, it’s an ideal choice for entrepreneurs who want to establish a mobile presence without breaking the bank.</p>
        </>
    },
    {
        title: 'Lite App Development Package',
        price: '$5,500',
        description: <>Perfect for businesses needing a simple mobile presence such as a booking app, customer engagement tool, or basic service app.</>,
        features: [
            { name: 'Custom App Design (5-8 Screens)' },
            { name: 'Cross-Platform Development (iOS & Android)' },
            { name: 'Basic Features (Booking, Contact Forms, Notifications, User Login, etc.)' },
            { name: 'Backend Integration for Simple Data Storage' },
            { name: 'Mobile-Responsive UI/UX' },
            { name: 'Push Notifications Setup' },
            { name: 'App Store Submission (Google Play & Apple App Store)' },
            { name: '1 Month Post-Launch Support (Bug fixes & minor updates)' },
        ],
        note: <>
            <p className='mt-4 font-medium text-dark text-base lg:text-lg'>Extra Features (Optional Add-ons):</p>
            <ul className="list-disc pl-4 mt-2">
                <li>Additional Screens: $250 per screen</li>
                <li>Advanced Features (E-commerce, In-App Chat, etc.): Custom Pricing </li>
            </ul>
        </>,
        whychoose: <>
            <h4 className='mt-5 md:mt-7 font-medium text-dark text-base lg:text-lg mb-2'>Why Choose This Package?</h4>
            <p>Great for small businesses and entrepreneurs as it provides a cross-platform solution (iOS & Android) with core functionalities like booking, push notifications, and user authentication to enhance customer engagement. Designed for ease of use and scalability, this package ensures a smooth user experience while keeping costs low. With app store submission included and one month of post-launch support, it’s a hassle-free way to establish a mobile presence and grow your business efficiently.</p>
        </>
    },
    {
        title: 'Essential App Development Package',
        price: '$9,000',
        description: <>For  businesses needing a functional mobile app for appointments, small e-commerce, event booking, wellness tracking, or community engagement with essential features like push notifications and secure backend integration.</>,
        features: [
            { name: 'Custom app design (6 -10 screens)' },
            { name: '2 Platforms (iOS & Android): Wider audience reach.' },
            { name: 'User-friendly interface: Easy navigation, smooth experience.' },
            { name: 'Core features: Essential app functionalities.' },
            { name: 'Contact forms: Capture user input.' },
            { name: 'Navigation: Clear, intuitive layout.' },
            { name: 'Push notifications: Timely user engagement.' },
            { name: 'Backend integration: Simple data storage.' },
            { name: 'Security: SSL & encryption protection.' },
            { name: 'App store submission: Publish to App Store and Google play store.' },
            { name: 'Basic analytics integration: Track app performance.' },
            { name: 'Responsive design for mobile devices: Smooth cross-device experience.' },
            { name: 'User onboarding: Introductory walkthrough. ' },
            { name: '2 months post-launch support (bug fixes, minor updates, and troubleshooting)' },
        ],
        whychoose: <>
            <h4 className='mt-5 md:mt-7 font-medium text-dark text-base lg:text-lg mb-2'>Why Choose This Package?</h4>
            <p>This package is ideal for small businesses seeking an affordable, feature-rich mobile app with cross-platform support (iOS & Android). It includes push notifications, contact forms, and basic backend integration. With 60 days of post-launch support and scalability through add-ons, it’s a cost-effective solution for growing your digital presence, with security and analytics integration.</p>
        </>
    },
    {
        title: 'Premium App Development Package',
        price: '$15,000',
        description: 'Ideal for e-commerce, fitness, finance, booking, or social networking apps with custom UI/UX, advanced security, payment integrations, and real-time user engagement for a seamless, high-performance mobile experience on iOS and Android.',
        features: [
            { name: 'Custom app design (11-25 screens)' },
            { name: '2 Platforms (iOS & Android) Broader reach, increased engagement.' },
            { name: 'Custom design & development for a feature-rich, intuitive app' },
            { name: 'Moderate complexity app with advanced functionality tailored to your business needs' },
            { name: 'API Integrations (e.g., social media, payment gateways, third-party services)' },
            { name: 'User authentication (email/social logins for seamless access and security)' },
            { name: 'Push notifications (for real-time user engagement and retention)' },
            { name: 'In-app purchases or basic payment gateway (eCommerce or premium features)' },
            { name: 'Advanced backend integration (cloud storage, databases, custom content management system)' },
            { name: 'App store submission (Google Play & Apple App Store)' },
            { name: 'App performance monitoring (analytics to track app performance and user behavior)' },
            { name: '4 months post-launch support (bug fixes, minor updates, and troubleshooting)' }, 
        ],
        note: <>
            <p className='mt-4 font-medium text-dark text-base lg:text-lg'>Additional Features:</p>
            <ul className="list-disc pl-4 mt-2">
                <li>Custom UI/UX design (tailored to your brand and user experience goals)</li>
                <li>Advanced security features (SSL, data encryption, GDPR compliance)</li>
                <li>User onboarding (tutorials or walkthroughs to introduce new users to the app)</li>
                <li>Multi-language support (if your business caters to international audiences)</li>
                <li>Custom branding (personalized icons, splash screens, and in-app themes)</li>
                <li>App updates & improvements (ongoing maintenance and enhancements)</li> 
            </ul>
        </>,
        additionalFeatures: <>
            <h4 className='mt-5 md:mt-7 font-medium text-dark text-base lg:text-lg mb-2'>Additional Features:</h4>
            <ul className="list-disc pl-4 mt-2">
                <li>Custom UI/UX design (tailored to your brand and user experience goals)</li>
                <li>Advanced security features (SSL, data encryption, GDPR compliance)</li>
                <li>User onboarding (tutorials or walkthroughs to introduce new users to the app)</li>
                <li>Multi-language support (if your business caters to international audiences)</li>
                <li>Custom branding (personalized icons, splash screens, and in-app themes)</li>
                <li>App updates & improvements (ongoing maintenance and enhancements)</li>
            </ul>
        </>,
        whychoose: <>
            <h4 className='mt-5 md:mt-7 font-medium text-dark text-base lg:text-lg mb-2'>Why Choose This Package?</h4>
            <p>
                This package is designed for businesses ready to invest in an advanced, feature-packed app that supports growth, enhances user engagement, and ensures a seamless user experience across platforms. With flexible pricing and the option to scale as your business grows, this solution provides the perfect balance of functionality and affordability.
            </p>
        </>,
    },
    {
        title: 'Elite App Development Package',
        price: '$28,000',
        description: 'Best suited for on-demand services, fintech, healthcare, or marketplace apps with real-time data sync, advanced security, geolocation, in-app messaging, and scalable cloud infrastructure for a highly interactive and robust user experience on iOS and Android.',
        features: [
            { name: 'Custom app design (25+ screens)' },
            { name: '2 Platforms Complex User Flows (iOS & Android): Seamless cross-platform experience' },
            { name: 'Third-Party API Integrations: Payment, geolocation, and more' },
            { name: 'Real-Time Data Sync/In-App Messaging: Instant updates and communication' },
            { name: 'Advanced User Authentication: Multi-factor security verification' },
            { name: 'Custom UI/UX Design: High-quality, intuitive design' },
            { name: 'Scalable Cloud Backend: Custom, robust infrastructure' },
            { name: 'Advanced Analytics Integration: In-depth app usage insights' },
            { name: 'App Store Submission & Support: Full testing and updates' },
        ],
        note: <>
            <p className='mt-4 font-medium text-dark text-base lg:text-lg'>Additional Features:</p>
            <ul className="list-disc pl-4 mt-2">
                <li>Push Notifications: Instant user engagement</li>
                <li>In-App Purchases/Subscription Models: Monetize app easily</li>
                <li>Social Media Integration: Share and log in seamlessly</li>
                <li>Geo-Location Services: Location-based features and offers</li>
                <li>E-Commerce Integration (Optional): Shopping cart and checkout</li>
                <li>6 months post-launch support (bug fixes, minor updates, and troubleshooting)</li> 
            </ul>
        </>,
        additionalFeatures: <>
            <h4 className='mt-5 md:mt-7 font-medium text-dark text-base lg:text-lg mb-2'>Why Choose This Package?</h4>
            <p>This package is perfect for businesses looking to create an advanced, feature-packed app with complex user flows and high security. It provides seamless integration with third-party APIs and offers real-time data syncing and multi-platform support. With advanced UI/UX design and a scalable backend, this package ensures a robust app built to grow with your business, offering advanced analytics and post-launch support for long-term success.</p>
        </>, 
    },
]

const AppDev = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Mobile App Development"}
                titleClassName="text-center"
            />

            <section className="py-10 sm:py-12 md:py-14 lg:py-20 bg-gradient-to-b from-[#091906] to-[#12320C]">
                <div className="container">
                    <div className="space-y-10 md:space-y-16">
                        <div>
                            <Heading2
                                title="Why Develop a Mobile App?"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                            Developing a mobile app allows you to reach your audience anytime. It boosts brands visibility, enhance customer engagement, and offer a personalized experience, fostering long-term customer relationships.
                            </p>
                        </div>
                        <div>
                            <Heading2
                                title="Why Choose Us?"
                                className="text-white text-left mb-5 md:mb-8 lg:mb-10"
                            />
                            <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.45] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full text-primary-foreground max-w-[720px]'>
                                We build custom mobile apps that are user-friendly, secure, and designed to meet your specific business needs, ensuring a seamless experience and maximum impact.
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
                        package="Mobile App Development"
                    />
                </div>
                {/* container */}
            </section>


        </>
    )
}

export default AppDev