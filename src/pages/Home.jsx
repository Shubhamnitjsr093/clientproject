
import PageHeader from '@/components/PageHeader'
import React from 'react'
import HeroImage from "@/assets/images/common/home-hero-bg.webp";
import AboutSection from '@/components/homepage/AboutSection';
import ServiceSection from '@/components/homepage/ServiceSection';
import WhyChooseSection from '@/components/homepage/WhyChooseSection';
import ContactPromoBox from '@/components/ContactPromoBox';

const Home = () => {
  return (
    <>

      {/* header section */}
      <PageHeader
        image={HeroImage}
        title={<>
          <span className='font-extralight block mb-3'>Empowering Businesses</span> 
          <span className='font-normal text-lg md:text-3xl lg:text-5xl 2xl:text-6xl leading-[1.3] block'>with Affordable Custom Tech Solutions</span>
        </>}
        className="pb-10 md:pb-20"
        pageType="home"
      />

      {/* about section */}
      <AboutSection />

      {/* service section */}
      <ServiceSection />

      {/* why choose section */}
      <WhyChooseSection />
 
      <div className="lg:my-20 md:my-12 my-10">
          <ContactPromoBox type="home" />
      </div>

    </>
  )
}

export default Home