import PageHeader from '@/components/PageHeader'
import React from 'react'
import HeroImage from "@/assets/images/common/quote-page-banner.webp";
import Heading2 from '@/components/Heading2';
import { Link } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const GetQuotePage = () => {
  return (
    <>
      <PageHeader
        image={HeroImage}
        title={"Get a Quote"}
        titleClassName="text-center mb-0 md:mb-0"
      />

      <section className="py-10 md:py-16 lg:pt-20 lg:pb-24">
        <div className="container">

          <Heading2
            title="Let’s build something amazing together."
            className="mb-6 md:mb-10 text-left lg:text-6xl"
            icon="TitleLeftCoverIcon"
          />
          <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.3] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full max-w-[820px]'>
            Whether you’re ready to launch a custom website, mobile app, or need help with SEO, branding, or digital marketing — we’re here to help turn your vision into reality. <br /><br />
            This won’t take more than 2 minutes. Just fill out the steps below and get a personalized quote and timeline tailored to your needs.
          </p>

          <Heading2
            title="Let’s get to know your project"
            className="mb-6 md:mb-10 text-left mt-12 lg:mt-16"
          />

          <p className='pl-4 relative text-base md:text-lg lg:text-xl xl:text-2xl !leading-[1.3] before:w-1 before:h-[calc(100%-1rem)] before:bg-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full max-w-[820px]'>
            Your responses will help us craft a custom quote that fits your goals, scope, and budget perfectly.
          </p>

          <div className="max-w-[800px] w-full space-y-10 lg:space-y-16 mt-16 md:mt-20 lg:mt-24">
            <div>
              <Heading2
                title="About you"
                className="text-left mb-7 md:mb-9 lg:mb-10"
                number="1"
              />
              <div className="space-y-6 md:md:space-y-7">
                <div>
                  <input 
                    type="text" 
                    className='w-full h-12 border border-[#091906] px-4 md:px-5 py-2 rounded-md text-dark placeholder:text-dark'
                    placeholder='Full Name' required={true}
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    className='w-full h-12 border border-[#091906] px-4 md:px-5 py-2 rounded-md text-dark placeholder:text-dark'
                    placeholder='Email Address' required={true}
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    className='w-full h-12 border border-[#091906] px-4 md:px-5 py-2 rounded-md text-dark placeholder:text-dark'
                    placeholder='Phone Number (Optional)' required={true}
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    className='w-full h-12 border border-[#091906] px-4 md:px-5 py-2 rounded-md text-dark placeholder:text-dark'
                    placeholder='Company Name (if applicable)' required={true}
                  />
                </div>
              </div>
              {/* space */}
            </div>


            <div>
              <Heading2
                title="Project Details"
                className="text-left mb-7 md:mb-9 lg:mb-10"
                number="2"
              />
              <div className="space-y-6 md:md:space-y-7">
                <div> 
                  <Select>
                    <SelectTrigger className="w-full h-12 border border-[#091906] px-4 md:px-5 py-2 rounded-md text-dark placeholder:text-dark">
                      <SelectValue placeholder="What service are you interested in?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Website Development">Website Development</SelectItem>
                      <SelectItem value="Mobile App Development">Mobile App Development</SelectItem>
                      <SelectItem value="E-Commerce Development">E-Commerce Development</SelectItem>
                      <SelectItem value="SEO Services">SEO Services</SelectItem>
                      <SelectItem value="Social Media Management">Social Media Management</SelectItem>
                      <SelectItem value="Email Marketing">Email Marketing</SelectItem>
                      <SelectItem value="Branding">Branding</SelectItem>
                      <SelectItem value="Google Ads Management">Google Ads Management</SelectItem>
                      <SelectItem value="Website or App Maintenance">Website or App Maintenance</SelectItem>
                      <SelectItem value="Other (please specify)">Other (please specify)</SelectItem>
                    </SelectContent>
                  </Select> 
                </div>
                <div>
                  <input 
                    type="text" 
                    className='w-full h-12 border border-[#091906] px-4 md:px-5 py-2 rounded-md text-dark placeholder:text-dark'
                    placeholder='Tell us about your project or idea' required={true}
                  />
                </div>
                <div> 
                  <Select>
                    <SelectTrigger className="w-full h-12 border border-[#091906] px-4 md:px-5 py-2 rounded-md text-dark placeholder:text-dark">
                      <SelectValue placeholder="When would you like to get started?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Google Search">Google Search</SelectItem>
                      <SelectItem value="Social Media">Social Media</SelectItem>
                      <SelectItem value="Referral">Referral</SelectItem> 
                      <SelectItem value="Ad">Ad</SelectItem>
                      <SelectItem value="Other">Other</SelectItem> 
                    </SelectContent>
                  </Select>
                </div> 
              </div>
              {/* space */}
            </div>


            <div>
              <Heading2
                title="Budget & Scope"
                className="text-left mb-7 md:mb-9 lg:mb-10"
                number="3"
              />
              <div className="space-y-6 md:md:space-y-7">
                <div>
                  <input 
                    type="text" 
                    className='w-full h-12 border border-[#091906] px-4 md:px-5 py-2 rounded-md text-dark placeholder:text-dark'
                    placeholder='What’s your estimated budget?' required={true}
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    className='w-full h-12 border border-[#091906] px-4 md:px-5 py-2 rounded-md text-dark placeholder:text-dark'
                    placeholder='Who is your target audience?' required={true}
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    className='w-full h-12 border border-[#091906] px-4 md:px-5 py-2 rounded-md text-dark placeholder:text-dark'
                    placeholder='Any features or examples you’d like us to reference?' 
                  />
                </div> 
              </div>
              {/* space */}
            </div>


            <div>
              <Heading2
                title="Last Details"
                className="text-left mb-7 md:mb-9 lg:mb-10"
                number="4"
              />
              <div className="space-y-6 md:md:space-y-7">
                <div> 
                  <Select>
                    <SelectTrigger className="w-full h-12 border border-[#091906] px-4 md:px-5 py-2 rounded-md text-dark placeholder:text-dark">
                      <SelectValue placeholder="How did you hear about us?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ASAP (Ready to start immediately)">ASAP (Ready to start immediately)</SelectItem>
                      <SelectItem value="Google Search">Google Search</SelectItem>
                      <SelectItem value="Social Media">Social Media</SelectItem>
                      <SelectItem value="Referral">Referral</SelectItem>
                      <SelectItem value="3+ months">Social Media Management</SelectItem>
                      <SelectItem value="Not sure / Need guidance">Email Marketing</SelectItem> 
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <input 
                    type="text" 
                    className='w-full h-12 border border-[#091906] px-4 md:px-5 py-2 rounded-md text-dark placeholder:text-dark'
                    placeholder='Attach any relevant files (optional)' 
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    className='w-full h-12 border border-[#091906] px-4 md:px-5 py-2 rounded-md text-dark placeholder:text-dark'
                    placeholder='Do you have any questions or final notes?' required={true}
                  />
                </div> 
              </div>
              {/* space */}

            </div>

            <div>
              {/* <button className="btn-primary w-full rounded-full">Submit & Get My Quote</button> */}
              <Link to={"/thank-you"} className="btn-primary w-full rounded-full block text-center">Submit & Get My Quote</Link>
            </div>

          </div>
          {/* container */}
        </div>
        {/* container */}
      </section>
    </>
  )
}

export default GetQuotePage