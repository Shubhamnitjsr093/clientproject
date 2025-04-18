import PageHeader from '@/components/PageHeader'
import React from 'react'
import HeroImage from "@/assets/images/common/pricing-page-banner.webp";
import LampIcon from "@/assets/images/icons/lamp.svg";
import SupportIcon from "@/assets/images/icons/support.svg";
import ServiceList from '@/components/ServiceList';

import WebDevImg from "@/assets/images/common/web-dev.webp";
import EcomDevImg from "@/assets/images/common/ecom-dev.webp";
import AppImg from "@/assets/images/common/app-dev.webp";
import WebMaintanceImg from "@/assets/images/common/web-maintenance.webp";
import SeoImg from "@/assets/images/common/seo.webp";
import EmailMarketingImg from "@/assets/images/common/email-marketing.webp";
import BrandingImg from "@/assets/images/common/branding.webp";
import WebDevCodeIcon from "@/assets/images/icons/web-development.svg";

const data = [
    {
        id: 1, 
        icon: LampIcon,
        description: "We offer flexible, scalable pricing packages designed to fit the unique needs of entrepreneurs and small to medium-sized businesses.",
    },
    {
        id: 2, 
        icon: SupportIcon,
        description: "Whether you’re looking for a custom website, mobile app development, targeted marketing strategies, or ongoing support, we have the right plan for you.",
    }, 
]

const serviceData =[
  {
    title: 'Web Development', 
    desc: 'Custom business websites',
    price: '$1,500',
    image: WebDevCodeIcon,
    href: '/web-dev'
  },
  {
    title: 'E-Commerce',
    desc: 'Sell online with ease',
    price: '$1,800',
    image: WebMaintanceImg,
    href: '/e-comerce'
  },
  {
    title: 'Shopify',
    desc: 'Optimized Shopify stores',
    price: '$1,200',
    image: AppImg,
    href: '/shophify'
  },
  {
    title: 'Site Maintenance',
    desc: 'Updates & security',
    price: '$350/mo',
    image: AppImg,
    href: '/site-maintenance',
  },
  {
    title: 'App Development',
    desc: 'iOS & Android apps',
    price: '$3,900',
    image: EcomDevImg,
    href: '/app-dev'
  },  
  {
    title: 'App Maintenance',
    desc: 'Fixes & updates',
    price: '$450/mo',
    image: SeoImg,
    href: '/app-maintenance',
  },
  {
    title: 'SEO',
    desc: 'Rank higher online',
    price: '$250/mo',
    image: EmailMarketingImg,
    href: '/seo',
  },
  {
    title: 'Google Ads',
    desc: 'Convert with paid ads',
    price: '$200',
    image: BrandingImg,
    href: '/google-ads',
  },
  {
    title: 'Social Media',
    desc: 'Grow your audience',
    price: '$400/month',
    image: BrandingImg,
    href: '/social-media',
  },
  {
    title: 'Email Marketing',
    desc: 'Send & convert',
    price: '$350/month',
    image: BrandingImg,
    href: '/email-marketing',
  },
  {
    title: 'Newsletters',
    desc: 'Keep subscribers engaged',
    price: '$450/mo',
    image: BrandingImg,
    href: '/newsletters',
  },
  {
    title: 'Branding',
    desc: 'Logo & identity design',
    price: '$900',
    image: BrandingImg,
    href: '/branding',
  },
]

const PricingPage = () => {
  return (
    <>
      <PageHeader
        image={HeroImage}
        title={"Our Pricing Packages"}
        titleClassName="text-center"
      />

      <div className='py-12 md:py-16 lg:py-24'>
        <div className="container"> 
          <div className="max-w-[1080px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:mt-14 align-middle">
              {
                data.map((item, index) => (
                  <div key={index} className={`flex justify-center`}>
                    <div className='bg-[#EEFEEB] px-8 xl:px-10 py-12 lg:pt-20 lg:pb-32 lg:rounded-full rounded-2xl w-full shadow-[0px_12px_24px_rgba(18,50,12,0.10)] max-w-[410px] mx-auto'>
                      <img src={item.icon} alt="icon" className='w-12 md:w-20 lg:w-[90px] h-12 md:h-20 lg:h-[90px] object-contain mx-auto mb-6 md:mb-10 lg:mb-14' loading='lazy' /> 
                      <p className='text-black text-base md:text-xl xl:text-2xl tracking-wide !leading-[1.12]'>{item.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>

            <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mt-12 md:mt-16 lg:mt-20'>
              Explore our services below to view package pricing, or reach out for a personalized quote tailored to your goals.
            </p>

          </div>
        </div>
      </div>

      <ServiceList 
        serviceData={serviceData} page="pricing" />
    </>
  )
}

export default PricingPage