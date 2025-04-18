import PageHeader from '@/components/PageHeader'
import React from 'react'
import HeroImage from "@/assets/images/common/contact-page-banner.webp";
import { CallIcon, EmailIcon, LiveChatIcon, LockIcon } from '@/components/Icons';
import { LuClock } from "react-icons/lu";
import ContactForm from '@/components/ContactForm';
import Keyimprovements from '@/components/contactpage/KeyImprovements';
import { BiLogoFacebookCircle, BiLogoInstagramAlt } from 'react-icons/bi';
import { FaTiktok } from 'react-icons/fa6';

const contactData = [
    {
        label: "Contact Information",
        infos: [
            {
                icon: <EmailIcon />,
                text: "Email: contact@obiztec.com"
            },
            {
                icon: <CallIcon />,
                text: "Phone: +1 (325) 275-5589"
            },
            {
                icon: <LiveChatIcon />,
                text: "Live Chat: Available"
            },
        ]
    },
    {
        label: "Business Hours",
        infos: [
            {
                icon: <LuClock className='text-primary text-lg' />,
                text: "Monday – Friday: 9:00 AM – 6:00 PM (PST)"
            },
            {
                icon: <LockIcon />,
                text: "Saturday – Sunday: Closed"
            }, 
        ]
    },
    {
        label: "Follow Us on Social Media",
        infos: [
            {
                icon: <BiLogoFacebookCircle className='text-primary text-xl' />,
                text: "Facebook",
                href: "https://www.facebook.com/obiztec"
            },
            {
                icon: <BiLogoInstagramAlt className='text-primary text-xl' />,
                text: "Instagram",
                href: "https://www.instagram.com/obiztec/"
            }, 
            {
                icon: <FaTiktok className='text-primary text-xl' />,
                text: "Tiktok",
                href: "https://www.tiktok.com/obiztec/"
            }, 
        ]
    },
]

const ContactPage = () => {
    return (
        <> 
            <PageHeader
                image={HeroImage}
                title={"Get in Touch with Obiztec"}
                titleClassName="text-center"
            />

            <section className="py-10 md:py-16 lg:pt-20 lg:pb-24">
                <div className="container">
                    <p className="text-center text-xl md:text-2xl lg:text-[33px] !leading-tight font-normal mb-8 md:mb-12 lg:mb-16 tracking-wide">
                        We’re excited to help you bring your digital ideas to life! Whether you need a custom quote, expert advice, or support, we’re here to assist.
                    </p> 

                    <div className="mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                contactData.map((item, index) => (
                                    <div key={index} className="w-full">
                                        <h3 className='text-black text-xl md:text-3xl font-normal mb-5 md:mb-6'>{item.label}</h3> 
                                        {
                                            item.infos.map((info, index) => (                                            
                                                <div key={index} className="flex items-center gap-4 mb-3 last:mb-0">
                                                    {info.icon}
                                                    {
                                                        info.href ? (
                                                            <a href={info.href} target="_blank" rel="noopener noreferrer" className='text-black text-base'>{info.text}</a>
                                                        ) : (
                                                            <p className='text-black text-base'>{info.text}</p>

                                                        )
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                    <div className="mt-10 md:mt-14 lg:mt-20">
                        <ContactForm />
                    </div>

                      
                </div>
                {/* container */}
            </section>


            <Keyimprovements />
        </>
    )
}

export default ContactPage