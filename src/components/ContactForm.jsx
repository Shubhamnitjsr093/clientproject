import React from 'react'
import ContactThumb from "@/assets/images/common/contact-thumbnail.webp";

const ContactForm = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-x-12">
        <div className='flex'>
          <img src={ContactThumb} alt="What Makes Our Approach Differents" className='object-cover w-full rounded-lg'
            width={691} height={473} loading='lazy'
          />
        </div>
        <div>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-normal text-dark tracking-wide mb-3'>Send Us a Message</h2>
          <p className='text-dark text-base md:text-lg lg:text-xl xl:text-2xl'>
            Have a question or need support? Fill out the form below, and we’ll get back to you ASAP.
          </p>
          <form className='space-y-6 mt-6 md:mt-8'>
            <div>
              <label htmlFor="fullName" className="block mb-2 text-sm md:text-base font-semibold text-[#22333B]">Full Name</label>
              <input
                type="text" id='fullName'
                name='full_name'
                className='w-full h-12 border border-[#22333B]/30 px-4 py-2'
                required={true}
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 text-sm md:text-base font-semibold text-[#22333B]">Email Address</label>
              <input
                type="text"
                name='full_name'
                className='w-full h-12 border border-[#22333B]/30 px-4 py-2'
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 text-sm md:text-base font-semibold text-[#22333B]">Phone Number (Optional)</label>
              <input
                type="text"
                name='full_name'
                className='w-full h-12 border border-[#22333B]/30 px-4 py-2'
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 text-sm md:text-base font-semibold text-[#22333B]">Your Message</label>
              <textarea
              cols={55} rows={5}
                type="text"
                name='full_name'
                className='w-full h-auto border border-[#22333B]/30 px-4 py-2'
              />
            </div>
            <div>
              <button className="w-full text-lg lg:text-xl font-semibold text-dark border border-primary rounded-full py-3 tracking-wider hover:bg-primary hover:text-dark">Submit</button>
            </div>
            <div>
              <p className='text-dark text-base md:text-lg lg:text-xl xl:text-2xl'>
              We look forward to working with you and making your digital transformation seamless and successful.
            </p>
            </div>
          </form>
        </div>
      </div>
      {/* grid */}
    </div>
  )
}

export default ContactForm