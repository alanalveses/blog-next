import React from 'react'
import {motion} from "framer-motion"

const Skill = ({name, x, y}) => {

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold
            bg-dark text-light py-6 px-6 shadow-dark cursor-pointer absolute
            dark:text-dark dark:bg-light
            '
            whileHover={{scale:1.05}}
            initial={{x:0,y:0}}
            whileInView={{x:x, y:y, transition: {duration: 1.5}}}
            transition={{duration: 1.5}}
            viewport={{once:true}}
            >
                {name}
            </motion.div>
    )
}

const HardSkills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 mb-24 w-full text-center'>Hard Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center 
        rounded-full bg-circularLight dark:bg-circularDark'>

            <motion.div className='flex items-center justify-center rounded-full font-semibold
             bg-dark text-light p-8 shadow-dark cursor-pointer
             dark:text-dark dark:bg-light
            '
            whileHover={{scale:1.05}}
            transition={{duration: 1.5}}
            viewport={{once:true}}
            >Web
            </motion.div>

            <Skill name="HTML" x="-17vw" y="4vw" />
            <Skill name="CSS" x="-5vw" y="-10vw" />
            <Skill name="JavaScript" x="20vw" y="6vw" />
            <Skill name="ReactJS" x="3vw" y="12vw" />
            <Skill name="NextJS" x="-20vw" y="-15vw" />
            <Skill name="Web Design" x="15vw" y="-14vw" />
            <Skill name="SASS" x="32vw" y="-5vw" />
            <Skill name="Tailwind CSS" x="-28vw" y="-2vw" />
            <Skill name="Figma" x="0vw" y="-20vw" />
            <Skill name="Git" x="-5vw" y="20vw" />
            <Skill name="UI/UX" x="-20vw" y="18vw" />
            <Skill name="Agile Methodology " x="18vw" y="18vw" />
            <Skill name="Framer Motion" x="17vw" y="-3vw" />
            <Skill name="Bootstrap" x="-29vw" y="8vw" />
        </div>
    </>
  )
}

export default HardSkills