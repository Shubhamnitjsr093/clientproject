import React from 'react'
import { twMerge } from 'tailwind-merge'
import TitleLeftCoverIcon from "@/assets/images/icons/title-left-cover.svg";
import TitleTopRightCorner from "@/assets/images/icons/title-top-right-corner.svg";
import QuestionIcon from "@/assets/images/icons/question.svg";
import InfoIcon from "@/assets/images/icons/info.svg";

const Heading2 = (props) => {
  return (
    <>
        <h2 className={twMerge('text-black text-2xl md:text-4xl lg:text-5xl font-normal mb-3 text-center', props.className)}>
            {
                props.icon && props.icon == 'TitleLeftCoverIcon' &&  <img src={TitleLeftCoverIcon} alt="icon" className='mr-3 inline-block max-h-12 md:max-h-20 lg:max-h-full'/>
            }
            {
                props.number && props.number != '' &&  <span className='text-primary mr-4 lg:mr-6 text-4xl md:text-5xl lg:text-8xl font-bold'>{props.number}</span>
            }
            <span>{props.title}</span>
            {
                props.icon && props.icon == 'topRightIcon' &&  <img src={TitleTopRightCorner} alt="icon" className='-mt-12 inline-block w-7 h-6'/>
            }
            {
                props.icon && props.icon == 'querstionIcon' &&  <img src={QuestionIcon} alt="icon" className='inline-block w-7 md:w-10 h-6 md:h-14 -mt-3 lg:-mt-7'/>
            }
            {
                props.icon && props.icon == 'infoIcon' &&  <img src={InfoIcon} alt="icon" className='inline-block w-7 md:w-10 h-6 md:h-14'/>
            }
        </h2>
    </>
  )
}

export default Heading2