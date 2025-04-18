import React from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const PageHeader = (props) => {
    return (
        <>
            <div className={` relative py-6 flex bg-primary_dark 
                ${props.pageType === 'home' ? 'items-end !min-h-[400px] lg:!min-h-screen' : 'items-center pt-20 lg:pt-48 min-h-[240px]'} 
                ${props.pageType === 'cmsheader' ? 'min-h-[220px] md:min-h-[300px] lg:min-h-[400px] lg:pb-32' : 'min-h-[250px] md:min-h-[500px] lg:min-h-screen pb-10 md:pb-24 lg:pb-32'} page__header`}
            >
                <img
                    src={props.image}
                    alt="banner image"
                    className='w-full h-full object-cover absolute top-0 left-0'
                    width={1905} height={945}
                />
                <div className="container relative z-10">
                    <div className="w-full ">
                        <h1 className={twMerge('font-extralight text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl text-white leading-[1.2] mb-5 md:mb-12', props.titleClassName)}>
                            {props.title}
                        </h1>
                        <h2 className='text-white text-lg sm:text-xl md:text-3xl lg:text-6xl text-center font-normal'>{props.subTitle}</h2>
                        {
                            props.pageType === 'home' && ( 
                                <Link to={'/get-quote'} className='btn-primary'>Start A Project</Link>
                            )
                        }
                        {
                            props.pageType === 'thankyou' && ( 
                                <h2 className='text-white text-lg sm:text-xl md:text-3xl lg:text-5xl text-center font-normal mt-4 md:mt-7 lg:mt-10'>
                                    We’re excited to learn more about your project and help bring your vision to life!
                                </h2>
                            )
                        }
                        {
                            props.pageType === 'faq' && ( 
                                <div className='max-w-[970px] mx-auto'>
                                    <h2 className='text-white text-lg sm:text-xl md:text-3xl lg:text-5xl font-normal mt-4 md:mt-7 lg:mt-10'>
                                        Got Questions? We’ve Got Answers.
                                    </h2>
                                    <p className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal mt-4 md:mt-7 lg:mt-10">
                                        <span className="block mb-2">Here are some of the most common questions clients ask us.</span>
                                        If you don’t find your answer, feel free to reach out via <b>Live Chat</b> or <b>email</b> us at <Link to={'mailto:contact@obiztec.com'} className='text-primary hover:text-white hover:underline'>contact@obiztec.com</Link>.
                                    </p>
                                </div>
                            )
                        }
                    </div> 
                </div>
            </div>



        </>
    )
}

export default PageHeader