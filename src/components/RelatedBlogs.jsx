import React from 'react'

import WebDevImg from "@/assets/images/common/web-dev.webp";
import { Link } from 'react-router-dom';
import Heading2 from './Heading2';

const blogData = [
    {
        title: 'Lorem ipsum sit',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        image: WebDevImg,
    },
    {
        title: 'Lorem ipsum sit',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        image: WebDevImg,
    },
]

const RelatedBlogs = () => {
    return (
        <>
            <section className="py-14 md:py-20 lg:py-24">
                <div className="container">
                    <Heading2
                        title="Related Articles:"
                        className="text-left xl:text-5xl"
                    />
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-12 lg:gap-x-[72px] md:gap-y-10 lg:gap-y-[60px] mt-6 md:mt-12`}>
                        {
                            blogData.map((item, index) => (
                                <div key={index} className="">
                                    <div className="rounded-lg overflow-hidden shadow-[0px_8px_16px_0px_rgba(125,130,124,01)]">
                                        <div className="relative">
                                            <img src={item.image} alt="icon" className={`w-full object-cover aspect-[16/8] 2xl:aspect-video`} />
                                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#D9D9D9]/0 to-[#091906]"></div>
                                        </div>
                                        <div className="bg-[#091906] p-5 md:p-8 text-white">
                                            <h3 className='text-white text-xl md:text-xl lg:text-2xl font-normal mb-2 md:mb-3 lg:mb-4'>{item.title}</h3>
                                            <p className='text-white text-sm lg:text-base !leading-[1.45]'>{item.desc}</p>

                                            <Link to={"/blog-detail"} className='text-sm md:text-base font-semibold text-dark bg-primary-foreground rounded-full px-6 py-2.5 mt-4 md:mt-8 inline-block tracking-wider hover:bg-primary'>Read more</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div> 

                </div>
            </section>
        </>
    )
}

export default RelatedBlogs