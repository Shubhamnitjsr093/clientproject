import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom' 
import Heading2 from '../Heading2'
import Email from "@/assets/images/icons/email.svg"
import Call from "@/assets/images/icons/call.svg"
import Globe from "@/assets/images/icons/globe.svg"
import Send from "@/assets/images/icons/send.svg"
import Logo from "@/assets/images/logo.webp"
import { CallIcon, EmailIcon, GlobeIcon, LocationPin } from '../Icons'
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";
import Heading3 from './../Heading3';


const linksList = [
    {
        title: 'About',
        links: [ 
            { title: 'About Us', slug: '/about-us' },
            { title: 'Our Approach', slug: '/our-approach' },
            { title: 'Portfolio', slug: '/portfolios' },
            { title: 'Blog', slug: '/blog' }, 
            { title: 'Pricing', slug: '/pricing' },
            { title: 'Get a Quote', slug: '/get-quote' },
            { title: 'Contact Us', slug: '/contact-us' },
        ]
    },
    {
        title: 'Services',
        links: [ 
            { title: 'Web Development', slug: '/web-dev' },
            { title: 'E-Commerce Development', slug: '/e-comerce' },
            { title: 'Shopify Development', slug: '/shophify' },
            { title: 'Mobile App Development', slug: '/app-dev' },
            { title: 'Website Maintenance', slug: '#' },
            { title: 'SEO Services', slug: '/seo' },
            { title: 'Google Ads Management', slug: '/google-ads' },
            { title: 'Social Media Management', slug: '/social-media' },
            { title: 'Email Marketing', slug: '/email-marketing' },
            { title: 'Newsletters', slug: '/newsletters' },
            { title: 'Branding Services', slug: '/branding' },
        ]
    },
    {
        title: 'Customer Support',
        links: [
            { title: 'Privacy Policy', slug: '/privacy-policy' },
            { title: 'Terms & Conditions', slug: '/terms-conditions' },
            { title: 'Refund Policy', slug: '/refund-policy' },
            { title: 'Cookie Policy', slug: '/cookie-policy' },
            { title: 'Disclaimer', slug: '/disclaimer' },
            { title: 'Payment Policy', slug: '/payment-policy' },
            { title: 'Support & Maintenance Policy', slug: '/support-maintenance-policy' },
            { title: 'Subscription Terms & Conditions', slug: '/subscription-conditions' },

        ]
    },
]

const contactInfo = [
    {
        title: 'Email:', value: 'contact@obiztec.com', href: 'mailto:contact@obiztec.com', icon: <img src={Email} alt='email' className='md:w-10 w-8 md:h-8 h-6 object-contain' loading='lazy' />
    },
    {
        title: 'Phone:', value: '+1 (325) 275-5589', href: 'tel:+1 (325) 275-5589', icon: <img src={Call} alt='Call' className='md:w-9 w-7 md:h-10 h-8 object-contain' loading='lazy' />
    },
    {
        title: 'Website:', value: 'www.obiztec.com', href: 'https://www.obiztec.com', icon: <img src={Globe} alt='Globe' className='md:w-11 w-9 md:h-11 h-9 object-contain' loading='lazy' />
    },
]

const contactInfo2 = [
    {
        title: 'Email:', value: 'contact@obiztec.com', href: 'mailto:contact@obiztec.com', icon: <img src={Email} alt='email' className='md:w-10 w-8 md:h-8 h-6 object-contain' loading='lazy' />
    },
    {
        title: ' ', value: 'Contact Form', href: '/contact-us', icon: <img src={Call} alt='Call' className='md:w-9 w-7 md:h-10 h-8 object-contain' loading='lazy' />
    },
    {
        title: 'Live Chat:', value: ' Available on the site', href: 'https://www.obiztec.com', icon: <img src={Globe} alt='Globe' className='md:w-11 w-9 md:h-11 h-9 object-contain' loading='lazy' />
    },
]

