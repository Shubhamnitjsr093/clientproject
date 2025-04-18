import PageHeader from '@/components/PageHeader'
import React from 'react' 
import HeroImage from '@/assets/images/common/service-page-banner.webp';
import Solutions from '@/components/servicepage/Solutions';
import Heading2 from '@/components/Heading2';
import WebDevImg from "@/assets/images/common/web-dev.webp";
import EcomDevImg from "@/assets/images/common/ecom-dev.webp";
import AppImg from "@/assets/images/common/app-dev.webp";
import WebMaintanceImg from "@/assets/images/common/web-maintenance.webp";
import SeoImg from "@/assets/images/common/seo.webp";
import EmailMarketingImg from "@/assets/images/common/email-marketing.webp";
import BrandingImg from "@/assets/images/common/branding.webp";

import { Link } from 'react-router-dom';
import ContactPromoBox2 from '@/components/ContactPromoBox2';
import ServiceList from '@/components/ServiceList';

const serviceData =[
  {
    title: 'Website Development',
    desc: 'Custom-built, high-performance websites designed for your business goals. From simple business sites to complex e-commerce platforms, we create mobile-responsive, SEO-optimized websites that enhance user experience and drive conversions.',
    desc2: 'Custom websites designed for businesses ensuring speed, functionality, and scalability.',
    price: '$1,500',
    image: WebDevImg,
  },
  {
    title: 'E-Commerce Development',
    desc: 'Sell smarter with a secure, scalable online store. We develop high-converting e-commerce websites with seamless checkout experiences, inventory management, and payment gateway integrations to help you scale your business.',
    image: EcomDevImg,
  },
  {
    title: 'Mobile App Development',
    desc: 'Engage your audience with a custom mobile app for iOS & Android. From booking apps to full-scale e-commerce solutions, we create intuitive and scalable mobile applications that keep your customers connected.',
    image: AppImg,
  },
  {
    title: 'Website & App Maintenance',
    desc: 'Boost your online visibility and attract more customers. We offer expert SEO, Google Ads, and social media management to improve your search rankings and drive targeted traffic to your business.',
    image: WebMaintanceImg,
  },
  {
    title: 'Digital Marketing & SEO',
    desc: 'Keep your digital assets secure, updated, and running smoothly. Our maintenance packages include bug fixes, security patches, speed optimization, and regular updates to ensure your website or app performs at its best.',
    image: SeoImg,
  },
  {
    title: 'Email Marketing & Newsletters',
    desc: 'Convert leads and retain customers with strategic email campaigns. We create personalized, automated email marketing solutions that increase engagement, boost conversions, and keep your audience informed.',
    image: EmailMarketingImg,
  },
  {
    title: 'Branding & Graphic Design',
    desc: 'Build a strong, recognizable brand identity. From logo design to full-scale brand strategy, we help businesses stand out with professional, cohesive branding across all platforms.',
    image: BrandingImg,
  },
]

const ServicePage = () => {
  return (
    <>
      {/* header section */}
      <PageHeader
        image={HeroImage}
        title={"Our Services"}
        titleClassName="text-center"
      />

      <Solutions />

      <ServiceList
        serviceData={serviceData}
      />

      <ContactPromoBox2 />
    </>
  )
}

export default ServicePage