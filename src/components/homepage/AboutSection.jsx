import React from 'react'
import Heading2 from '../Heading2' 
import Flag from "@/assets/images/icons/mission-flag.svg";
import DevIcon from "@/assets/images/icons/development.svg";
import GoalIcon from "@/assets/images/icons/Goal_target.svg";

const data = [
    {
        id: 1,
        title: "Our Mission",
        icon: Flag,
        description: "To empower entrepreneurs and small to medium-sized businesses by providing accessible, high-quality custom tech solutions that drive growth and success.",
    },
    {
        id: 2,
        title: "",
        icon: DevIcon,
        description: "We offer affordable, top-tier website and app development solutions tailored for entrepreneurs and small businesses.",
    },
    {
        id: 3,
        title: "Our Goal",
        icon: GoalIcon,
        description: "We aim to bridge the digital gap by making custom tech solutions accessible and affordable. Our focus is onhelping businesses establish a strong online presence, enhance customer engagement, and drive growth.",
    },
]

const AboutSection = () => {
  return (
    <div className='py-12 md:py-16 lg:py-24'>
        <div className="container">
            <Heading2
                title="Welcome to Obiztec"
                icon={"TitleLeftCoverIcon"}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 lg:mt-14">
                {
                    data.map((item, index) => (
                        <div key={index} className={`flex lg:pt-14 ${index === 1 && '!pt-0 xl:!block'} ${index === 2 && 'md:col-span-2 lg:col-span-1'} `}>
                            <div className='bg-[#EEFEEB] px-8 xl:px-10 py-12 lg:pt-20 lg:pb-32 lg:rounded-full rounded-2xl w-full shadow-[0px_12px_24px_rgba(18,50,12,0.10)]'> 
                                <img src={item.icon} alt="icon" className='w-12 md:w-20 lg:w-[90px] h-12 md:h-20 lg:h-[90px] object-contain mx-auto mb-6 md:mb-10 lg:mb-14' loading='lazy' />
                                <h3 className='text-black text-xl md:text-3xl font-normal text-center mb-5 md:mb-6'>{item.title}</h3> 
                                <p className='text-black text-base md:text-xl xl:text-2xl tracking-wide !leading-[1.12]'>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default AboutSection