import React from 'react'
import { twMerge } from 'tailwind-merge'
import TitleRightCoverIcon from "@/assets/images/icons/title-right-cover.svg"; 

const Heading3 = (props) => {
  return (
    <>
        <h2 className={twMerge('text-black text-xl md:text-2xl lg:text-[33px] font-normal tracking-wide mb-3 !leading-[1.3]', props.className)}>
            <span>{props.title}</span> 
            {
                props.icon && props.icon == 'TitleRightCoverIcon' &&  <img src={TitleRightCoverIcon} alt="icon" className='mr-3 inline-block max-h-12 md:max-h-20 lg:max-h-full'/>
            }
        </h2>
    </>
  )
}

export default Heading3