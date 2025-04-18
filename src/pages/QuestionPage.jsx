import PageHeader from '@/components/PageHeader'
import React from 'react'
import HeroImage from "@/assets/images/common/question-page-banner.webp";
import Heading2 from '@/components/Heading2';
import { Progress } from "@/components/ui/progress"


const QuestionPage = () => {
  return (
    <>
        <PageHeader
            image={HeroImage}
            title={"Web Development Questionnaire"}  
            titleClassName="text-center"
        />


        <section className="py-20 sm:py-24 md:pt-40 lg:py-52">
            <div className="container lg:max-w-[800px]">
                <Heading2
                    title="What is the primary goal of your website?"
                    className="text-center lg:text-6xl !leading-[1.3] mb-10 md:pb-14 lg:pb-20"
                />

                <form>
                    <div className='min-h-48 lg:min-h-52'>
                        <input type="text"
                            className='w-full h-12 border border-[#22333B]/30 px-5 py-2 rounded-sm'
                            placeholder='e.g., Business, E-commerce, Portfolio, Blog'
                            required={true}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className='flex-1 max-w-[170px]'>
                            <p className='text-lg md:text-xl lg:text-2xl font-normal text-[#091906] mb-3'>
                                <span className="font-semibold mr-2">0%</span>
                                 Completed
                            </p>
                            <Progress value={33} />

                        </div>
                        <div>
                            <button className="btn-primary">Next</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>

    </>
  )
}

export default QuestionPage