const Footer = () => {
    const [showContact, setShowContact] = useState(false);
    const [page, setPage] = useState('');

    const router = useLocation();

    useEffect(() => {
        if (router.pathname === '/') {
            setShowContact(true);
        } else if (router.pathname === '/about-us'){
            setShowContact(true); 
        } else if (router.pathname === '/faq'){
            setShowContact(true); 
            setPage('faq');
        }  else {
            setShowContact(false);
        }
    }, [router.pathname]);

    return (
        <>
            {
                showContact && ( 
                    <div className={`mx-auto max-w-[90%] sm:max-w-[80%] xl:max-w-[1055px] p-6 md:px-20 lg:px-24 lg:py-20 md:py-16 bg-primary-foreground rounded-lg flex items-center relative z-20 ${page == 'faq' && 'hidden'}`}>
                        <div className="w-full sm:max-w-[170px] md:max-w-[200px] lg:max-w-[260px] sm:order-2 hidden sm:block">
                            <img src={Send} alt='Globe' className='w-full max-w-[260px] object-contain' loading='lazy' />
                        </div>
                        <div className="flex-1 sm:order-1">
                            <Heading2
                                title="Get Started Today"
                                icon={"infoIcon"}
                                className="text-left"
                            />
                            <ul className="flex flex-col space-y-4 md:space-y-8 mt-5 md:mt-10">
                                {
                                    contactInfo.map((item, index) => (
                                        <li key={index} className="flex items-center gap-x-2">
                                            <div className="md:w-12 w-10">
                                                {item.icon}
                                            </div>
                                            <div className="flex-1 text-dark text-base md:text-xl lg:text-xl xl:text-2xl">
                                                <span className="">{item.title}</span>
                                                <a href={item.href} className="text-dark text-base md:text-lg lg:text-xl xl:text-2xl">{item.value}</a>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                )
            }
            {
                page == 'faq' && ( 
                    <div className="mx-auto max-w-[90%] sm:max-w-[80%] xl:max-w-[1055px] p-6 md:px-20 lg:px-24 lg:py-20 md:py-16 bg-primary-foreground rounded-lg flex items-center relative z-20">
                        <div className="w-full sm:max-w-[170px] md:max-w-[200px] lg:max-w-[260px] sm:order-2 hidden sm:block">
                            <img src={Send} alt='Globe' className='w-full max-w-[260px] object-contain' loading='lazy' />
                        </div>
                        <div className="flex-1 sm:order-1">
                            <Heading2
                                title="Still Have Questions?"
                                icon={"infoIcon"}
                                className="text-left"
                            />
                            <Heading3
                                title="We’re here to help."
                                icon={"infoIcon"}
                                className="text-left"
                            />
                            <ul className="flex flex-col space-y-4 md:space-y-8 mt-5 md:mt-10">
                                {
                                    contactInfo2.map((item, index) => (
                                        <li key={index} className="flex items-center gap-x-2">
                                            <div className="md:w-12 w-10">
                                                {item.icon}
                                            </div>
                                            <div className="flex-1 text-dark text-base md:text-xl lg:text-xl xl:text-2xl">
                                                <span className="">{item.title}</span>
                                                <a href={item.href} className="text-dark text-base md:text-lg lg:text-xl xl:text-2xl">{item.value}</a>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                )
            }
            <footer className={`bg-primary_dark text-white pb-10   ${showContact ? 'pt-32 md:pt-64 md:-mt-40 sm:-mt-16 -mt-16' : 'pt-10 md:pt-14 lg:pt-20'}`}>
                <div className="container">
                    <div className="flex flex-row flex-wrap">
                        <div className='lg:w-[30%] w-full'>
                            <Link to={'/'} className='text-white font-extrabold text-sm inline-block'>
                                <img src={Logo} alt='Globe' className='w-auto h-8 md:h-10 lg:h-12 object-contain' loading='lazy' />
                            </Link>
                            <p className="text-white text-base md:text-lg mb-4 md:mb-8 lg:mb-12 mt-5 md:mt-9">
                                Empowering Businesses with Affordable Custom Tech Solutions
                            </p>
                            <p className="text-primary-foreground text-lg md:text-xl lg:text-2xl mb-4 md:mb-6">
                                Supported Tech Stacks
                            </p>
                            <p className=' tracking-wide mb-2'>Flutter, .NET, Node.js, React, Next.js, Vue.js, JavaScript, PHP Laravel and more.</p>
                            <p className=' tracking-wide'>Contact us about other tech stacks not mentioned.</p>
                        </div>


                        <div className='lg:w-[70%] w-full lg:pl-10 mt-10 lg:mt-0'>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8">
                                {
                                    linksList.map((item, index) => (
                                        <div key={index}>
                                            <p className="text-white font-normal text-2xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
                                                {item.title}
                                            </p>
                                            <ul className="flex flex-col gap-2 md:gap-y-4 lg:gap-y-5">
                                                {
                                                    item.links.map((link, index) => (
                                                        <li key={index}>
                                                            <Link to={link.slug} className='text-white tracking-wide text-sm md:text-base transition-colors hover:text-primary hover:underline'>{link.title}</Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>


                                    ))
                                }
                            </div>
                        </div>

                    </div>
                    {/* grid */}

                    <div className="flex flex-wrap mt-10 md:mt-12 lg:mt-14 gap-y-8">
                        <div className="lg:w-1/2 md:w-3/4">
                            <ul className='space-y-4'>
                                <li className='flex items-start gap-2'>
                                    <div className="w-8 flex justify-center pt-1">
                                        <LocationPin />
                                    </div>
                                    <div className="flex-1">
                                        <address className=' not-italic m-0'>Address: Austin, TX - Proudly serving clients worldwide remotely.</address>
                                    </div>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <div className="w-8 flex justify-center pt-1">
                                        <EmailIcon />
                                    </div>
                                    <div className="flex-1">
                                        Email:
                                        <a href='mailto:contact@obiztec.com' className=''>contact@obiztec.com</a>
                                    </div>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <div className="w-8 flex justify-center pt-0.5">
                                        <CallIcon />
                                    </div>
                                    <div className="flex-1">
                                        Phone:
                                        <a href='tel:+1 (325) 275-5589' className=''>+1 (325) 275-5589</a>
                                    </div>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <div className="w-8 flex justify-center">
                                        <GlobeIcon />
                                    </div>
                                    <div className="flex-1">
                                        Live Chat: Available
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-1/2 md:w-1/4">
                            <p className="text-white font-normal text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
                                Follow Us
                            </p>
                            <div className="flex items-center gap-4">
                                <Link to={'#'} className=' hover:text-primary inline-block'>
                                    <FaFacebook className='text-3xl md:text-3xl lg:text-4xl' />
                                </Link>
                                <Link to={'#'} className=' hover:text-primary inline-block'>
                                    <BiLogoInstagramAlt className='text-4xl md:text-4xl lg:text-5xl' />
                                </Link>
                                <Link to={'#'} className=' hover:text-primary inline-block'>
                                    <FaLinkedin className='text-3xl md:text-3xl lg:text-4xl' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* container */}

                <div className="border-t border-[#12320C] mt-10 lg:mt-16">
                    <div className="container">
                        <p className="text-center mt-10 text-white">© 2025 Obiztec. All Rights Reserved.</p> 
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer