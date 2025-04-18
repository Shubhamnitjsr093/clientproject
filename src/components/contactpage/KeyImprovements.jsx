import React from 'react'
import Heading2 from '../Heading2' 
import Flag from "@/assets/images/icons/mission-flag.svg";
import DevIcon from "@/assets/images/icons/development.svg";
import GoalIcon from "@/assets/images/icons/Goal_target.svg";
import GridInfoList from '../GridInfoList';

const approachData = [
    { 
        title: 'Clearer, more concise messaging',
        description: 'Ensures key points are quickly understood.',
    },
    { 
        title: 'Stronger CTAs',
        description: 'Encourages users to take action (contact, explore, or start a project).',
    },
    { 
        title: 'More engaging structure',
        description: 'Improved readability and impact.',
    },
    { 
        title: 'Consistent tone & branding',
        description: 'Aligns with Obiztec’s mission, services, and audience needs.',
    },
    
]

const Keyimprovements = () => {
  return (
    <div className='pt-5 pb-12 md:pb-16 lg:pb-24 xl:pb-32'>
        <div className="container">
            <Heading2
                title="Key Refinements & Improvements"
                icon={"TitleLeftCoverIcon"}
            />

            <GridInfoList data={approachData} /> 
        </div>
    </div>
  )
}

export default Keyimprovements